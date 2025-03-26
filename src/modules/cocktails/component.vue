<template>
  <div class="cocktails-container">
    <navigation-list
      :navigation-list="navList"
      @select="goToCocktail"
      :active-item="activeRouteParam"
    >
    </navigation-list>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineOptions } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NavigationList } from '@/components';
import { TCocktails } from '@/service/cocktails/types';
import { allCocktails } from '@/config/constants';

import { routeNames } from '@/router/route-names';

const navList = allCocktails as TCocktails[];

const router = useRouter();
const route = useRoute();

const activeRouteParam = computed(() => (route.params?.id || '') as TCocktails);

function goToCocktail(val: TCocktails) {
  router.push({
    name: routeNames.cocktailItem,
    params: { id: val },
  });
}

defineOptions({ name: 'Cocktails' });
</script>

<style lang="scss" scoped>
.cocktails-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}
</style>
