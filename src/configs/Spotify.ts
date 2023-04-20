class SpotifyConfig {
  public static getAccountsUrl(): string {
    return import.meta.env.VITE_APP_SPOTIFY_ACCOUNTS_URL as string
  }

  public static getClientId(): string {
    return import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID as string
  }

  public static getClientSecret(): string {
    return import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET as string
  }

  public static getRedirectUri(): string {
    return import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI as string
  }
}

export default SpotifyConfig