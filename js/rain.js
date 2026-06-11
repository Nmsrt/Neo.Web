// animated rain effect (toggleable, persisted across pages)
const canvas = document.getElementById('rain-canvas');
const toggleBtn = document.getElementById('rain-toggle');
const rainCheckbox = document.getElementById('setting-rain');

if (canvas) {
  const ctx = canvas.getContext('2d');

  let enabled = localStorage.getItem('rain') !== 'off';
  let rafId = null;
  let drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.floor(canvas.width / 12);
    drops = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      len: 6 + Math.random() * 14,
      speed: 2 + Math.random() * 4,
    }));
  }

  function rainColor() {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--rain-color').trim() || 'rgba(232, 98, 43, 0.12)';
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = rainColor();
    ctx.lineWidth = 1;
    for (const d of drops) {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.len);
      ctx.stroke();
      d.y += d.speed;
      if (d.y > canvas.height) {
        d.y = -d.len;
        d.x = Math.random() * canvas.width;
      }
    }
    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (rafId === null) rafId = requestAnimationFrame(frame);
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function applyState() {
    if (toggleBtn) toggleBtn.textContent = enabled ? 'rain: on' : 'rain: off';
    if (rainCheckbox) rainCheckbox.checked = enabled;
    if (enabled) start();
    else stop();
  }

  function setRain(on) {
    enabled = on;
    localStorage.setItem('rain', enabled ? 'on' : 'off');
    applyState();
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => setRain(!enabled));
  }

  if (rainCheckbox) {
    rainCheckbox.addEventListener('change', () => setRain(rainCheckbox.checked));
  }

  window.addEventListener('resize', resize);
  resize();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !localStorage.getItem('rain')) {
    enabled = false;
  }

  applyState();
}
