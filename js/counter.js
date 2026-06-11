// Visitor counter — shared count via the free Abacus API
// (https://abacus.jasoncameron.dev). Counts each browser session
// once; falls back to a local count if the API is unreachable.
(function () {
  var NS = 'neodev-neocities';
  var KEY = 'visits';

  var digits = document.querySelectorAll('.counter span');
  var label = document.querySelector('.counter-box .tiny');
  if (!digits.length) return;

  function render(n) {
    var s = String(n);
    while (s.length < digits.length) s = '0' + s;
    s = s.slice(-digits.length);
    for (var i = 0; i < digits.length; i++) {
      digits[i].textContent = s.charAt(i);
    }
    if (label) label.textContent = 'you are visitor #' + n;
  }

  function fallback() {
    var n = parseInt(localStorage.getItem('visit-count') || '0', 10);
    if (!sessionStorage.getItem('visit-counted')) {
      n += 1;
      localStorage.setItem('visit-count', String(n));
      sessionStorage.setItem('visit-counted', '1');
    }
    render(n);
  }

  // hit = increment + read, get = read only (already counted this session)
  var action = sessionStorage.getItem('visit-counted') ? 'get' : 'hit';
  fetch('https://abacus.jasoncameron.dev/' + action + '/' + NS + '/' + KEY)
    .then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    })
    .then(function (data) {
      sessionStorage.setItem('visit-counted', '1');
      render(data.value);
    })
    .catch(fallback);
}());
