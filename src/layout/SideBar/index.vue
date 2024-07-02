<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import useMenu from '@/composition/menu/index';
  import { ArrowDownCircle } from "@vicons/tabler";

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

    <div class="tab-item" @click="pushRoute(item)" :class="{first: idx == 0}" 
      v-for="(item, idx) in menus" :key="item.path">
      <div class="tab-inner flex" :class="{active: route.path.indexOf(item.path) > -1}">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .sidebar-container{
    position: relative;
    width: 220px;
    min-height: 100vh;
    align-items: stretch;
    overflow: visible;
    overflow-y: auto;
    border-right: 1px solid #f1f1f1;
    background: #fff;
    flex-shrink: 0;
    .logo{
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #f1f1f1;
      box-sizing: border-box;
    }
    .tab-item{
      cursor: pointer;
      box-sizing: border-box;
      height: 46px;
      line-height: 46px;
      padding: 0 14px;
      letter-spacing: 1px;
      font-size: 16px;
      margin-bottom: 8px;
      .tab-inner{
        padding: 0 12px;
        border-radius: 12px;
        color: #121625;
        transition: 0.6s;
        &:hover, &.active{
          background-color: #f5f6f6;
        }
      }
      &.active{
        // background-color: #a9d9e854;
      }
      .iconfont{
        margin-right: 12px;
        cursor: pointer;
        font-size: 20px;
      }
    }
    // .collapse-icon{
    //   position: absolute;
    //   right: 0;
    //   top: 64px;
    //   width: 30px;
    //   color: #ccc;
    //   transform: rotate(90deg);
    // }
  }
</style>