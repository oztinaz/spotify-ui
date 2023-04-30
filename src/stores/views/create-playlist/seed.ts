import type Seed from '@/types/Seed'
import type Artist from '@/types/spotify/Artist'
import type Track from '@/types/spotify/Track'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useCreatePlaylistViewSeedStore = defineStore('create-playlist-view-seed', () => {
  const seed: Ref<Seed> = ref({
    artists: [],
    genres: [],
    tracks: []
  })

  const addedArtistSeeds = computed((): Array<Artist> => {
    return seed.value.artists
  })

  const addedGenreSeeds = computed((): Array<string> => {
    return seed.value.genres
  })

  const addedTrackSeeds = computed((): Array<Track> => {
    return seed.value.tracks
  })

  const artistAdded = (artist: Artist): boolean => {
    return addedArtistSeeds.value.filter((a: Artist) => a.id === artist.id).length > 0
  }

  const genreAdded = (genre: string): boolean => {
    return addedGenreSeeds.value.filter((g: string) => g === genre).length > 0
  }

  const trackAdded = (track: Track): boolean => {
    return addedTrackSeeds.value.filter((t: Track) => t.id === track.id).length > 0
  }

  const addArtist = (artist: Artist): void => {
    if (artistAddible(artist)) {
      seed.value.artists.push(artist)
    }
  }

  const addGenre = (genre: string): void => {
    if (genreAddible(genre)) {
      seed.value.genres.push(genre)
    }
  }

  const addTrack = (track: Track): void => {
    if (trackAddible(track)) {
      seed.value.tracks.push(track)
    }
  }

  const artistAddible = (artist: Artist): boolean => {
    return seedAddible.value && !artistAdded(artist)
  }

  const genreAddible = (genre: string): boolean => {
    return seedAddible.value && !genreAdded(genre)
  }

  const trackAddible = (track: Track): boolean => {
    return seedAddible.value && !trackAdded(track)
  }

  const seedAddible = computed((): boolean => {
    return seed.value.artists.length + seed.value.tracks.length + seed.value.genres.length < 5
  })

  const removeArtist = (artist: Artist): void => {
    if (artistAdded(artist)) {
      seed.value.artists = seed.value.artists.filter((a: Artist) => a.id !== artist.id)
    }
  }

  const removeGenre = (genre: string): void => {
    if (genreAdded(genre)) {
      seed.value.genres.splice(seed.value.genres.findIndex((g: string) => g === genre), 1)
    }
  }

  const removeTrack = (track: Track): void => {
    if (trackAdded(track)) {
      seed.value.tracks.splice(seed.value.tracks.findIndex((t: Track) => t.id === track.id), 1)
    }
  }

  return {
    seed,
    addArtist,
    addGenre,
    addTrack,
    artistAddible,
    genreAddible,
    trackAddible,
    artistAdded,
    genreAdded,
    trackAdded,
    removeArtist,
    removeGenre,
    removeTrack
  }
})
