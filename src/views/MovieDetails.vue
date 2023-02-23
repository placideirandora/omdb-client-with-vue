<template>
  <h1>Welcome to the Movie Details page</h1>
  <prime-button
    label="Go to back"
    @click="navigate('/')"
    autofocus
  />
</template>

<script>
export default {
  name: 'omdb-movie-details',
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
</style>