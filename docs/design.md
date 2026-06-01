# CareCheck — Design System & UI Direction

## Overview

CareCheck is a mobile-first healthcare web experience focused on helping patients or caregivers quickly assess symptoms and understand the next best step.

The experience should feel:

* Calm
* Friendly
* Trustworthy
* Modern
* Lightweight
* Reassuring

The product should resemble a polished healthcare startup product rather than a generic medical dashboard.

Use the provided design reference image in `/docs/design-reference.png` as the primary visual inspiration.

---

# Product Experience Principles

## Mobile-First

The interface must feel intentionally designed for phones:

* One-handed use
* Large tap targets
* Clear hierarchy
* Minimal cognitive load
* Comfortable spacing
* Thumb-friendly interactions

Desktop layouts should remain constrained to a centered mobile container.

---

# Visual Direction

## Backgrounds

Use soft layered healthcare-inspired gradients.

Include:

* Ambient gradient overlays
* Blurred floating circles
* Soft translucent shapes
* Light visual depth

Avoid:

* Flat gray backgrounds
* Pure white empty screens
* Heavy dark themes

---

# Color Palette

## Primary

* Indigo
* Soft purple
* Healthcare blue

## Secondary

* Lavender
* Cyan accents
* Light pink highlights

## Neutral

* White cards
* Soft shadows
* Light cool grays

## Avoid

* Harsh reds
* Generic hospital greens
* Strong black shadows

---

# Typography

Use a modern clean sans-serif font.

Hierarchy:

* Large welcoming hero headlines
* Medium supportive descriptions
* Small helper/disclaimer text

Tone:

* Human
* Supportive
* Calm
* Simple

---

# Layout System

## Structure

The application should use:

* Single-column layouts
* Rounded elevated cards
* Spacious vertical rhythm
* Sticky bottom CTAs where appropriate

## Containers

* Max width around mobile device size
* Center app on desktop
* Maintain responsive scaling

---

# Components

## CareCheck Logo

Create a reusable `CareCheckLogo.vue` component.

Requirements:

* Heart + checkmark symbol
* SVG or CSS-based implementation
* Modern rounded appearance
* Replace generic hospital emoji/icon

---

## Cards

Cards should:

* Use large border radius
* Soft layered shadows
* Floating appearance
* Comfortable padding
* Gentle hover/press feedback

---

## Buttons

Buttons should:

* Feel tactile
* Use soft gradients
* Include subtle animation states
* Be large enough for thumb interaction

Primary buttons should visually stand out.

---

# Motion & Animation

Animations should feel:

* Calm
* Smooth
* Lightweight
* Reassuring

Include:

* Fade-in transitions
* Slight upward motion
* Smooth screen transitions
* Ambient floating background movement

Avoid:

* Aggressive bouncing
* Fast motion
* Overly playful effects

---

# Accessibility

Maintain:

* Strong readable contrast
* Accessible font sizes
* Large tap targets
* Clear focus states
* Reduced cognitive load

All forms should be easy to scan quickly on mobile.

---

# Screen Direction

## Home Screen

Should include:

* Gradient hero background
* Custom CareCheck logo
* Strong welcoming headline
* Main symptom check-in CTA
* Elevated feature cards
* Privacy reassurance
* Soft entry animations

---

## Symptom Flow

Should feel:

* Guided
* Lightweight
* Conversational
* Reassuring

Use:

* Step indicators
* Large option cards
* Minimal typing
* Progressive disclosure

---

## Recommendation Screen

Should clearly communicate:

* Suggested next step
* Severity level
* Supporting explanation
* Clear action CTA

Examples:

* Monitor symptoms
* Message provider
* Schedule appointment
* Seek urgent care

---

# Technical Expectations

Framework:

* Vue 3
* Vite
* Vue Router

Styling:

* Modern CSS
* CSS variables
* Reusable UI components
* Responsive layouts

Architecture:

* Component-based structure
* Reusable cards/buttons/layout wrappers
* Clean folder organization

---

# Main Goal

The final experience should feel polished enough to resemble a real healthcare startup MVP with strong visual hierarchy, modern motion, and intentional mobile-first UX.
