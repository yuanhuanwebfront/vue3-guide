<script setup>
  import Avatar from './Avatar/index.vue';
  import CenterMenu from './CenterMenu/index.vue';
</script>

<template>
  <div class="top-header flex border-b-main">
    <img class="logo" src="@/assets/logo-1.png" />
    <CenterMenu></CenterMenu>
    <Avatar></Avatar>
  </div>
</template>

<style scoped>
  .top-header{
    height: 60px;
    padding: 0 24px;
    justify-content: space-between;
    .logo{
      width: 80px;
    }
  }
</style>