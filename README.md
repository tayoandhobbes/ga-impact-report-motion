# GA Impact Report – Motion Examples

This repo contains isolated animation and motion design examples used in the Grow America Impact Report project. Each folder showcases a single motion pattern with minimal markup, styles, and scripts to keep development and implementation clear.

## Purpose

These examples serve as reference implementations for the developer(s) on the project. They document nuanced or complex UI motion in a way that is easy to inspect, test, and integrate into the live site.

## Structure

Each subfolder is a standalone example:

fade-in-up-text/
├── index.html
├── style.css
└── script.js

You can open any folder locally in a browser or serve via VS Code’s Live Server to preview.

## Current Examples

- `fade-in-up-text` – Scroll-triggered fade and upward motion using GSAP

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/tayoandhobbes/ga-impact-report-motion
   cd ga-impact-report-motion

2.	Open any folder:
   cd fade-in-up-text

3.	Open index.html in a browser or use Live Server.

## Dependencies
	•	GSAP
	•	ScrollTrigger (GSAP plugin)

These are loaded via CDN in each example file for ease of use.

## Contribution

Feel free to add new motion examples in their own folders. Keep each example self-contained and minimal.
	•	Name folders with dashes (e.g., parallax-hero)
	•	Include a brief comment in script.js or a README.md if needed

## License

MIT