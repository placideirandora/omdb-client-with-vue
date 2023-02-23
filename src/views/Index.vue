<template>
  <h1>Welcome to the Homepage</h1>
  <prime-button
    label="Go to the Details page"
    @click="navigate('/movie-details/5')"
    autofocus
  />
</template>

<script>
export default {
  name: 'omdb-index',
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
</style>