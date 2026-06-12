// Runs synchronously in <head> — prevents flash of wrong theme
(function () {
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
}());

// keep the browser UI (address bar) color in sync with the theme
function syncThemeColor() {
  var dark = document.documentElement.getAttribute('data-theme') === 'dark';
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#0a0a0f' : '#f5f0e8');
}
syncThemeColor();

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('theme-toggle');
  var box = document.getElementById('setting-theme');
  if (!btn && !box) return;

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function sync() {
    var dark = isDark();
    if (btn) btn.textContent = dark ? '☀ light' : '☾ dark';
    if (box) box.checked = dark;
    syncThemeColor();
  }

  function setTheme(next) {
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    sync();
  }

  sync();

  if (btn) {
    btn.addEventListener('click', function () {
      setTheme(isDark() ? 'light' : 'dark');
    });
  }

  if (box) {
    box.addEventListener('change', function () {
      setTheme(box.checked ? 'dark' : 'light');
    });
  }
});
