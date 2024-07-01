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
  useMessage,
  useDialog
} from "naive-ui";
import EmptyArea from '@/components/Empty/index.vue';

import { Plus, ClipboardPlus, CircleX } from "@vicons/tabler";

import { ref } from "vue";
import useCopyBoard from '@/composition/copyBoard';
import { dialogWarning } from '@/util/dialog';
import { copyTextByClipboard } from '@/util/util';

const modelVisible = ref(false);
const copyText = ref("");
const message = useMessage();
const dialog = useDialog();
const { copyList, addCopyItem, removeCopyItem } = useCopyBoard();

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

function deleteTag(idx){
  dialogWarning(dialog, '请确认！', '确定删除这条记录吗？').then(res => {
    removeCopyItem(idx);
  }).catch(err => {})
}

function copyTag(text){
  copyTextByClipboard(text).then(res => {
    message.success('复制成功');
  })
}

</script>

<template>
  <div class="copy-list">
    <template v-if="copyList.length > 0">
      <!-- <TransitionGroup name="list"> -->
        <div class="flex-box align-center mb-20" v-for="(item, idx) in copyList" :key="idx">
          <n-tooltip>
            <template #trigger placement="left-start" trigger="hover">
              <div class="copy-tag mr-20" size="large" type="success" @click="copyTag(item)">{{ item }}</div>
            </template>
            <span>点击复制</span>
          </n-tooltip>
          
          <n-button type="error" @click="deleteTag(idx)">
            <n-icon size="20">
              <CircleX></CircleX>
            </n-icon>
            <span class="hide-text">&nbsp;删除</span>
          </n-button>
        </div>
      <!-- </TransitionGroup> -->
    </template>
    <template v-else>
      <EmptyArea width="100%" height="100vh" size="80"></EmptyArea>
    </template>
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
        type="textarea"
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
  background: #fff;
}
.card-area {
  width: 600px;
}

.copy-tag{
  flex-grow: 1;
  line-height: 34px;
  overflow: hidden;
  cursor: pointer;
  white-space: pre-line;
  border: 1px solid #18a058;
  background-color: #daf0e4;
  padding: 6px;
  border-radius: 8px;
  line-height: 28px;
  color: #18a058;
}
.hover-btn{
  transition: 0.8s;
}
</style>

<style lang="scss">
.copy-tag{
  .n-tag__content{
    display: contents;
    word-break: break-all;
  }
}
</style>
