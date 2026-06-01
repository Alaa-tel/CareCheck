<template>
  <div class="view symptom-selection-view">
    <div class="card">
      <ProgressBar :current="4" :total="8" />
      
      <div class="header">
        <h1>What symptoms are you experiencing?</h1>
        <p class="subtitle">Select all that apply</p>
      </div>

      <div class="symptom-chips">
        <button
          v-for="symptom in appStore.availableSymptoms"
          :key="symptom.id"
          class="chip"
          :class="{ 'chip--selected': appStore.selectedSymptoms.includes(symptom.id) }"
          @click="toggleSymptom(symptom.id)"
          :aria-pressed="appStore.selectedSymptoms.includes(symptom.id)"
        >
          <span class="chip__icon">{{ symptom.icon }}</span>
          <span class="chip__label">{{ symptom.label }}</span>
          <span v-if="appStore.selectedSymptoms.includes(symptom.id)" class="chip__check">✓</span>
        </button>
      </div>

      <div class="selection-info">
        <span v-if="appStore.selectedSymptoms.length > 0" class="selected-count">
          {{ appStore.selectedSymptoms.length }} 
          {{ appStore.selectedSymptoms.length === 1 ? 'symptom' : 'symptoms' }} selected
        </span>
        <span v-else class="no-selection">Choose at least one symptom to continue</span>
      </div>

      <div class="actions">
        <button class="btn btn-secondary" @click="goBack">Back</button>
        <button 
          class="btn btn-primary" 
          @click="continueNext"
          :disabled="appStore.selectedSymptoms.length === 0"
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

const router = useRouter()
const appStore = useAppStore()

const toggleSymptom = (symptomId) => {
  if (appStore.selectedSymptoms.includes(symptomId)) {
    appStore.removeSymptom(symptomId)
  } else {
    appStore.addSymptom(symptomId)
  }
}

const continueNext = () => {
  router.push('/question/1')
}

const goBack = () => {
  router.push('/age-group')
}
</script>

<style scoped>
.symptom-selection-view {
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
  margin-bottom: 28px;
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

/* Chip Container */
.symptom-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

/* Chip Button Styles */
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 14px;
  background-color: #f5f7fa;
  border: 2px solid #e8eef7;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  -webkit-user-select: none;
  min-height: 44px;
  white-space: nowrap;
}

.chip:hover {
  border-color: #3498db;
  background-color: #f0f8ff;
  box-shadow: 0 2px 6px rgba(52, 152, 219, 0.15);
}

.chip:active {
  transform: scale(0.98);
}

/* Selected State */
.chip--selected {
  background-color: #e8f4fd;
  border-color: #3498db;
  color: #2980b9;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
}

.chip--selected:hover {
  background-color: #d4ebf9;
  border-color: #2980b9;
}

/* Chip Icon */
.chip__icon {
  font-size: 18px;
  flex-shrink: 0;
}

/* Chip Label */
.chip__label {
  display: inline;
}

/* Chip Check Mark */
.chip__check {
  font-size: 16px;
  font-weight: bold;
  color: #27ae60;
  margin-left: 4px;
}

/* Selection Info */
.selection-info {
  font-size: 13px;
  margin-bottom: 28px;
  padding: 10px 12px;
  border-radius: 6px;
  background-color: #f5f7fa;
  text-align: center;
  min-height: 24px;
}

.selected-count {
  color: #27ae60;
  font-weight: 500;
}

.no-selection {
  color: #7f8c8d;
}

/* Action Buttons */
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

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
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

.btn-secondary:active {
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .card {
    padding: 18px;
  }

  .chip {
    padding: 9px 12px;
    font-size: 12px;
  }

  .chip__icon {
    font-size: 16px;
  }

  h1 {
    font-size: 20px;
  }

  .subtitle {
    font-size: 13px;
  }
}
</style>
