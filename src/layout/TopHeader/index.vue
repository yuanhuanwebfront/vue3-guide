<script setup>
import Avatar from './Avatar/index.vue';
import CenterMenu from './CenterMenu/index.vue';
</script>

<template>
  <div class="top-header flex">
    <div class="logo-area">
      <img class="logo" src="@/assets/logo-1.png" />
    </div>

    <!-- 中间区域 -->
    <CenterMenu></CenterMenu>
    <!-- 头像展示 -->
    <Avatar></Avatar>
  </div>
</template>

<style scoped>
.top-header {
  position: relative;
  height: 60px;
  padding: 0 24px;
  justify-content: space-between;
  z-index: 10;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;

  .logo-area {
    width: 200px;
  }

  .logo {
    width: 80px;
  }
}
</style>