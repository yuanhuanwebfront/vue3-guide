<script setup>
  import { NDivider, NInput, NButton } from 'naive-ui';
  import dayjs from 'dayjs';
  import { ref, defineProps } from "vue";

  const timestamp = ref('')
  const time = ref('')
  const props = defineProps({
    reverse: {
      type: Boolean,
      default: false
    }
  })

  function transform(){
    if(!timestamp.value) return '';
    if(!dayjs(timestamp.value).isValid()) return '';

    if(!props.reverse) time.value = dayjs(Number(timestamp.value)).format('YYYY-MM-DD HH:mm:ss')
    if(props.reverse) time.value = dayjs(timestamp.value).valueOf();
  }

</script>

<template>
  <n-divider title-placement="left">
    <b>{{ props.reverse ? '时间转时间戳' : '时间戳转时间' }}</b>
  </n-divider>

  <div class="flex">
    <n-input v-model:value="timestamp" type="text" :placeholder="'请输入' + (props.reverse ? '时间' : '时间戳')" />
    <n-button class="ml-16 mr-16" type="info" @click="transform">转 换</n-button>
    <n-input v-model:value="time" placeholder="" type="text" readonly />
  </div>

</template>