import SpotifyConfig from '@/configs/Spotify'
import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { useAuthorizationStore } from '@/stores/authorization'

export const useSearchStore = defineStore('search', () => {
  const authorizationStore = useAuthorizationStore()
  const { token } = storeToRefs(authorizationStore)

  const search = async (query: string, type: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      await axios.get(
        SpotifyConfig.getApiUrl() + 'search',
        {
          headers: {
            Authorization: `Bearer ${token.value?.getToken()}`
          },
          params: {
            q: query,
            type: type
          }
        }
      ).then((resp: { data: any }) => {
        resolve(resp.data[`${type}s`].items)
      }).catch((error: Error) => {
        reject(error)
      })
    })
  }

  return {
    search
  }
})
