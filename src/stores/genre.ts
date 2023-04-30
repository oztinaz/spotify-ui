import SpotifyConfig from '@/configs/Spotify'
import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { useAuthorizationStore } from '@/stores/authorization'
import { ref, type Ref } from 'vue'

export const useGenreStore = defineStore('genre', () => {
  const authorizationStore = useAuthorizationStore()
  const { token } = storeToRefs(authorizationStore)

  const genres: Ref<Array<string>> = ref([])

  const setGenres = (g: Array<string>) => {
    genres.value = g
  }

  const fetchGenres = async (): Promise<Array<string>> => {
    return new Promise(async (resolve, reject) => {
      await axios.get(
        SpotifyConfig.getApiUrl() + 'recommendations/available-genre-seeds',
        {
          headers: {
            Authorization: `Bearer ${token.value?.getToken()}`
          }
        }
      ).then((resp: { data: { genres: Array<string> } }) => {
        resolve(resp.data.genres)
      }).catch((error: Error) => {
        reject(error)
      })
    })
  }

  return {
    genres,
    fetchGenres,
    setGenres
  }
})
