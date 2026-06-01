<template>
  <div class="view age-group-view">
    <div class="card">
      <ProgressBar :current="3" :total="8" />
      
      <div class="header">
        <h1>{{ screenTitle }}</h1>
        <p class="subtitle">This helps us give you better guidance</p>
      </div>

      <div class="button-group">
        <button
          v-for="group in ageGroups"
          :key="group.id"
          class="age-button"
          :class="{ 'age-button--selected': appStore.ageGroup === group.id }"
          @click="selectAgeGroup(group.id)"
        >
          <span class="age-icon">{{ group.icon }}</span>
          <span class="age-label">{{ group.label }}</span>
          <span v-if="appStore.ageGroup === group.id" class="checkmark">✓</span>
        </button>
      </div>

      <div class="actions">
        <button class="btn btn-secondary" @click="goBack">Back</button>
        <button 
          class="btn btn-primary" 
          @click="continueNext"
          :disabled="!appStore.ageGroup"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '../store/appStore'
import ProgressBar from '../components/ProgressBar.vue'
import { computed } from 'vue'

const router = useRouter()
const appStore = useAppStore()

const ageGroups = [
  { id: 'child', label: 'Child', icon: '👶' },
  { id: 'adult', label: 'Adult', icon: '👤' },
  { id: 'older_adult', label: 'Older adult', icon: '👴' }
]

const screenTitle = computed(() => {
  if (appStore.patientType === 'myself') {
    return 'Select your age group'
  } else if (appStore.patientType === 'other') {
    return 'Who are you checking for?'
  }
  return 'Select age group'
})

const selectAgeGroup = (id) => {
  appStore.setAgeGroup(id)
}

const continueNext = () => {
  if (appStore.ageGroup) {
    router.push('/symptoms')
  }
}

const goBack = () => {
  router.push('/patient-type')
}
</script>

<style scoped>
.age-group-view {
  padding: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header {
  margin-top: 20px;
  margin-bottom: 32px;
}

h1 {
  font-size: 22px;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: 700;
}

.subtitle {
  font-size: 14px;
  color: #7f8c8d;
  font-weight: 500;
}

.button-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 32px;
}

.age-button {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: white;
  border: 2px solid #ecf0f1;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 60px;
  text-align: left;
  position: relative;
}

.age-button:hover {
  border-color: #3498db;
  background-color: #f8fbff;
}

.age-button--selected {
  background-color: #e8f4fd;
  border-color: #3498db;
  color: #2980b9;
}

.age-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.age-label {
  flex: 1;
}

.checkmark {
  font-size: 20px;
  color: #27ae60;
  font-weight: bold;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.btn-primary:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-secondary {
  background-color: #ecf0f1;
  color: #2c3e50;
  border: 1px solid #d5dbdb;
}

.btn-secondary:hover {
  background-color: #d5dbdb;
  transform: translateY(-2px);
}

/* Mobile responsiveness */
@media (max-width: 480px) {
  .card {
    padding: 20px;
  }

  h1 {
    font-size: 20px;
  }

  .age-icon {
    font-size: 28px;
  }
}
</style>
