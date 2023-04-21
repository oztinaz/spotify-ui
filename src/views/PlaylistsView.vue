<template>
  <div id="playlists-view">
    <PlaylistCard
      v-for="playlist in playlists"
      :key="playlist.id"
      :playlist="playlist"
    />
  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/stores/playlist';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import PlaylistCard from '@/components/playlist-card/Main.vue';

const playlistStore = usePlaylistStore()
const { playlists } = storeToRefs(playlistStore)
const { getUserPlaylists } = playlistStore

onMounted(async () => {
  await getUserPlaylists()
})
</script>

<style scoped>
#playlists-view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>