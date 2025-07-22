# Fade-In Up Text

This example demonstrates a smooth fade-in and upward motion for text elements using GSAP and ScrollTrigger. The animation triggers once when the element enters the viewport and resets to a clean state afterward for optimal rendering performance.

## Preview

The text fades in from below (`y: 50`) and becomes fully opaque as the user scrolls down the page.

## Files

- `index.html` – Basic markup with animated text elements
- `style.css` – Minimal styling for layout and typography
- `script.js` – GSAP + ScrollTrigger animation logic

## Dependencies

- [GSAP](https://greensock.com/gsap/)
- [GSAP ScrollTrigger plugin](https://greensock.com/scrolltrigger/)

Both are loaded via CDN in the HTML file.

## How It Works

Each text element with the `.fade-in-up` class is targeted by GSAP:

- **Initial state:** `opacity: 0`, `y: 50`
- **Final state:** `opacity: 1`, `y: 0`
- **Easing:** `power2.out` for natural deceleration
- **Trigger:** When the element enters the viewport at `top 85%`
- **Reset:** Any lingering transform is cleared after animation to ensure crisp rendering during scroll

## Customization

You can adjust the following parameters in `script.js`:

```js
{
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    start: "top 85%",
    once: true
  }
}
