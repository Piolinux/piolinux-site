---
layout: default
title: "Jogo da Memória: Treine sua Concentração (2025)"
description: "Encontre os pares de cartas neste jogo da memória clássico. Feito com HTML, CSS e JavaScript puro — sem frameworks. Exercitar a mente."
date: 2025-10-12
author: "PioLinux"
categories: [jogos, javascript]
tags: [memória, jogo, javascript, cartas, html]
permalink: /jogo-da-memoria/
---

<section>
<style>
  .memoria-container {
    font-family: 'Courier New', monospace;
    background: #121212;
    color: #ddd;
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;
    max-width: 500px;
    margin: 30px auto;
    border: 1px solid #333;
  }
  .memoria-title {
    color: #80ff00;
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  .memoria-info {
    font-size: 1.1em;
    margin-bottom: 20px;
  }
  .memoria-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 20px auto;
    max-width: 400px;
  }
  .memoria-card {
    height: 60px;
    background: #1e1e1e;
    border: 2px solid #444;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    cursor: pointer;
    color: #80ff00;
    transition: all 0.3s ease;
  }
  .memoria-card:hover {
    background: #2a2a2a;
  }
  .memoria-card.flipped {
    background: #2a2a2a;
    transform: scale(1.05);
  }
  .memoria-card.matched {
    background: #388E3C;
    color: #fff;
    cursor: default;
  }
  .memoria-stats {
    font-size: 1.2em;
    margin: 20px 0;
    color: #80ff00;
  }
  .memoria-message {
    font-size: 1.3em;
    font-weight: bold;
    margin: 20px 0;
    min-height: 30px;
    color: #4CAF50;
  }
  .memoria-btn {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1.1em;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px;
  }
  .memoria-btn:hover {
    background: #388E3C;
  }
</style>

<div class="memoria-container">
  <div class="memoria-title">🧠 Memória Terminal</div>
  <p class="memoria-info">Encontre os pares de comandos e ícones do terminal.</p>
  <div class="memoria-stats" id="stats">Movimentos: 0</div>
  <div class="memoria-message" id="message">Bom jogo, sysadmin!</div>
  <div class="memoria-board" id="board"></div>
  <button class="memoria-btn" id="reset">🔁 Reiniciar Jogo</button>
</div>

<script>
  // Ícones/Comandos inspirados em Oh My Zsh, iTerm2, Windows Terminal
  const icons = ['⚡', '💾', '🐧', '🐙', '🚀', '🔧', '📁', '⌨️'];
  let cards = [...icons, ...icons];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let moves = 0;

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    shuffle(cards);
    cards.forEach((icon, index) => {
      const card = document.createElement('div');
      card.classList.add('memoria-card');
      card.dataset.icon = icon;
      card.dataset.index = index;
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    });
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.icon;

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    moves++;
    document.getElementById('stats').textContent = `Movimentos: ${moves}`;
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
    checkWin();
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      firstCard.textContent = '';
      secondCard.textContent = '';
      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }

  function checkWin() {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === cards.length) {
      document.getElementById('message').textContent = '🎉 Parabéns! Você é um Terminal Master!';
      document.getElementById('message').style.color = '#80ff00';
    }
  }

  function resetGame() {
    moves = 0;
    document.getElementById('stats').textContent = 'Movimentos: 0';
    document.getElementById('message').textContent = 'Bom jogo, sysadmin!';
    document.getElementById('message').style.color = '#4CAF50';
    createBoard();
  }

  document.getElementById('reset').addEventListener('click', resetGame);
  createBoard();
</script>

</section>
