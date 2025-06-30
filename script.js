// Cursor Effect
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", e => {
  const { clientX: x, clientY: y } = e;

  cursorDot.style.transform = `translate(${x}px, ${y}px)`;
  cursorOutline.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
});

// WOW Animations
document.querySelectorAll('.wow').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = `all 0.6s ease ${i * 0.3}s`;
});

window.addEventListener('load', () => {
  document.querySelectorAll('.wow').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
