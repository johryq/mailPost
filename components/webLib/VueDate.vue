<template>
  <ClientOnly fallback-tag="div" fallback="Loading editor...">
    <VueDatePicker
      auto-apply
      required
      v-model="date"
      model-type="yyyy-MM-dd HH:mm:ss"
      :placeholder="props.placeholder"
      :format-locale="zhCN"
      :format="timeFormat"
      :config="VueDatePickerConfig"
      @update:model-value="emitToFather"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { zhCN } from 'date-fns/locale';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

interface propsType {
  placeholder: string;
}

// 定义父组件可传递的数据
const props = withDefaults(defineProps<propsType>(), {
  placeholder: '停止到时间长河的何处',
});

const timeFormat = (nows: Date) => {
  if (nows == null || nows == '') {
    return '';
  }
  //nows = nows*1000; //视情况而定  如果是秒的话就不需要乘以1000
  var now = new Date(nows);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  if (month.toString().length < 2) {
    month = '0' + month;
  }
  var date = now.getDate();
  if (date.toString().length < 2) {
    date = '0' + date;
  }
  var hour = now.getHours();
  if (hour.toString().length < 2) {
    hour = '0' + hour;
  }
  var minute = now.getMinutes();
  if (minute.toString().length < 2) {
    minute = '0' + minute;
  }
  var second = now.getSeconds();
  if (second.toString().length < 2) {
    second = '0' + second;
  }
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
};

const VueDatePickerConfig = {
  allowStopPropagation: true,
  closeOnScroll: false,
  modeHeight: 255,
  allowPreventDefault: false,
  closeOnClearValue: true,
  closeOnAutoApply: true,
  noSwipe: false,
  keepActionRow: false,
  onClickOutside: undefined,
};
const date = ref();

const emit = defineEmits<{
  dateTimeChange: [dataTime: string];
}>();
// const dateTimeChange = (dataTime:string) => {
//   dataTime = date
// }
const emitToFather = () => {
  emit('dateTimeChange', date);
};
</script>

<style lang="scss" scoped>
.m-datepicker {
  display: inline-block;
}
.dp__theme_dark {
  // dark theme
  --dp-background-color: #212121;
  --dp-text-color: #ffffff;
  --dp-hover-color: #484848;
  --dp-hover-text-color: #ffffff;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #005cb2;
  --dp-primary-text-color: #ffffff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #2d2d2d;
  --dp-menu-border-color: #2d2d2d;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #737373;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #959595;
  --dp-danger-color: #e53935;
  --dp-highlight-color: rgba(0, 92, 178, 0.2);
}
.dp__theme_light {
  // light theme
  --dp-background-color: #ffffff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-highlight-color: rgba(25, 118, 210, 0.1);
}
</style>
