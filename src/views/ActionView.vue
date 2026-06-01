<template>
  <div class="view action-view">
    <div class="card" :class="`card--${appStore.riskLevel}`">
      <div class="header">
        <div class="icon" :class="`icon--${appStore.riskLevel}`">
          {{ riskIcon }}
        </div>
        <h1>{{ actionTitle }}</h1>
        <p class="description">{{ actionDescription }}</p>
      </div>

      <div class="guidance">
        <div v-if="appStore.riskLevel === 'low'" class="guidance-content">
          <h2>Care for your symptoms at home</h2>
          <ul class="tips-list">
            <li>Rest and drink plenty of fluids</li>
            <li>Use over-the-counter pain relief as needed</li>
            <li>Monitor your symptoms closely</li>
            <li>Avoid strenuous activities</li>
            <li>Seek medical attention if symptoms worsen</li>
          </ul>
        </div>

        <div v-else-if="appStore.riskLevel === 'medium'" class="guidance-content">
          <h2>Schedule an appointment</h2>
          <p>
            Your symptoms suggest you should see a healthcare provider soon. 
            We recommend scheduling an appointment within the next 24-48 hours.
          </p>
          <div class="contact-options">
            <button class="contact-btn">📞 Call your doctor</button>
            <button class="contact-btn">🌐 Find urgent care</button>
            <button class="contact-btn">📱 Book online</button>
          </div>
        </div>

        <div v-else class="guidance-content">
          <h2>Seek urgent care</h2>
          <p class="urgent-message">
            Your symptoms indicate you should seek urgent medical attention. 
            Please visit an urgent care clinic or emergency room immediately.
          </p>
          <div class="emergency-options">
            <button class="emergency-btn">🚨 Call 911</button>
            <button class="emergency-btn">📍 Find nearest ER</button>
            <button class="emergency-btn">🏥 Urgent Care near me</button>
          </div>
        </div>
      </div>

      <div class="actions">
        <button 
          v-if="appStore.riskLevel === 'low'"
          class="btn btn-primary" 
          @click="newCheck"
        >
          Done
        </button>
        <button 
          v-else-if="appStore.riskLevel === 'medium'"
          class="btn btn-primary" 
          @click="newCheck"
        >
          Back to home
        </button>
        <button 
          v-else
          class="btn btn-danger" 
          @click="findCare"
        >
          Find Emergency Care
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '../store/appStore'
import { computed } from 'vue'

const router = useRouter()
const appStore = useAppStore()

const riskIcon = computed(() => {
  switch (appStore.riskLevel) {
    case 'low':
      return '✓'
    case 'medium':
      return '⚠️'
    case 'high':
      return '🚨'
    default:
      return '❓'
  }
})

const actionTitle = computed(() => {
  switch (appStore.riskLevel) {
    case 'low':
      return 'You should be fine'
    case 'medium':
      return 'Schedule an appointment'
    case 'high':
      return 'Seek urgent care'
    default:
      return 'Next steps'
  }
})

const actionDescription = computed(() => {
  switch (appStore.riskLevel) {
    case 'low':
      return "Your symptoms don't require immediate medical attention. Follow the home care tips below."
    case 'medium':
      return 'Your symptoms warrant a professional evaluation. Contact your healthcare provider.'
    case 'high':
      return 'Your symptoms require immediate professional attention. Please seek emergency care now.'
    default:
      return 'Please follow the guidance below.'
  }
})

const newCheck = () => {
  appStore.reset()
  router.push('/')
}

const findCare = () => {
  // In a real app, this would open a maps or emergency services finder
  alert('Opening emergency care finder...')
  newCheck()
}
</script>

<style scoped>
.action-view {
  padding: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #95a5a6;
}

.card--low {
  border-top-color: #27ae60;
  background: linear-gradient(135deg, #f0fff4 0%, white 100%);
}

.card--medium {
  border-top-color: #f39c12;
  background: linear-gradient(135deg, #fffbf0 0%, white 100%);
}

.card--high {
  border-top-color: #e74c3c;
  background: linear-gradient(135deg, #fff5f5 0%, white 100%);
}

.header {
  text-align: center;
  margin-bottom: 28px;
}

.icon {
  font-size: 48px;
  margin-bottom: 12px;
  display: block;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

h1 {
  font-size: 24px;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: 700;
}

.description {
  font-size: 14px;
  color: #7f8c8d;
  line-height: 1.5;
}

.guidance {
  margin-bottom: 28px;
}

.guidance-content h2 {
  font-size: 16px;
  margin-bottom: 12px;
  color: #2c3e50;
  font-weight: 600;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-list li {
  padding: 10px 0;
  padding-left: 28px;
  position: relative;
  font-size: 14px;
  color: #34495e;
  line-height: 1.5;
}

.tips-list li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: bold;
  font-size: 16px;
}

.guidance-content p {
  font-size: 14px;
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 12px;
}

.contact-options,
.emergency-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 12px;
}

.contact-btn,
.emergency-btn {
  padding: 12px 16px;
  border: 2px solid #d5dbdb;
  background-color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #2c3e50;
}

.contact-btn:hover {
  border-color: #f39c12;
  background-color: #fffbf0;
  color: #d68910;
}

.emergency-btn:hover {
  border-color: #e74c3c;
  background-color: #fff5f5;
  color: #c0392b;
}

.urgent-message {
  color: #c0392b;
  font-weight: 600;
  padding: 12px;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: 6px;
  margin-bottom: 12px;
}

.actions {
  display: flex;
  gap: 12px;
}

.btn {
  flex: 1;
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

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
}

/* Mobile responsiveness */
@media (max-width: 480px) {
  .card {
    padding: 20px;
  }

  h1 {
    font-size: 20px;
  }

  .icon {
    font-size: 40px;
  }
}
</style>
