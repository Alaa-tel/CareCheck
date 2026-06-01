<template>
  <div class="view question-view">
    <div class="card">
      <ProgressBar :current="currentStep" :total="6" />

      <h1>{{ currentQuestion.question }}</h1>
      <p class="subtitle">{{ currentQuestion.subtitle }}</p>

      <div class="options">
        <button
          v-for="option in currentQuestion.options"
          :key="option.id"
          class="btn btn-option"
          :class="{ active: checkInState.answers[currentQuestion.id] === option.id }"
          @click="selectAnswer(option.id)"
        >
          {{ option.label }}
        </button>
      </div>

      <div class="actions">
        <button class="btn btn-secondary" @click="goBack">Back</button>
        <button 
          class="btn btn-primary" 
          @click="continueNext"
          :disabled="!checkInState.answers[currentQuestion.id]"
        >
          {{ isLastQuestion ? 'Review' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { checkInState } from '../store/checkInState'
import ProgressBar from '../components/ProgressBar.vue'

const router = useRouter()
const route = useRoute()

const questions = [
  {
    id: 'fever-temperature',
    question: 'Do you have a fever?',
    subtitle: 'How high is your temperature?',
    options: [
      { id: 'no-fever', label: 'No, I don\'t have a fever' },
      { id: 'under-101', label: 'Under 101°F (38.3°C)' },
      { id: 'between-101-104', label: '101-104°F (38.3-40°C)' },
      { id: 'above-104', label: 'Above 104°F (40°C)' }
    ]
  },
  {
    id: 'fever-duration',
    question: 'How long have you had symptoms?',
    subtitle: 'This helps us understand severity',
    options: [
      { id: 'less-than-24h', label: 'Less than 24 hours' },
      { id: '1-3-days', label: '1-3 days' },
      { id: 'more-than-3-days', label: 'More than 3 days' },
      { id: 'more-than-week', label: 'More than a week' }
    ]
  },
  {
    id: 'worsening',
    question: 'Are your symptoms getting worse?',
    subtitle: 'Tell us about the trend',
    options: [
      { id: 'no', label: 'Staying the same' },
      { id: 'yes', label: 'Getting worse' },
      { id: 'improving', label: 'Getting better' }
    ]
  }
]

const questionId = parseInt(route.params.questionId)
const currentStep = questionId + 2 // Step 1 is home, Step 2 is symptoms
const currentQuestion = questions[questionId - 1]
const isLastQuestion = questionId === questions.length

const selectAnswer = (optionId) => {
  checkInState.setAnswer(currentQuestion.id, optionId)
}

const continueNext = () => {
  if (isLastQuestion) {
    router.push('/summary')
  } else {
    router.push(`/question/${questionId + 1}`)
  }
}

const goBack = () => {
  if (questionId === 1) {
    router.push('/symptoms')
  } else {
    router.push(`/question/${questionId - 1}`)
  }
}
</script>

<style scoped>
.question-view {
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

.options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-bottom: 32px;
}

.btn-option {
  padding: 16px 16px;
  border: 2px solid #ecf0f1;
  background-color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.btn-option:hover {
  border-color: #3498db;
  background-color: #f8fbff;
}

.btn-option.active {
  border-color: #3498db;
  background-color: #e8f4fd;
  color: #2c3e50;
  font-weight: 600;
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
