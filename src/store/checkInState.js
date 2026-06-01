import { reactive } from 'vue'

export const checkInState = reactive({
  selectedSymptoms: [],
  answers: {},
  recommendation: null,
  severityScore: 0,

  addSymptom(symptom) {
    if (!this.selectedSymptoms.includes(symptom)) {
      this.selectedSymptoms.push(symptom)
    }
  },

  removeSymptom(symptom) {
    const index = this.selectedSymptoms.indexOf(symptom)
    if (index > -1) {
      this.selectedSymptoms.splice(index, 1)
    }
  },

  setAnswer(questionId, answer) {
    this.answers[questionId] = answer
  },

  calculateSeverity() {
    let score = 0
    
    // Base symptom severity
    const symptomSeverity = {
      'fever': 2,
      'cough': 1,
      'fatigue': 1,
      'shortness-of-breath': 3,
      'chest-pain': 3,
      'severe-headache': 2,
      'dizziness': 2,
      'sore-throat': 1
    }

    this.selectedSymptoms.forEach(symptom => {
      score += symptomSeverity[symptom] || 1
    })

    // Adjust based on answers
    if (this.answers['fever-duration'] === 'more-than-3-days') score += 1
    if (this.answers['fever-temperature'] === 'above-104') score += 2
    if (this.answers['worsening'] === 'yes') score += 2

    this.severityScore = Math.min(score, 10)
    this.determineRecommendation()
  },

  determineRecommendation() {
    if (this.severityScore >= 7) {
      this.recommendation = 'urgent'
    } else if (this.severityScore >= 4) {
      this.recommendation = 'schedule'
    } else {
      this.recommendation = 'selfcare'
    }
  },

  reset() {
    this.selectedSymptoms = []
    this.answers = {}
    this.recommendation = null
    this.severityScore = 0
  }
})
