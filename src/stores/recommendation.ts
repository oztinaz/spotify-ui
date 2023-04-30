import SpotifyConfig from '@/configs/Spotify'
import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { useAuthorizationStore } from '@/stores/authorization'
import type Track from '@/types/spotify/Track'

export const useRecommendationStore = defineStore('recommendation', () => {
  const authorizationStore = useAuthorizationStore()
  const { token } = storeToRefs(authorizationStore)

  const getRecommendations = async (): Promise<Array<Track>> => {
    return new Promise(async (resolve, reject) => {
      await axios.get(
        SpotifyConfig.getApiUrl() + 'recommendations',
        {
          headers: {
            Authorization: `Bearer ${token.value?.getToken()}`
          }
        }
      ).then((resp: { data: any }) => {
        resolve(resp.data)
      }).catch((error: Error) => {
        reject(error)
      })
    })
  }

  return {
    getRecommendations
  }
})
