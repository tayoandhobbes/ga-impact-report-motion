gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in-up").forEach(el => {
  gsap.fromTo(el,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1.2, // slightly shorter
    ease: "power2.out", // slightly softer than power4
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      once: true,
      onLeave: () => {
        el.style.transform = "translate(0px, 0px)";
        el.style.opacity = "1";
      }
    }
  });
});