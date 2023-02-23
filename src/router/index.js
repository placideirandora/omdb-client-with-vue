import { createRouter, createWebHistory } from 'vue-router';

import Index from '../views/Index.vue';
import MovieDetails from '../views/MovieDetails.vue';
import BookmarkedMovies from '../views/BookmarkedMovies.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/movie-details/:id',
    name: 'movie-details',
    component: MovieDetails,
    props: true,
  },
  {
    path: '/bookmarked-movies',
    name: 'bookmarked-movies',
    component: BookmarkedMovies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
