# Comic gRPC Web

Mainly, this project is created for me to learn the `Golang` and [`gRPC`](https://grpc.io/). Besides, I want to use this project to save the time for checkout the comics I followed by browsing each URL everyday.

People are lazy, and laziness welcomes technology, so technology encourages laziness.

## Relative Projects

- [comic-crawler](https://github.com/ggary9424/comic-crawler)

## Goal

1. Learn `Golang`.
2. Learn `gRPC`.
3. Give [`grpc-web`](https://github.com/grpc/grpc-web) a try.
4. Play with `docker-compose`

## Environment

1. Docker v18.09.2
2. docker-compose v1.23.2

## Execution

```bash
docker-compose up
```

And open http://localhost:8081 on your browser

## TODO

- [x] Add Dockerfile of MongoDB with fake data for `docker-compose`
- [ ] Write Makefile to manage build command better.
- [ ] Try to integrate `Websocket` with `gRpc`.
- [ ] Better interface of compiled RPC proto files.
