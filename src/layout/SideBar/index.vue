<script setup>
  import { useRoute } from 'vue-router';
  import useMenu from '@/composition/menu/index';

  const route = useRoute();
  const { menus } = useMenu();

  console.log(route);
</script>

<template>
  <div class="sidebar-container">
    <img src="../../assets/logo.jpg" class="logo">

    <div class="tab-item" :class="{first: idx == 0, active: item.path == route.path}" v-for="(item, idx) in menus" :key="item.path">
      <i class="iconfont" :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar-container{
    width: 200px;
    min-height: 100vh;
    align-items: stretch;
    overflow-y: auto;
    border-right: 1px solid #f1f1f1;
    background: #f2f2f2;
    flex-shrink: 0;
    .logo{
      width: 100%;
      // border-bottom: 1px solid #dbdbdb;
    }
    .tab-item{
      cursor: pointer;
      box-sizing: border-box;
      height: 46px;
      line-height: 46px;
      padding: 0 20px;
      border-bottom: 1px solid #dbdbdb;
      transition: 0.6s;
      &.first{
        border-top: 1px solid #dbdbdb;
      }
      &:hover, &.active{
        padding-left: 36px;
        color: #409EFF;
      }
      .iconfont{
        margin-right: 12px;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
</style>