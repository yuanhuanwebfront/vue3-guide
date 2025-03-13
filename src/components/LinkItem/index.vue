<script setup>
  import { defineProps } from 'vue';
  import { NPopover } from 'naive-ui';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    icon: String,
    label: String,
    link: String,
    desc: String,
    type: String
  });

  const router = useRouter();

  function openLink(){
    if(props.type == 'page'){
      router.push({
        path: props.link
      })
    }else{
      window.open(props.link)
    }
  }
</script>

<template>
  <n-popover trigger="hover" placement="top-start" :width="260">
    <template #trigger>
      <div class="link-item-box" @click="openLink">
        <div class="icon-wrapper">
          <img :src="props.icon" alt="">
        </div>
        <div class="title">{{ props.label }}</div>
      </div>
    </template>
    <span>{{ props.desc || '' }}</span>
  </n-popover>  
</template>

<style lang="scss" scoped>
  .link-item-box{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    height: 48px;
    border: none;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 12px;
    transition: all 0.3s ease;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.1);
    padding: 10px 16px;
    box-sizing: border-box;
    transform-origin: center;
    background: linear-gradient(135deg, #f7fcff, #e3f2fd);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 12px;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
      z-index: 1;
      pointer-events: none;
    }
    
    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      margin-right: 14px;
      flex-shrink: 0;
      border-radius: 10px;
      background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
      overflow: hidden;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
        z-index: 1;
      }
      
      img {
        max-width: 28px;
        max-height: 28px;
        transition: transform 0.3s ease;
        object-fit: contain;
        display: block;
        position: relative;
        z-index: 2;
      }
    }
    
    .title{
      flex: 1;
      padding: 0;
      text-align: left;
      color: #0056b3;
      font-size: 14px;
      font-weight: normal;
      transition: all 0.3s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.3;
      margin: 0;
      letter-spacing: 0.2px;
      position: relative;
      z-index: 2;
    }
    
    &:hover{
      transform: translateX(5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1);
      background-color: rgba(255, 255, 255, 0.95);
      
      .icon-wrapper {
        background: linear-gradient(135deg, #e8eaf6, #c5cae9);
        
        img {
          transform: scale(1.1);
        }
      }
      
      .title {
        color: #004080;
      }
    }
    
    &:active {
      transform: scale(0.98);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      transition: all 0.1s ease;
    }
  }
</style>