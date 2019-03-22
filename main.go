package main

import (
	"context"
	"log"
	"net"

	"github.com/ggary9424/comic-grpc-web/proto"
	"google.golang.org/grpc"
)

const (
	port = ":9090"
)

type server struct{}

func (s *server) Echo(ctx context.Context, req *proto.EchoReq) (*proto.EchoRes, error) {
	return &proto.EchoRes{Message: req.Message}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	proto.RegisterEchoServiceServer(s, &server{})
	println("Server started, listen on port " + port)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
