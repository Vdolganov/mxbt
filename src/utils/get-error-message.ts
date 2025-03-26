import HttpError from '@/entities/errors';

export function getErrorMessage(e: unknown) {
  return e instanceof HttpError ? e.message : 'Возникла ошибка';
}
