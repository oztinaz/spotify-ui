import type Filter from '@/types/Filter'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useCreatePlaylistViewFilterStore = defineStore('create-playlist-view-filter', () => {
  const allFilters: Ref<Array<Filter>> = ref([
    {
      name: 'acousticness',
      step: 0.1
    },
    {
      name: 'popularity',
      step: 1
    }
  ])

  // const availableFilters = computed((): Array<string> => {

  // })

  const filters: Ref<Array<string>> = ref([])

  return {
    allFilters,
    filters
  }
})
