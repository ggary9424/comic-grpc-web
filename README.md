# Comic gRPC Web

Mainly, this project is created for me to learn the `Golang` and [`gRPC`](https://grpc.io/). Besides, I want to use this project to save the time for checkout the comics I followed by browsing each URL everyday. Ppl are lazy, laziness welcomes technology, technology encourages laziness.

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
3. Mac with MongoDB at port 27017

## Execution

```bash
docker-compose up
```

## TODO

- [ ] Add Dockerfile of MongoDB with fake data for `docker-compose`
- [ ] Write Makefile to manage build command better.
- [ ] Try to integrate `Websocket` with `gRpc`.
- [ ] Better interface of compiled RPC proto files.
