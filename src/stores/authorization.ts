import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type SpotifyAccessToken from '@/types/spotify/tokens/AccessToken'
import axios from 'axios'
import type AccessToken from '@/models/AccessToken'
import AccessTokenFactory from '@/factories/AccessToken'

export const useAuthorizationStore = defineStore('authorization', () => {
  const accessToken: Ref<AccessToken | null> = ref(null)

  const setAccessToken = (token: AccessToken): void => {
    accessToken.value = token
  }

  const authorized = computed((): boolean => {
    return accessToken.value !== null && accessToken.value.isValid() && !accessToken.value.hasExpired()
  })

  const authorize = async () => {
    const spotifyAccessToken = await fetchSpotifyAccessToken()
    setAccessToken(AccessTokenFactory.createFromSpotifyAccessToken(spotifyAccessToken))
    if (accessToken.value) {
      localStorage.setItem('token', accessToken.value.toString())
    }
  }

  const fetchSpotifyAccessToken = async (): Promise<SpotifyAccessToken> => {
    return new Promise(async (resolve, reject) => {
      await axios.post(
        'https://accounts.spotify.com/api/token',
        null,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: {
            grant_type: 'client_credentials',
            client_id: 'a001bb568fbb401baf998e187cbb269c',
            client_secret: '10e2e13a4cdf4aa7be5cc22997ca9e5f'
          }
        }
      ).then((resp: { data: SpotifyAccessToken }) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  return {
    accessToken,
    authorized,
    authorize,
    setAccessToken
  }
})
