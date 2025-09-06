---
layout: default
title: "Corrida de Carros em JavaScript: Jogo Clássico (2025)"
description: "Use as setas do teclado para controlar o carro e evitar obstáculos. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks."
date: 2025-10-09
author: "PioLinux"
categories: [jogos, javascript]
tags: [corrida, carro, jogo, javascript, html]
permalink: /jogo-corrida-de-carros/
---

<section>



    <h2>9. Corrida de Carros</h2>

<!-- Canvas do jogo -->
<canvas 
  id="jogo" 
  width="800" 
  height="500" 
  style="
    background: #000;
    border: 1px solid #80ff00;
    display: block;
    margin: 20px auto;
    image-rendering: pixelated;
  "
></canvas>

<!-- Painel -->
<div style="text-align: center; margin-bottom: 20px; font-family: 'Courier New', monospace; color: #80ff00;">
  <strong>Distância:</strong> <span id="pontos">0</span> km |
  <strong>Vidas:</strong> <span id="vidas">3</span> |
  <button 
    id="reiniciar" 
    style="
      background: #000;
      color: #80ff00;
      border: 1px solid #80ff00;
      padding: 8px 12px;
      font-family: 'Courier New', monospace;
      cursor: pointer;
      border-radius: 4px;
      margin-left: 10px;
    "
  >🔁 REINICIAR</button>
</div>

<!-- Instruções -->
<p style="font-size: 0.9em; color: #a8ffa8; text-align: center;">
  ▶ Use as setas ← → para mover.<br>
  ▶ Evite os carros inimigos.<br>
  ▶ Se bater 3 vezes, o sistema trava.
</p>

{% raw %}
<script>
  // Elementos
  const canvas = document.getElementById('jogo');
  const ctx = canvas.getContext('2d');
  const elPontos = document.getElementById('pontos');
  const elVidas = document.getElementById('vidas');
  const botaoReiniciar = document.getElementById('reiniciar');

  // Estado do jogo
  let pontos = 0;
  let vidas = 3;
  let gameOver = false;

  // Carro do jogador
  const carro = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    largura: 40,
    altura: 60,
    velocidade: 5
  };

  // Estrada
  const estrada = {
    x: 150,
    largura: 500,
    raiaLargura: 20
  };

  // Inimigos
  let inimigos = [];

  // Controles
  const teclas = {
    ArrowLeft: false,
    ArrowRight: false
  };

  // Gera inimigo
  function criarInimigo() {
    if (gameOver) return;
    const posicoes = [estrada.x + 60, estrada.x + 160, estrada.x + 260, estrada.x + 360];
    const x = posicoes[Math.floor(Math.random() * posicoes.length)];
    inimigos.push({
      x,
      y: -60,
      largura: 40,
      altura: 60,
      velocidade: 3 + Math.random() * 2
    });
  }

  // Desenha estrada
  function desenharEstrada() {
    // Fundo da estrada
    ctx.fillStyle = '#333';
    ctx.fillRect(estrada.x, 0, estrada.largura, canvas.height);

    // Raia central
    ctx.strokeStyle = '#80ff00';
    ctx.lineWidth = 5;
    ctx.setLineDash([50, 30]);
    ctx.beginPath();
    ctx.moveTo(estrada.x + estrada.largura / 2, 0);
    ctx.lineTo(estrada.x + estrada.largura / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Raia laterais
    ctx.lineWidth = 2;
    for (let i = 1; i <= 3; i++) {
      const x = estrada.x + i * 100;
      ctx.beginPath();
      ctx.setLineDash([20, 20]);
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    ctx.setLineDash([]);
  }

  // Desenha carro do jogador
  function desenharCarro() {
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(carro.x, carro.y, carro.largura, carro.altura);

    // Janelas
    ctx.fillStyle = '#000';
    ctx.fillRect(carro.x + 5, carro.y + 10, 10, 10);
    ctx.fillRect(carro.x + 25, carro.y + 10, 10, 10);
  }

  // Desenha inimigos
  function desenharInimigos() {
    inimigos.forEach(inimigo => {
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);

      // Janelas
      ctx.fillStyle = '#000';
      ctx.fillRect(inimigo.x + 5, inimigo.y + 10, 10, 10);
      ctx.fillRect(inimigo.x + 25, inimigo.y + 10, 10, 10);
    });
  }

  // Verifica colisão
  function colisao(a, b) {
    return a.x < b.x + b.largura &&
           a.x + a.largura > b.x &&
           a.y < b.y + b.altura &&
           a.y + a.altura > b.y;
  }

  // Atualiza jogo
  function atualizar() {
    if (gameOver) return;

    // Limpa
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha
    desenharEstrada();
    desenharCarro();
    desenharInimigos();

    // Movimento do carro
    if (teclas.ArrowLeft && carro.x > estrada.x) {
      carro.x -= carro.velocidade;
    }
    if (teclas.ArrowRight && carro.x < estrada.x + estrada.largura - carro.largura) {
      carro.x += carro.velocidade;
    }

    // Atualiza inimigos
    inimigos = inimigos.filter(inimigo => {
      inimigo.y += inimigo.velocidade;

      // Colisão com jogador
      if (colisao(carro, inimigo)) {
        inimigo.y = canvas.height; // remove
        vidas--;
        elVidas.textContent = vidas;
        if (vidas <= 0) {
          fimDeJogo();
        }
        return false;
      }

      return inimigo.y < canvas.height;
    });

    // Atualiza pontos
    pontos++;
    elPontos.textContent = Math.floor(pontos / 50);

    // Próximo frame
    requestAnimationFrame(atualizar);
  }

  // Fim de jogo
  function fimDeJogo() {
    gameOver = true;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff0000';
    ctx.font = '40px monospace';
    ctx.fillText('SISTEMA TRAVADO', 120, 250);
  }

  // Eventos de teclado
  window.addEventListener('keydown', (e) => {
    if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
      teclas[e.key] = true;
      e.preventDefault();
    }
  });

  window.addEventListener('keyup', (e) => {
    if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
      teclas[e.key] = false;
    }
  });

  // Evento: reiniciar
  botaoReiniciar.addEventListener('click', function() {
    pontos = 0;
    vidas = 3;
    inimigos = [];
    gameOver = false;
    elPontos.textContent = '0';
    elVidas.textContent = '3';
    carro.x = canvas.width / 2;
  });

  // Spawna inimigos
  setInterval(criarInimigo, 2000);

  // Inicia o jogo
  atualizar();
</script>
{% endraw %}


</section>
