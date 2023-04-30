<template>
  <div id="create-playlist-view">
    <CreatePlaylist />
  </div>
</template>

<script setup lang="ts">
import CreatePlaylist from '@/components/create-playlist/Main.vue'
import { useGenreStore } from '@/stores/genre'
import { onMounted } from 'vue';

const genreStore = useGenreStore()
const { fetchGenres, setGenres } = genreStore

onMounted(async () => {
  const genres = await fetchGenres()
  setGenres(genres)
})
</script>

<style scoped>

</style>