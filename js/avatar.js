/* hero avatar: click cycles through the avatar gallery,
   wrapping back to the first image after the last. */
(function () {
  var img = document.querySelector('.hero .avatar img');
  if (!img) return;

  var avatars = [
    { src: 'assets/Neo Avatar.png', alt: 'Neo avatar' },
    { src: 'assets/Lionel Messi Avatar.png', alt: 'Lionel Messi avatar' },
    { src: 'assets/Rickson Ruiz Avatar.png', alt: 'Rickson Ruiz avatar' }
  ];
  var index = 0;

  img.src = avatars[index].src;
  img.alt = avatars[index].alt;

  var frame = img.closest('.avatar') || img;
  frame.style.cursor = 'pointer';
  frame.setAttribute('role', 'button');
  frame.setAttribute('tabindex', '0');
  frame.setAttribute('aria-label', 'Cycle avatar image');

  function next() {
    index = (index + 1) % avatars.length;
    img.src = avatars[index].src;
    img.alt = avatars[index].alt;
  }

  frame.addEventListener('click', next);
  frame.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      next();
    }
  });
})();
