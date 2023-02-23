import { createRouter, createWebHistory } from 'vue-router';

import Index from '../views/Index.vue';
import MovieDetails from '../views/MovieDetails.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
