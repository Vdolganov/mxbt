export default class HttpError extends Error {
  status: number;

  constructor(response: Response) {
    super(response.statusText || 'Возникла ошибка');
    this.status = response.status;
  }
}
