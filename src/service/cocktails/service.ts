import httpClient from '@/http';
import { appConfig } from '@/config/app-config';
import { TCocktails, TCocktailData, TResponse } from './types';

export async function getCocktails(cocktailCode: TCocktails): Promise<TCocktailData[]> {
  const cocktails = await httpClient.get<TResponse>(appConfig.cocktails.get, { s: cocktailCode });
  return cocktails.drinks;
}
