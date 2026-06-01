<template>
  <div class="view symptom-selection-view">
    <div class="card">
      <ProgressBar :current="1" :total="6" />
      
      <h1>What symptoms are you experiencing?</h1>
      <p class="subtitle">Select all that apply</p>

      <div class="symptom-grid">
        <SymptomButton
          v-for="symptom in availableSymptoms"
          :key="symptom.id"
          :symptom="symptom"
          :selected="checkInState.selectedSymptoms.includes(symptom.id)"
          @toggle="toggleSymptom"
        />
      </div>

      <div class="actions">
        <button class="btn btn-secondary" @click="goBack">Back</button>
        <button 
          class="btn btn-primary" 
          @click="continueNext"
          :disabled="checkInState.selectedSymptoms.length === 0"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { checkInState } from '../store/checkInState'
import ProgressBar from '../components/ProgressBar.vue'
import SymptomButton from '../components/SymptomButton.vue'

const router = useRouter()

const availableSymptoms = [
  { id: 'fever', label: 'Fever', icon: '🌡️' },
  { id: 'cough', label: 'Cough', icon: '😷' },
  { id: 'fatigue', label: 'Fatigue', icon: '😴' },
  { id: 'sore-throat', label: 'Sore Throat', icon: '😣' },
  { id: 'headache', label: 'Headache', icon: '🤕' },
  { id: 'shortness-of-breath', label: 'Shortness of Breath', icon: '🫁' },
  { id: 'chest-pain', label: 'Chest Pain', icon: '💔' },
  { id: 'dizziness', label: 'Dizziness', icon: '😵' }
]

const toggleSymptom = (symptomId) => {
  if (checkInState.selectedSymptoms.includes(symptomId)) {
    checkInState.removeSymptom(symptomId)
  } else {
    checkInState.addSymptom(symptomId)
  }
}

const continueNext = () => {
  router.push('/question/1')
}

const goBack = () => {
  router.push('/')
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

h1 {
  font-size: 22px;
  margin-bottom: 8px;
  color: #2c3e50;
  margin-top: 20px;
}

.subtitle {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 24px;
}

.symptom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 32px;
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
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-primary:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background-color: #d5dbdb;
}
</style>
