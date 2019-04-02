package db

import (
	"context"
	"time"

	log "github.com/sirupsen/logrus"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Comic is comic type
type Comic struct {
	ComicID        primitive.ObjectID `bson:"_id"`
	CrawledFrom    *string            `bson:"crawled_from"`
	RecognizedID   *string            `bson:"recognized_id"`
	GlobalID       *string            `bson:"global_id"`
	Title          *string            `bson:"title"`
	Category       *string            `bson:"category"`
	ImageURL       *string            `bson:"image_url"`
	Link           *string            `bson:"link"`
	ComicUpdatedAt *time.Time         `bson:"comic_updated_at"`
	CreatedAt      *time.Time         `bson:"created_at"`
	UpdatedAt      *time.Time         `bson:"updated_at"`
	DeletedAt      *time.Time         `bson:"deleted_at"`
}

// SaveComic is to save a comic
func SaveComic(comic Comic) (*mongo.UpdateResult, error) {
	return Collections.Comics.UpdateOne(
		context.Background(),
		bson.D{
			{"crawled_from", *comic.CrawledFrom},
			{"recognized_id", *comic.RecognizedID},
		},
		bson.D{
			{
				"$set",
				bson.D{
					{"title", *comic.Title},
					{"crawled_from", *comic.CrawledFrom},
					{"category", *comic.Category},
					{"image_url", *comic.ImageURL},
					{"link", *comic.Link},
					{"comic_updated_at", *comic.ComicUpdatedAt},
					{"updated_at", time.Now()},
				},
			},
			{
				"$setOnInsert",
				bson.D{
					{"global_id", nil},
					{"created_at", time.Now()},
					{"deleted_at", nil},
				},
			},
		},
		options.Update().SetUpsert(true),
	)
}

// FetchComics is to fetch comics
func FetchComics() []Comic {
	comics := []Comic{}
	var cur *mongo.Cursor
	var err error
	ctx := context.Background()
	if cur, err = Collections.Comics.Find(ctx, bson.D{}); err != nil {
		log.Fatal(err)
	}
	defer cur.Close(ctx)
	for cur.Next(ctx) {
		comic := Comic{}
		cur.Decode(&comic)
		comics = append(comics, comic)
	}
	log.Debug(comics)
	return comics
}

// FetchComicByID is to fetch one comic by id
func FetchComicByID(id string) *Comic {
	comic := Comic{}
	ctx := context.Background()
	comicID, _ := primitive.ObjectIDFromHex(id)
	err := Collections.Comics.FindOne(ctx, bson.M{"_id": comicID}).Decode(&comic)
	if err != nil {
		log.Fatal(err)
	}
	return &comic
}
