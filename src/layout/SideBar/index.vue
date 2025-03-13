<script setup>
import { useRoute, useRouter } from 'vue-router';
import useMenu from '@/composition/menu/index';
import { ArrowDownCircle } from "@vicons/tabler";

const route = useRoute();
const router = useRouter();
const { menus } = useMenu();

function pushRoute(rou) {
  router.push({
    path: rou.path
  })
}
</script>

<template>
  <aside class="sidebar pt-24">
    <div class="menu-container">
      <div class="tab-item fs-16" v-for="(item, idx) in menus" :key="item.path" @click="pushRoute(item)">
        <div class="inner flex" :class="{active: route.path.indexOf(item.path) > -1}">
          <i class="iconfont font-18 ml-12 mr-8" :class="item.icon"></i> 
          <span> {{ item.label }}</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  @import './sidebar.scss';

  .sidebar {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
    height: 100%;
  }

  .menu-container {
    padding: 10px 0;
  }

  .logo{
    width: 100%;
    max-height: 60px;
    border-bottom: 1px solid #dbe0e5;
    box-sizing: border-box;
  }
  
  .logo-box{
    height: 60px;
  }
  
  .tab-item{
    color: #020e29;
    height: 48px;
    line-height: 48px;
    padding: 0 12px;
    cursor: pointer;
    margin-bottom: 8px;
    transition: all 0.3s ease;
    
    .inner{
      transition: 0.3s;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      
      &:hover {
        background-color: #f0f7fa;
        transform: translateX(3px);
      }
      
      &.active{
        background-color: #e5f2f5;
        font-weight: 500;
        color: #0078a8;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
      }
    }
  }
</style>