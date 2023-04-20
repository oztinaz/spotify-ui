<template>
  <div id="token-expired-view">
    Token Expired. Redirecting to authorization page...
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthorizationStore } from '@/stores/authorization';
import { useRouter } from 'vue-router';

const router = useRouter()
const authorizationStore = useAuthorizationStore()
const { setAccessToken } = authorizationStore

onMounted(() => {
  localStorage.removeItem('token')
  setAccessToken(null)

  setTimeout(() => {
    router.push({
      name: 'ask-authorization'
    })
  }, 5000)
})
</script>

<style scoped>

</style>