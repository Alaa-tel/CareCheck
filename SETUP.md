# CareCheck Vue App

A mobile-first symptom check-in experience built with Vue 3 and Vue Router.

## Project Structure

```
src/
├── main.js                 # App entry point
├── App.vue                 # Root component
├── router/
│   └── index.js           # Router configuration and routes
├── store/
│   └── checkInState.js    # Reactive state management
├── views/
│   ├── Home.vue           # Welcome screen
│   ├── SymptomSelection.vue  # Select symptoms
│   ├── Question.vue       # Answer questions (Step 1-3)
│   ├── Summary.vue        # Review information
│   └── Results.vue        # Show recommendation
└── components/
    ├── ProgressBar.vue    # Progress indicator
    └── SymptomButton.vue  # Symptom selector button
```

## User Flow

1. **Home** - User initiates symptom check
2. **Symptom Selection** - Select all applicable symptoms
3. **Questions** - Answer 3 sequential questions about symptoms
4. **Summary** - Review selected symptoms and answers
5. **Results** - Get recommendation (Self-care, Schedule, Urgent)

## Features

- **Mobile-First Design**: Optimized for phone screens with large touch targets
- **Guided Experience**: Step-by-step flow preventing overwhelming forms
- **Reactive State Management**: Centralized state for symptoms, answers, and recommendations
- **Dynamic Routing**: Navigation between views with URL parameters
- **Progress Tracking**: Visual indicator of progress through the flow
- **Severity Scoring**: Algorithm to calculate symptom severity and recommendations

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Architecture

### Router (`src/router/index.js`)
- Defines all routes in the application
- Maps URLs to view components
- Implements parametric routing for questions

### State Management (`src/store/checkInState.js`)
- Centralized reactive state using Vue 3 Composition API
- Methods to manage symptoms and answers
- Severity calculation algorithm
- Recommendation logic

### Views
- Stateless presentation components
- Import router and state management
- Handle navigation and user interactions

### Components
- Reusable UI components
- `ProgressBar`: Displays current step progress
- `SymptomButton`: Interactive symptom selector

## Recommendation Algorithm

Severity scores are calculated based on:
- **Symptoms**: Each symptom has a base severity weight (1-3)
- **Duration**: Longer symptom duration increases severity
- **Progression**: Worsening symptoms increase severity
- **Temperature**: Higher fever increases severity

Results:
- **Score 0-3**: Self-care recommended
- **Score 4-6**: Schedule appointment with healthcare provider
- **Score 7+**: Seek urgent care

## Design Principles

- **Simplicity**: One task per screen, clear language
- **Accessibility**: Large touch targets, high contrast
- **Trust**: Calm tone, clear disclaimers, professional appearance
- **Mobile-Optimized**: Minimal typing, quick interactions

## Disclaimer

⚠️ **Important**: This is a prototype for UX demonstration only. It is NOT a medical diagnostic tool and should never be used for actual medical decision-making. Always consult qualified healthcare professionals for medical advice.

## Technologies

- **Vue 3**: Progressive JavaScript framework
- **Vue Router 4**: Client-side routing
- **Vite**: Next-generation build tool
- **Modern CSS**: Flexbox and Grid for responsive layout
