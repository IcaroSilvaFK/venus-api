export class AppErrors extends Error {
  public message: string;
  public status: number;
  public error?: unknown;

  constructor(message: string, status: number, error?: unknown) {
    super();
    this.message = message;
    this.status = status;
    this.error = error;
  }
}
