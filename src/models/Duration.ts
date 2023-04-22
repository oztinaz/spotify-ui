class Duration {
  private hours: number = 0

  private minutes: number = 0

  private seconds: number = 0

  private milliseconds: number = 0

  constructor(ms: number) {
    this.milliseconds = ms % 1000
    this.seconds = Math.floor(ms / 1000)
    if (this.milliseconds >= 500) {
      this.seconds += 1
      this.milliseconds = 0
    }
    this.minutes = Math.floor(this.seconds / 60)
    this.seconds = this.seconds % 60
    this.hours = Math.floor(this.minutes / 60)
    this.minutes = this.minutes % 60
  }

  public getHours(): number {
    return this.hours
  }

  public getMinutes(): number {
    return this.minutes
  }

  public getSeconds(): number {
    return this.seconds
  }

  public getMilliseconds(): number {
    return this.milliseconds
  }

  public toString(): string {
    const hours = this.getHours() < 10 ? `0${this.getHours()}` : `${this.getHours()}`
    const minutes = this.getMinutes() < 10 ? `0${this.getMinutes()}` : `${this.getMinutes()}`
    const seconds = this.getSeconds() < 10 ? `0${this.getSeconds()}` : `${this.getSeconds()}`

    if (this.getHours() > 0) {
      return `${hours}:${minutes}:${seconds}`
    }
    return `${minutes}:${seconds}`
  }
}

export default Duration