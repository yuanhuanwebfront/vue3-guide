<script setup>
import * as echarts from 'echarts';
import { NSwitch } from 'naive-ui';
import { onMounted, ref } from 'vue';
import { configs, getDataByKey } from './config';

const labelConfigs = {
  show: true,
  width: 12,
  formatter: (params) => params.value,
}

let options = {
  title: {
    text: '成交记录'
  },
  dataZoom: [
    {
      id: 'dataZoomX',
      type: 'slider',
      xAxisIndex: [0],
      filterMode: 'filter'
    },
  ],
  legend: {
    data: ['二期挂牌', '二期已售', '五期挂牌', '五期已售', '六期挂牌', '六期已售'],
    selectedMode: true
  },
  grid: {
    left: '2%',
    right: '3%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: Object.keys(configs),
  },
  yAxis: {
    type: 'value'
  },

  series: [
    {
      name: '二期挂牌',
      type: 'bar',
      stack: 'two',
      emphasis: {
        focus: 'series'
      },
      data: getDataByKey('two_hold'),
      label: labelConfigs,
      barMaxWidth: 40
    },
    {
      name: '二期已售',
      type: 'bar',
      stack: 'two',
      emphasis: {
        focus: 'series'
      },
      data: getDataByKey('two_sell'),
      label: labelConfigs,
      barMaxWidth: 40
    },
    {
      name: '五期挂牌',
      type: 'bar',
      stack: 'five',
      emphasis: {
        focus: 'series'
      },
      data: getDataByKey('five_hold'),
      label: labelConfigs,
      barMaxWidth: 40
    },
    {
      name: '五期已售',
      type: 'bar',
      stack: 'five',
      emphasis: {
        focus: 'series'
      },
      data: getDataByKey('five_sell'),
      label: labelConfigs,
      barMaxWidth: 40
    },
    {
      name: '六期挂牌',
      type: 'bar',
      stack: 'six',
      emphasis: {
        focus: 'series'
      },
      data: getDataByKey('six_hold'),
      label: labelConfigs,
      barMaxWidth: 40
    },
    {
      name: '六期已售',
      type: 'bar',
      stack: 'six',
      emphasis: {
        focus: 'series'
      },
      data: getDataByKey('six_sell'),
      label: labelConfigs,
      barMaxWidth: 40
    },
  ]

}
let chart = null;
let active = ref(true);

onMounted(() => {
  let dom = document.getElementById('chart-area-box');
  chart = echarts.init(dom);

  chart.setOption(options)
})

function handleChange(val) {

  options.series.forEach(ser => {
    ser.type = val ? 'bar' : 'line';
    ser.stack = val ? 'total' : '';
  })

  if(chart) chart.setOption(options)
}

</script>

<template>
  <div class="chart-area-container">
    <NSwitch v-model:value="active" @update:value="handleChange">
      <template #checked>柱状图</template>
      <template #unchecked>折线图</template>
    </NSwitch>

    <div id="chart-area-box"></div>
  </div>
</template>

<style scoped lang="scss">
.chart-area-container {
  padding-top: 20px;

  #chart-area-box {
    margin-top: 20px;
    width: calc(100vw - 260px);
    height: calc(100vh - 120px);
    // border: 1px solid #e6e6e6;
  }
}
</style>