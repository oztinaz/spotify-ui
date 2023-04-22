import type Track from "@/types/spotify/Track"
import type User from "@/types/spotify/User"

type PlaylistItem = {
  added_at: string,
  added_by: User,
  is_local: boolean,
  track: Track
}

export default PlaylistItem