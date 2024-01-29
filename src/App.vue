<script setup>
  import { NMessageProvider, NDialogProvider } from 'naive-ui';
</script>

<template>
  <n-message-provider>
    <n-dialog-provider>
      <RouterView></RouterView>
    </n-dialog-provider>
  </n-message-provider>
</template>

<style scoped>
</style>
