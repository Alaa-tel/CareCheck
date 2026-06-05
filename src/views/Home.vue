<template>
  <div class="view home-view">
    <!-- Animated background with floating shapes -->
    <div class="background">
      <div class="gradient-bg"></div>
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Content container -->
    <div class="content-container">
      <!-- Hero section -->
      <div class="hero-section">
        <div class="logo-wrapper">
          <CareCheckLogo size="large" />
        </div>

        <div class="hero-content">
          <h1 class="hero-title">CareCheck</h1>
          <p class="hero-subtitle">Quick symptom guidance</p>
        </div>
      </div>

      <!-- Main card -->
      <div class="main-card">
        <div class="card-header">
          <h2 class="card-title">Get Clear Guidance</h2>
        </div>

        <p class="card-description">
          Experiencing symptoms? We'll help you understand what to do next with clear, step-by-step guidance.
        </p>

        <!-- Features list -->
        <div class="features-list">
          <div class="feature-item">
            <div class="feature-icon">⚡</div>
            <span>Quick Assessment</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <span>Clear Recommendations</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💙</div>
            <span>Healthcare Focused</span>
          </div>
        </div>

        <!-- Primary CTA -->
        <button class="btn btn-primary" @click="startCheck">
          <span class="btn-text">Start Your Check</span>
          <span class="btn-arrow">→</span>
        </button>
      </div>

      <!-- Info card -->
      <div class="info-card">
        <div class="info-icon">ℹ️</div>
        <p class="info-text">
          <strong>Medical Disclaimer:</strong> This is not a medical diagnosis. Always consult healthcare professionals for medical advice.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '../store/appStore'
import CareCheckLogo from '../components/CareCheckLogo.vue'

const router = useRouter()
const appStore = useAppStore()

const startCheck = () => {
  appStore.reset()
  router.push('/patient-type')
}
</script>

<style scoped>
:root {
  --primary: #6366f1;
  --primary-light: #818cf8;
  --primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  --secondary: #a78bfa;
  --accent: #06b6d4;
  --accent-light: #67e8f9;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-light: #f8fafc;
  --card-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
  --card-shadow-hover: 0 20px 40px rgba(99, 102, 241, 0.15);
}

.home-view {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

/* ==================== Background & Shapes ==================== */

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f0f4ff 0%, #fef3f8 50%, #f0f9ff 100%);
  z-index: 1;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(60px);
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.2));
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2));
  bottom: 100px;
  right: -50px;
  animation-delay: -7s;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.15));
  top: 50%;
  left: 20%;
  animation-delay: -14s;
}

.shape-4 {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.1));
  bottom: -80px;
  left: 50%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(30px, -30px);
  }
  50% {
    transform: translate(-20px, 30px);
  }
  75% {
    transform: translate(40px, 20px);
  }
}

/* ==================== Content Container ==================== */

.content-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==================== Hero Section ==================== */

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  padding: 32px 0 16px;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
}

.hero-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  opacity: 0.8;
}

/* ==================== Main Card ==================== */

.main-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 32px 24px;
  box-shadow: var(--card-shadow);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: slideInUp 0.8s ease-out 0.1s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-header {
  margin-bottom: 16px;
}

.card-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.card-description {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 24px 0;
  font-weight: 400;
}

/* ==================== Features List ==================== */

.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.04), rgba(139, 92, 246, 0.04));
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.08);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}

.feature-icon {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 8px;
}

/* ==================== Buttons ==================== */

.btn {
  padding: 16px 24px;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--primary-gradient);
  color: white;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
  transform: translateY(0);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 36px rgba(99, 102, 241, 0.4);
}

.btn-primary:active {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.btn-text {
  font-weight: 600;
}

.btn-arrow {
  display: inline-flex;
  transition: transform 0.3s ease;
  font-size: 18px;
  font-weight: 700;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

/* ==================== Info Card ==================== */

.info-card {
  background: rgba(248, 113, 113, 0.05);
  border: 1px solid rgba(248, 113, 113, 0.2);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  gap: 12px;
  animation: slideInUp 0.8s ease-out 0.2s both;
}

.info-icon {
  font-size: 20px;
  flex-shrink: 0;
  line-height: 1.2;
}

.info-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
}

.info-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* ==================== Responsive ==================== */

@media (max-width: 380px) {
  .content-container {
    gap: 20px;
  }

  .hero-section {
    padding: 24px 0 12px;
  }

  .hero-title {
    font-size: 32px;
  }

  .main-card {
    padding: 24px 20px;
  }

  .card-title {
    font-size: 20px;
  }

  .card-description {
    font-size: 14px;
  }

  .btn {
    padding: 14px 20px;
    font-size: 15px;
  }

  .features-list {
    padding: 16px;
    gap: 10px;
  }
}

@media (min-width: 768px) {
  .home-view {
    padding: 32px;
  }

  .content-container {
    max-width: 500px;
  }

  .hero-section {
    padding: 48px 0 24px;
  }

  .hero-title {
    font-size: 44px;
  }

  .main-card {
    padding: 40px 32px;
  }

  .card-title {
    font-size: 26px;
  }

  .btn {
    padding: 18px 32px;
    font-size: 17px;
  }
}
</style>
