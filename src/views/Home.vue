<template>
  <div class="view home-view">
    <div class="card">
      <div class="icon">🏥</div>
      <h1>CareCheck</h1>
      <p class="subtitle">Quick symptom guidance</p>
      
      <p class="description">
        Experiencing symptoms? Get clear guidance on what to do next.
      </p>

      <button class="btn btn-primary" @click="startCheck">
        Start Check
      </button>

      <p class="disclaimer">
        <small>⚠️ This is not a medical diagnosis. Always consult healthcare professionals for medical advice.</small>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { checkInState } from '../store/checkInState'

const router = useRouter()

const startCheck = () => {
  checkInState.reset()
  router.push('/symptoms')
}
</script>

<style scoped>
.home-view {
  padding: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 40px 24px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
}

h1 {
  font-size: 28px;
  margin-bottom: 8px;
  color: #2c3e50;
}

.subtitle {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 24px;
  font-weight: 500;
}

.description {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 32px;
}

.btn {
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
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

.disclaimer {
  font-size: 12px;
  color: #7f8c8d;
  margin-top: 24px;
  line-height: 1.5;
}
</style>
