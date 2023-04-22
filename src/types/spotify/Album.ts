import type Artist from "@/types/spotify/Artist"
import type Image from "@/types/spotify/Image"

type Album = {
  album_type: 'album' | 'compilation' | 'single',
  total_tracks: number,
  available_markets: Array<string>,
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  images: Array<Image>,
  name: string,
  release_date: string,
  release_date_precision: string,
  restrictions: {
    reason: 'explicit'| 'market' | 'product'
  },
  type: 'album',
  uri: string,
  copyrights: {
    text: string,
    type: string
  },
  external_ids: {
    isrc: string,
    ean: string,
    upc: string
  },
  genres: Array<string>,
  label: string,
  popularity: number,
  artists: Array<Artist>
}

export default Album