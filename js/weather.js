(function () {
  var timeEl = document.getElementById('manila-time');
  var dateEl = document.getElementById('manila-date');
  var tempEl = document.getElementById('manila-temp');
  var condEl = document.getElementById('manila-cond');
  if (!timeEl) return;

  var WMO = {
    0: ['☀', 'Clear'],
    1: ['🌤', 'Mostly clear'], 2: ['⛅', 'Partly cloudy'], 3: ['☁', 'Overcast'],
    45: ['🌫', 'Fog'], 48: ['🌫', 'Icy fog'],
    51: ['🌦', 'Light drizzle'], 53: ['🌦', 'Drizzle'], 55: ['🌧', 'Heavy drizzle'],
    61: ['🌧', 'Light rain'], 63: ['🌧', 'Rain'], 65: ['🌧', 'Heavy rain'],
    71: ['🌨', 'Light snow'], 73: ['🌨', 'Snow'], 75: ['❄', 'Heavy snow'],
    80: ['🌦', 'Showers'], 81: ['🌧', 'Rain showers'], 82: ['⛈', 'Heavy showers'],
    95: ['⛈', 'Thunderstorm'], 96: ['⛈', 'Thunderstorm+hail'], 99: ['⛈', 'Severe storm']
  };

  function tick() {
    var now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-PH', {
      timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    dateEl.textContent = now.toLocaleDateString('en-PH', {
      timeZone: 'Asia/Manila', weekday: 'short', month: 'short', day: 'numeric'
    });
  }
  tick();
  setInterval(tick, 1000);

  fetch('https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842' +
    '&current=temperature_2m,weathercode,apparent_temperature&temperature_unit=celsius&timezone=Asia%2FManila')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var c = d.current;
      var info = WMO[c.weathercode] || ['◌', 'Unknown'];
      tempEl.textContent = Math.round(c.temperature_2m) + '°C (feels ' + Math.round(c.apparent_temperature) + '°C)';
      condEl.textContent = info[0] + ' ' + info[1];
    })
    .catch(function () {
      tempEl.textContent = '—';
      condEl.textContent = 'weather unavailable';
    });
}());
