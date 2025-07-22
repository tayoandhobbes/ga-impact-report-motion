# ✨ Seamless Animated Gradient Text (Pure CSS)

This project displays text with a **continuously animated gradient fill**, layered with a soft blur to mimic a glowing effect. It uses a **tiled SVG gradient as a background image** to ensure a **perfectly seamless loop** — no jumps, no resets.

---

## 🎯 Features

- 🔁 **Perfectly looping animated gradient**
- 🌈 Uses custom brand colors: `#FEA42A`, `#B34783`, `#FC7446`
- 🌀 Layered soft blur for glowing edges
- ⚡ Pure CSS — no JavaScript or video
- 📱 Fully responsive and lightweight
- 🔍 Chrome/DevTools friendly

---

## 📁 File Structure

```
.
├── index.html        # Single-page HTML demo
```

No external assets or libraries required.

---

## 🖼 Preview

A centered heading with gradient-filled text that smoothly scrolls horizontally. The effect is subtle, modern, and GPU-accelerated.

---

## 🧪 How It Works

- The text uses `background-clip: text` and a tiled SVG background gradient.
- A second layer (`.gradient-text-blur`) adds a blurred duplicate of the text behind it.
- The SVG is embedded as a **data URI** — no external files needed.
- The background moves with `@keyframes` and `linear` timing for a seamless loop.

---

## 📦 Performance

- ✅ Optimized for low-end devices (mobile-safe)
- ✅ No layout thrashing or repaints
- ✅ No media files or HTTP requests

---

## 🎨 Customize

To change colors, edit the embedded SVG `stop-color` values in the CSS:

```css
background: url("data:image/svg+xml;...#FEA42A...#B34783...#FC7446...");
```

Or replace with a PNG/GIF/video if you prefer more complex motion.

---

## 💡 Tips

- Works best on **dark backgrounds**
- Keep font sizes large for visual impact
- Use `filter: blur()` sparingly to avoid GPU overuse on mobile

---

## 📄 License

Free to use under the [MIT License](https://opensource.org/licenses/MIT). No attribution required.

---

Made with ❤️ for creative text animation.