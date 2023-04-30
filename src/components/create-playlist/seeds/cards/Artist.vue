<template>
  <div class="artist-seed-card" :class="divClass">
    <div class="info" @click="addArtist(artist)">
      <div class="image">
        <img :src="imageSrc" alt="Artist image" height="35" width="35">
      </div>
      <div class="name">
        {{ name }}
      </div>
    </div>
    <button
      class="btn btn-danger"
      @click="removeArtist(artist)"
      v-if="artistAdded(artist)"
    >
      x
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCreatePlaylistViewSeedStore } from '@/stores/views/create-playlist/seed';
import type Artist from '@/types/spotify/Artist';
import { computed } from 'vue';

const props = defineProps<{
  artist: Artist
}>()

const artist = computed((): Artist => {
  return props.artist
})

const imageSrc = computed((): string => {
  return artist.value.images[0] ? artist.value.images[0].url : ''
})

const name = computed((): string => {
  return artist.value.name
})

const divClass = computed((): string => {
  if (artistAdded(artist.value)) {
    return 'added'
  }

  if (!artistAddible(artist.value)) {
    return 'unavailable'
  }

  return ''
})

const createPlaylistViewSeedStore = useCreatePlaylistViewSeedStore()
const {
  addArtist,
  artistAdded,
  artistAddible,
  removeArtist
} = createPlaylistViewSeedStore
</script>

<style scoped>
.artist-seed-card {
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

img {
  border-radius: 5px;
}
</style>