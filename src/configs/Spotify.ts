class SpotifyConfig {
  public static getAccountsUrl(): string {
    return import.meta.env.VITE_APP_SPOTIFY_ACCOUNTS_URL
  }

  public static getApiUrl(): string {
    return import.meta.env.VITE_APP_SPOTIFY_API_URL
  }

  public static getClientId(): string {
    return import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
  }

  public static getClientSecret(): string {
    return import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET
  }

  public static getRedirectUri(): string {
    return import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI
  }
}

export default SpotifyConfig