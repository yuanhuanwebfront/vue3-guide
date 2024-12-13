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
    <div class="setting-list flex">
      <div class="setting-item">设置</div>
    </div>
  </n-popover>
</template>

<style lang="scss" scoped>
  .avatar-img{
    width: 40px;
    height: 40px;
  }
  .setting-list{
    width: 64px;
    .setting-item{
      height: 32px;
      line-height: 32px;
      cursor: pointer;
      transition: 0.4s;
      width: 100%;
      text-align: center;
      border-radius: 4px;
      &:hover{
        color: #4693eb;
      }
    }
  }
</style>