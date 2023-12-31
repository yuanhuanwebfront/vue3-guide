<script setup>

</script>

<template>
  <div class="router-container">
    <Transition name="slide-fade">
      <router-view></router-view>
    </Transition>
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
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.6s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>