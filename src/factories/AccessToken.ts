import AccessToken from "@/models/AccessToken";
import type SpotifyAccessToken from "@/types/spotify/tokens/AccessToken";

class AccessTokenFactory {
  public static createFromLocalStorageTokenString(localStorageTokenString: string | null): AccessToken {
    if (localStorageTokenString === null) {
      return new AccessToken()
    }

    const localStorageToken: any = JSON.parse(localStorageTokenString)

    return new AccessToken(
      localStorageToken.token,
      new Date(localStorageToken.expiresAt)
    )
  }

  public static createFromSpotifyAccessToken(spotifyAccessToken: SpotifyAccessToken): AccessToken {
    const expiresAt = new Date()
    expiresAt.setSeconds(expiresAt.getSeconds() + 10800 + spotifyAccessToken.expires_in)
    return new AccessToken(spotifyAccessToken.access_token, expiresAt)
  }
}

export default AccessTokenFactory