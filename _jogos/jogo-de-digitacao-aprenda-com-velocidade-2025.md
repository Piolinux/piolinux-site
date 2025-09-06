---
layout: default
title: "Jogo de Digitação: Aprenda com Velocidade (2025)"
description: "Teste sua velocidade de digitação. Digite a palavra o mais rápido que puder! Jogo feito com HTML, CSS e JavaScript puro — sem frameworks."
date: 2025-10-24
author: "PioLinux"
categories: [jogos, javascript]
tags: [digitação, jogo, javascript, teclado, html]
permalink: /jogo-digitação/
---

<section>


<h2>⌨️ Jogo de Digitação: Estilo Terminal</h2>
<p>Teste sua velocidade de digitação. Digite a frase exatamente como aparece. Quando acertar, outra frase aparece.</p>

<div class="terminal">
  <p id="frase"></p>
  <input type="text" id="entrada" autofocus placeholder="Digite aqui...">
  <div class="status">
    <p>Pontos: <span id="pontos">0</span></p>
    <p>Tempo: <span id="tempo">0</span>s</p>
    <p>Erros: <span id="erros">0</span></p>
  </div>
</div>

<script>
  // Frases para digitar (você pode adicionar mais)
  const frases = [
    "linux é o sistema operacional do futuro",
    "geany é um editor leve e poderoso",
    "terminal é onde a mágica acontece",
    "cd /home/piolinux",
    "sudo apt update && sudo apt upgrade",
    "git status",
    "ls -la",
    "echo 'olá, mundo!'",
    "man ls",
    "ps aux | grep python"
  ];

  let pontos = 0;
  let erros = 0;
  let tempo = 0;
  let timer;
  let fraseAtual = "";

  const fraseEl = document.getElementById("frase");
  const entradaEl = document.getElementById("entrada");
  const pontosEl = document.getElementById("pontos");
  const tempoEl = document.getElementById("tempo");
  const errosEl = document.getElementById("erros");

  // Escolhe uma frase aleatória
  function novaFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    fraseAtual = frases[indice];
    fraseEl.textContent = fraseAtual;
    entradaEl.value = "";
    entradaEl.focus();
  }

  // Inicia o cronômetro
  function iniciarTempo() {
    tempo = 0;
    tempoEl.textContent = tempo;
    clearInterval(timer);
    timer = setInterval(() => {
      tempo++;
      tempoEl.textContent = tempo;
    }, 1000);
  }

  // Reinicia o jogo
  function reset() {
    pontos = 0;
    erros = 0;
    tempo = 0;
    pontosEl.textContent = pontos;
    errosEl.textContent = erros;
    tempoEl.textContent = tempo;
    clearInterval(timer);
    novaFrase();
  }

  // Evento de digitação
  entradaEl.addEventListener("input", function () {
    const digitado = entradaEl.value;

    // Inicia o tempo na primeira tecla
    if (tempo === 0 && digitado.length === 1) {
      iniciarTempo();
    }

    // Verifica se a digitação está correta
    if (fraseAtual.startsWith(digitado)) {
      // Tudo certo
    } else {
      // Erro
      erros++;
      errosEl.textContent = erros;
      entradaEl.style.color = "#ff0000";
      setTimeout(() => {
        entradaEl.style.color = "#00ff00";
      }, 300);
    }

    // Acertou a frase inteira
    if (digitado === fraseAtual) {
      pontos++;
      pontosEl.textContent = pontos;
      setTimeout(() => {
        novaFrase();
      }, 500);
    }
  });

  // Reinicia com Enter
  entradaEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && entradaEl.value === "") {
      reset();
    }
  });

  // Começa com a primeira frase
  reset();
</script>




</section>
