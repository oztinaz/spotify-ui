class AccessToken {
  private token: string

  private expiresAt: Date

  constructor(token: string = '', expiresAt: Date = new Date()) {
    this.token = token
    this.expiresAt = expiresAt
  }
  public getToken(): string {
    return this.token
  }

  public getExpiresAt(): Date {
    return this.expiresAt
  }

  public hasExpired(): boolean {
    return new Date() > this.getExpiresAt()
  }

  public isValid(): boolean {
    return this.getToken() !== ''
  }

  public toString(): string {
    return `{"token": "${this.getToken()}", "expiresAt": "${this.getExpiresAt().toISOString()}"}`
  }
}

export default AccessToken