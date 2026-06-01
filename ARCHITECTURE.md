# CareCheck App Structure - Visual Guide

## Directory Tree

```
CareCheck/
│
├── src/                          # Source code
│   ├── main.js                  # Vue app initialization
│   ├── App.vue                  # Root component with RouterView
│   │
│   ├── router/
│   │   └── index.js             # Route definitions
│   │
│   ├── store/
│   │   └── checkInState.js      # Reactive state management
│   │
│   ├── views/                   # Page-level components
│   │   ├── Home.vue             # (Step 1) Welcome screen
│   │   ├── SymptomSelection.vue # (Step 2) Select symptoms
│   │   ├── Question.vue         # (Step 3-5) Answer questions
│   │   ├── Summary.vue          # (Step 6) Review before submit
│   │   └── Results.vue          # (Step 7) Get recommendation
│   │
│   └── components/              # Reusable components
│       ├── ProgressBar.vue      # Progress indicator
│       └── SymptomButton.vue    # Symptom selector button
│
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── BRIEF.md                      # Project brief
├── README.md                     # Overview
├── SETUP.md                      # Setup and architecture guide
└── .gitignore                    # Git ignore rules
```

## Component Hierarchy

```
App.vue
└── RouterView (Dynamic)
    ├── Home.vue
    │   └── ProgressBar (1/6)
    │
    ├── SymptomSelection.vue
    │   ├── ProgressBar (2/6)
    │   └── SymptomButton (multiple)
    │
    ├── Question.vue
    │   └── ProgressBar (3/5/6)
    │
    ├── Summary.vue
    │   └── ProgressBar (5/6)
    │
    └── Results.vue
        └── ProgressBar (6/6)
```

## Data Flow

```
┌─────────────────────────────────────────┐
│    checkInState (Reactive Store)        │
│  - selectedSymptoms: []                 │
│  - answers: {}                          │
│  - recommendation: null                 │
│  - severityScore: 0                     │
└─────────────────────────────────────────┘
         ↑              ↓
    Views read/write state
         ↑              ↓
┌─────────────────────────────────────────┐
│         Router Navigation               │
│  / → /symptoms → /question/1 → ...      │
│           ↓                              │
│      URL Parameters                     │
└─────────────────────────────────────────┘
```

## Route Map

```
/                      → Home view (intro)
/symptoms              → SymptomSelection view
/question/1            → Question view (fever)
/question/2            → Question view (duration)
/question/3            → Question view (worsening)
/summary               → Summary view (review)
/results               → Results view (recommendation)
```

## User Journey & State Changes

```
User starts
    ↓
Home (checkInState.reset())
    ↓
SymptomSelection (checkInState.addSymptom())
    ↓
Question 1 (checkInState.setAnswer('fever-temperature', ...))
    ↓
Question 2 (checkInState.setAnswer('fever-duration', ...))
    ↓
Question 3 (checkInState.setAnswer('worsening', ...))
    ↓
Summary (review state)
    ↓
Results (checkInState.calculateSeverity() → recommendation)
    ↓
User can start new check (checkInState.reset())
```

## Key Features by Component

### Views
- **Home**: Disclaimer, CTA to start check
- **SymptomSelection**: Multiple-select symptom picker
- **Question**: Single-choice questions with dynamic content
- **Summary**: Read-only review of collected data
- **Results**: Recommendation with next steps

### Components
- **ProgressBar**: Percentage-based progress indicator
- **SymptomButton**: Toggleable selection button with icon

### State Management
- **Severity Algorithm**: Calculates score based on symptoms + answers
- **Recommendations**: Maps severity to action (self-care/schedule/urgent)
- **Persistence**: State maintained across navigation

## Styling Approach

- **Utility-First CSS**: Scoped styles in each component
- **Responsive**: Mobile-first, adapts to larger screens
- **Color Scheme**:
  - Primary: #3498db (blue)
  - Success: #27ae60 (green)
  - Warning: #f39c12 (orange)
  - Danger: #e74c3c (red)
  - Neutral: #ecf0f1 (light gray)

## Development Workflow

1. **Add new symptom**: Update `availableSymptoms` in `SymptomSelection.vue`
2. **Add new question**: Add object to `questions` array in `Question.vue`
3. **Adjust severity**: Modify `symptomSeverity` object in `checkInState.js`
4. **Change recommendations**: Update `determineRecommendation()` logic
