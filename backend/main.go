package main

import (
	"context"
	"fmt"
	"net"
	"os"

	log "github.com/sirupsen/logrus"

	"github.com/ggary9424/comic-grpc-web/backend/db"
	grpcEncoder "github.com/ggary9424/comic-grpc-web/backend/grpcencoder"
	"github.com/ggary9424/comic-grpc-web/backend/protobuf"
	"github.com/golang/protobuf/ptypes/empty"
	"github.com/golang/protobuf/ptypes/wrappers"
	"github.com/spf13/viper"
	"google.golang.org/grpc"
)

func getEnv() string {
	if os.Getenv("APP_ENV") == "" {
		return "local"
	}
	return os.Getenv("APP_ENV")
}

func init() {
	// Initialize environment variables
	viper.SetConfigName(getEnv())
	viper.AddConfigPath("./configs/")

	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("fatal error config file: %s", err))
	}

	// Initialize logger system
	debug := viper.GetBool("system.debug")

	if debug {
		log.SetLevel(log.DebugLevel)
	} else {
		log.SetLevel(log.WarnLevel)
	}

	if getEnv() != "local" {
		// Some log event collection services
	}
	log.SetOutput(os.Stdout)
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

func main() {
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
