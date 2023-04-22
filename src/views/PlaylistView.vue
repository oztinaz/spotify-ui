<template>
  <div id="playlist-view">
      <Playlist />
  </div>
</template>

<script setup lang="ts">
import Playlist from '@/components/playlist/Main.vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePlaylistStore } from '@/stores/playlist'

const route = useRoute()
const playlistStore = usePlaylistStore()
const { getPlaylist, setPlaylist } = playlistStore

onMounted(async () => {
  if (route.params.playlistId) {
    const playlist = await getPlaylist(route.params.playlistId as string)
    setPlaylist(playlist)
  }
})
</script>

<style scoped>
#playlist-view {
  padding: 20px;
}
</style>