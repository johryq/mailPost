<template>
  <div class="header main-container flex justify-between items-center">
    <div class="">时间邮局</div>
    <div class="font-light text-xs" @click="handleClick">开始写信</div>
  </div>
</template>

<script setup lang="ts">
const { $emits,$on } = useNuxtApp()
const handleClick = (event: MouseEvent) => {
  $on('isShowWritePage',(v:boolean) =>{
    v === false ?   $emits('isShowWritePage',true) : ''
  })
};
</script>

<style scoped lang="scss">
.main-container {
  height: 6rem;
}
</style>
