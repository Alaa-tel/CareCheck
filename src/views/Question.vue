<template>
  <div class="view question-view">
    <div class="card" v-if="currentQuestion">
      <ProgressBar :current="currentStep" :total="8" />

      <h1>{{ currentQuestion.text }}</h1>
      <p class="subtitle">Select your answer</p>

      <div class="options">
        <button
          v-for="option in currentQuestion.options"
          :key="option.id"
          class="btn btn-option"
          :class="{ active: appStore.answers[getAnswerKey(questionId)] === option.id }"
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
          :disabled="!appStore.answers[getAnswerKey(questionId)]"
        >
          {{ isLastQuestion ? 'Review' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '../store/appStore'
import { computed } from 'vue'
import ProgressBar from '../components/ProgressBar.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const getAnswerKey = (qId) => {
  const keyMap = {
    1: 'temperature',
    2: 'duration',
    3: 'progression'
  }
  return keyMap[qId]
}

const questionId = computed(() => parseInt(route.params.questionId))
const currentStep = computed(() => questionId.value + 4)
const currentQuestion = computed(() => appStore.questions[questionId.value - 1])
const isLastQuestion = computed(() => questionId.value === appStore.questions.length)

const selectAnswer = (optionId) => {
  appStore.setAnswer(questionId.value, optionId)
}

const continueNext = () => {
  if (isLastQuestion.value) {
    router.push('/summary')
  } else {
    router.push(`/question/${questionId.value + 1}`)
  }
}

const goBack = () => {
  if (questionId.value === 1) {
    router.push('/symptoms')
  } else {
    router.push(`/question/${questionId.value - 1}`)
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
