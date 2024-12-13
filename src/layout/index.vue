<script setup>
  // 组件直接使用  不需要components参数
  import TopHeader from './TopHeader/index.vue';
</script>

<template>
  <div class="layout-container">
    <TopHeader></TopHeader>
  </div>
</template>

<style lang="scss" scoped>
  .layout-container{
    align-items: stretch;
  }
</style>