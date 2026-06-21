// js/wishlist.js — renders wishlist as a grouped "loot checklist" grid
// Click an item to open a modal with photo + details.
(function () {
  var root  = document.getElementById("wishlist-root");
  var items = window.WISHLIST_ITEMS || [];
  if (!root || !items.length) return;

  // ── Modal (built once, reused) ──
  var modal = document.createElement("div");
  modal.className = "wish-modal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  var box = document.createElement("div");
  box.className = "wish-modal-box";
  modal.appendChild(box);

  function closeModal() {
    modal.hidden = true;
    document.removeEventListener("keydown", onKey);
  }
  function onKey(e) {
    if (e.key === "Escape") closeModal();
  }
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  function openModal(item, tag) {
    box.innerHTML = "";

    var close = document.createElement("button");
    close.className = "wish-modal-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close");
    close.textContent = "✕";
    close.addEventListener("click", closeModal);
    box.appendChild(close);

    var title = document.createElement("h3");
    title.className = "wish-modal-title";
    title.textContent = item.title || "";
    box.appendChild(title);

    var cat = document.createElement("p");
    cat.className = "wish-modal-cat";
    cat.textContent = "▸ " + tag;
    box.appendChild(cat);

    if (item.image && item.image.src) {
      var img = document.createElement("img");
      img.className = "wish-modal-img";
      img.src = item.image.src;
      img.alt = item.image.alt || item.title || "";
      img.decoding = "async";
      box.appendChild(img);
    } else {
      var noimg = document.createElement("div");
      noimg.className = "wish-modal-noimg";
      noimg.textContent = "📷 photo coming soon";
      box.appendChild(noimg);
    }

    if (item.specs && item.specs.length) {
      var ul = document.createElement("ul");
      ul.className = "spec-list";
      item.specs.forEach(function (spec) {
        var li  = document.createElement("li");
        var lbl = document.createElement("span");
        lbl.className = "spec-label";
        lbl.textContent = (spec.label || "") + ":";
        var val = document.createElement("span");
        val.className = "spec-value";
        val.textContent = spec.value;
        li.appendChild(lbl);
        li.appendChild(val);
        ul.appendChild(li);
      });
      box.appendChild(ul);
    }

    if (item.desc) {
      var desc = document.createElement("p");
      desc.className = "wish-modal-desc";
      desc.textContent = item.desc;
      box.appendChild(desc);
    }

    modal.hidden = false;
    document.addEventListener("keydown", onKey);
    close.focus();
  }

  // ── Grid ──
  var groups = {};
  var order  = [];
  items.forEach(function (item) {
    if (!groups[item.tag]) {
      groups[item.tag] = [];
      order.push(item.tag);
    }
    groups[item.tag].push(item);
  });

  var grid = document.createElement("div");
  grid.className = "wish-grid";

  order.forEach(function (tag) {
    var list = groups[tag];

    var cat       = document.createElement("div");
    cat.className = "wish-cat";

    var head       = document.createElement("div");
    head.className = "wish-cat-head";

    var title       = document.createElement("span");
    title.className = "wish-cat-title";
    title.textContent = tag;

    var count       = document.createElement("span");
    count.className = "wish-count";
    count.textContent = "0/" + list.length;

    head.appendChild(title);
    head.appendChild(count);
    cat.appendChild(head);

    var ul       = document.createElement("ul");
    ul.className = "wish-list";

    list.forEach(function (item) {
      var li       = document.createElement("li");
      li.className = "wish-item";
      li.setAttribute("role", "button");
      li.tabIndex  = 0;

      var text       = document.createElement("div");
      text.className = "wish-text";

      var name       = document.createElement("span");
      name.className = "wish-name";
      name.textContent = item.title || "";
      text.appendChild(name);

      // List shows a short one-liner (model/first real spec); full specs live in the modal.
      var lead = (item.specs || [])[0];
      if (lead && lead.value && lead.value !== "TBD") {
        var detail       = document.createElement("span");
        detail.className = "wish-detail";
        detail.textContent = lead.value;
        text.appendChild(detail);
      }

      li.appendChild(text);

      li.addEventListener("click", function () { openModal(item, tag); });
      li.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(item, tag);
        }
      });

      ul.appendChild(li);
    });

    cat.appendChild(ul);
    grid.appendChild(cat);
  });

  root.appendChild(grid);
  document.body.appendChild(modal);
})();
