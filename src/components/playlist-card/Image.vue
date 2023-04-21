<template>
  <img :src="url" alt="Playlist card image" height="120">
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string
}>()
</script>

<style scoped>
img {
  border-radius: 5px;
}
</style>