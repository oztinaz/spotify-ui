class LocalStorageUtils {
  public static getJson(key: string): object | null {
    const localStorageItem: string | null = localStorage.getItem(key)
    if (localStorageItem === null) {
      return null
    }

    try {
      return JSON.parse(localStorageItem)
    } catch (error) {
      throw error
    }
  }
}

export default LocalStorageUtils