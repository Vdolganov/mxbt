import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { getCocktails, TCocktailData, TCocktails } from '@/service/cocktails';
import HttpError from '@/entities/errors';
import { getErrorMessage } from '@/utils/get-error-message';

interface IStateData {
  cocktails: Partial<Record<TCocktails, TCocktailData[]>>;
  loadingCocktails: TCocktails[];
  error: string;
}

export const useCocktailsStore = defineStore('CocktailsStore', () => {
  const state = reactive<IStateData>({ cocktails: {}, loadingCocktails: [], error: '' });

  async function fetchCocktails(selectedCocktail: TCocktails) {
    state.error = '';
    try {
      if (state.cocktails[selectedCocktail]) {
        return;
      }
      state.loadingCocktails.push(selectedCocktail);
      const cocktail = await getCocktails(selectedCocktail);
      state.cocktails = {
        ...state.cocktails,
        [selectedCocktail]: cocktail,
      };
    } catch (e) {
      if (e instanceof HttpError) {
        state.error = getErrorMessage(e);
      }
    } finally {
      state.loadingCocktails = state.loadingCocktails.filter((el) => el !== selectedCocktail);
    }
  }

  const cocktails = computed(() => state.cocktails);
  const loadingCocktails = computed(() => state.loadingCocktails);
  const errorMessage = computed(() => state.error);

  return {
    fetchCocktails,
    cocktails,
    loadingCocktails,
    errorMessage,
  };
});
