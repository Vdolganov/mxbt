<template>
  <base-layout>
    <router-view></router-view>
  </base-layout>
</template>

<script lang="ts" setup>
import baseLayout from './components/base-layout.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: $text;
}

body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
