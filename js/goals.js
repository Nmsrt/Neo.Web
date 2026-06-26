(function () {
  var list = document.getElementById('goals-list');
  var data = window.goalsData || [];
  if (!list || !data.length) return;

  var modal = document.getElementById('goal-modal');
  var modalImg = document.getElementById('goal-modal-img');
  var modalClose = document.getElementById('goal-modal-close');

  function openModal(src) {
    modalImg.src = src;
    modal.hidden = false;
  }

  function closeModal() {
    modal.hidden = true;
    modalImg.src = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  var statusLabel = { active: 'ACTIVE', planning: 'PLANNING', done: 'DONE' };
  var rotations = [-1.8, 2.2, 1.4, -2.4, 2.0, -1.2, 1.8, -2.0];

  data.forEach(function (goal, i) {
    var li = document.createElement('li');
    li.className = 'quest-card';
    li.style.setProperty('--rot', rotations[i % rotations.length] + 'deg');

    var header = document.createElement('div');
    header.className = 'quest-header';

    var num = document.createElement('span');
    num.className = 'quest-num';
    num.textContent = 'QUEST ' + String(i + 1).padStart(3, '0');

    var badge = document.createElement('span');
    badge.className = 'quest-badge';
    badge.setAttribute('data-status', goal.status || 'active');
    badge.textContent = '[ ' + (statusLabel[goal.status] || 'ACTIVE') + ' ]';

    header.appendChild(num);
    header.appendChild(badge);

    var body = document.createElement('div');
    body.className = 'quest-body';

    var icon = document.createElement('span');
    icon.className = 'quest-icon';
    icon.textContent = goal.icon;

    var content = document.createElement('div');
    content.className = 'quest-content';

    var cat = document.createElement('span');
    cat.className = 'quest-cat';
    cat.textContent = goal.cat;

    var text = document.createElement('p');
    text.className = 'quest-text';
    text.textContent = goal.text;

    content.appendChild(cat);
    content.appendChild(text);

    if (goal.image) {
      var thumb = document.createElement('button');
      thumb.className = 'now-thumb';
      thumb.setAttribute('aria-label', 'View reference photo');
      var img = document.createElement('img');
      img.src = goal.image;
      img.alt = 'reference for ' + goal.cat;
      img.loading = 'lazy';
      thumb.appendChild(img);
      thumb.addEventListener('click', function () { openModal(goal.image); });
      content.appendChild(thumb);
    }

    body.appendChild(icon);
    body.appendChild(content);
    li.appendChild(header);
    li.appendChild(body);
    list.appendChild(li);
  });
})();
