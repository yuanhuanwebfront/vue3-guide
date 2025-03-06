<script setup>
import Clock from '@/components/Clock/index.vue';
</script>

<template>
  <div class="flex center-menu">
    <Clock></Clock>
  </div>
</template>

<style scoped>
.center-menu{
  flex-grow: 1;
  height: 100%;
  justify-content: end;
  padding-right: 20px;
}
</style>