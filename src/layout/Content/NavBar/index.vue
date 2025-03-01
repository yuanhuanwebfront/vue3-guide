<script setup>
  // import Avatar from './Avatar/index.vue';
</script>

<template>
  <div class="navigation-bar">
    <div class="nav-inner">
      <!-- <Avatar></Avatar> -->
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
  border-bottom: 1px solid #dbe0e5;
  .nav-inner{
    position: relative;
  }
}
</style>
