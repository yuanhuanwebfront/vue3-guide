<script setup>
  import NavBar from './NavBar/index.vue';
</script>

<template>
  <div class="router-container">
      <router-view v-slot="{Component}">
        <component :is="Component"></component>
      </router-view>
  </div>
</template>

<style scoped lang="scss">
.router-container{
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  flex-grow: 1;
  padding: 20px;
}
</style>