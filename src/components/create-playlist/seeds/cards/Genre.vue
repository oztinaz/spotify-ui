<template>
  <div class="genre-seed-card" :class="divClass">
    <div class="info" @click="addGenre(genre)">
      <div class="name">
        {{ genre }}
      </div>
    </div>
    <button
      class="btn btn-danger"
      @click="removeGenre(genre)"
      v-if="genreAdded(genre)"
    >
      x
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCreatePlaylistViewSeedStore } from '@/stores/views/create-playlist/seed';
import { computed } from 'vue';

const props = defineProps<{
  genre: string
}>()

const genre = computed((): string => {
  return props.genre
})

const divClass = computed((): string => {
  if (genreAdded(genre.value)) {
    return 'added'
  }

  if (!genreAddible(genre.value)) {
    return 'unavailable'
  }

  return ''
})

const createPlaylistViewSeedStore = useCreatePlaylistViewSeedStore()
const {
  addGenre,
  genreAdded,
  genreAddible,
  removeGenre
} = createPlaylistViewSeedStore
</script>

<style scoped>
.genre-seed-card {
  border: 1px solid rgba(203, 203, 203, 0.705);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: space-between;
  padding: 5px;
}

.info {
  align-items: center;
  display: flex;
  gap: 5px;
  width: 100%;
}

.added {
  background: rgb(213, 251, 213);
  border: 1px solid rgb(213, 251, 213);
}

.unavailable {
  background: rgba(203, 203, 203, 0.705);
  border: 1px solid rgba(203, 203, 203, 0.705);
  cursor: not-allowed;
}

button {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>