export class HttpError extends Error{
  public constructor (public statusCode: number, message?: string) {
    super(message);
    this.name = 'HttpError';
  }
}