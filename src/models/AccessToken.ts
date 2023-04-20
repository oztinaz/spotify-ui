class AccessToken {
  private token: string

  private expiresAt: Date

  private scopes: Array<string>

  private refresh: string | null

  constructor(token: string = '', expiresAt: Date = new Date(), scopes: Array<string> = [], refresh: string | null = null) {
    this.token = token
    this.expiresAt = expiresAt
    this.scopes = scopes
    this.refresh = refresh
  }

  public getToken(): string {
    return this.token
  }

  public getExpiresAt(): Date {
    return this.expiresAt
  }

  public getScopes(): Array<string> {
    return this.scopes
  }

  public getRefresh(): string | null {
    return this.refresh
  }

  public isRefreshable(): boolean {
    return this.getRefresh() !== null
  }

  public isValid(): boolean {
    return this.getToken() !== ''
  }

  public hasExpired(): boolean {
    return new Date() > this.getExpiresAt()
  }

  public toString(): string {
    return '{' +
      '"token": "' + this.getToken() + '",' +
      '"expiresAt": "' + this.getExpiresAt().toISOString() + '",' +
      '"scopes": "' + this.getScopes().join(' ') + '",' +
      '"refresh": ' + (this.getRefresh() ? `"${this.getRefresh()}"` : 'null') +
      '}'
  }
}

export default AccessToken