<template>
   <div class='content'>
      <h1>Home</h1>
      <div class="svg-box">
         <svg-icon name="vue" />
         <svg-icon name="vite" />
      </div>
   </div>
</template>

<script setup>
import { onMounted } from 'vue';
import mod from '@/utils/export-test.js';
onMounted(async () => {
   console.log(mod);
});
</script>

<style scoped lang="scss">
.svg-box {
   @include flex-fun(column);
}
</style>
