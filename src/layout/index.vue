<script setup>
  // 组件直接使用  不需要components参数
  import TopHeader from './TopHeader/index.vue';
  import SideBar from './SideBar/index.vue';
  import Content from './Content/index.vue';
</script>

<template>
  <div class="layout-container">
    <TopHeader></TopHeader>
    <div class="flex content-container">
      <!-- 侧边栏 -->
      <SideBar></SideBar>

      <!-- 内容区域 --> 
      <Content></Content>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout-container{
    width: 100vw;
    height: 100vh;
  }
  .content-container{
    align-items: stretch;
    height: calc(100vh - 60px);
  }
</style>