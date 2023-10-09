<template>
  <div>
    <table cellspacing="0" cellpadding="0" class="w-5/6 mx-[auto]">
      <tr class="h-8">
        <td class="text-center" v-for="(wk, index) in week" :key="index">{{ wk }}</td>
      </tr>
      <tr class="h-14" v-for="(week, key) in weeks" :key="key">
        <td class="p-2" v-for="(day, key) in week" :key="key" :class="{ today: day.isSelect ? true : false, notThisMouth: day.type !== 'current' ? true : false }">
          {{ day.date }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { getDayjs, returnDataArray } from './use-data';
import type { day } from './use-data';
const week = ['Sun/星期天', 'Mon/星期一', 'Tue/星期二', 'Wed/星期三', 'Thu/星期四', 'Fri/星期五', 'Sat/星期六'];
const dayData = returnDataArray();
const weeks = computed(() => {
  const weeks = [];
  let week: Array<day> = [];
  for (let i = 0; i < dayData.length / 7; i++) {
    week = [];
    for (let index = 0; index < 7; index++) {
      week.push(dayData[i * 7 + index]);
    }
    weeks.push(week);
  }
  return weeks;
});
</script>

<style lang="scss" scoped>
table > tr > td {
  border: 1px solid #ccc;
}

table > tr > td:hover {
  background-color: rgb(201, 220, 255);
}

.today {
  background-color: cornflowerblue;
  color: #fff;
}
.notThisMouth {
  color: #a8abb2;
}
</style>
