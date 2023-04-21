<template>
  <div>{{ totalSongsString }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  total: number
}>()

const totalSongsString = computed((): string => {
  if (props.total <= 1) {
    return `${props.total} song`
  }
  return `${props.total} songs`
})
</script>

<style scoped>

</style>