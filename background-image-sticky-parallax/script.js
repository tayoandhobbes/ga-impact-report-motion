gsap.registerPlugin(ScrollTrigger);

// Move image vertically on scroll before pin
gsap.to(".image-container img", {
  y: "10%", // scroll up slightly
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-wrapper",
    start: "top bottom", // image begins to move as it enters viewport
    end: "top top",      // until it's fully in view
    scrub: true
  }
});

// Now pin the container after parallax finishes
ScrollTrigger.create({
  trigger: ".parallax-wrapper",
  start: "top top",
  end: "bottom top",
  pin: ".image-container",
  scrub: true
});