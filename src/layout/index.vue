<template>
  <el-container class="common-layout">
    <!-- <el-aside width="200px">Aside</el-aside> -->
    <el-container>
      <el-header>
        <el-button type="primary" @click="$router.push('/home')">demo</el-button>
        <el-button type="primary" @click="$router.push('/demo')">demo2</el-button>
        <el-button type="primary" @click="$router.push('/tinymce')">tinymce</el-button>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script setup></script>
<style scoped lang="scss">
.common-layout {
  width: 100%;
  min-height: 100vh;

  :deep(.el-header) {
    background-color: #f5f5f5;
  }
}
</style>
