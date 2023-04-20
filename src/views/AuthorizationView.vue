<template>
  <div id="authorization-view">
    <button
      @click="authorize"
      v-if="!authorized"
    >
      Authorize
    </button>
    <span v-if="authorized">
      Authorization successful. <router-link :to="{ name: 'home' }">Home</router-link>
    </span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthorizationStore } from '@/stores/authorization';
import type { Ref } from 'vue';

const authorizationStore = useAuthorizationStore()
const { authorized } = storeToRefs(authorizationStore)
const { authorize } = authorizationStore
</script>

<style scoped>

</style>