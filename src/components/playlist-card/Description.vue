<template>
  <div class="description text-truncate">{{ desc }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  description: string
}>()

const desc = computed((): string => {
  if (props.description === '') {
    return 'No description'
  }
  return props.description
})
</script>

<style scoped>
.description {
  display: block;
  max-height: 100px;
  width: 220px;
}
</style>