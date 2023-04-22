import type Image from "@/types/spotify/Image"

type User = {
  display_name: string,
  external_urls: {
    spotify: string
  },
  followers: {
    href: string,
    total: number
  },
  href: string,
  id: string,
  images: Array<Image>,
  type: 'user',
  uri: string
}

export default User