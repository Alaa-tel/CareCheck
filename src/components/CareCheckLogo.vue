<template>
  <div class="logo" :class="{ 'logo--large': size === 'large', 'logo--small': size === 'small' }">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
      <!-- Heart shape with gradient -->
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #6366f1; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #8b5cf6; stop-opacity: 1" />
        </linearGradient>
      </defs>

      <!-- Heart outline -->
      <path
        d="M50 85 C20 70, 10 55, 10 40 C10 25, 20 15, 30 15 C38 15, 45 20, 50 28 C55 20, 62 15, 70 15 C80 15, 90 25, 90 40 C90 55, 80 70, 50 85 Z"
        fill="url(#heartGradient)"
        class="heart"
      />

      <!-- Checkmark -->
      <g class="checkmark">
        <path
          d="M35 50 L45 60 L65 35"
          stroke="white"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="check-path"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
})
</script>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.logo-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 12px rgba(99, 102, 241, 0.2));
}

.logo--large {
  width: 120px;
  height: 120px;
  animation: fadeInScale 0.6s ease-out;
}

.logo--medium {
  width: 80px;
  height: 80px;
  animation: fadeInScale 0.6s ease-out;
}

.logo--small {
  width: 48px;
  height: 48px;
}

.heart {
  transition: all 0.3s ease;
}

.check-path {
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  animation: drawCheckmark 0.8s ease-out 0.3s forwards;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes drawCheckmark {
  from {
    stroke-dashoffset: 40;
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.logo:hover .heart {
  filter: brightness(1.1);
}
</style>
