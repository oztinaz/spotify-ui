<template>
  <div class="seed">
    <div>
      <input type="text" class="form-control" placeholder="Search artist" v-model="query">
    </div>
    <div class="cards">
      <ArtistSeedCard
        v-for="artist in artists"
        :artist="artist"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArtistSeedCard from '@/components/create-playlist/seeds/cards/Artist.vue'
import { useSearchStore } from '@/stores/search';
import type Artist from '@/types/spotify/Artist';
import { ref, watch, type Ref } from 'vue';

const searchStore = useSearchStore()
const { search } = searchStore

const query: Ref<string> = ref('')
const artists: Ref<Array<Artist>> = ref([])

watch(query, async () => {
  if (query.value !== '') {
    artists.value = await search(query.value, 'artist') as Array<Artist>
  } else {
    artists.value = []
  }
})
</script>

<style scoped>
.cards {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  height: 200px;
  overflow-y: auto;
  padding: 10px;
}
</style>