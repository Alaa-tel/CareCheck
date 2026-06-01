<template>
  <div class="view results-view">
    <div class="card">
      <ProgressBar :current="6" :total="6" />

      <h1>Your Recommendation</h1>

      <div class="result-container" :class="recommendationClass">
        <div class="result-icon">{{ resultIcon }}</div>
        <div class="result-title">{{ resultTitle }}</div>
        <div class="result-subtitle">{{ resultSubtitle }}</div>
        <div class="result-description">{{ resultDescription }}</div>
      </div>

      <div class="next-steps">
        <h3>Next Steps</h3>
        <ul>
          <li v-for="(step, index) in nextSteps" :key="index">
            {{ step }}
          </li>
        </ul>
      </div>

      <div class="severity-info">
        <small>Severity Score: {{ checkInState.severityScore }}/10</small>
      </div>

      <div class="actions">
        <button class="btn btn-secondary" @click="startOver">
          New Check
        </button>
        <button class="btn btn-outline">
          Share Results
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

const recommendations = {
  selfcare: {
    icon: '✅',
    title: 'Self-Care',
    subtitle: 'Your symptoms suggest rest and home care',
    description: 'Monitor your symptoms and take care of yourself. Most common illnesses improve with rest, fluids, and time.',
    class: 'result-selfcare',
    steps: [
      'Stay hydrated - drink plenty of water',
      'Get adequate rest',
      'Monitor your symptoms',
      'Seek care if symptoms worsen'
    ]
  },
  schedule: {
    icon: '📅',
    title: 'Schedule an Appointment',
    subtitle: 'You should see your healthcare provider',
    description: 'Your symptoms warrant professional evaluation. Schedule an appointment with your doctor when convenient.',
    class: 'result-schedule',
    steps: [
      'Contact your healthcare provider',
      'Schedule an appointment',
      'Prepare a list of your symptoms',
      'Mention any other health conditions'
    ]
  },
  urgent: {
    icon: '🚨',
    title: 'Seek Urgent Care',
    subtitle: 'You should get care today',
    description: 'Your symptoms require prompt medical attention. Visit an urgent care clinic or emergency room.',
    class: 'result-urgent',
    steps: [
      'Go to urgent care or ER now',
      'Bring your ID and insurance card',
      'Be prepared to describe your symptoms',
      'Do not drive if dizzy or in severe pain'
    ]
  }
}

const rec = recommendations[checkInState.recommendation]
const resultIcon = rec.icon
const resultTitle = rec.title
const resultSubtitle = rec.subtitle
const resultDescription = rec.description
const recommendationClass = rec.class
const nextSteps = rec.steps

const startOver = () => {
  checkInState.reset()
  router.push('/')
}
</script>

<style scoped>
.results-view {
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
  margin-bottom: 24px;
  color: #2c3e50;
  margin-top: 20px;
  text-align: center;
}

.result-container {
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 28px;
}

.result-selfcare {
  background-color: #d5f4e6;
  border-left: 4px solid #27ae60;
}

.result-schedule {
  background-color: #fff3cd;
  border-left: 4px solid #f39c12;
}

.result-urgent {
  background-color: #f8d7da;
  border-left: 4px solid #e74c3c;
}

.result-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.result-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #2c3e50;
}

.result-subtitle {
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
}

.result-description {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.next-steps {
  background-color: #f5f7fa;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.next-steps h3 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.next-steps ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.next-steps li {
  font-size: 13px;
  color: #555;
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
  line-height: 1.5;
}

.next-steps li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: bold;
}

.severity-info {
  text-align: center;
  margin-bottom: 24px;
}

.severity-info small {
  color: #7f8c8d;
  font-size: 12px;
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

.btn-secondary {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background-color: #d5dbdb;
}

.btn-outline {
  background-color: white;
  color: #3498db;
  border: 2px solid #3498db;
}

.btn-outline:hover {
  background-color: #f0f8ff;
}
</style>
