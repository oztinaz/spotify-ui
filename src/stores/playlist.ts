import SpotifyConfig from '@/configs/Spotify'
import axios from 'axios'
import { defineStore, storeToRefs } from 'pinia'
import { ref, type Ref } from 'vue'
import { useAuthorizationStore } from '@/stores/authorization'
import type Playlist from '@/types/spotify/Playlist'

export const usePlaylistStore = defineStore('playlist', () => {
  const authorizationStore = useAuthorizationStore()
  const { token } = storeToRefs(authorizationStore)

  const playlists: Ref<Array<any>> = ref([])

  const playlist: Ref<Playlist | null> = ref(null)

  const setPlaylist = (p: Playlist | null): void => {
    playlist.value = p
  }

  const getPlaylist = async (playlistId: string): Promise<Playlist> => {
    return new Promise(async (resolve, reject) => {
      await axios.get(
        SpotifyConfig.getApiUrl() + `playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${token.value?.getToken()}`
          }
        }
      ).then((resp: { data: Playlist }) => {
        resolve(resp.data)
      }).catch((error: Error) => {
        reject(error)
      })
    })
  }

  const getUserPlaylists = async () => {
    await axios.get(
      SpotifyConfig.getApiUrl() + 'me/playlists',
      {
        headers: {
          Authorization: `Bearer ${token.value?.getToken()}`
        }
      }
    ).then((resp: { data: { items: Array<Playlist>}  }) => {
      playlists.value = resp.data.items
    }).catch(error => {
      throw error
    })
  }
  return {
    getPlaylist,
    getUserPlaylists,
    setPlaylist,
    playlist,
    playlists
  }
})
