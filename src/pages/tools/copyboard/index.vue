<script setup>
import {
  NButton,
  NIcon,
  NModal,
  NCard,
  NInput,
  NTag,
  NMessageProvider,
  useMessage,
} from "naive-ui";

import { Plus } from "@vicons/tabler";

import { ref } from "vue";
import useCopyBoard from '@/composition/copyBoard';

const modelVisible = ref(false);
const copyText = ref("");
const message = useMessage();
const { copyList, addCopyItem } = useCopyBoard();

function cancelDialog() {
  copyText.value = "";
  modelVisible.value = false;
}

function confirmDialog() {
  if (copyText.value == "") {
    message.error('请输入复制文本');
    return;
  }
  addCopyItem(copyText.value);
  cancelDialog();
  message.success('添加成功');
}
</script>

<template>
  <div class="copy-list">
    <n-tag class="copy-tag" size="large" type="success" v-for="(item, idx) in copyList" :key="idx">{{ item }}</n-tag>
  </div>


  <!-- 添加弹窗 -->
  <n-modal v-model:show="modelVisible">
    <n-card
      class="card-area"
      title="添加复制文本"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-input
        v-model:value="copyText"
        type="text"
        size="large"
        placeholder="请输入复制文本"
      />

      <template #footer>
        <div class="text-r">
          <n-button class="mr-16" @click="cancelDialog">取消</n-button>
          <n-button type="primary" @click="confirmDialog">确定</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>

  <n-button circle size="large" class="add-btn" @click="modelVisible = true">
    <template #icon>
      <n-icon :size="40">
        <plus />
      </n-icon>
    </template>
  </n-button>
</template>

<style lang="scss" scoped>
.add-btn {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 36px;
  right: 36px;
}
.card-area {
  width: 600px;
}

.copy-tag{
  display: block;
  margin-bottom: 20px;
  line-height: 34px;
}
</style>
