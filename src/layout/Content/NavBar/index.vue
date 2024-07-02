<script setup>
  import Avatar from './Avatar/index.vue';
</script>

<template>
  <div class="navigation-bar">
    <div class="nav-inner">
      <Avatar></Avatar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-bar {
  width: calc(100% - 220px);
  height: 60px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 220px;
  z-index: 999;
  border-bottom: 1px solid #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  .nav-inner{
    position: relative;
  }
}
</style>
