package cmd

import (
	"context"
	"net"

	log "github.com/sirupsen/logrus"

	"comic-grpc-web-backend/db"
	grpcEncoder "comic-grpc-web-backend/grpcencoder"
	"comic-grpc-web-backend/protobuf"
	"github.com/golang/protobuf/ptypes/empty"
	"github.com/golang/protobuf/ptypes/wrappers"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"google.golang.org/grpc"
)

// runCmd represents the run command
var runCmd = &cobra.Command{
	Use:   "run-server",
	Short: "Run comic gRPC server.",
	Long:  `Run comic gRPC server.`,
	Run: func(cmd *cobra.Command, args []string) {
		runServer()
	},
}

func init() {
	rootCmd.AddCommand(runCmd)
}

type server struct{}

func (s *server) ListComics(ctx context.Context, req *protobuf.ComicPaginationParams) (*protobuf.ComicPagination, error) {
	comics := db.FetchComics()
	return grpcEncoder.EncodeComics(&comics), nil
}

func (s *server) GetComicByID(ctx context.Context, id *wrappers.StringValue) (*protobuf.Comic, error) {
	comic := db.FetchComicByID(id.Value)
	return grpcEncoder.EncodeComic(comic), nil
}

func (s *server) DeleteComicByID(ctx context.Context, id *wrappers.StringValue) (*empty.Empty, error) {
	return &empty.Empty{}, nil
}

func runServer() {
	var (
		dbHost = viper.GetString("database.host")
		dbPort = viper.GetString("database.port")
		dbURL  = "mongodb://" + dbHost + ":" + dbPort
		dbName = viper.GetString("database.name")
	)

	_, e := db.Connect(dbURL, dbName)

	if e != nil {
		log.WithFields(log.Fields{
			"dbURL":  dbURL,
			"dbName": dbName,
		}).Fatal("Connect to DB fail. Please check your configuration or DB status.")
		return
	}

	var (
		port = viper.GetString("server.port")
	)

	lis, err := net.Listen("tcp", ":"+port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	protobuf.RegisterComicServiceServer(s, &server{})
	println("Server started, listen on port " + port)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
