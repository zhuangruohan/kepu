# Tech Stack

## Core

- React
- TypeScript
- Vite

## Animation

- GSAP: timeline-based teaching animations and staged scene transitions.
- Framer Motion: UI micro-interactions only, such as panel entry, button feedback, and lightweight state transitions.

## Visual

- SVG: icons, diagrams, masks, and lightweight vector overlays.
- Canvas: only when SVG/CSS cannot express scene-layer effects efficiently. Canvas must stay inside a focused scene component and must not become a game engine or physics simulator.

## Boundaries

- Do not introduce Three.js.
- Do not introduce a large state management library in Phase 0.
- Do not create a complex animation engine in Phase 0.
