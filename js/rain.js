// animated background effect (toggleable, persisted across pages)
// dark mode: shooting stars · light mode: blood drip + splatter
// keeps the old "rain" storage key + element ids for compatibility
const canvas = document.getElementById('rain-canvas');
const toggleBtn = document.getElementById('rain-toggle');
const rainCheckbox = document.getElementById('setting-rain');

if (canvas) {
  const ctx = canvas.getContext('2d');

  let enabled = localStorage.getItem('rain') !== 'off';
  let rafId = null;
  let meteors = [];
  let drops = [];
  let particles = [];
  let blots = [];
  let nextSpawn = 0;
  let lastMode = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function mode() {
    return document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'stars' : 'blood';
  }

  function effectColor() {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--meteor-color').trim() || 'rgba(190, 250, 255, 0.9)';
  }

  /* ---- dark mode: shooting stars ---- */

  function spawnMeteor(now) {
    const fromLeft = Math.random() < 0.5;
    const angle = (25 + Math.random() * 20) * (Math.PI / 180);
    const dir = fromLeft ? 1 : -1;
    meteors.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * canvas.height * 0.3,
      vx: Math.cos(angle) * (6 + Math.random() * 7) * dir,
      vy: Math.sin(angle) * (6 + Math.random() * 7),
      len: 70 + Math.random() * 90,
      life: 1,
      decay: 0.004 + Math.random() * 0.006,
    });
    // frequent but still irregular
    nextSpawn = now + 60 + Math.random() * 280;
  }

  function drawStars(now) {
    if (now >= nextSpawn && meteors.length < 18) spawnMeteor(now);

    const color = effectColor();
    for (const m of meteors) {
      const tx = m.x - m.vx * (m.len / 10);
      const ty = m.y - m.vy * (m.len / 10);

      const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
      grad.addColorStop(0, color);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.globalAlpha = m.life;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tx, ty);
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 1.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      m.x += m.vx;
      m.y += m.vy;
      m.life -= m.decay;
    }

    meteors = meteors.filter(function (m) {
      return m.life > 0 && m.y < canvas.height + m.len && m.x > -m.len && m.x < canvas.width + m.len;
    });
  }

  /* ---- light mode: blood drip + splatter ---- */

  function spawnDrop(now) {
    drops.push({
      x: Math.random() * canvas.width,
      y: -12,
      vy: 8 + Math.random() * 6,
      splatY: canvas.height * (0.25 + Math.random() * 0.7),
    });
    nextSpawn = now + 60 + Math.random() * 280;
  }

  function splat(x, y) {
    const n = 7 + Math.floor(Math.random() * 8);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI;       // burst upward/outward
      const sp = 1.5 + Math.random() * 3.5;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(a) * sp * (Math.random() < 0.5 ? 1 : -1),
        vy: -Math.sin(a) * sp,
        r: 0.8 + Math.random() * 1.8,
        life: 1,
      });
    }
    blots.push({
      x: x,
      y: y,
      r: 2,
      maxR: 7 + Math.random() * 12,
      life: 1,
    });
  }

  function drawBlood(now) {
    if (now >= nextSpawn && drops.length < 18) spawnDrop(now);

    const color = effectColor();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    for (const d of drops) {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y - 10);
      ctx.lineTo(d.x, d.y);
      ctx.stroke();
      d.y += d.vy;
      if (d.y >= d.splatY) splat(d.x, d.splatY);
    }
    drops = drops.filter(function (d) { return d.y < d.splatY; });

    for (const p of particles) {
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;                            // gravity pulls spray down
      p.life -= 0.025;
    }
    particles = particles.filter(function (p) { return p.life > 0; });

    for (const b of blots) {
      ctx.globalAlpha = b.life * 0.6;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
      if (b.r < b.maxR) b.r += 0.8;            // pool spreads, then dries
      b.life -= 0.008;
    }
    blots = blots.filter(function (b) { return b.life > 0; });
    ctx.globalAlpha = 1;
  }

  function frame(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const m = mode();
    if (m !== lastMode) {                      // theme switched: reset scene
      meteors = [];
      drops = [];
      particles = [];
      blots = [];
      nextSpawn = 0;
      lastMode = m;
    }

    if (m === 'stars') drawStars(now);
    else drawBlood(now);

    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (rafId === null) {
      nextSpawn = 0;
      rafId = requestAnimationFrame(frame);
    }
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    meteors = [];
    drops = [];
    particles = [];
    blots = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function applyState() {
    if (toggleBtn) toggleBtn.textContent = enabled ? 'stars: on' : 'stars: off';
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
