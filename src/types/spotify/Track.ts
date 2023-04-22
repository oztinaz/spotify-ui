import type Album from "@/types/spotify/Album"
import type Artist from "@/types/spotify/Artist"

type Track = {
  album: Album,
  artists: Array<Artist>,
  available_markets: Array<string>,
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: {
    isrc: string,
    ean: string,
    upc: string
  },
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  is_playable: boolean,
  linked_from: object,
  restrictions: {
    reason: 'explicit'| 'market' | 'product'
  },
  name: string,
  popularity: number,
  preview_url: string,
  track_number: number,
  type: 'track',
  uri: string,
  is_local: boolean
}

export default Track