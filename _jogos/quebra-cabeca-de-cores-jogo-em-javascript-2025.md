---
layout: default
title: "Quebra-Cabeça de Cores: Jogo em JavaScript (2025)"
description: "Combine três ou mais blocos da mesma cor para marcar pontos. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks. Ideal para treinar."
date: 2025-10-14
author: "PioLinux"
categories: [jogos, javascript]
tags: [quebra-cabeca, jogo, javascript, cores, html]
permalink: /jogo-quebra-cabeca-cores/
---


<section>

<style>
  .color-puzzle-container {
    font-family: 'Courier New', monospace;
    background: #121212;
    color: #ddd;
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;
    max-width: 420px;
    margin: 30px auto;
    border: 1px solid #333;
    box-shadow: 0 0 10px rgba(128, 255, 0, 0.2);
  }
  .color-puzzle-title {
    color: #80ff00;
    font-size: 1.8em;
    margin-bottom: 20px;
    text-shadow: 0 0 5px #80ff00;
  }
  .color-puzzle-info {
    font-size: 1.1em;
    margin-bottom: 20px;
    color: #aaa;
  }
  .color-puzzle-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin: 20px auto;
    max-width: 300px;
  }
  .color-puzzle-tile {
    height: 80px;
    border: 2px solid #444;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #000;
    text-shadow: 0 0 2px #fff;
  }
  .color-puzzle-tile:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px currentColor;
  }
  .color-puzzle-tile.empty {
    background: #222;
    border: 2px dashed #555;
    cursor: default;
  }
  .color-puzzle-stats {
    font-size: 1.2em;
    margin: 20px 0;
    color: #80ff00;
  }
  .color-puzzle-message {
    font-size: 1.3em;
    font-weight: bold;
    margin: 20px 0;
    min-height: 30px;
    color: #4CAF50;
  }
  .color-puzzle-btn {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1.1em;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px;
    font-family: 'Courier New', monospace;
  }
  .color-puzzle-btn:hover {
    background: #388E3C;
  }
</style>

<div class="color-puzzle-container">
  <div class="color-puzzle-title">🎨 Color Puzzle Terminal</div>
  <p class="color-puzzle-info">Clique nas cores ao lado do espaço vazio para organizá-las em ordem.</p>
  <div class="color-puzzle-stats" id="stats">Movimentos: 0</div>
  <div class="color-puzzle-message" id="message">Organize as cores, sysadmin!</div>
  <div class="color-puzzle-board" id="board"></div>
  <button class="color-puzzle-btn" id="reset">🔁 Embaralhar Cores</button>
</div>

<script>
  // Cores inspiradas em temas de terminal: Dracula, Solarized, Nord, etc.
  const colors = [
    '#ff5555', // red
    '#50fa7b', // green
    '#f1fa8c', // yellow
    '#bd93f9', // purple
    '#ff79c6', // pink
    '#8be9fd', // cyan
    '#ffb86c', // orange
    '#50fa7b'  // green (repetido para fechar o ciclo visual)
  ];

  let board = [];
  let emptyPos = 8; // posição inicial vazia (última)
  let moves = 0;

  function initBoard() {
    board = [...colors, '']; // 8 cores + 1 vazio
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
    document.getElementById('message').textContent = 'Organize as cores, sysadmin!';
    document.getElementById('message').style.color = '#4CAF50';
  }

  function isSolvable() {
    let inversions = 0;
    const tiles = board.filter(x => x !== '');
    for (let i = 0; i < tiles.length; i++) {
      for (let j = i + 1; j < tiles.length; j++) {
        if (colors.indexOf(tiles[i]) > colors.indexOf(tiles[j])) inversions++;
      }
    }
    return inversions % 2 === 0;
  }

  function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    board.forEach((color, index) => {
      const tile = document.createElement('div');
      tile.classList.add('color-puzzle-tile');
      if (color === '') {
        tile.classList.add('empty');
      } else {
        tile.style.background = color;
        tile.textContent = ''; // ou use um ícone se quiser
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
    const isSolved = board.slice(0, 8).every((color, i) => color === colors[i]) && board[8] === '';
    if (isSolved) {
      document.getElementById('message').textContent = '🎉 Parabéns! Você trouxe ordem ao caos do terminal!';
      document.getElementById('message').style.color = '#80ff00';
    }
  }

  document.getElementById('reset').addEventListener('click', shuffleBoard);
  initBoard();
</script>

</section>
