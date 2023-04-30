<template>
  <div class="track-seed-card" :class="divClass">
    <div class="info" @click="addTrack(track)">
      <div class="image">
        <img :src="imageSrc" alt="Track image" height="35" width="35">
      </div>
      <div class="name">
        {{ name }}
      </div>
    </div>
    <button
      class="btn btn-danger"
      @click="removeTrack(track)"
      v-if="trackAdded(track)"
    >
      x
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCreatePlaylistViewSeedStore } from '@/stores/views/create-playlist/seed';
import type Track from '@/types/spotify/Track';
import { computed } from 'vue';

const props = defineProps<{
  track: Track
}>()

const track = computed((): Track => {
  return props.track
})

const imageSrc = computed((): string => {
  return track.value.album.images[0] ? track.value.album.images[0].url : ''
})

const name = computed((): string => {
  return track.value.name
})

const divClass = computed((): string => {
  if (trackAdded(track.value)) {
    return 'added'
  }

  if (!trackAddible(track.value)) {
    return 'unavailable'
  }

  return ''
})

const createPlaylistViewSeedStore = useCreatePlaylistViewSeedStore()
const {
  addTrack,
  trackAdded,
  trackAddible,
  removeTrack
} = createPlaylistViewSeedStore
</script>

<style scoped>
.track-seed-card {
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