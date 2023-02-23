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
      <prime-card
        style="width: 25em"
        v-for="movie in movies"
        :key="movie.imdbID"
        class="mb-5"
      >
        <template #header>
          <img :src="movie.Poster" style="height: 15rem; object-fit: cover" />
        </template>
        <template #title> {{ movie.Title }} </template>
        <template #subtitle> {{ movie.Year }} </template>
        <template #content>
          <prime-button
            icon="pi pi-external-link"
            label="View Details"
            @click="onViewDetails(movie.imdbID)"
          />
        </template>
      </prime-card>
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

export default {
  name: 'omdb-index',
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
        console.log('ERROR: ', error);
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