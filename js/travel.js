// js/travel.js — renders travel destinations from window.travelData
(function () {
  var root = document.getElementById("travel-root");
  var data = window.travelData || [];
  if (!root || !data.length) return;

  // Group by region, preserve order
  var regionMap = new Map();
  data.forEach(function (dest) {
    if (!regionMap.has(dest.region)) regionMap.set(dest.region, []);
    regionMap.get(dest.region).push(dest);
  });

  regionMap.forEach(function (destinations, region) {
    var label       = document.createElement("p");
    label.className = "subsection-label";
    label.textContent = "── " + region + " ──";
    root.appendChild(label);

    var grid       = document.createElement("div");
    grid.className = "dest-grid";

    destinations.forEach(function (dest) {
      var card       = document.createElement("div");
      card.className = "dest-card";
      card.setAttribute("aria-label", dest.name);

      if (dest.flag) {
        var thumb       = document.createElement("img");
        thumb.className = "dest-thumb dest-flag";
        thumb.src       = "../assets/flags/" + dest.flag;
        thumb.alt       = dest.name + " flag";
        thumb.loading   = "lazy";
        thumb.decoding  = "async";
        card.appendChild(thumb);
      }

      var info       = document.createElement("div");
      info.className = "dest-info";

      var name       = document.createElement("span");
      name.className = "dest-name";
      name.textContent = dest.name;
      info.appendChild(name);

      if (dest.year) {
        var year       = document.createElement("span");
        year.className = "dest-year";
        year.textContent = dest.year;
        info.appendChild(year);
      }

      card.appendChild(info);
      grid.appendChild(card);
    });

    root.appendChild(grid);
  });
})();
