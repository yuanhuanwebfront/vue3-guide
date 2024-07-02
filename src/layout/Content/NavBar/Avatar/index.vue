<script setup>
  import configs from './config';

  import {
    NPopover,
    NButton
  } from "naive-ui";

  import { ref } from 'vue';

  let avatarInfo = ref(configs[0]);
  let avatarList = ref(configs);

  function chooseAvatar(info){
    avatarInfo.value = info;
  }

</script>

<template>
  <n-popover trigger="click">
    <template #trigger>
      <img class="avatar-img" :src="avatarInfo.icon" />
    </template>
    <div class="img-list flex">
      <img v-for="img in avatarList" :src="img.icon" @click="chooseAvatar(img)">
    </div>
  </n-popover>
</template>

<style lang="scss" scoped>
  .avatar-img{
    position: absolute;
    top: 10px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
  .img-list{
    width: 180px;
    display: grid;
    grid-template-rows: repeat(2, 60px);
    grid-template-columns: 60px 60px 60px;
    background: #fff;
    border-radius: 12px;
    img{
      width: 40px;
      height: 40px;
      margin-left: 10px;
      flex-shrink: 0;
    }
  }
</style>