<template>
  <section class="flex justify-content-center">
    <div class="bg-white border-round p-6">
      <div v-if="loading" class="flex justify-content-center">
        <prime-progress-spinner aria-label="spinner" class="mt-8" />
      </div>
      <div v-else-if="!loading && fetchError">
        <p class="text-center mt-8">
          An error occured while fetching the movie. Refresh the page
        </p>
      </div>
      <div v-else class="flex flex-column align-items-center">
        <p class="text-4xl uppercase font-bold">{{ movie.Title }}</p>
        <img :src="movie.Poster" alt="Image" class="mb-4 poster border-round" />
        <prime-divider />
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
        <prime-divider />
        <prime-button
          v-if="!bookmarkLoading && !isBookmarkedMovie(movie.imdbID)"
          icon="pi pi-bookmark"
          label="Bookmark"
          class="mt-4"
          @click="onBookmarkMovie(movie)"
        />
        <prime-button
          v-if="!bookmarkLoading && isBookmarkedMovie(movie.imdbID)"
          icon="pi pi-bookmark-fill"
          label="Unbookmark"
          class="mt-4"
          @click="onUnbookmarkMovie(movie.imdbID)"
        />
        <prime-button
          v-if="bookmarkLoading"
          icon="pi pi-spin pi-spinner"
          label="Bookmarking"
          class="mt-4"
          disabled
        />
      </div>
    </div>
  </section>
</template>

<script>
import { axios } from '@/axios';
import { OMDB_API_KEY } from '@/constants';
import {
  addBookmarkedMovie,
  isBookmarkedMovie,
  removeBookmarkedMovie,
} from '@/bookmark.utils';

export default {
  name: 'omdb-movie-details',
  data() {
    return {
      movie: null,
      loading: true,
      fetchError: false,
      bookmarkLoading: false,
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        `/?i=${this.$route.params.id}&apikey=${OMDB_API_KEY}`
      );
      this.movie = data;
      this.loading = false;
      console.log('IS MOVIE BOOKMARKED: ', this.isBookmarkedMovie(data.imdbID));
    } catch (error) {
      this.loading = false;
      this.$toast.add({
        severity: 'error',
        summary: 'Error Message',
        detail: 'Could not fetch the movie.',
        life: 5000,
      });
      this.fetchError = true;
    }
  },
  methods: {
    isBookmarkedMovie,
    addBookmarkedMovie,
    removeBookmarkedMovie,
    onBookmarkMovie(movie) {
      this.bookmarkLoading = true;
      this.addBookmarkedMovie(movie);
      this.$toast.add({
        severity: 'success',
        summary: 'Bookmarked',
        detail: 'The movie has been bookmarked successfully',
        life: 5000,
      });
      this.bookmarkLoading = false;
    },
    onUnbookmarkMovie(id) {
      this.bookmarkLoading = true;
      this.removeBookmarkedMovie(id);
      this.$toast.add({
        severity: 'success',
        summary: 'Unbookmarked',
        detail: 'The movie has been unbookmarked successfully',
        life: 5000,
      });
      this.bookmarkLoading = false;
    },
  },
};
</script>

<styl lang="scss">
.poster {
  height: 30rem;
  width: 30rem;
  object-fit: cover;

  @media screen and (max-width: 530px) {
    height: 80%;
    width: 80%;
  }
}
</styl>