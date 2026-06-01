<template>
  <div class="view summary-view">
    <div class="card">
      <ProgressBar :current="5" :total="6" />

      <h1>Review Your Information</h1>
      <p class="subtitle">Make sure everything looks correct</p>

      <div class="section">
        <h3>Selected Symptoms</h3>
        <div class="symptoms-list">
          <div v-for="symptom in selectedSymptomDetails" :key="symptom.id" class="symptom-item">
            <span class="icon">{{ symptom.icon }}</span>
            <span>{{ symptom.label }}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>Your Answers</h3>
        <div class="answers-list">
          <div v-for="(answer, questionId) in checkInState.answers" :key="questionId" class="answer-item">
            <span class="question">{{ getQuestionLabel(questionId) }}</span>
            <span class="answer">{{ getAnswerLabel(questionId, answer) }}</span>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn btn-secondary" @click="goBack">Edit</button>
        <button class="btn btn-primary" @click="getResults">
          Get Recommendation
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { checkInState } from '../store/checkInState'
import ProgressBar from '../components/ProgressBar.vue'

const router = useRouter()

const symptomDetails = [
  { id: 'fever', label: 'Fever', icon: '🌡️' },
  { id: 'cough', label: 'Cough', icon: '😷' },
  { id: 'fatigue', label: 'Fatigue', icon: '😴' },
  { id: 'sore-throat', label: 'Sore Throat', icon: '😣' },
  { id: 'headache', label: 'Headache', icon: '🤕' },
  { id: 'shortness-of-breath', label: 'Shortness of Breath', icon: '🫁' },
  { id: 'chest-pain', label: 'Chest Pain', icon: '💔' },
  { id: 'dizziness', label: 'Dizziness', icon: '😵' }
]

const questionLabels = {
  'fever-temperature': 'Temperature',
  'fever-duration': 'Duration',
  'worsening': 'Progression'
}

const answerLabels = {
  'fever-temperature': {
    'no-fever': 'No fever',
    'under-101': 'Under 101°F',
    'between-101-104': '101-104°F',
    'above-104': 'Above 104°F'
  },
  'fever-duration': {
    'less-than-24h': 'Less than 24 hours',
    '1-3-days': '1-3 days',
    'more-than-3-days': 'More than 3 days',
    'more-than-week': 'More than a week'
  },
  'worsening': {
    'no': 'Staying the same',
    'yes': 'Getting worse',
    'improving': 'Getting better'
  }
}

const selectedSymptomDetails = checkInState.selectedSymptoms.map(id =>
  symptomDetails.find(s => s.id === id)
)

const getQuestionLabel = (questionId) => {
  return questionLabels[questionId] || questionId
}

const getAnswerLabel = (questionId, answer) => {
  return answerLabels[questionId]?.[answer] || answer
}

const goBack = () => {
  router.push('/question/3')
}

const getResults = () => {
  checkInState.calculateSeverity()
  router.push('/results')
}
</script>

<style scoped>
.summary-view {
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
  margin-bottom: 28px;
}

.section {
  margin-bottom: 24px;
}

h3 {
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #7f8c8d;
}

.symptoms-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.symptom-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background-color: #f8fbff;
  border-radius: 6px;
  font-size: 14px;
  color: #2c3e50;
}

.icon {
  font-size: 18px;
}

.answers-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.answer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f5f7fa;
  border-radius: 6px;
  font-size: 14px;
}

.question {
  color: #7f8c8d;
  font-weight: 500;
}

.answer {
  color: #2c3e50;
  font-weight: 600;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 32px;
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

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background-color: #d5dbdb;
}
</style>
