<template>
  <div id="authorization-view">
    <span v-if="errorData">
      {{ errorData }}
    </span>
    <span v-else>
      Authorization successful
    </span>
  </div>
</template>

<script setup lang="ts">
import { useAuthorizationStore } from '@/stores/authorization';
import AccessTokenFactory from '@/factories/AccessToken';
import type AccessToken from '@/models/AccessToken';
import type SpotifyAccessToken from '@/types/spotify/AccessToken';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const authorizationStore = useAuthorizationStore()
const { fetchSpotifyAccessToken, setAccessToken } = authorizationStore

const errorData: Ref<any> = ref(null)

onMounted(async () => {
  if (route.query.code) {
    try {
      const spotifyAccessToken: SpotifyAccessToken = await fetchSpotifyAccessToken(route.query.code as string)
      const token: AccessToken = AccessTokenFactory.createFromSpotifyAccessToken(spotifyAccessToken)
      setAccessToken(token)
      localStorage.setItem('token', token.toString())
    } catch (error) {
      errorData.value = (error as any).response.data
    }
  }
})
</script>

<style scoped>

</style>