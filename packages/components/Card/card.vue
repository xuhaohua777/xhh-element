<!-- <script setup lang="ts">
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import type { ReCardFoldProps } from "./types";
defineOptions({
      name: 'ErCard'
    })
type Props = ReCardFoldProps;

const props = withDefaults(defineProps<Props>(), {
  defaultFold: false,
  hideFold: false
});

const isFold = ref(props.defaultFold);

const toggleFold = () => {
  if (!props.hideFold) {
    isFold.value = !isFold.value;
  }
};
</script>

<template>
  <el-card class="[w-full!]" body-style="padding: 0">
    <template #header>
      <div class="card-header flex items-center justify-between">
        <div class="card-header-title flex items-center">
          <span>{{ title }}</span>
        </div>
        <el-icon
          v-if="!hideFold"
          :class="['hover:cursor-pointer']"
          @click="toggleFold"
        >
          <ArrowDown />
        </el-icon>
      </div>
    </template>
    <div class="card-content-body" :class="[isFold ? 'folded' : 'expanded']">
      <slot />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.card-header {
  .card-header-title {
    font-weight: 600;
    color: #333;
  }
}

.card-content-body {
  overflow: hidden;
  transition: all 0.3s ease;

  &.expanded {
    // max-height: 1000px;
    padding: 1rem;
    opacity: 1;
    transform: translateY(0);
  }

  &.folded {
    max-height: 0;
    padding: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
}

// 内容动画延迟，让内容先淡出再折叠
.card-content-body.folded > * {
  opacity: 0;
  transform: translateY(-5px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.card-content-body.expanded > * {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.3s ease 0.1s,
    transform 0.3s ease 0.1s;
}
</style> -->
