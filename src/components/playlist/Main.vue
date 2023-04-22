<template>
  <div class="playlist">
    <div class="top-container" v-if="playlist">
      <PlaylistCard :playlist="playlist" />
    </div>
    <div class="body-container" v-if="playlist">
      <Table :items="playlist.tracks.items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlaylistCard from '@/components/playlist-card/Main.vue'
import Table from '@/components/playlist/Table.vue'
import { usePlaylistStore } from '@/stores/playlist'
import { storeToRefs } from 'pinia';

const playlistStore = usePlaylistStore()
const { playlist } = storeToRefs(playlistStore)
</script>

<style scoped>
.playlist {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>