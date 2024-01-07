<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import useMenu from '@/composition/menu/index';

  const route = useRoute();
  const router = useRouter();
  const { menus } = useMenu();

  function pushRoute(rou){
    router.push({
      path: rou.path
    }) 
  }
</script>

<template>
  <div class="sidebar-container">
    <img src="../../assets/logo.png" class="logo">

    <div class="tab-item" @click="pushRoute(item)" :class="{first: idx == 0, active: item.path == route.path}" 
      v-for="(item, idx) in menus" :key="item.path">
      <i class="iconfont" :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar-container{
    width: 240px;
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
      height: 54px;
      line-height: 54px;
      padding: 0 20px;
      transition: 0.6s;
      letter-spacing: 2px;
      font-size: 16px;
      &:hover, &.active{
        padding-left: 36px;
        color: #409EFF;
        background-color: #a9d9e833;
      }
      &.active{
        background-color: #a9d9e854;
      }
      .iconfont{
        margin-right: 12px;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
</style>