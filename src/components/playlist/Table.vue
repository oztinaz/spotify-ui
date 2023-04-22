<template>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ item.track.name }}</td>
        <td>{{ getArtistsString(item.track.artists) }}</td>
        <td>{{ item.track.album.name }}</td>
        <td>{{ getDurationString(item.track.duration_ms) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type PlaylistItem from '@/types/spotify/PlaylistItem';
import Duration from '@/models/Duration'
import type Artist from '@/types/spotify/Artist';

const props = defineProps<{
  items: Array<PlaylistItem>
}>()

const getArtistsString = (artists: Array<Artist>) => {
  const artistStrings: Array<string> = []
  artists.forEach((artist: Artist) => {
    artistStrings.push(artist.name)
  })
  return artistStrings.join(', ')
}

const getDurationString = (ms: number): string => {
  return (new Duration(ms)).toString()
}
</script>

<style scoped>
table {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>