import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('index', () => {
  const message = ref('Hello, World!')

  return { message }
})
