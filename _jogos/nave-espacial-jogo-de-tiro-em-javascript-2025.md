---
layout: default
title: "Nave Espacial: Jogo de Tiro em JavaScript (2025)"
description: "Controle uma nave espacial e atire em inimigos neste jogo clássico. Feito com HTML, CSS e JavaScript puro — sem frameworks."
date: 2025-10-16
author: "PioLinux"
categories: [jogos, javascript]
tags: [nave, jogo, javascript, tiro, html]
permalink: /jogo-nave-espacial/
---

<section>

<style>
  .space-container {
    font-family: 'Courier New', monospace;
    background: #000;
    color: #0f0;
    text-align: center;
    padding: 20px;
    margin: 30px auto;
    max-width: 500px;
    border: 1px solid #0f0;
    border-radius: 10px;
    overflow: hidden;
  }
  .space-title {
    color: #0ff;
    font-size: 1.8em;
    margin-bottom: 20px;
    text-shadow: 0 0 5px #0ff;
  }
  .space-canvas {
    background: #000;
    border: 1px solid #0f0;
    cursor: none;
  }
  .space-stats {
    font-size: 1.2em;
    margin: 15px 0;
    color: #0ff;
  }
  .space-message {
    font-size: 1.3em;
    font-weight: bold;
    margin: 15px 0;
    min-height: 30px;
    color: #0f0;
    text-shadow: 0 0 3px #0f0;
  }
  .space-btn {
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
  .space-btn:hover {
    background: #0ff;
    color: #000;
  }
</style>

<div class="space-container">
  <div class="space-title">🚀 Terminal Space Shooter</div>
  <p>Use <strong>← →</strong> para mover e <strong>ESPAÇO</strong> para atirar.</p>
  <div class="space-stats" id="score">Pontos: 0</div>
  <div class="space-message" id="message">Defenda seu terminal!</div>
  <canvas id="gameCanvas" class="space-canvas" width="480" height="400"></canvas>
  <button class="space-btn" id="startBtn">▶️ Iniciar Jogo</button>
  <button class="space-btn" id="restartBtn" style="display:none;">🔁 Reiniciar</button>
</div>

<script>
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const scoreElement = document.getElementById('score');
  const messageElement = document.getElementById('message');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');

  let player = {
    x: canvas.width / 2 - 15,
    y: canvas.height - 40,
    width: 30,
    height: 30,
    speed: 5,
    dx: 0
  };

  let bullets = [];
  let enemies = [];
  let score = 0;
  let gameRunning = false;
  let enemyInterval;

  function drawPlayer() {
    ctx.fillStyle = '#0ff';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = '#000';
    ctx.font = '16px Courier New';
    ctx.fillText('>_ ', player.x + 2, player.y + 20);
  }

  function drawBullets() {
    bullets.forEach(bullet => {
      ctx.fillStyle = '#ff0';
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
      ctx.fillStyle = '#fff';
      ctx.fillText('⚡', bullet.x - 2, bullet.y + 15);
    });
  }

  function drawEnemies() {
    enemies.forEach(enemy => {
      ctx.fillStyle = '#f0f';
      ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
      ctx.fillStyle = '#fff';
      ctx.fillText('🐞', enemy.x + 2, enemy.y + 20);
    });
  }

  function movePlayer() {
    player.x += player.dx;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  }

  function moveBullets() {
    bullets = bullets.filter(bullet => {
      bullet.y -= 5;
      return bullet.y > 0;
    });
  }

  function moveEnemies() {
    enemies = enemies.filter(enemy => {
      enemy.y += enemy.speed;
      return enemy.y < canvas.height;
    });
  }

  function checkCollisions() {
    bullets.forEach((bullet, bIndex) => {
      enemies.forEach((enemy, eIndex) => {
        if (
          bullet.x < enemy.x + enemy.width &&
          bullet.x + bullet.width > enemy.x &&
          bullet.y < enemy.y + enemy.height &&
          bullet.y + bullet.height > enemy.y
        ) {
          // Colisão!
          bullets.splice(bIndex, 1);
          enemies.splice(eIndex, 1);
          score += 10;
          scoreElement.textContent = `Pontos: ${score}`;
        }
      });
    });

    enemies.forEach(enemy => {
      if (
        enemy.y + enemy.height >= player.y &&
        enemy.x < player.x + player.width &&
        enemy.x + enemy.width > player.x
      ) {
        // Game Over!
        gameOver();
      }
    });
  }

  function spawnEnemy() {
    const enemy = {
      x: Math.random() * (canvas.width - 30),
      y: -30,
      width: 30,
      height: 30,
      speed: 1 + Math.random() * 2
    };
    enemies.push(enemy);
  }

  function update() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawBullets();
    drawEnemies();

    movePlayer();
    moveBullets();
    moveEnemies();
    checkCollisions();

    requestAnimationFrame(update);
  }

  function startGame() {
    player.x = canvas.width / 2 - 15;
    bullets = [];
    enemies = [];
    score = 0;
    scoreElement.textContent = 'Pontos: 0';
    messageElement.textContent = 'Elimine os bugs!';
    messageElement.style.color = '#0f0';

    gameRunning = true;
    startBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';

    enemyInterval = setInterval(spawnEnemy, 1000);

    update();
  }

  function gameOver() {
    gameRunning = false;
    clearInterval(enemyInterval);
    messageElement.textContent = '💥 GAME OVER! Seu terminal foi corrompido.';
    messageElement.style.color = '#f00';
    restartBtn.style.display = 'inline-block';
  }

  function restartGame() {
    if (gameRunning) {
      gameRunning = false;
      clearInterval(enemyInterval);
    }
    startGame();
  }

  document.addEventListener('keydown', e => {
    if (!gameRunning) return;

    if (e.key === 'ArrowLeft') {
      player.dx = -player.speed;
    } else if (e.key === 'ArrowRight') {
      player.dx = player.speed;
    } else if (e.key === ' ') {
      e.preventDefault();
      bullets.push({
        x: player.x + player.width / 2 - 5,
        y: player.y,
        width: 10,
        height: 20
      });
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
