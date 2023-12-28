<script setup>
  import { NDivider } from 'naive-ui';
  import useMenus from '@/composition/menu/index';

  const { cptPathMenus } = useMenus();

  console.log(cptPathMenus)

  const tabList = [{}]
</script>

<template>
  <div class="online-video-container">
    <div v-for="tab in cptPathMenus.list" :key="tab">
      <n-divider title-placement="left">{{ tab.label }}</n-divider>
      <div class="flex">
        <div v-for="item in tab.list" :key="item.label">
          <div class="flex info-item">
            <img :src="item.icon">
          </div>
          <div class="name-area">
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .info-item{
    cursor: pointer;
    transition: 0.5s;
    width: 150px;
    height: 150px;
    justify-content: center;
    border: 1px solid #f1f1f1;
    border-radius: 12px;
    &:hover{
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      +.name-area{
        color: #409EFF;
      }
    }
    img{
      width: 114px;
      height: 114px;
    }
  }
  .name-area{
    transition: 0.5s;
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-top: 8px;
  }
</style>