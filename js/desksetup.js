// js/desksetup.js — renders desk setup items from window.DESK_ITEMS
(function () {
  var root  = document.getElementById("desk-root");
  var items = window.DESK_ITEMS || [];
  if (!root || !items.length) return;

  // Group by tag/category
  var groups = {};
  var order  = [];
  items.forEach(function (item) {
    if (!groups[item.tag]) {
      groups[item.tag] = [];
      order.push(item.tag);
    }
    groups[item.tag].push(item);
  });

  order.forEach(function (tag) {
    // Category label
    var label       = document.createElement("p");
    label.className = "subsection-label";
    label.textContent = "── " + tag + " ──";
    root.appendChild(label);

    groups[tag].forEach(function (item) {
      var card       = document.createElement("div");
      card.className = "item-card";

      var header       = document.createElement("div");
      header.className = "item-header";

      // Image
      if (item.image && item.image.src) {
        var img       = document.createElement("img");
        img.className = "item-img";
        img.src       = item.image.src;
        img.alt       = item.image.alt || item.title || "";
        img.loading   = "lazy";
        img.decoding  = "async";
        header.appendChild(img);
      }

      // Body: title + specs
      var body       = document.createElement("div");
      body.className = "item-body";

      var title       = document.createElement("p");
      title.className = "item-title";
      title.textContent = item.title || "";
      body.appendChild(title);

      if (item.specs && item.specs.length) {
        var ul       = document.createElement("ul");
        ul.className = "spec-list";
        item.specs.forEach(function (spec) {
          var li    = document.createElement("li");
          var lbl   = document.createElement("span");
          lbl.className   = "spec-label";
          lbl.textContent = spec.label + ":";
          var val   = document.createElement("span");
          val.className = "spec-value";
          if (spec.allowHtml) {
            val.innerHTML = spec.value;
          } else {
            val.textContent = spec.value;
          }
          li.appendChild(lbl);
          li.appendChild(val);
          ul.appendChild(li);
        });
        body.appendChild(ul);
      }

      header.appendChild(body);
      card.appendChild(header);
      root.appendChild(card);
    });
  });
})();
