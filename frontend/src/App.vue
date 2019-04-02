<template>
  <div id="app">
    <navbar/>
    <div class="container">
      <!-- Supposed to put the vue-route here -->
      <comic-list/>
    </div>
  </div>
</template>

<script>
import ComicList from '@/views/ComicList.vue';
import Navbar from '@/views/layout/Navbar.vue';

export default {
  name: 'app',
  components: {
    ComicList,
    Navbar,
  },
};
</script>
