<template>
  <div :class="['svg-icon', name]" v-html="content">
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { icons } from '@/assets/script/icons'; // 假设你将所有SVG图标存储在这个文件中

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '100',
  },
  height: {
    type: String,
    default: '100',
  },
  viewBox: {
    type: String,
    default: '0 0 100 100',
  },
});

const content = ref('');

const loadSvg = (name) => {
  content.value = icons[name] || '';
};

watch(
  () => props.name,
  (newName) => {
    loadSvg(newName);
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.svg-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: -0.15em;
    overflow: hidden;

    :deep(svg) {
        width: 100%;
        height: 100%;
    }
}
</style>
