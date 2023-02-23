<template>
  <prime-card class="mb-5 movie-card">
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
</template>

<script>
export default {
  name: 'omdb-movie-card',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onViewDetails(id) {
      const route = this.$router.resolve(`/movie-details/${id}`);
      window.open(route.href, '_blank');
    },
  },
};
</script>

<style lang="scss">
.movie-card {
  width: 28rem;

  @media screen and (max-width: 700px) {
    width: 80%;
  }

  @media screen and (max-width: 375px) {
    width: 98%;
  }
}
</style>