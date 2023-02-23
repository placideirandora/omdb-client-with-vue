<template>
  <section>
    <p class="text-6xl text-center">BOOKMARKED MOVIES</p>

    <div
      v-if="!loading && movies.length"
      class="flex flex-column align-items-center my-5"
    >
      <movie-card v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
    </div>

    <div
      v-if="!loading && !movies.length"
      class="flex flex-column align-items-center"
    >
      <p class="text-center mt-8">No bookmarked movies yet</p>
      <prime-button
        icon="pi pi-home"
        label="Return to the Homepage"
        class="p-button-outlined p-button-md"
        @click="$router.push('/')"
      />
    </div>
    <div v-if="loading" class="flex justify-content-center">
      <prime-progress-spinner aria-label="spinner" class="mt-8" />
    </div>
  </section>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import { getBookmarkedMovies } from '@/bookmark.helper';

export default {
  name: 'omdb-bookmarked-movies',
  components: {
    'movie-card': MovieCard,
  },
  data() {
    return {
      loading: false,
      movies: [],
    };
  },
  methods: {
    getBookmarkedMovies,
  },
  created() {
    this.loading = true;
    this.movies = this.getBookmarkedMovies();
    this.loading = false;
  },
};
</script>

<style lang="scss">
</style>