# 🎨 Parallax Masked Scroll Animation (GSAP + CSS)

A lightweight, smooth parallax scroll effect featuring a masked foreground and fixed background image using **GSAP ScrollTrigger**. The animation is optimized for desktop, with graceful fallback behavior on mobile.

## 📸 Preview

As the user scrolls:
- The background image subtly moves upward
- The image becomes pinned temporarily for a fixed parallax effect
- A **foreground SVG mask** overlays for visual polish

---

## 🚀 Features

✅ Scroll-based parallax effect  
✅ Fixed background pinning with GSAP  
✅ SVG mask foreground  
✅ Mobile-safe fallback  
✅ Lightweight and customizable  

---

## 📁 Project Structure

```
.
├── index.html         # Main HTML structure
├── style.css          # Styles for layout, mask, and responsiveness
├── script.js          # GSAP + ScrollTrigger parallax logic
├── /images
│   ├── bg.jpg         # Background image
│   └── mask.svg       # Foreground mask SVG
```

---

## 🧩 Dependencies

- [GSAP 3](https://greensock.com/gsap/)
- [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)

Included via CDN in `index.html`:

```html
<script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
```

---

## 📱 Mobile Behavior

- On desktop (≥ 769px): full parallax and pinned scroll effect
- On mobile (< 769px): pinning is disabled for smoother scrolling, only parallax movement remains

---

## 🛠 How It Works

1. The background image scrolls up slightly using `y: -10%` via GSAP.
2. Once fully visible, the image is pinned in place using ScrollTrigger.
3. A foreground `.foreground-mask` uses a CSS SVG `mask-image` to overlay a wave or shape.
4. On smaller screens, `ScrollTrigger.matchMedia()` disables pinning for performance.

---

## 🧪 Customize It

- Replace `/images/bg.jpg` with your own background image.
- Replace `/images/mask.svg` with your custom SVG mask shape.
- Adjust `y` value in `script.js` to control parallax strength.
- Change section heights or colors in `style.css` as needed.

---

## 🧯 Notes

- Avoid large SVGs or images to keep performance high on mobile.
- Always test on **real devices**, especially iOS Safari which handles scroll behavior differently.
- You can extend this by adding `ScrollSmoother` from GSAP for even slicker scroll effects (premium feature).

---

## 📄 License

This project is open source and free to use for personal or commercial work. No attribution required.

---

Made with ❤️ using GSAP and CSS.