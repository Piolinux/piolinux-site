---
layout: default
title: "Jogo de Plataforma: Pule e Sobreviva em JavaScript (2025)"
description: "Controle o personagem, mova e pule para completar os níveis. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks.Física de jogos e lógica."
date: 2025-10-08
author: "PioLinux"
categories: [jogos, javascript]
tags: [plataforma, jogo, javascript, pulo, html]
permalink: /jogo-plataforma/
---

<section>

<style>
  .platformer-container {
    font-family: 'Courier New', monospace;
    background: #000;
    color: #0f0;
    text-align: center;
    padding: 20px;
    margin: 30px auto;
    max-width: 600px;
    border: 1px solid #0f0;
    border-radius: 10px;
    overflow: hidden;
  }
  .platformer-title {
    color: #0ff;
    font-size: 1.8em;
    margin-bottom: 20px;
    text-shadow: 0 0 5px #0ff;
  }
  .platformer-info {
    font-size: 1.1em;
    margin-bottom: 20px;
    color: #aaa;
  }
  .platformer-canvas {
    background: #000;
    border: 1px solid #0f0;
    display: block;
    margin: 0 auto;
  }
  .platformer-stats {
    font-size: 1.2em;
    margin: 15px 0;
    color: #0ff;
  }
  .platformer-message {
    font-size: 1.3em;
    font-weight: bold;
    margin: 15px 0;
    min-height: 30px;
    color: #0f0;
    text-shadow: 0 0 3px #0f0;
  }
  .platformer-btn {
    background: #0f0;
    color: #000;
    border: none;
    padding: 10px 20px;
    font-size: 1.1em;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px;
    font-family: 'Courier New', monospace;
    font-weight: bold;
  }
  .platformer-btn:hover {
    background: #0ff;
    color: #000;
  }
</style>

<div class="platformer-container">
  <div class="platformer-title">🕹️ Terminal Platformer</div>
  <p class="platformer-info">Use <strong>← →</strong> para mover e <strong>↑</strong> para pular. Colete <code>sudo</code> e chegue ao <code>reboot</code>!</p>
  <div class="platformer-stats" id="score">sudo: 0 | Vidas: 3</div>
  <div class="platformer-message" id="message">Fuja do Kernel Panic!</div>
  <canvas id="gameCanvas" class="platformer-canvas" width="560" height="400"></canvas>
  <button class="platformer-btn" id="startBtn">▶️ Iniciar Jogo</button>
  <button class="platformer-btn" id="restartBtn" style="display:none;">🔁 Reiniciar</button>
</div>

<script>
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const scoreElement = document.getElementById('score');
  const messageElement = document.getElementById('message');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');

  let player = {
    x: 50,
    y: 300,
    width: 30,
    height: 30,
    speed: 5,
    jumpPower: 12,
    velY: 0,
    jumping: false,
    dx: 0
  };

  let gravity = 0.6;
  let platforms = [
    { x: 0, y: 350, width: 600, height: 50 },
    { x: 100, y: 280, width: 100, height: 20 },
    { x: 250, y: 220, width: 100, height: 20 },
    { x: 400, y: 160, width: 100, height: 20 }
  ];

  let sudos = [
    { x: 120, y: 250, collected: false },
    { x: 270, y: 190, collected: false },
    { x: 420, y: 130, collected: false }
  ];

  let obstacles = [
    { x: 180, y: 320, width: 30, height: 30, type: 'panic' },
    { x: 320, y: 190, width: 30, height: 30, type: 'leak' }
  ];

  let reboot = { x: 500, y: 110, width: 40, height: 40 };
  let score = 0;
  let lives = 3;
  let gameRunning = false;

  function drawPlayer() {
    ctx.fillStyle = '#0ff';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = '#000';
    ctx.font = '16px Courier New';
    ctx.fillText('>_ ', player.x + 2, player.y + 20);
  }

  function drawPlatforms() {
    platforms.forEach(platform => {
      ctx.fillStyle = '#333';
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
      ctx.strokeStyle = '#0f0';
      ctx.strokeRect(platform.x, platform.y, platform.width, platform.height);
    });
  }

  function drawSudos() {
    sudos.forEach(sudo => {
      if (!sudo.collected) {
        ctx.fillStyle = '#ff0';
        ctx.fillRect(sudo.x, sudo.y, 20, 20);
        ctx.fillStyle = '#000';
        ctx.fillText('🔑', sudo.x + 2, sudo.y + 15);
      }
    });
  }

  function drawObstacles() {
    obstacles.forEach(obstacle => {
      ctx.fillStyle = obstacle.type === 'panic' ? '#f00' : '#f88';
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      ctx.fillStyle = '#fff';
      ctx.fillText(obstacle.type === 'panic' ? '💀' : '🩸', obstacle.x + 2, obstacle.y + 20);
    });
  }

  function drawReboot() {
    ctx.fillStyle = '#0f0';
    ctx.fillRect(reboot.x, reboot.y, reboot.width, reboot.height);
    ctx.fillStyle = '#000';
    ctx.fillText('🔁', reboot.x + 5, reboot.y + 25);
  }

  function checkSudoCollection() {
    sudos.forEach(sudo => {
      if (!sudo.collected &&
          player.x < sudo.x + 20 &&
          player.x + player.width > sudo.x &&
          player.y < sudo.y + 20 &&
          player.y + player.height > sudo.y) {
        sudo.collected = true;
        score++;
        scoreElement.textContent = `sudo: ${score} | Vidas: ${lives}`;
      }
    });
  }

  function checkObstacleCollision() {
    obstacles.forEach(obstacle => {
      if (player.x < obstacle.x + obstacle.width &&
          player.x + player.width > obstacle.x &&
          player.y < obstacle.y + obstacle.height &&
          player.y + player.height > obstacle.y) {
        // Colisão!
        lives--;
        scoreElement.textContent = `sudo: ${score} | Vidas: ${lives}`;
        player.x = 50;
        player.y = 300;
        player.velY = 0;
        if (lives <= 0) {
          gameOver();
        }
      }
    });
  }

  function checkRebootCollision() {
    if (player.x < reboot.x + reboot.width &&
        player.x + player.width > reboot.x &&
        player.y < reboot.y + reboot.height &&
        player.y + player.height > reboot.y) {
      // Vitória!
      if (score >= 3) {
        winGame();
      } else {
        messageElement.textContent = '❌ Colete todos os sudo primeiro!';
        messageElement.style.color = '#f00';
      }
    }
  }

  function update() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gravidade
    player.velY += gravity;
    player.y += player.velY;

    // Movimento horizontal
    player.x += player.dx;

    // Limites de tela
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

    // Colisão com plataformas
    let onPlatform = false;
    platforms.forEach(platform => {
      if (player.x + player.width > platform.x &&
          player.x < platform.x + platform.width &&
          player.y + player.height > platform.y &&
          player.y + player.height < platform.y + platform.height + player.velY) {
        player.y = platform.y - player.height;
        player.velY = 0;
        player.jumping = false;
        onPlatform = true;
      }
    });

    // Se cair fora do mapa
    if (player.y > canvas.height) {
      lives--;
      scoreElement.textContent = `sudo: ${score} | Vidas: ${lives}`;
      player.x = 50;
      player.y = 300;
      player.velY = 0;
      if (lives <= 0) {
        gameOver();
      }
    }

    drawPlatforms();
    drawSudos();
    drawObstacles();
    drawReboot();
    drawPlayer();

    checkSudoCollection();
    checkObstacleCollision();
    checkRebootCollision();

    requestAnimationFrame(update);
  }

  function startGame() {
    player.x = 50;
    player.y = 300;
    player.velY = 0;
    player.dx = 0;
    player.jumping = false;

    sudos.forEach(sudo => { sudo.collected = false; });
    score = 0;
    lives = 3;
    scoreElement.textContent = 'sudo: 0 | Vidas: 3';
    messageElement.textContent = 'Fuja do Kernel Panic!';
    messageElement.style.color = '#0f0';

    gameRunning = true;
    startBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';

    update();
  }

  function gameOver() {
    gameRunning = false;
    messageElement.textContent = '💥 KERNEL PANIC! Sistema travado.';
    messageElement.style.color = '#f00';
    restartBtn.style.display = 'inline-block';
  }

  function winGame() {
    gameRunning = false;
    messageElement.textContent = '🎉 Sistema reiniciado com sucesso! Você é um sysadmin mestre!';
    messageElement.style.color = '#0f0';
    restartBtn.style.display = 'inline-block';
  }

  function restartGame() {
    if (gameRunning) {
      gameRunning = false;
    }
    startGame();
  }

  document.addEventListener('keydown', e => {
    if (!gameRunning) return;

    if (e.key === 'ArrowLeft') {
      player.dx = -player.speed;
    } else if (e.key === 'ArrowRight') {
      player.dx = player.speed;
    } else if (e.key === 'ArrowUp' && !player.jumping) {
      player.velY = -player.jumpPower;
      player.jumping = true;
    }
  });

  document.addEventListener('keyup', e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      player.dx = 0;
    }
  });

  startBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', restartGame);
</script>

</section>
