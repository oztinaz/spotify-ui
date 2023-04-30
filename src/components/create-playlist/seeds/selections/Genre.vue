<template>
  <div class="seed">
    <div>
      <input type="text" class="form-control" placeholder="Search genre" v-model="query">
    </div>
    <div class="cards">
      <GenreSeedCard
        v-for="genre in availableGenres"
        :genre="genre"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import GenreSeedCard from '@/components/create-playlist/seeds/cards/Genre.vue'
import { useGenreStore } from '@/stores/genre';
import { useCreatePlaylistViewSeedStore } from '@/stores/views/create-playlist/seed';
import { storeToRefs } from 'pinia';
import { ref, type Ref, computed } from 'vue';

const genreStore = useGenreStore()
const { genres } = storeToRefs(genreStore)

const query: Ref<string> = ref('')

const availableGenres = computed((): Array<string> => {
  if (query.value === '') {
    return []
  }
  return genres.value.filter((genre: string) => genre.toLowerCase().includes(query.value.toLowerCase()))
})

const createPlaylistViewSeedStore = useCreatePlaylistViewSeedStore()
const {
  addGenre,
  genreAdded,
  removeGenre
} = createPlaylistViewSeedStore
</script>

<style scoped>
.cards {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  height: 200px;
  overflow-y: auto;
  padding: 10px;
}
</style>