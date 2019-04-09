FROM golang:1.12 AS builder

RUN curl -fsSL -o /usr/local/bin/dep https://github.com/golang/dep/releases/download/v0.5.1/dep-linux-amd64 && chmod +x /usr/local/bin/dep

WORKDIR /go/src/github.com/ggary9424/comic-grpc-web/backend
COPY . /go/src/github.com/ggary9424/comic-grpc-web/backend

RUN dep ensure -vendor-only
RUN CGO_ENABLED=0 GOOS=linux go build -o comic-grpc-web-server main.go

FROM golang:1.12-alpine
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/github.com/ggary9424/comic-grpc-web/backend/comic-grpc-web-server .

CMD ["./comic-grpc-web-server"]
