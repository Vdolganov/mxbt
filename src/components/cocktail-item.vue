<template>
  <div class="cocktails-item">
    <div class="cocktails-item-content">
      <div class="left">
        <h3 class="cocktail-header">{{ data.strDrink }}</h3>
        <p>{{ data.strCategory }}</p>
        <p>{{ data.strAlcoholic }}</p>
        <p>{{ data.strGlass }}</p>
        <h4>Instructions:</h4>
        <p>{{ data.strInstructions }}</p>
        <h4>List of ingredients:</h4>
        <div v-for="item in measureAndIngr" :key="item.i">
          <span> {{ item.m }} </span>
          <span> {{ item.i }} </span>
        </div>
      </div>
      <div class="right">
        <img :alt="data.strDrinkThumb" :src="data.strDrinkThumb" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { TCocktailData } from '@/service/cocktails';

interface IMeasureAndIngredientPair {
  m: string;
  i: string;
}

interface IProps {
  data: TCocktailData;
}

const props = defineProps<IProps>();

const measureAndIngr = computed<IMeasureAndIngredientPair[]>(() => {
  const mKey = 'strMeasure';
  const iKey = 'strIngredient';
  const l: IMeasureAndIngredientPair[] = [];

  for (let i = 1; i < 16; i += 1) {
    const mKeyI = `${mKey}${i}` as keyof TCocktailData;
    const iKeyI = `${iKey}${i}` as keyof TCocktailData;
    const iVal = props.data[iKeyI];
    const mVal = props.data[mKeyI];
    if (!mVal || !iVal) {
      break;
    }
    l.push({ i: iVal, m: mVal });
  }
  return l;
});
</script>

<style lang="scss" scoped>
.cocktails-item {
  width: 90%;
  min-height: 50px;
  background: $teal-50;
  max-height: 100vh;
  overflow-y: auto;
  .cocktail-header {
    text-transform: capitalize;
    padding: 0;
    margin: 0;
  }
  .cocktails-item-content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 18px;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
