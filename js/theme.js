// Runs synchronously in <head> — prevents flash of wrong theme
(function () {
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
}());

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
