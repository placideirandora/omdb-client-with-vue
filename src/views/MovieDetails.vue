<template>
  <section class="flex justify-content-center">
    <div class="bg-white w-6 border-round p-6">
      <div v-if="loading" class="flex justify-content-center">
      <prime-progress-spinner aria-label="spinner" class="mt-8" />
    </div>
    <div v-else class="flex flex-column align-items-center">
      <p class="text-4xl uppercase font-bold">{{ movie.Title }}</p>
      <img :src="movie.Poster" alt="Image" class="mb-4 poster border-round" />
      <p class="text-xl font-bold">Year</p>
      <p class="text-xl">{{ movie.Year }}</p>
      <p class="text-xl font-bold">Genre</p>
      <p class="text-xl">{{ movie.Genre }}</p>
      <p class="text-xl font-bold">Director</p>
      <p class="text-xl">{{ movie.Director }}</p>
      <p class="text-xl font-bold">Runtime</p>
      <p>{{ movie.Runtime }}</p>
      <p class="text-xl font-bold">Actors</p>
      <p class="text-xl">{{ movie.Actors }}</p>
      <div class="max-w-30rem">
        <p class="text-xl text-center font-bold">Plot</p>
        <p class="text-xl text-center">
          {{ movie.Plot }}
        </p>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import { axios } from '@/axios';
import { OMDB_API_KEY } from '@/constants';

export default {
  name: 'omdb-movie-details',
  data() {
    return {
      movie: null,
      loading: true,
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        `/?i=${this.$route.params.id}&apikey=${OMDB_API_KEY}`
      );
      console.log('MOVIE RETRIEVED: ', data);
      this.movie = data;
      this.loading = false;
    } catch (error) {
      console.log('ERROR: ', error);
      this.loading = false;
    }
  },
};
</script>

<style>
.poster {
  height: 350px;
  width: 550px;
  object-fit: cover;
}
</style>