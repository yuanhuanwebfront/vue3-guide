<script setup>
import {
  NButton,
  NInput,
} from "naive-ui";

function handleCamelCaseToUnderline(){  
  underline.value = camelCase.value.replace(/([A-Z])/g, '_$1').toLowerCase();
}

function handleUnderlineToCamelCase(){
  camelCaseTwo.value = underlineTwo.value.replace(/_([a-z])/g, function(all, letter){
    return letter.toUpperCase();
  });
}

var camelCase = ref('');
var underline = ref('');

var underlineTwo = ref('');
var camelCaseTwo = ref('');

import { ref } from "vue";

</script>

<template>
  <div class="var-transform-container">
    <!-- 驼峰转下划线 -->
    <div class="flex mb-20">
      <NInput v-model:value="camelCase" placeholder="请输入驼峰变量名" />
      <NButton class="mlr-20" type="primary" @click="handleCamelCaseToUnderline">转换</NButton>
      <NInput v-model:value="underline" placeholder="请输入下划线变量名" />
    </div>
    <!-- 下划线转驼峰 -->
    <div class="flex">
      <NInput v-model:value="underlineTwo" placeholder="请输入下划线变量名" />
      <NButton class="mlr-20" type="primary" @click="handleUnderlineToCamelCase">转换</NButton>
      <NInput v-model:value="camelCaseTwo" placeholder="请输入驼峰变量名" />
    </div>

  </div>
 
</template>

<style lang="scss" scoped>
  .var-transform-container{
    padding-top: 20px;
    .mlr-20{
      margin-left: 20px;
      margin-right: 20px;
    }
  }
</style>

