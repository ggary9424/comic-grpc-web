FROM golang:1.12 AS builder
COPY . /app
WORKDIR /app
RUN CGO_ENABLED=0 GOOS=linux go build -o comic-grpc-web-server main.go

FROM golang:1.12-alpine
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/comic-grpc-web-server .
COPY --from=builder /app/configs/local.toml .

CMD ["./comic-grpc-web-server", "run-server", "--config", "./local.toml"]
