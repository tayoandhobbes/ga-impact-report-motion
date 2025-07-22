const easeOutQuad = t => t * (2 - t);

function countUp(el, duration = 2000) {
  const end = +el.dataset.target;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = progress * (2 - progress); // easeOutQuad
    el.textContent = Math.floor(start + (end - start) * eased);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.countup').forEach(el => obs.observe(el));