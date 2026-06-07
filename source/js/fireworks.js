// =============================================
// Fireworks Effect
// Click anywhere to show fireworks
// =============================================
(function() {
  const canvas = document.createElement('canvas');
  canvas.className = 'fireworks';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function randomColor() {
    const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createParticle(x, y) {
    return {
      x: x,
      y: y,
      color: randomColor(),
      radius: Math.random() * 8 + 4,
      speedX: (Math.random() - 0.5) * 12,
      speedY: (Math.random() - 0.5) * 12,
      alpha: 1,
      decay: Math.random() * 0.02 + 0.01
    };
  }

  function createExplosion(x, y) {
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle(x, y));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.speedY += 0.2; // gravity
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        return true;
      }
      return false;
    });

    if (particles.length > 0) {
      animationId = requestAnimationFrame(animate);
    }
  }

  function handleClick(e) {
    createExplosion(e.clientX, e.clientY);
    if (!animationId) {
      animate();
    }
  }

  window.addEventListener('resize', resizeCanvas);
  document.addEventListener('click', handleClick);
  resizeCanvas();
})();
