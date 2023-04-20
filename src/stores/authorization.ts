import axios from 'axios'
import { defineStore } from 'pinia'
import type SpotifyAccessToken from '@/types/spotify/AccessToken'
import { ref, type Ref } from 'vue'
import type AccessToken from '@/models/AccessToken'
import SpotifyConfig from '@/configs/Spotify'

export const useAuthorizationStore = defineStore('authorization', () => {
  const token: Ref<AccessToken | null> = ref(null)

  const setAccessToken = (accessToken: AccessToken | null) => {
    token.value = accessToken
  }

  const fetchSpotifyAccessToken = async (code: string): Promise<SpotifyAccessToken> => {
    return new Promise(async (resolve, reject) => {
      await axios.post(
        SpotifyConfig.getAccountsUrl() + '/api/token',
        {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: SpotifyConfig.getRedirectUri()
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${window.btoa(`${SpotifyConfig.getClientId()}:${SpotifyConfig.getClientSecret()}`)}`
          }
        }
      ).then((resp: { data: SpotifyAccessToken }) => {
        resolve(resp.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  const refreshSpotifyAccessToken = async (refresh: string): Promise<SpotifyAccessToken> => {
    return new Promise(async (resolve, reject) => {
      await axios.post(
        SpotifyConfig.getAccountsUrl() + '/api/token',
        {
          grant_type: 'refresh_token',
          refresh_token: refresh
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${window.btoa(`${SpotifyConfig.getClientId()}:${SpotifyConfig.getClientSecret()}`)}`
          }
        }
      ).then((resp: { data: SpotifyAccessToken }) => {
        resolve(resp.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  return {
    fetchSpotifyAccessToken,
    refreshSpotifyAccessToken,
    setAccessToken
  }
})
