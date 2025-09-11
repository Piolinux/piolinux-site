---
layout: default
title: "Quebra-Cabeça Deslizante: Jogo em JavaScript (2025)"
description: "Resolva o quebra-cabeça deslizante movendo as peças. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks. Ideal para treinar lógica."
date: 2025-10-19
author: "PioLinux"
categories: [jogos, javascript]
tags: [quebra-cabeca, deslizante, jogo, javascript, html]
permalink: /jogo-quebra-cabeca-deslizante/
---

<section>


<style>
  .puzzle-container {
    font-family: 'Courier New', monospace;
    background: #121212;
    color: #ddd;
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;
    max-width: 400px;
    margin: 30px auto;
    border: 1px solid #333;
  }
  .puzzle-title {
    color: #80ff00;
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  .puzzle-info {
    font-size: 1.1em;
    margin-bottom: 20px;
  }
  .puzzle-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin: 20px auto;
    max-width: 300px;
  }
  .puzzle-tile {
    height: 80px;
    background: #1e1e1e;
    border: 2px solid #444;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8em;
    cursor: pointer;
    color: #80ff00;
    transition: all 0.2s ease;
  }
  .puzzle-tile:hover {
    background: #2a2a2a;
    transform: scale(1.05);
  }
  .puzzle-tile.empty {
    background: #333;
    cursor: default;
  }
  .puzzle-stats {
    font-size: 1.2em;
    margin: 20px 0;
    color: #80ff00;
  }
  .puzzle-message {
    font-size: 1.3em;
    font-weight: bold;
    margin: 20px 0;
    min-height: 30px;
    color: #4CAF50;
  }
  .puzzle-btn {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1.1em;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px;
  }
  .puzzle-btn:hover {
    background: #388E3C;
  }
</style>

<div class="puzzle-container">
  <div class="puzzle-title">🧩 Terminal Slide Puzzle</div>
  <p class="puzzle-info">Clique nas peças ao lado do espaço vazio para organizá-las.</p>
  <div class="puzzle-stats" id="stats">Movimentos: 0</div>
  <div class="puzzle-message" id="message">Bom jogo, sysadmin!</div>
  <div class="puzzle-board" id="board"></div>
  <button class="puzzle-btn" id="reset">🔁 Embaralhar</button>
</div>

<script>
  // Ícones inspirados em Oh My Zsh, iTerm2, Windows Terminal
  const icons = ['⚡', '🐧', '🐙', '💾', '🚀', '🔧', '📁', '⌨️'];
  let board = [];
  let emptyPos = 8; // posição inicial vazia (última)
  let moves = 0;

  function initBoard() {
    board = [...icons, '']; // 8 ícones + 1 vazio
    emptyPos = 8;
    moves = 0;
    updateStats();
    renderBoard();
  }

  function shuffleBoard() {
    // Embaralha até o estado ser solucionável
    do {
      for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
      }
      emptyPos = board.indexOf('');
    } while (!isSolvable());

    moves = 0;
    updateStats();
    renderBoard();
    document.getElementById('message').textContent = 'Bom jogo, sysadmin!';
    document.getElementById('message').style.color = '#4CAF50';
  }

  function isSolvable() {
    let inversions = 0;
    const tiles = board.filter(x => x !== '');
    for (let i = 0; i < tiles.length; i++) {
      for (let j = i + 1; j < tiles.length; j++) {
        if (tiles[i] > tiles[j]) inversions++;
      }
    }
    return inversions % 2 === 0;
  }

  function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    board.forEach((icon, index) => {
      const tile = document.createElement('div');
      tile.classList.add('puzzle-tile');
      if (icon === '') {
        tile.classList.add('empty');
      } else {
        tile.textContent = icon;
      }
      tile.dataset.index = index;
      tile.addEventListener('click', () => moveTile(index));
      boardElement.appendChild(tile);
    });
  }

  function moveTile(index) {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyPos / 3);
    const emptyCol = emptyPos % 3;

    // Verifica se é adjacente ao espaço vazio
    if (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    ) {
      // Troca
      [board[index], board[emptyPos]] = [board[emptyPos], board[index]];
      emptyPos = index;
      moves++;
      updateStats();
      renderBoard();
      checkWin();
    }
  }

  function updateStats() {
    document.getElementById('stats').textContent = `Movimentos: ${moves}`;
  }

  function checkWin() {
    const isSolved = board.slice(0, 8).every((icon, i) => icon === icons[i]) && board[8] === '';
    if (isSolved) {
      document.getElementById('message').textContent = '🎉 Parabéns! Você organizou seu terminal como um Terminal Master!';
      document.getElementById('message').style.color = '#80ff00';
    }
  }

  document.getElementById('reset').addEventListener('click', shuffleBoard);
  initBoard();
</script>


</section>


