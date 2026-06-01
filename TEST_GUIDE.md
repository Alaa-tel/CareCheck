# Chip Button Implementation - Quick Test Guide

## How to Test the New Chip Buttons

### Setup
```bash
npm install
npm run dev
# Visit http://localhost:5173
```

---

## Visual Testing

### 1. Initial Load
**Expected Behavior:**
- ✓ Progress bar shows "Step 2 of 6"
- ✓ 8 symptom chips display in a flex layout
- ✓ Chips wrap naturally if needed
- ✓ All chips have icons and labels
- ✓ Selection counter shows "Choose at least one symptom to continue"
- ✓ Continue button is **disabled** (grayed out)

**Visual Check:**
- [ ] No layout breaks
- [ ] All 8 symptoms visible
- [ ] Text is readable
- [ ] Spacing looks even
- [ ] Icons are clear

---

### 2. Hover Interactions

**Step:** Hover over an unselected chip

**Expected Behavior:**
- ✓ Border changes to blue (#3498db)
- ✓ Background becomes light blue (#f0f8ff)
- ✓ Subtle shadow appears
- ✓ Cursor changes to pointer

**Visual Check:**
- [ ] Hover effect is smooth
- [ ] Color change is visible
- [ ] Shadow is subtle (not overwhelming)
- [ ] Transition is fluid

**Step:** Hover over a selected chip

**Expected Behavior:**
- ✓ Border becomes darker blue (#2980b9)
- ✓ Background becomes darker blue (#d4ebf9)
- ✓ Shadow is more prominent
- [ ] Text remains bold

---

### 3. Selection Interactions

**Step:** Click on "Fever" chip

**Expected Behavior:**
- ✓ Chip background turns blue (#e8f4fd)
- ✓ Checkmark (✓) appears in green
- ✓ Chip text becomes bold and darker
- ✓ Shadow appears on chip
- ✓ Selection counter updates to "1 symptom selected"
- ✓ Counter text turns green

**Visual Check:**
- [ ] Checkmark is visible and green
- [ ] Chip styling changes clearly
- [ ] Counter updates immediately
- [ ] Animation is smooth

**Step:** Click on 2 more symptoms (e.g., "Cough", "Fatigue")

**Expected Behavior:**
- ✓ Each click adds a checkmark
- ✓ Selection counter updates: "3 symptoms selected"
- ✓ Previous selections remain selected
- ✓ Continue button **enables** (turns blue)

---

### 4. Deselection

**Step:** Click on a selected chip (e.g., "Fever")

**Expected Behavior:**
- ✓ Checkmark disappears
- ✓ Chip returns to unselected state
- ✓ Blue styling removed
- ✓ Counter updates: "2 symptoms selected"
- ✓ Continue button remains enabled (if > 0 selected)

**Step:** Deselect all chips

**Expected Behavior:**
- ✓ Counter shows "Choose at least one symptom to continue"
- ✓ Continue button **disables** (grays out)
- ✓ Counter text turns gray

---

### 5. Button States

**Step:** With no symptoms selected, try to click Continue

**Expected Behavior:**
- ✓ Continue button doesn't respond (disabled)
- ✓ Cursor doesn't change to pointer
- ✓ No navigation happens

**Step:** Select any symptom, then click Continue

**Expected Behavior:**
- ✓ Navigate to "/question/1"
- ✓ First question screen loads
- ✓ Selected symptoms remain in state (if you go back)

**Step:** Click Back button

**Expected Behavior:**
- ✓ Navigate to "/" (home page)
- ✓ State resets

---

## Mobile Testing

### Responsive Breakpoints to Test

#### 1. Small Mobile (320px) - iPhone SE
```bash
Chrome DevTools: Shift+Cmd+M
Select "iPhone SE"
```

**Expected:**
- ✓ Chips still 44px tall (accessible)
- ✓ Chips stack naturally (2-3 per row)
- ✓ No horizontal scrolling
- ✓ Text is readable (12px font)
- ✓ All buttons reachable
- ✓ Title readable

**Visual Check:**
- [ ] Chips wrap appropriately
- [ ] No squished text
- [ ] Icons visible
- [ ] Card padding looks right
- [ ] Buttons clickable

#### 2. Medium Mobile (375px) - iPhone 12
```bash
Chrome DevTools: Select "iPhone 12"
```

**Expected:**
- ✓ Chips slightly larger
- ✓ 2-3 symptoms per row
- ✓ Comfortable spacing

#### 3. Large Mobile (480px) - Landscape
```bash
Chrome DevTools: Landscape mode
```

**Expected:**
- ✓ More symptoms per row (3-4)
- ✓ Still comfortable touch targets
- ✓ Good use of horizontal space

#### 4. Tablet (768px)
```bash
Chrome DevTools: Select "iPad"
```

**Expected:**
- ✓ Chips spread across more space
- ✓ Padding adjusted
- ✓ Still readable

#### 5. Desktop (1024px+)
```bash
Chrome DevTools: Full screen or wider
```

**Expected:**
- ✓ Max-width: 500px still applied (card constraint)
- ✓ Centered on page
- ✓ Comfortable spacing

---

## Accessibility Testing

### Keyboard Navigation

**Step:** Press Tab repeatedly

**Expected Behavior:**
- ✓ First Tab: Focus moves to Back button
- ✓ Subsequent Tabs: Focus moves through chips
- ✓ Continue: Focus reaches Continue button
- ✓ Focus visible (blue outline around focused element)
- ✓ All buttons are reachable

**Visual Check:**
- [ ] Focus indicator is visible
- [ ] Focus order is logical
- [ ] No focus traps

**Step:** With chip focused, press Space

**Expected Behavior:**
- ✓ Chip toggles selection (same as mouse click)
- ✓ Checkmark appears/disappears
- ✓ Counter updates

### Screen Reader Testing

Using VoiceOver (Mac), NVDA (Windows), or JAWS:

**Expected Announcements:**
1. "Heading: What symptoms are you experiencing?"
2. "Select all that apply"
3. "Button Fever, not pressed"
4. [Repeat for each symptom]
5. "3 symptoms selected"
6. "Back button"
7. "Continue button, disabled"

**When you click a chip:**
- [ ] "Button Fever, pressed" (updated state announced)
- [ ] Counter changes announced

### Color Contrast

**Using tools like WebAIM Contrast Checker:**

**Expected:**
- ✓ Unselected chip: Light gray text on white = Pass
- ✓ Selected chip: Blue text on blue background = Pass (WCAG AA)
- ✓ Counter text: Green on light background = Pass
- ✓ Button text: White on blue = Pass

---

## Browser Compatibility Testing

Test on:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Chrome Mobile
- [ ] Safari Mobile (iOS)
- [ ] Samsung Internet

**Expected:**
- ✓ Chips display correctly
- ✓ Flexbox wrapping works
- ✓ Hover/active states work
- ✓ Animations are smooth
- ✓ ARIA attributes supported

---

## Performance Testing

### Load Time
```bash
Chrome DevTools → Performance tab
1. Open app
2. Navigate to symptom selection
3. Check Performance metrics
```

**Expected:**
- ✓ Initial load < 1s
- ✓ Chip rendering < 100ms
- ✓ No jank on interaction
- ✓ 60 FPS on interactions

### Memory
```bash
Chrome DevTools → Memory tab
1. Take heap snapshot
2. Select all symptoms
3. Take another snapshot
4. Compare
```

**Expected:**
- ✓ No memory leaks
- ✓ Minimal memory overhead
- ✓ Garbage collection works

---

## Interactive Behavior Testing

### Test Multiple Selections

**Scenario:** Select 5+ symptoms rapidly

**Expected:**
- ✓ Counter updates smoothly
- ✓ All selections register
- ✓ No visual glitches
- ✓ No duplicate checkmarks

### Test Rapid Toggling

**Scenario:** Click same chip 5 times rapidly

**Expected:**
- ✓ Chip toggles correctly each time
- ✓ Counter accurate
- ✓ No animation delays
- ✓ State remains consistent

### Test Boundary Cases

**Scenario 1:** Select 1 symptom
- [ ] Counter shows "1 symptom selected" (singular)
- [ ] Continue enables
- [ ] Button works

**Scenario 2:** Select all 8 symptoms
- [ ] Counter shows "8 symptoms selected" (plural)
- [ ] All chips show checkmarks
- [ ] Continue button functional

**Scenario 3:** Select, deselect all
- [ ] Counter returns to "Choose at least one..."
- [ ] Continue disables
- [ ] Can't proceed

---

## Styling Verification

### Chip Styling

**Default Chip:**
```css
Width: Auto (content-based)
Height: 44px minimum ✓
Padding: 10px 14px (left/right), vertically centered ✓
Border: 2px solid #e8eef7 ✓
Border-radius: 20px (pill shape) ✓
Font-size: 13px ✓
```

**Verify:**
- [ ] All measurements correct
- [ ] Pill shape visible
- [ ] Spacing even

**Selected Chip:**
```css
Background: #e8f4fd (light blue) ✓
Border: 2px solid #3498db (bright blue) ✓
Color: #2980b9 (darker blue) ✓
Font-weight: 600 (bold) ✓
Shadow: 0 2px 8px rgba(52, 152, 219, 0.2) ✓
```

**Verify:**
- [ ] All colors correct
- [ ] Shadow visible
- [ ] Text is bold

### Layout Verification

**Container:**
```css
Display: flex ✓
Flex-wrap: wrap ✓
Gap: 10px ✓
Max-width: 500px (card) ✓
```

**Verify:**
- [ ] Chips wrap on small screens
- [ ] 10px gap between chips
- [ ] Card width constraint works

---

## Success Criteria

### All Tests Pass? ✅

- [ ] Initial load shows all 8 chips
- [ ] Hover effects work smoothly
- [ ] Click/selection works on click
- [ ] Checkmarks appear/disappear
- [ ] Counter updates in real-time
- [ ] Continue button toggles enabled/disabled
- [ ] Navigation works (Continue, Back)
- [ ] Mobile responsive (320px to 1024px+)
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Color contrast passes WCAG AA
- [ ] Performance metrics acceptable
- [ ] No console errors
- [ ] Cross-browser compatible

### If any test fails:

1. Check console for errors
2. Compare with IMPLEMENTATION_NOTES.md
3. Review the updated SymptomSelection.vue code
4. Check styles in <style scoped> section
5. Verify Vue bindings in template

---

## Demo Checklist

When demonstrating to stakeholders:

- [ ] Start with clean load
- [ ] Show hovering over chips
- [ ] Select 2-3 symptoms
- [ ] Show counter updating
- [ ] Show disabled/enabled button state
- [ ] Click Continue (navigate to next screen)
- [ ] Go back
- [ ] Show mobile view (DevTools)
- [ ] Explain design decisions from decisions.md
- [ ] Highlight accessibility features
- [ ] Show performance improvements

---

## Quick Commands

```bash
# Development server with hot reload
npm run dev

# Open DevTools
Chrome/Mac: Cmd+Option+I
Chrome/Windows: Ctrl+Shift+I
Firefox: F12

# Test responsive
Ctrl+Shift+M (Chrome/Firefox)
Cmd+Shift+M (Chrome/Mac)

# Performance audit
Chrome DevTools → Lighthouse → Analyze page load
```

---

## Notes for Developers

### Common Issues & Solutions

**Issue:** Chips not wrapping on mobile
- **Solution:** Check `flex-wrap: wrap` in `.symptom-chips` CSS

**Issue:** Touch target too small
- **Solution:** Verify `min-height: 44px` on `.chip` class

**Issue:** Checkmark not visible
- **Solution:** Check `chip__check` styles, especially `color: #27ae60`

**Issue:** Counter not updating
- **Solution:** Verify `toggleSymptom()` method is updating state correctly

**Issue:** Continue button always disabled
- **Solution:** Check that `checkInState.selectedSymptoms.length` is being read correctly

---

## Next Steps

After testing, consider:
- [ ] A/B test with real users
- [ ] Gather feedback
- [ ] Monitor analytics (if added)
- [ ] Iterate on design if needed
- [ ] Document user feedback
- [ ] Plan enhancements

---

**Implementation is complete and ready for testing!** 🧪
