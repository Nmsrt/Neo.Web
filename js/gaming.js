// js/gaming.js — renders gaming page from GAMING_GENRES + GAMING_IGNS
(function () {
  const root     = document.getElementById("genres-root");
  const ignsBody = document.getElementById("igns-body");

  // Render genres + games
  if (root && typeof GAMING_GENRES !== "undefined") {
    GAMING_GENRES.forEach(function (genre) {
      var label = document.createElement("p");
      label.className   = "subsection-label";
      label.textContent = "── " + genre.label + " ──";
      root.appendChild(label);

      (genre.games || []).forEach(function (game) {
        var row  = document.createElement("div");
        row.className = "game-row";

        if (game.imageSrc) {
          var img       = document.createElement("img");
          img.className = "game-logo";
          img.src       = game.imageSrc;
          img.alt       = game.imageAlt || game.title || "";
          img.loading   = "lazy";
          img.decoding  = "async";
          row.appendChild(img);
        }

        var info = document.createElement("div");
        info.className = "game-info";

        var titleP = document.createElement("p");
        titleP.className = "game-title";
        titleP.appendChild(document.createTextNode(game.title || ""));

        if (game.type) {
          var badge       = document.createElement("span");
          badge.className = "platform-badge";
          badge.textContent = game.type;
          titleP.appendChild(badge);
        }

        info.appendChild(titleP);

        if (game.url) {
          var link       = document.createElement("a");
          link.className = "project-link";
          link.href      = game.url;
          link.target    = "_blank";
          link.rel       = "noreferrer noopener";
          link.textContent = "[site]";
          info.appendChild(link);
        }

        row.appendChild(info);
        root.appendChild(row);
      });
    });
  }

  // Render IGNs
  if (ignsBody && typeof GAMING_IGNS !== "undefined") {
    GAMING_IGNS.forEach(function (ign) {
      var tr  = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.className   = "ign-platform";
      td1.textContent = ign.platform;
      var td2 = document.createElement("td");
      td2.className   = "ign-name";
      td2.textContent = ign.name;
      tr.appendChild(td1);
      tr.appendChild(td2);
      ignsBody.appendChild(tr);
    });
  }
})();
