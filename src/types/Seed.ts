import type Artist from "./spotify/Artist"
import type Track from "./spotify/Track"

type Seed = {
  artists: Array<Artist>,
  genres: Array<string>,
  tracks: Array<Track>
}

export default Seed