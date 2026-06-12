/* mobile hamburger menu: turns .side-col into a slide-out panel.
   Progressive enhancement — without JS the sidebar keeps its
   default stacked/grid layout, so nothing is ever unreachable. */
(function () {
  var sidebar = document.querySelector('.side-col');
  if (!sidebar) return;

  document.body.classList.add('has-mobile-menu');

  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'mobile-sidebar');
  sidebar.id = sidebar.id || 'mobile-sidebar';

  var backdrop = document.createElement('div');
  backdrop.className = 'menu-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');

  document.body.appendChild(backdrop);
  document.body.appendChild(toggle);

  // enable slide/fade transitions only after the first frame is
  // painted, so the off-canvas start position is never animated
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.classList.add('menu-ready');
    });
  });

  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('menu-open'));
  });

  backdrop.addEventListener('click', function () {
    setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // navigating from the panel should close it (matters for #anchors)
  sidebar.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // leaving mobile widths: reset state so desktop layout is untouched
  var mq = window.matchMedia('(min-width: 769px)');
  function onWidthChange(ev) {
    if (ev.matches) setOpen(false);
  }
  if (mq.addEventListener) mq.addEventListener('change', onWidthChange);
  else mq.addListener(onWidthChange);
})();
