<script setup>
import { ref, onMounted } from 'vue';

let timeStr = ref('');

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  timeStr.value = time;
}

onMounted(() => {
  setInterval(showTime, 1000);
})

</script>

<template>
  <div class="clock fs-20">{{ timeStr }}</div>
</template>

<style scoped>
.clock {
  color: #0d0c22;
  font-family: 'consolas';
  letter-spacing: 1px;
}
</style>
