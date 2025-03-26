import HttpError from '@/entities/errors';
import { HttpGetParams } from './types';

export default class HttpClient {
  private baseUrl = '';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string, params?: HttpGetParams): Promise<T> {
    let getParams: undefined | URLSearchParams;
    if (params) {
      getParams = new URLSearchParams();
      const keys = Object.keys(params);
      keys.forEach((key) => {
        getParams?.append(key, params[key]);
      });
    }

    return fetch(`${this.baseUrl}/${path}?${getParams}`).then((response) => {
      if (!response.ok) {
        throw new HttpError(response);
      }
      return response.json();
    });
  }
}
