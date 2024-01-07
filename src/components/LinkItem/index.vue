<script setup>
  import { defineProps } from 'vue';
  import { NPopover } from 'naive-ui';

  const props = defineProps({
    icon: String,
    label: String,
    link: String,
    desc: String
  })

  function openLink(){
    window.open(props.link)
  }
</script>

<template>
  <n-popover trigger="hover" placement="top-start" :width="260">
    <template #trigger>
      <div class="font-16 flex link-item-box" @click="openLink">
        <img :src="props.icon">
        <div class="title">{{ props.label }}</div>
      </div>
    </template>
    <span>{{ props.desc || '' }}</span>
  </n-popover>  
</template>

<style lang="scss" scoped>
  .link-item-box{
    cursor: pointer;
    justify-content: center;
    width: 120px;
    height: 120px;
    border: 1px solid #d1d1d1;
    margin-right: 30px;
    border-radius: 12px;
    transition: 0.4s;
    position: relative;
    overflow: hidden;
    img{
      width: 90px;
      height: auto;
      transition: 0.5s;
      border-radius: 12px;
    }
    .title{
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0px;
      height: 30px;
      line-height: 30px;
      background: rgba(0, 0, 0, 0.7);
      text-align: center;
      color: #fff;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      transition: 0.5s;
      letter-spacing: 1px;
      font-size: 13px;
    }
    &:hover{
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      img{
        transform: scale(1.09);
      }
      .title{
        bottom: -60px;
      }
    }
  }
</style>