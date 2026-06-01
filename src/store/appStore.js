import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const patientType = ref('')
  const selectedSymptoms = ref([])
  const answers = ref({
    temperature: null,
    duration: null,
    progression: null
  })
  const severityScore = ref(0)
  const riskLevel = ref('low')
  const recommendation = ref('')

  // Symptom data
  const availableSymptoms = [
    { id: 'fever', label: 'Fever', icon: '🌡️' },
    { id: 'cough', label: 'Cough', icon: '🤧' },
    { id: 'throat', label: 'Sore throat', icon: '😷' },
    { id: 'headache', label: 'Headache', icon: '🤕' },
    { id: 'fatigue', label: 'Fatigue', icon: '😴' },
    { id: 'congestion', label: 'Congestion', icon: '👃' }
  ]

  const questions = [
    {
      id: 1,
      text: 'Do you have a fever (temperature above 100.4°F / 38°C)?',
      options: [
        { id: 'yes_high', label: 'Yes, above 102°F (39°C)', weight: 3 },
        { id: 'yes_moderate', label: 'Yes, 100-102°F (38-39°C)', weight: 2 },
        { id: 'no_fever', label: 'No fever', weight: 0 }
      ]
    },
    {
      id: 2,
      text: 'How long have you had these symptoms?',
      options: [
        { id: 'less_24h', label: 'Less than 24 hours', weight: 1 },
        { id: '1_3_days', label: '1-3 days', weight: 2 },
        { id: 'more_3_days', label: 'More than 3 days', weight: 3 }
      ]
    },
    {
      id: 3,
      text: 'Are your symptoms getting worse?',
      options: [
        { id: 'improving', label: 'Getting better', weight: 0 },
        { id: 'stable', label: 'Stable', weight: 1 },
        { id: 'worsening', label: 'Getting worse', weight: 3 }
      ]
    }
  ]

  // Actions
  const setPatientType = (type) => {
    patientType.value = type
  }

  const addSymptom = (symptomId) => {
    if (!selectedSymptoms.value.includes(symptomId)) {
      selectedSymptoms.value.push(symptomId)
    }
  }

  const removeSymptom = (symptomId) => {
    selectedSymptoms.value = selectedSymptoms.value.filter(id => id !== symptomId)
  }

  const setAnswer = (questionId, answerId) => {
    const answerKey = getAnswerKey(questionId)
    answers.value[answerKey] = answerId
  }

  const getAnswerKey = (questionId) => {
    const keyMap = {
      1: 'temperature',
      2: 'duration',
      3: 'progression'
    }
    return keyMap[questionId]
  }

  const calculateSeverity = () => {
    let score = 0

    // Symptom count contribution
    score += selectedSymptoms.value.length * 1.5

    // Fever contribution
    const tempAnswer = answers.value.temperature
    if (tempAnswer === 'yes_high') score += 3
    if (tempAnswer === 'yes_moderate') score += 2

    // Duration contribution
    const durationAnswer = answers.value.duration
    if (durationAnswer === 'more_3_days') score += 2
    if (durationAnswer === '1_3_days') score += 1

    // Progression contribution
    const progressionAnswer = answers.value.progression
    if (progressionAnswer === 'worsening') score += 3
    if (progressionAnswer === 'stable') score += 1

    severityScore.value = Math.min(Math.round(score), 10)
    determineRiskLevel()
    return severityScore.value
  }

  const determineRiskLevel = () => {
    const score = severityScore.value

    if (score <= 2) {
      riskLevel.value = 'low'
      recommendation.value = 'Self-care measures should be sufficient. Rest, hydrate, and monitor your symptoms.'
    } else if (score <= 5) {
      riskLevel.value = 'medium'
      recommendation.value = 'Consider scheduling an appointment with your healthcare provider.'
    } else {
      riskLevel.value = 'high'
      recommendation.value = 'Seek urgent medical attention. Visit an urgent care clinic or emergency room.'
    }
  }

  const reset = () => {
    patientType.value = ''
    selectedSymptoms.value = []
    answers.value = {
      temperature: null,
      duration: null,
      progression: null
    }
    severityScore.value = 0
    riskLevel.value = 'low'
    recommendation.value = ''
  }

  return {
    // State
    patientType,
    selectedSymptoms,
    answers,
    severityScore,
    riskLevel,
    recommendation,
    availableSymptoms,
    questions,
    // Actions
    setPatientType,
    addSymptom,
    removeSymptom,
    setAnswer,
    calculateSeverity,
    determineRiskLevel,
    reset
  }
})
