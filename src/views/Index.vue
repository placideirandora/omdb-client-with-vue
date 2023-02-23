<template>
  <section>
    <p class="text-6xl text-center">OMDB CLIENT</p>
    <div class="flex flex-row justify-content-center">
      <prime-input-text
        type="text"
        v-model="title"
        placeholder="Search movies by title"
        class="p-inputtext-md w-3 mr-3"
        @keyup.enter="onSearchMovies"
      />
      <prime-button
        label="Search"
        @click="onSearchMovies"
        autofocus
        class="p-button-md"
      />
    </div>

    <div
      v-if="!loading && movies.length"
      class="flex flex-column align-items-center my-5"
    >
      <movie-card v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
    </div>

    <div v-if="!loading && !movies.length">
      <p class="text-center mt-8">No movies</p>
    </div>

    <div v-if="loading" class="flex justify-content-center">
      <prime-progress-spinner aria-label="spinner" class="mt-8" />
    </div>
  </section>
</template>

<script>
import { axios } from '@/axios';
import { OMDB_API_KEY } from '@/constants';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'omdb-index',
  components: {
    'movie-card': MovieCard,
  },
  data() {
    return {
      title: '',
      movies: [],
      loading: false,
    };
  },
  methods: {
    async onSearchMovies() {
      try {
        if (this.title < 3) {
          return this.$toast.add({
            severity: 'warn',
            summary: 'Warn Message',
            detail: 'The title of the movie is required',
            life: 5000,
          });
        }

        this.loading = true;

        const { data } = await axios.get(
          `/?s=${this.title}&apikey=${OMDB_API_KEY}`
        );

        if (data.Response === 'False') {
          this.movies = [];
          this.loading = false;
          return this.$toast.add({
            severity: 'info',
            summary: 'Info Message',
            detail: 'Movies matching your query could not be found',
            life: 5000,
          });
        }

        this.movies = data.Search;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.$toast.add({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Could not fetch movies. Try again later',
          life: 5000,
        });
      }
    },
    onViewDetails(id) {
      const route = this.$router.resolve(`/movie-details/${id}`);
      window.open(route.href, '_blank');
    },
  },
};
</script>

<style lang="scss">
</style>