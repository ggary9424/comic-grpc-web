protoc --go_out=plugins=grpc:backend/ protobuf/*
protoc --js_out=import_style=commonjs:frontend/src/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend/src/ protobuf/*
