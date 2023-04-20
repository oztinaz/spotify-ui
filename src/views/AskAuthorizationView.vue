<template>
  <div id="ask-authorization-view">
    Authorization required. 
    <a :href="href" target="_blank">Make authorization</a>
  </div>
</template>

<script setup lang="ts">
import SpotifyConfig from '@/configs/Spotify';
import { computed } from 'vue';

const href = computed((): string => {
  const authorizationUrl: string = SpotifyConfig.getAccountsUrl() + '/authorize'
  const clientId: string = SpotifyConfig.getClientId()
  const redirectUri: string = SpotifyConfig.getRedirectUri()

  return `${authorizationUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`
})
</script>

<style scoped>

</style>