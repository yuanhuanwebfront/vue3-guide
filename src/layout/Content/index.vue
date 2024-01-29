<script setup>

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
  min-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  flex-grow: 1;
  padding: 20px;
}
// .slide-fade-enter-active {
//   transition: all 0.3s ease-out;
// }

// .slide-fade-leave-active {
//   transition: all 0.3s linear;
// }

// .slide-fade-enter-from,
// .slide-fade-leave-to {
//   transform: scale(0.5);
//   opacity: 0;
// }
</style>