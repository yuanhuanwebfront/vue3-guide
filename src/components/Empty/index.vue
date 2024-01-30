<script setup>
  import { defineProps } from 'vue';
  import { FaceIdError } from "@vicons/tabler";
  import { NIcon } from 'naive-ui';

  const props = defineProps({
    width: {
      type: String,
      default: '400px'
    },
    size: {
      type: [Number, String],
      default: '40'
    },
    height: {
      type: String,
      default: '400px'
    },
    emptyMsg: {
      type: String,
      default: '暂无数据'
    }
  })
</script>

<template>
  <div class="empty-area flex-box" :style="{width: props.width, height: props.height}">
    <div>
      <n-icon :size="props.size">
        <FaceIdError></FaceIdError>
      </n-icon>
      <p>{{ emptyMsg }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .empty-area{
    justify-content: center;
    flex-wrap: wrap;
    p{
      width: 100%;
      flex-shrink: 0;
      text-align: center;
      font-size: 20px;
      margin-top: 20px;
    }
  }
</style>
