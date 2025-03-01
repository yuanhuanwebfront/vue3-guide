<script setup>
  // 组件直接使用  不需要components参数
  import TopHeader from './TopHeader/index.vue';
  import SideBar from './SideBar/index.vue';
  import Content from './Content/index.vue';
</script>

<template>
  <div class="flex layout-container">
    <!-- <TopHeader></TopHeader> -->
    <SideBar></SideBar>
    <Content></Content>
  </div>
</template>

<style lang="scss" scoped>
  .layout-container{
    align-items: stretch;
  }
</style>