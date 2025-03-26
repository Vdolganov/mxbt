import { ECocktails } from './enums';

export type TCocktails = `${ECocktails}`;

type Range1to15 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

type BaseCocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  'strInstructionsZH-HANS': string | null;
  'strInstructionsZH-HANT': string | null;
  strDrinkThumb: string;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

export type TIngredientsAndMeasures = {
  [K in `strIngredient${Range1to15}`]: string | null;
} & {
  [K in `strMeasure${Range1to15}`]: string | null;
};

export type TCocktailData = BaseCocktail & TIngredientsAndMeasures;

export type TResponse = {
  drinks: TCocktailData[];
};
