<template>
  <div>
    <div class="section">
      <div class="columns" :key="index" v-for="(comicsChunk, index) in comicsChunks">
        <div class="column is-one-quarter" v-for="comic in comicsChunk" :key="comic.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by4">
                <img :src="comic.imageurl" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div>
                <strong>{{ comic.title }}</strong>
                <b-tag type="is-pulled-right is-primary">{{ comic.category }}</b-tag>
              </div>
              <div>{{comic.comicupdatedat}}</div>
            </div>
            <footer class="card-footer">
              <a :href="comic.link" class="card-footer-item" target="_blank">Go to the website</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import grpcClient from '@/utils/grpcClient';

const { ComicPaginationParams } = require('@/protobuf/comic_pb');

export default {
  data() {
    return {
      comics: [],
    };
  },
  computed: {
    sortedComics() {
      return _.cloneDeep(this.comics).sort((a, b) => new Date(b.comicupdatedat) - new Date(a.comicupdatedat));
    },
    comicsChunks() {
      return _.chunk(this.sortedComics, 4);
    },
  },
  created() {
    const vm = this;
    const comicPaginationParams = new ComicPaginationParams();
    grpcClient.listComics(comicPaginationParams, {}, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        vm.comics = _.map(response.getComicsList(), comic => comic.toObject());
        console.log('vm.comics', vm.comics);
      }
    });
    // Get a comic by ID
    // grpcClient.getComicByID(new proto.StringValue(['5c977eac526f5acee2cf9833']), {}, (err, response) => {
    //   console.log('response', response);
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     vm.comic = response.toObject();
    //   }
    // });
  },
};
</script>
