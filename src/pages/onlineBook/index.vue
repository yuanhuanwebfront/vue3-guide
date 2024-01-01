<script setup>
  import { NDivider } from 'naive-ui';
  import useMenus from '@/composition/menu/index';
  import LinkItem from '@/components/LinkItem/index.vue';

  const { cptPathMenus } = useMenus();

  console.log(cptPathMenus)

</script>

<template>
  <div class="online-video-container">
    <div v-for="tab in cptPathMenus" :key="tab">
      <n-divider title-placement="left">
        <div class="font-24">{{ tab.label }}</div>
      </n-divider>
      <div class="flex link-container">
        <LinkItem v-for="item in tab.list" :key="item.label" 
          v-bind="item"></LinkItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 .link-container{
   flex-wrap: wrap;
 }
</style>