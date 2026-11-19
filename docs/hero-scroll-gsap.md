# Home Hero Scroll — GSAP ScrollTrigger Design

## Understanding Summary

- Replace the home hero’s custom wheel/glide/settle carousel with a **pinned ScrollTrigger** section.
- Scenes **Find → Make → Move** advance by scroll progress, with GSAP snap, then continue into the logo strip.
- Fixes: skip/jump, mid-scroll fighting between hero and logos, trackpad lag/jank.
- Same interaction model on desktop and mobile.
- Reduced motion: scenes still change with scroll; instant snap; no ornamental motion.
- Scope: hero rewrite + light homepage sticky/reveal polish. **No** ScrollSmoother.

## Assumptions

- Install `gsap` (and `@gsap/react` only if React wiring is needed; preferred path keeps init in `src/effects/home.js` with `gsap.context` + existing `pageScope` cleanup).
- Pin travel ≈ 3 viewport heights (one per scene).
- Existing scene art (`go()`, stage) stays; scroll becomes the driver.
- Step buttons / progress bars sync from ScrollTrigger progress.
- Target: stable 60fps; transform/opacity only; kill triggers on route leave.

## Non-goals

- Sitewide smooth-scroll wrapper (ScrollSmoother).
- Hero content/visual redesign.
- Contact forms, social links, case-study copy.

## Decision Log

| Decision | Alternatives | Why |
|---|---|---|
| Pin + scrub + snap (Approach 1) | Observer stepper; CSS scroll-snap | Fixes A/B/C at the root; GSAP-native; one model on all devices |
| Hero + light polish (not full-page smoother) | Hero only; ScrollSmoother whole page | Enough to fix sticky fights without wrapper complexity |
| Same model on mobile | Swipe-step only; static Find | Consistent UX; ST handles touch if pin math is stable |
| Reduced motion = instant snap, keep scene changes | Skip section; ignore reduced motion | Accessible without losing content structure |
| Remove custom `onWheel` / `glideTo` / `settle` / carousel touch preventDefault | Keep and “GSAP-ize” glides | Those systems cause the bugs |

## Final Design

### Architecture

- **Keep:** `Home.jsx` markup, scene art, `Page` + `pageScope`.
- **Replace in `home.js`:** wheel gate, glide, carStep, settle, touch carousel steppers, keyboard carousel hijack in the hero zone.
- **Add:** `gsap` + `ScrollTrigger` inside `gsap.context()` on home init.

### Scroll timeline & scene sync

1. `#heroPin` / ScrollTrigger pin spacing → ~`3 * VH` travel (stable VH).
2. Pin `#hero`: `start: "top top"`, end covering three segments.
3. Progress → scene: `[0,⅓)` Find, `[⅓,⅔)` Make, `[⅔,1]` Move. Call `go(k)` on segment change only.
4. Within segment, drive that step’s `.pg` via `scaleX`.
5. Snap to `0 / 0.5 / 1` (or `1/2` increments); reduced-motion snap `duration: 0`.
6. After pin ends → native scroll into logo hold (no forced settle).
7. Step buttons / keyboard → scroll to segment positions (ScrollToPlugin or ST positions).
8. Touch: ST owns scroll; remove hero carousel `touchmove` preventDefault (preserve stage-local drag where needed).

### Edge cases

- Defer or refresh ST after intro loader.
- Debounced `ScrollTrigger.refresh()` after layout / fonts / resize.
- Ignore keyboard snap while menu open.
- Reset to Find when hero leaves downward.
- Cleanup: `ctx.revert()` on page scope dispose.

### Light polish

- Refresh after sticky sections measure.
- Fix only clear competing scroll listeners / forced `scrollTo` fights.
- No ScrollSmoother; no about/voices redesign.

### Test plan

- Desktop trackpad: slow scrub, flick, reverse, exit to logos, scroll back.
- Wheel, keyboard, step buttons.
- iOS/Android: pin stability, no stuck mid-hero.
- Reduced-motion on.
- Route away/back: no duplicate triggers or leftover pin spacer.

## Implementation Notes

Shipped:

1. `gsap` installed (`ScrollTrigger` + `ScrollToPlugin`)
2. Custom wheel/glide/settle carousel removed from `src/effects/home.js`
3. Pinned ScrollTrigger (~3× VH) with scrub + soft settle snap to Find / Make / Move
4. Step buttons / keyboard / skip use `ScrollToPlugin`
5. `Page.jsx` runs optional cleanup returned from page `init`
6. Hero `touch-action: pan-y`; reduced-motion class `html.rm` drops scene blur/travel
7. Design verified in browser: Find → Make → Move → logos → back
`}
