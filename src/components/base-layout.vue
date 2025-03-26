<template>
  <div class="base-layout">
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: $teal-50;
  .content-container {
    max-width: 1024px;
    min-width: 360px;
    width: 100%;
  }
}
</style>
