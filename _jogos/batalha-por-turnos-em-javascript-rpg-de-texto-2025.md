---
layout: default
title: "Batalha por Turnos em JavaScript: RPG de Texto (2025)"
description: "Comande seu Sysadmin em uma batalha por turnos contra o Kernel Panic! Jogo leve feito com HTML, CSS e JavaScript puro — sem frameworks, 100%" offline. 
author: "PioLinux"
categories: [jogos, javascript]
tags: [batalha, rpg, jogo, javascript, html]
permalink: /jogo-batalha-por-turnos/
---

<section>




<style>
  .battle-container {
    font-family: 'Courier New', monospace;
    background: #000;
    color: #0f0;
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;
    max-width: 600px;
    margin: 30px auto;
    border: 1px solid #0f0;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
  }
  .battle-title {
    color: #0ff;
    font-size: 1.8em;
    margin-bottom: 20px;
    text-shadow: 0 0 5px #0ff;
  }
  .battle-info {
    font-size: 1.1em;
    margin-bottom: 20px;
    color: #aaa;
  }
  .battle-log {
    background: #111;
    border: 1px solid #0f0;
    padding: 15px;
    height: 150px;
    overflow-y: auto;
    margin: 20px auto;
    text-align: left;
    font-size: 14px;
    max-width: 550px;
  }
  .log-entry {
    margin: 5px 0;
    padding: 3px 0;
    border-bottom: 1px solid #222;
  }
  .player-stats, .enemy-stats {
    font-size: 1.2em;
    margin: 10px 0;
    padding: 10px;
    border-radius: 6px;
  }
  .player-stats {
    background: #1a3a1a;
    color: #80ff00;
    border: 1px solid #80ff00;
  }
  .enemy-stats {
    background: #3a1a1a;
    color: #ff8080;
    border: 1px solid #ff8080;
  }
  .health-bar {
    height: 10px;
    background: #333;
    border-radius: 4px;
    margin-top: 5px;
    overflow: hidden;
  }
  .health-fill {
    height: 100%;
    background: #0f0;
    transition: width 0.3s ease;
  }
  .enemy-health-fill {
    background: #f00;
  }
  .battle-btns {
    margin: 20px 0;
  }
  .battle-btn {
    background: #0f0;
    color: #000;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    font-size: 1em;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-weight: bold;
  }
  .battle-btn:hover {
    background: #0ff;
    color: #000;
  }
  .battle-btn:disabled {
    background: #333;
    color: #666;
    cursor: not-allowed;
  }
</style>

<div class="battle-container">
  <div class="battle-title">⚔️ Terminal Battle: Sysadmin vs Kernel Panic</div>
  <p class="battle-info">Escolha seu plugin e ataque! Derrote o Kernel Panic com seus comandos.</p>

  <div class="player-stats">
    <strong>Sysadmin</strong> — HP: <span id="player-hp">100</span>/100
    <div class="health-bar">
      <div id="player-health" class="health-fill" style="width: 100%;"></div>
    </div>
  </div>

  <div class="enemy-stats">
    <strong>Kernel Panic</strong> — HP: <span id="enemy-hp">100</span>/100
    <div class="health-bar">
      <div id="enemy-health" class="health-fill enemy-health-fill" style="width: 100%;"></div>
    </div>
  </div>

  <div class="battle-log" id="battle-log">
    <div class="log-entry">🚀 Batalha iniciada! Sysadmin vs Kernel Panic!</div>
  </div>

  <div class="battle-btns">
    <button class="battle-btn" onclick="attack('git')">Git Pull</button>
    <button class="battle-btn" onclick="attack('zsh')">Zsh Plugin</button>
    <button class="battle-btn" onclick="attack('vim')">Vim Macro</button>
    <button class="battle-btn" onclick="attack('sudo')">Sudo Power</button>
  </div>

  <button class="battle-btn" id="restartBtn" style="display:none;">🔁 Nova Batalha</button>
</div>

<script>
  let playerHP = 100;
  let enemyHP = 100;
  let gameActive = true;

  function log(message, color = '#0f0') {
    const logDiv = document.getElementById('battle-log');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = message;
    entry.style.color = color;
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight;
  }

  function updateHealth() {
    document.getElementById('player-hp').textContent = playerHP;
    document.getElementById('enemy-hp').textContent = enemyHP;
    document.getElementById('player-health').style.width = `${playerHP}%`;
    document.getElementById('enemy-health').style.width = `${enemyHP}%`;

    if (playerHP <= 0) {
      playerHP = 0;
      gameActive = false;
      log('💀 SYSADMIN DERROTADO! Kernel Panic venceu.', '#f00');
      document.getElementById('restartBtn').style.display = 'inline-block';
    } else if (enemyHP <= 0) {
      enemyHP = 0;
      gameActive = false;
      log('🎉 VITÓRIA! Kernel Panic derrotado. Você é um 10x sysadmin!', '#0ff');
      document.getElementById('restartBtn').style.display = 'inline-block';
    }
  }

  function attack(skill) {
    if (!gameActive) return;

    let damage;
    let message;

    switch(skill) {
      case 'git':
        damage = Math.floor(Math.random() * 15) + 10;
        message = `⚡ Sysadmin usou "git pull" — causou ${damage} de dano!`;
        break;
      case 'zsh':
        damage = Math.floor(Math.random() * 20) + 5;
        message = `⚡ Sysadmin ativou plugin Zsh — causou ${damage} de dano!`;
        break;
      case 'vim':
        damage = Math.floor(Math.random() * 25) + 1;
        message = `⚡ Sysadmin executou macro Vim — causou ${damage} de dano!`;
        break;
      case 'sudo':
        damage = Math.floor(Math.random() * 30) + 1;
        message = `⚡ Sysadmin usou "sudo" — causou ${damage} de dano!`;
        break;
    }

    enemyHP -= damage;
    log(message, '#0ff');
    updateHealth();

    if (gameActive) {
      // Turno do inimigo
      setTimeout(() => {
        const enemyDamage = Math.floor(Math.random() * 15) + 5;
        playerHP -= enemyDamage;
        log(`☠️ Kernel Panic usou "Memory Leak" — causou ${enemyDamage} de dano!`, '#f00');
        updateHealth();
      }, 800);
    }
  }

  function restartGame() {
    playerHP = 100;
    enemyHP = 100;
    gameActive = true;
    document.getElementById('battle-log').innerHTML = '<div class="log-entry">🚀 Batalha iniciada! Sysadmin vs Kernel Panic!</div>';
    updateHealth();
    document.getElementById('restartBtn').style.display = 'none';
  }

  document.getElementById('restartBtn').addEventListener('click', restartGame);
</script>
</section>
