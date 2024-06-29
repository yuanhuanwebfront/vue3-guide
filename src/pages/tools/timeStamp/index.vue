<script setup>
import {
  NButton,
  NIcon,
  NModal,
  NCard,
  NInput,
  NTag,
  NTooltip,
  NMessageProvider,
  NDivider,
  useMessage,
  useDialog
} from "naive-ui";

import TimeStampToTime from "./timeStampToTime.vue";

import { Plus, ClipboardPlus, CircleX } from "@vicons/tabler";

import { ref } from "vue";

</script>

<template>
  <div class="timestamp-container">
    <!-- 时间戳转时间 -->
    <TimeStampToTime></TimeStampToTime>
    <!-- 时间转时间戳 -->
    <TimeStampToTime reverse></TimeStampToTime>


  </div>
 
</template>

<style lang="scss" scoped>
  
</style>

