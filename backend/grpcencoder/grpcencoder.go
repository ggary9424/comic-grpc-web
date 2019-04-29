package grpcencoder

import (
	"comic-grpc-web-backend/db"
	"comic-grpc-web-backend/protobuf"
)

func EncodeComic(comic *db.Comic) *protobuf.Comic {
	return &protobuf.Comic{
		ComicID:        comic.ComicID.Hex(),
		Title:          *comic.Title,
		Category:       *comic.Category,
		ImageUrl:       *comic.ImageURL,
		Link:           *comic.Link,
		ComicUpdatedAt: (*comic.ComicUpdatedAt).String(),
	}
}

func EncodeComics(comics *[]db.Comic) *protobuf.ComicPagination {
	grpcComics := []*protobuf.Comic{}
	for _, comic := range *comics {
		grpcComics = append(grpcComics, EncodeComic(&comic))
	}
	return &protobuf.ComicPagination{
		Comics: grpcComics,
		Paging: nil,
	}
}
