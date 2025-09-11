---
layout: default
title: "Jogo de Ritmo em JavaScript: Toque no Momento Certo (2025)"
description: "Acerte as notas com as teclas A, S, D, F. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks. Ideal para treinar reflexos."
date: 2025-10-13
author: "PioLinux"
categories: [jogos, javascript]
tags: [ritmo, jogo, javascript, música, html]
permalink: /jogo-de-ritmo/
---

<section>
<style>
  .ritmo-container {
    font-family: 'Courier New', monospace;
    background: #121212;
    color: #ddd;
    text-align: center;
    padding: 40px 20px;
    border-radius: 10px;
    max-width: 600px;
    margin: 30px auto;
    border: 1px solid #333;
  }
  .ritmo-title {
    color: #80ff00;
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  .ritmo-display {
    font-size: 3em;
    margin: 30px 0;
    color: #ffcc00;
    font-weight: bold;
  }
  .ritmo-score {
    font-size: 1.3em;
    margin: 10px 0;
    color: #80ff00;
  }
  .ritmo-feedback {
    font-size: 1.5em;
    font-weight: bold;
    margin: 20px 0;
    min-height: 30px;
    color: #4CAF50;
  }
  .ritmo-btn {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1.1em;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px;
  }
  .ritmo-btn:hover {
    background: #388E3C;
  }
</style>

<div class="ritmo-container">
  <div class="ritmo-title">🎮 Ritmo Terminal</div>
  <p>Pressione <strong>QUALQUER TECLA</strong> no ritmo do metrônomo (a cada 1s).</p>
  <div class="ritmo-display" id="display">▶️</div>
  <div class="ritmo-score" id="score">Pontos: 0</div>
  <div class="ritmo-feedback" id="feedback">Aguardando...</div>
  <button class="ritmo-btn" id="start">▶️ Começar</button>
  <button class="ritmo-btn" id="reset" style="display:none;">🔁 Reiniciar</button>
</div>

<script>
  let pontos = 0;
  let jogoAtivo = false;
  let ritmoAtivo = false;
  let intervalo;
  let tempoPressionavel = false;

  const display = document.getElementById('display');
  const score = document.getElementById('score');
  const feedback = document.getElementById('feedback');
  const startBtn = document.getElementById('start');
  const resetBtn = document.getElementById('reset');

  function iniciarJogo() {
    pontos = 0;
    jogoAtivo = true;
    startBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    feedback.textContent = 'Começando em 3...';
    feedback.style.color = '#80ff00';

    setTimeout(() => {
      feedback.textContent = '2...';
      setTimeout(() => {
        feedback.textContent = '1...';
        setTimeout(() => {
          feedback.textContent = 'Vai!';
          iniciarRitmo();
        }, 1000);
      }, 1000);
    }, 1000);
  }

  function iniciarRitmo() {
    ritmoAtivo = true;
    let contador = 0;

    intervalo = setInterval(() => {
      contador++;
      tempoPressionavel = true;

      display.textContent = '🟢';
      display.style.color = '#4CAF50';

      // Torna não-pressionável após 0.3s
      setTimeout(() => {
        if (tempoPressionavel) {
          tempoPressionavel = false;
          display.textContent = '🔴';
          display.style.color = '#f44336';
          pontos -= 1; // Penalidade por não pressionar
          atualizarScore();
        }
      }, 300);

    }, 1000);
  }

  function pressionarTecla() {
    if (!jogoAtivo || !ritmoAtivo) return;

    if (tempoPressionavel) {
      pontos += 1;
      feedback.textContent = '✅ Perfeito!';
      feedback.style.color = '#4CAF50';
    } else {
      pontos -= 1;
      feedback.textContent = '❌ Atrasado!';
      feedback.style.color = '#f44336';
    }

    tempoPressionavel = false;
    atualizarScore();
  }

  function atualizarScore() {
    score.textContent = `Pontos: ${pontos}`;
  }

  function reiniciarJogo() {
    clearInterval(intervalo);
    jogoAtivo = false;
    ritmoAtivo = false;
    display.textContent = '▶️';
    display.style.color = '#ffcc00';
    feedback.textContent = 'Aguardando...';
    feedback.style.color = '#80ff00';
    startBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
  }

  startBtn.addEventListener('click', iniciarJogo);
  resetBtn.addEventListener('click', reiniciarJogo);
  document.addEventListener('keydown', pressionarTecla);
</script>

</section>
