import type Image from "@/types/spotify/Image"
import type PlaylistItem from "@/types/spotify/PlaylistItem"
import type User from "@/types/spotify/User"

type Playlist = {
  collaborative: boolean,
  description: string,
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
  name: string,
  owner: User,
  public: boolean,
  snapshot_id: string,
  tracks: {
    href: string
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: Array<PlaylistItem>
  },
  type: string,
  uri: string
}

export default Playlist