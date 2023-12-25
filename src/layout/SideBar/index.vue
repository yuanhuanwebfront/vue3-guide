<script setup>
  import useMenu from '@/composition/menu/index';

  const { menus } = useMenu();

</script>

<template>
  <div class="sidebar-container">
    <img src="../../assets/logo.jpg" class="logo">

    <div class="tab-item" v-for="item in menus" :key="item.value">
      <i class="iconfont" :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar-container{
    width: 200px;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid #f1f1f1;
    background: #f2f2f2;
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
      &:first-child{
        border-top: 1px solid #dbdbdb;
      }
      &:hover{
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