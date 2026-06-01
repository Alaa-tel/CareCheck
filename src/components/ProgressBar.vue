<template>
  <div class="progress-bar">
    <div class="progress-track">
      <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
    </div>
    <div class="progress-text">
      Step {{ current }} of {{ total }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

const progressPercentage = computed(() => {
  return (props.current / props.total) * 100
})
</script>

<style scoped>
.progress-bar {
  margin-bottom: 24px;
}

.progress-track {
  height: 6px;
  background-color: #ecf0f1;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  color: #7f8c8d;
  font-weight: 500;
}
</style>
