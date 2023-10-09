<template>
  <div class="main main-container">
    <WriteMail v-if="showWrite"></WriteMail>
    <Calendar  v-else></Calendar>
  </div>
</template>

<script setup lang="ts">
const { $on } = useNuxtApp();
const showWrite = ref(false);

$on('isShowWritePage',(v:boolean) => {
  showWrite.value = v
})
</script>

<style scoped></style>
