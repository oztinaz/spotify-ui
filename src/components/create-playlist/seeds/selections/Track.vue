<template>
  <div class="seed">
    <div>
      <input type="text" class="form-control" placeholder="Search track" v-model="query">
    </div>
    <div class="cards">
      <TrackSeedCard
        v-for="track in tracks"
        :track="track"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TrackSeedCard from '@/components/create-playlist/seeds/cards/Track.vue'
import { useSearchStore } from '@/stores/search';
import type Track from '@/types/spotify/Track';
import { ref, watch, type Ref } from 'vue';

const searchStore = useSearchStore()
const { search } = searchStore

const query: Ref<string> = ref('')
const tracks: Ref<Array<Track>> = ref([])

watch(query, async () => {
  if (query.value !== '') {
    tracks.value = await search(query.value, 'track') as Array<Track>
  } else {
    tracks.value = []
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