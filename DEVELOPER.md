# Developer Quick Start

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Summary

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `vite.config.js` | Vite build tool configuration |
| `index.html` | HTML entry point |
| `src/main.js` | Vue app initialization |
| `src/App.vue` | Root component with router outlet |
| `src/router/index.js` | Route definitions and Vue Router setup |
| `src/store/checkInState.js` | Reactive state management |
| `src/views/*.vue` | Page components (Home, SymptomSelection, etc.) |
| `src/components/*.vue` | Reusable UI components |

## Common Tasks

### Add a new symptom

Edit `src/views/SymptomSelection.vue`:
```javascript
const availableSymptoms = [
  // ... existing symptoms
  { id: 'new-symptom', label: 'New Symptom', icon: '🆕' }
]
```

### Add a new question

Edit `src/views/Question.vue`:
```javascript
const questions = [
  // ... existing questions
  {
    id: 'new-question',
    question: 'Your question here?',
    subtitle: 'Help text',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' }
    ]
  }
]
```

### Adjust severity scoring

Edit `src/store/checkInState.js`:
```javascript
calculateSeverity() {
  // Modify symptomSeverity weights
  const symptomSeverity = {
    'fever': 2,      // Adjust weights here
    'cough': 1,
    // ...
  }
  
  // Modify thresholds in determineRecommendation()
}
```

### Change recommendation thresholds

Edit `src/store/checkInState.js`:
```javascript
determineRecommendation() {
  if (this.severityScore >= 7) {  // Adjust thresholds
    this.recommendation = 'urgent'
  } else if (this.severityScore >= 4) {
    this.recommendation = 'schedule'
  } else {
    this.recommendation = 'selfcare'
  }
}
```

## State Management

Access `checkInState` from any view or component:

```javascript
import { checkInState } from '../store/checkInState'

// Read state
const symptoms = checkInState.selectedSymptoms
const score = checkInState.severityScore

// Modify state
checkInState.addSymptom('fever')
checkInState.setAnswer('question-id', 'answer-id')
checkInState.calculateSeverity()
checkInState.reset()
```

## Navigation

Use Vue Router to navigate:

```javascript
import { useRouter } from 'vue-router'

const router = useRouter()

// Navigate to route
router.push('/symptoms')
router.push('/question/1')
router.push('/results')

// Go back
router.back()
```

## Component Props & Emits

### ProgressBar
- Props: `current` (number), `total` (number)
- No emits

### SymptomButton
- Props: `symptom` (object), `selected` (boolean)
- Emits: `toggle` (with symptom id)

## Environment

- **Node**: 14+ required
- **Vue**: 3.3.0
- **Vue Router**: 4.2.0
- **Vite**: 4.3.0

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

## Testing Tips

- Use browser DevTools to inspect reactive state
- Check Vue Devtools extension for router and component debugging
- Mobile: Use Chrome DevTools device emulation for mobile testing

## Debugging

1. **State Issues**: Check `checkInState` in Vue Devtools
2. **Navigation Issues**: Check browser console for routing errors
3. **Styling Issues**: Inspect element in DevTools, check scoped CSS
4. **Performance**: Use Vue Devtools Profiler to identify bottlenecks

## Performance Considerations

- Lazy load routes if needed (currently all views are small)
- State is intentionally simple and reactive
- CSS is scoped to components to avoid conflicts
- No external dependencies except Vue and Vue Router

## Next Steps for Enhancement

- [ ] Add animation transitions between views
- [ ] Implement local storage for session recovery
- [ ] Add accessibility features (ARIA labels)
- [ ] Create unit tests for state management
- [ ] Add E2E tests for user flows
- [ ] Internationalization (i18n) support
- [ ] Dark mode support
- [ ] Progressive Web App (PWA) setup
