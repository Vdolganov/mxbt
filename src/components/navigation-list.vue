<template>
  <ul class="navigation-list">
    <nav-item
      v-for="item in navigationList"
      :key="item"
      :item-value="item"
      :is-selected="activeItem === item"
      @click="onSelect(item)"
    >
    </nav-item>
  </ul>
</template>

<script lang="ts" setup>
import { TCocktails } from '@/service/cocktails';
import NavItem from './base/nav-item.vue';

interface IProps {
  navigationList: TCocktails[];
  activeItem: TCocktails | '';
}
interface IEmits {
  (e: 'select', val: TCocktails): void;
}
defineOptions({ name: 'NavigationList' });
defineProps<IProps>();
const emit = defineEmits<IEmits>();

function onSelect(value: TCocktails) {
  emit('select', value);
}
</script>

<style lang="scss" scoped>
.navigation-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 15%;
  padding: 16px 8px;
  margin: 0;
  list-style-type: none;
  gap: 3px;
  height: 100vh;
  background-color: white;
}
</style>
