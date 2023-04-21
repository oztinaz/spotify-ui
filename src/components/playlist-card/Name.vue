<template>
  <div class="name">{{ name }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<style scoped>

</style>