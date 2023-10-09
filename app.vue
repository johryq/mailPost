<template>
  <div class="common-layout text-base">
    <CmpHeader></CmpHeader>
    <CmpMain></CmpMain>
    <CmpFouter></CmpFouter>
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue';
// 为main组件提供是否显示主页boolen值


</script>

<style lang="scss">

html,
body {
  height: 100%;
  min-width: 320px;
  margin: 0;
  // font-family: 'FZJLJ', sans-serif;
}
.main-container {
  max-width: 1150px;
  margin: 0 auto; /* 居中显示 */
  padding: 0 20px;
  width: 100%;
}
</style>
