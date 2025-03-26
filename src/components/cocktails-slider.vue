<template>
  <div class="cocktails-slider">
    <cocktail-item v-if="activeSlide" :data="activeSlide"></cocktail-item>
    <article-switch
      v-if="list.length"
      :length="list.length"
      v-model:value="activeTab"
    ></article-switch>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, watch, ref } from 'vue';
import { TCocktailData } from '@/service/cocktails';
import CocktailItem from './cocktail-item.vue';
import ArticleSwitch from './base/article-switch.vue';

interface IProps {
  list: TCocktailData[];
}

const activeTab = ref(0);

const props = defineProps<IProps>();

const activeSlide = computed(() => props.list[activeTab.value]);

watch(
  () => props.list,
  () => {
    activeTab.value = 0;
  },
);
</script>

<style lang="scss" scoped>
.cocktails-slider {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
}
</style>
