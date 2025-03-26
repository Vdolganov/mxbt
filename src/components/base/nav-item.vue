<template>
  <li :class="{ 'nav-item__active': isSelected }" class="nav-item">
    {{ itemValue }}
  </li>
</template>

<script lang="ts" setup>
interface IProps {
  itemValue: string;
  isSelected: boolean;
}
defineOptions({ name: 'NavItem' });
defineProps<IProps>();
</script>

<style lang="scss" scoped>
.nav-item {
  background-color: $teal-grey;
  width: 100%;
  border-radius: $border-radius-1;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  padding: 4px 8px;
  transition: background-color 0.3s ease;
  text-transform: capitalize;

  &:hover {
    background-color: lighten($teal-grey, 15%);
  }
  &__active {
    padding-left: 16px;
    background-color: darken($teal-grey, 15%);
  }
}
</style>
