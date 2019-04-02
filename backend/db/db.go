package db

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type collections struct {
	Comics *mongo.Collection
}

// DB is a Database
var DB *mongo.Database

// Collections defines the collections can be used.
var Collections collections

// Connect to Database
func Connect(mongoURL string, dbName string) (*mongo.Client, error) {
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(mongoURL), nil)

	if err != nil {
		return nil, err
	}

	DB = client.Database(dbName)
	Collections.Comics = DB.Collection("comics")

	return client, nil
}
