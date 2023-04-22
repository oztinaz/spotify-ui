import type Image from "@/types/spotify/Image"

type Artist = {
  external_urls: {
    spotify: string
  },
  followers: {
    href: string,
    total: number
  },
  genres: Array<string>,
  href: string,
  id: string,
  images: Array<Image>,
  name: string,
  popularity: number,
  type: 'artist',
  uri: string
}

export default Artist