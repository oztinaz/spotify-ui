class AccessTokenUtils {
  public static validateLocalStorageToken(localStorageToken: object): boolean {
    if (!('token' in localStorageToken)) {
      return false
    }

    if (!('expiresAt' in localStorageToken)) {
      return false
    }

    return true
  }
}