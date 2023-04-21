import AccessToken from "@/models/AccessToken";
import type SpotifyAccessToken from "@/types/spotify/AccessToken";

class AccessTokenFactory {
  public static createEmptyAccessToken(): AccessToken {
    return new AccessToken()
  }

  public static createFromLocalStorageTokenString(localStorageTokenString: string): AccessToken {
    const localStorageToken: any = JSON.parse(localStorageTokenString)

    const refresh: string | null = localStorageToken.refresh ? localStorageToken.refresh : null
    const scopes: Array<string> = localStorageToken.scopes ? localStorageToken.scopes.split(' ') : []
    const expiresAt: Date = new Date(localStorageToken.expiresAt)
    expiresAt.setSeconds(expiresAt.getSeconds() - 10800)

    return new AccessToken(
      localStorageToken.token,
      expiresAt,
      scopes,
      refresh
    )
  }

  public static createFromSpotifyAccessToken(spotifyAccessToken: SpotifyAccessToken): AccessToken {
    const refresh: string | null = spotifyAccessToken.refresh_token ? spotifyAccessToken.refresh_token : null
    const scopes: Array<string> = spotifyAccessToken.scope ? spotifyAccessToken.scope.split(' ') : []
    const expiresAt: Date = new Date()
    expiresAt.setSeconds(expiresAt.getSeconds() + spotifyAccessToken.expires_in + 10800)

    return new AccessToken(
      spotifyAccessToken.access_token,
      expiresAt,
      scopes,
      refresh
    )
  }
}

export default AccessTokenFactory