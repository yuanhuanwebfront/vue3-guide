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
    <div>
      <div class="tab-item fs-16 mt-8" v-for="(item, idx) in menus" :key="item.path" @click="pushRoute(item)">
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
    height: 42px;
    line-height: 42px;
    padding: 0 12px;
    cursor: pointer;
    .inner{
      transition: 0.6s;
      border-radius: 8px;
      &:hover, &.active{
        background-color: #e5f2f5;
      }
    }
    
  }
</style>