<template>
  <div id="home-view">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useStore()
const { message } = storeToRefs(store)
</script>
