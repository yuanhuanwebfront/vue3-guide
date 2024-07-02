<script setup>
  import NavBar from './NavBar/index.vue';
</script>

<template>
  <NavBar></NavBar>
  <div class="router-container">
      <router-view v-slot="{Component}">
        <component :is="Component"></component>
      </router-view>
  </div>
</template>

<style scoped lang="scss">
.router-container{
  min-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  flex-grow: 1;
  padding: 20px;
  padding-top: 60px;
}
</style>