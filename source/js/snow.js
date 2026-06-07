// =============================================
// Snow Effect
// Falling snow particles
// =============================================
(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'snow-canvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const snowflakes = [];
  const maxSnowflakes = 100;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createSnowflake() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      wind: 0,
      opacity: Math.random() * 0.5 + 0.5
    };
  }

  function init() {
    resizeCanvas();
    for (let i = 0; i < maxSnowflakes; i++) {
      snowflakes.push(createSnowflake());
    }
  }

  function drawSnowflake(s) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, ' + s.opacity + ')';
    ctx.fill();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(s => {
      s.y += s.speed;
      s.x += s.wind;

      // Sway effect
      s.wind = Math.sin(Date.now() * 0.001 + s.x * 0.01) * 0.5;

      // Reset when out of view
      if (s.y > canvas.height) {
        s.y = -10;
        s.x = Math.random() * canvas.width;
      }

      drawSnowflake(s);
    });

    requestAnimationFrame(update);
  }

  window.addEventListener('resize', resizeCanvas);
  init();
  update();
})();
