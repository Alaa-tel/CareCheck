<template>
  <button 
    class="symptom-button"
    :class="{ active: selected }"
    @click="$emit('toggle', symptom.id)"
  >
    <div class="symptom-icon">{{ symptom.icon }}</div>
    <div class="symptom-label">{{ symptom.label }}</div>
  </button>
</template>

<script setup>
defineProps({
  symptom: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])
</script>

<style scoped>
.symptom-button {
  padding: 14px 12px;
  background-color: white;
  border: 2px solid #ecf0f1;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #2c3e50;
}

.symptom-button:hover {
  border-color: #3498db;
  background-color: #f8fbff;
}

.symptom-button.active {
  background-color: #e8f4fd;
  border-color: #3498db;
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
}

.symptom-icon {
  font-size: 24px;
}

.symptom-label {
  text-align: center;
  line-height: 1.2;
}
</style>
