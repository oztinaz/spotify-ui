<template>
  <div class="playlist-list-card">
    <div class="image-container">
      <Image :url="playlist.images[0].url" />
    </div>
    <div class="info-container">
      <Name :name="playlist.name"/>
      <Description :description="playlist.description"/>
      <Total :total="playlist.tracks.total"/>
      <Public :public="playlist.public"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Description from '@/components/playlist-card/Description.vue'
import Image from '@/components/playlist-card/Image.vue'
import Name from '@/components/playlist-card/Name.vue'
import Public from '@/components/playlist-card/Public.vue'
import Total from '@/components/playlist-card/Total.vue'
import type Playlist from '@/types/spotify/Playlist';

const props = defineProps<{
  playlist: Playlist
}>()
</script>

<style scoped>
.playlist-list-card {
  align-items: center;
  background: rgba(232, 255, 232, 0.659);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  display: flex;
  gap: 20px;
  padding: 10px ;
  width: 400px;
}

.info-container {
  display: flex;
  flex-direction: column;
}
</style>