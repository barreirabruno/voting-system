export class ServerError extends Error {
  constructor(error?: Error) {
    super('Server failed. Try again later or contact us for support')
    this.name = 'ServerError'
    this.stack = error?.stack
  }
}