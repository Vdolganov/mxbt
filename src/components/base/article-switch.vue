<template>
  <div class="article-switch">
    <div
      v-for="item in length"
      :key="item"
      :class="{ 'article-switch-item__active': value === item - 1 }"
      class="article-switch-item"
      @click="onSelect(item)"
      @keydown="onSelect(item)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineModel } from 'vue';

interface IProps {
  length: number;
}
const model = defineModel<number>('value');
defineProps<IProps>();

function onSelect(val: number) {
  model.value = val - 1;
}
</script>

<style lang="scss" scoped>
.article-switch {
  position: sticky;
  border-radius: $border-radius-1;
  background: $teal-200;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  &-item {
    transition: all 0.3s ease;
    border-radius: 100px;
    background-color: $teal-50;
    width: 8px;
    height: 8px;
    cursor: pointer;
    &__active {
      background-color: $teal-500;
      width: 12px;
      height: 12px;
    }
  }
}
</style>
