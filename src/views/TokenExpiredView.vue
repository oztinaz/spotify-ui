<template>
  <div id="token-expired-view">
    Token expired
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.removeItem('token')
})
</script>

<style scoped>

</style>