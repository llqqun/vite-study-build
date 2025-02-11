<template>
  <div class="content">
    <div id="word-editor"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import tinymce from 'tinymce';

onMounted(() => {
  console.log(tinymce);
  tinymce.init({
    selector: '#word-editor',
    // 注意：正常使用必须设置这个！！！基础路径设置，配置编辑器需要使用的静态资源路径
    base_url: '/tinymce',
    // 语言包设置
    language: 'zh_CN',
    language_url: '/tinymce/langs/zh_CN.js',
    // 自定义编辑器内容区样式
    content_css: '/tinymce/custom.css',
    // 添加扩展图标
    icons: 'ft_icon',
  }).then((editor) => {
    console.log(editor[0]);
    editor[0].setContent('<p>这是一段测试内容</p>');
  }).catch((err) => {
    console.error(err);
  });
});

onBeforeUnmount(() => {
  tinymce.remove('#word-editor');
});
</script>

<style scoped lang="scss"></style>
