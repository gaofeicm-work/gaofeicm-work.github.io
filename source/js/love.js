// =============================================
// Love Effect
// Click anywhere to show floating hearts
// =============================================
(function() {
  const hearts = [];
  const heartSymbols = ['❤', '💖', '💕', '💗', '💓'];

  function randomColor() {
    return 'rgb(' +
      Math.floor(Math.random() * 255) + ',' +
      Math.floor(Math.random() * 255) + ',' +
      Math.floor(Math.random() * 255) + ')';
  }

  function createHeart(e) {
    const heart = document.createElement('span');
    heart.className = 'love-heart';
    heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.cssText = [
      'position: fixed',
      'left: ' + (e.clientX - 10) + 'px',
      'top: ' + (e.clientY - 10) + 'px',
      'font-size: ' + (Math.random() * 20 + 10) + 'px',
      'color: ' + randomColor(),
      'z-index: 99999',
      'pointer-events: none',
      'animation: love-float 2s ease-out forwards'
    ].join(';');

    document.body.appendChild(heart);
    hearts.push({ el: heart, y: e.clientY, vy: -2, alpha: 1 });

    setTimeout(() => {
      heart.remove();
      const index = hearts.findIndex(h => h.el === heart);
      if (index > -1) hearts.splice(index, 1);
    }, 2000);
  }

  function animateHearts() {
    hearts.forEach(heart => {
      heart.y += heart.vy;
      heart.alpha -= 0.02;
      heart.el.style.top = heart.y + 'px';
      heart.el.style.opacity = heart.alpha;
    });
    requestAnimationFrame(animateHearts);
  }

  document.addEventListener('click', createHeart);
  animateHearts();

  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes love-float {
      0% {
        transform: scale(0) rotate(0deg);
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1.5) translateY(-100px) rotate(45deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
})();
