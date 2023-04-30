<template>
  <div class="seed-selections">
    <ArtistSeedSelection />
    <TrackSeedSelection />
    <GenreSeedSelection />
  </div>
  <div class="seed-selecteds">
    <div class="warning">
      At least 1 seed must be selected and max 5 seeds can be selected.
    </div>
    <div class="seed-cards">
      <ArtistSeedCard
        :artist="artist"
        v-for="artist in seed.artists"
      />
      <TrackSeedCard
        :track="track"
        v-for="track in seed.tracks"
      />
      <GenreSeedCard
        :genre="genre"
        v-for="genre in seed.genres"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArtistSeedSelection from '@/components/create-playlist/seeds/selections/Artist.vue'
import ArtistSeedCard from '@/components/create-playlist/seeds/cards/Artist.vue'
import GenreSeedSelection from '@/components/create-playlist/seeds/selections/Genre.vue'
import GenreSeedCard from '@/components/create-playlist/seeds/cards/Genre.vue'
import TrackSeedSelection from '@/components/create-playlist/seeds/selections/Track.vue'
import TrackSeedCard from '@/components/create-playlist/seeds/cards/Track.vue'
import { useCreatePlaylistViewSeedStore } from '@/stores/views/create-playlist/seed';
import { storeToRefs } from 'pinia';

const createPlaylistViewSeedStore = useCreatePlaylistViewSeedStore()
const { seed } = storeToRefs(createPlaylistViewSeedStore)
</script>

<style scoped>
.seed-selections {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.seed-selecteds {

}

.seed-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.warning {}
</style>