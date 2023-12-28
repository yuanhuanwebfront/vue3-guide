<script setup>

</script>

<template>
  <div class="router-container">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.router-container{
  min-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  flex-grow: 1;
  padding: 20px;
}
</style>