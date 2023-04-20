import { createRouter, createWebHistory } from 'vue-router'
import AskAuthorizationView from '@/views/AskAuthorizationView.vue'
import AuthorizationView from '@/views/AuthorizationView.vue'
import HomeView from '@/views/HomeView.vue'
import TokenExpiredView from '@/views/TokenExpiredView.vue'
import { useAuthorizationStore } from '@/stores/authorization'
import AccessTokenFactory from '@/factories/AccessToken'
import type SpotifyAccessToken from '@/types/spotify/AccessToken'
import type AccessToken from '@/models/AccessToken'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ask-authorization',
      name: 'ask-authorization',
      component: AskAuthorizationView
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: AuthorizationView
    },
    {
      path: '/token-expired',
      name: 'token-expired',
      component: TokenExpiredView
    }
  ]
})

router.beforeEach(async (to, from) => {
  const authorizationStore = useAuthorizationStore()
  const { refreshSpotifyAccessToken, setAccessToken } = authorizationStore

  const localStorageTokenString: string | null = localStorage.getItem('token')
  let token: AccessToken = localStorageTokenString ?
    AccessTokenFactory.createFromLocalStorageTokenString(localStorageTokenString) :
    AccessTokenFactory.createEmptyAccessToken()
  setAccessToken(token)

  if (token.hasExpired() && token.isRefreshable()) {
    const spotifyAccessToken: SpotifyAccessToken = await refreshSpotifyAccessToken(token.getRefresh() as string)
    token = AccessTokenFactory.createFromSpotifyAccessToken(spotifyAccessToken)
    setAccessToken(token)
    localStorage.setItem('token', token.toString())
  }
  
  if (to.name === 'authorization') {
    return
  } else if (to.name === 'token-expired') {
    return
  }  else if (to.name !== 'token-expired' && token.hasExpired()) {
    return {
      name: 'token-expired'
    }
  } else if (to.name !== 'ask-authorization' && (!token.isValid() || token.hasExpired())) {
    return {
      name: 'ask-authorization'
    }
  }
})

export default router
