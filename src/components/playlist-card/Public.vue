<template>
  <i class="bi bi-unlock-fill" v-if="public"></i>
  <i class="bi bi-lock-fill" v-else></i>
</template>

<script setup lang="ts">
const props = defineProps<{
  public: boolean
}>()
</script>

<style scoped>

</style>