<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    icon: String,
    label: String
  })
</script>

<template>
  <div class="font-16 flex link-item-box">
    <img :src="props.icon">
    <!-- <div class="title">{{ props.label }}</div> -->
  </div>
</template>

<style lang="scss" scoped>
  .link-item-box{
    cursor: pointer;
    justify-content: center;
    width: 150px;
    height: 150px;
    border: 1px solid #f1f1f1;
    margin-right: 60px;
    img{
      width: 120px;
      height: 120px;
    }
  }
</style>