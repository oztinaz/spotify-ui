// libraries
import { createRouter, createWebHistory } from 'vue-router'

// stores
import { useAuthorizationStore } from '@/stores/authorization'

// views
import AuthorizationView from '@/views/AuthorizationView.vue'
import HomeView from '@/views/HomeView.vue'
import TokenExpiredView from '@/views/TokenExpiredView.vue'
import type AccessToken from '@/models/AccessToken'
import AccessTokenFactory from '@/factories/AccessToken'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authorize',
      name: 'authorize',
      component: AuthorizationView
    },
    {
      path: '/token-expired',
      name: 'token-expired',
      component: TokenExpiredView
    }
  ]
})

router.beforeEach((to, from) => {
  const authorizationStore = useAuthorizationStore()
  const { setAccessToken } = authorizationStore
  
  const token: AccessToken = AccessTokenFactory.createFromLocalStorageTokenString(localStorage.getItem('token'))
  setAccessToken(token)

  if (to.name !== 'authorize' && !token.isValid()) {
    return {
      name: 'authorize'
    }
  }

  if (to.name !== 'token-expired' && token.hasExpired()) {
    return {
      name: 'token-expired'
    }
  } else if (to.name === 'token-expired' && !token.hasExpired()) {
    return from
  }
})

export default router
