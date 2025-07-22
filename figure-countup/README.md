# Sticky Scroll Count-Up Example

This example demonstrates a scroll-triggered number counter that animates upward as the user scrolls into view. The number remains pinned to the bottom of the screen while the user scrolls through the section and then scrolls out with the section content naturally.

## Features

- Smooth count-up animation using `requestAnimationFrame`
- Sticky positioning to fix the counter at the bottom of the viewport
- Fully responsive and semantic HTML/CSS layout
- Minimal JavaScript with accessibility-friendly markup

## Structure

```
ga-impact-report-motion/
├── figure-countup/
│   ├── index.html
│   ├── style.css
│   └── countup.js
```

## Behavior

1. Section 1 is a spacer to allow scrolling into the animation section.
2. Section 2 contains a headline and a count-up number block.
3. As the user scrolls into Section 2, the number appears under the title.
4. The number then sticks to the **bottom left** of the viewport.
5. As the user scrolls into Section 3, the counter scrolls out naturally.

## Usage

To test locally:

```bash
git clone https://github.com/your-username/ga-impact-report-motion
cd your-repo-name/fade-in-up-text
open index.html
```


Then visit `http://localhost:8000` in your browser.

## Customization

- Edit `data-target` on `.countup` elements to change the final value.
- Adjust scroll timing by modifying the sticky height or spacer sections in CSS.
- Typography and layout can be customized in `style.css`.

## Browser Support

- Fully supported in all modern browsers
- Graceful fallback in environments without `requestAnimationFrame`

## License

MIT License