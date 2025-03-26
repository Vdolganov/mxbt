<template>
  <div class="cocktails-item">
    <div v-if="cocktailsStore.errorMessage">{{ cocktailsStore.errorMessage }}</div>
    <div v-else-if="isLoading">Loading...</div>
    <cocktails-slider v-else :list="currentData || []"></cocktails-slider>
  </div>
</template>
<script lang="ts" setup>
import { computed, watch } from 'vue';

import { TCocktailData, TCocktails } from '@/service/cocktails';
import CocktailsSlider from '@/components/cocktails-slider.vue';

import { useCocktailsStore } from './store';

interface IProps {
  cocktailCode: TCocktails;
}
defineOptions({ name: 'CocktailsItem' });
const props = defineProps<IProps>();
const cocktailsStore = useCocktailsStore();
const currentData = computed<TCocktailData[] | undefined>(
  () => cocktailsStore.cocktails[props.cocktailCode],
);

const isLoading = computed<boolean>(() =>
  cocktailsStore.loadingCocktails.includes(props.cocktailCode),
);

function getNewCocktailData() {
  if (!currentData.value) {
    cocktailsStore.fetchCocktails(props.cocktailCode);
  }
}

watch(
  () => props.cocktailCode,
  (current, old) => {
    if (current !== old) {
      getNewCocktailData();
    }
  },
  { immediate: true },
);
</script>
<style lang="scss">
.cocktails-item {
  width: 85%;
  padding: 16px;
  background-color: white;
}
</style>
