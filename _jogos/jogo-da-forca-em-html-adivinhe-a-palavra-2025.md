---
layout: default
title: "Jogo da Forca em HTML: Adivinhe a Palavra (2025)"
description: "Aprenda a jogar e como funciona o código por trás do Jogo da Forca. Feito com HTML, CSS e JavaScript puro — sem frameworks."
date: 2025-10-06
author: "PioLinux"
categories: [jogos, javascript]
tags: [forca, jogo, javascript, adivinhar, html]
permalink: /jogo-forca/
---






<section>

<div class="game-container">
    <h2>3. Jogo da Forca</h2>
    <!-- Jogo -->
<div style="font-family: 'Courier New', monospace; color: #80ff00; background: #000; padding: 20px; border: 1px solid #80ff00; border-radius: 8px; max-width: 800px; margin: 20px auto;">
  
  <!-- Forca ASCII -->
  <pre id="forca" style="font-size: 14px; line-height: 1; color: #80ff00;">
+--------+
|        |
|        
|        
|        
|        
|
+--------
  </pre>

  <!-- Palavra -->
  <h2 style="color: #80ff00; margin: 10px 0;">Palavra: <span id="palavra">_ _ _ _ _</span></h2>

  <!-- Letras adivinhadas -->
  <p><strong>Letras certas:</strong> <span id="certas"></span></p>
  <p><strong>Letras erradas:</strong> <span id="erradas"></span></p>

  <!-- Entrada -->
  <div style="margin: 20px 0;">
    <input 
      id="letra" 
      type="text" 
      maxlength="1" 
      placeholder="Digite uma letra" 
      style="
        padding: 10px;
        font-family: 'Courier New', monospace;
        background: #000;
        color: #80ff00;
        border: 1px solid #80ff00;
        border-radius: 4px;
        width: 200px;
      "
      autofocus
    />
    <button 
      id="chutar" 
      style="
        background: #000;
        color: #80ff00;
        border: 1px solid #80ff00;
        padding: 10px 15px;
        font-family: 'Courier New', monospace;
        cursor: pointer;
        border-radius: 4px;
        margin-left: 10px;
      "
    >▶ CHUTAR</button>
  </div>

  <!-- Mensagem -->
  <p id="mensagem" style="color: #a8ffa8; min-height: 20px;"></p>

  <!-- Botão reiniciar -->
  <button 
    id="reiniciar" 
    style="
      background: #000;
      color: #80ff00;
      border: 1px solid #80ff00;
      padding: 10px 15px;
      font-family: 'Courier New', monospace;
      cursor: pointer;
      border-radius: 4px;
      display: none;
    "
  >🔁 JOGAR NOVAMENTE</button>

</div>
<!-- Instruções -->
<p style="font-size: 0.9em; color: #a8ffa8; text-align: center;">
  Dicas: as palavras são sobre Linux, comandos, redes, segurança e programação.
</p>

{% raw %}
<script>
  // Banco de palavras
  const palavras = [
    'LINUX', 'TERMINAL', 'BASH', 'KERNEL', 'FIREWALL',
    'SCRIPT', 'CODIGO', 'COMANDO', 'REDE', 'SERVIDOR',
    'JAVASCRIPT', 'HTML', 'SSH', 'ROOT', 'SUDO',
    'DISTRO', 'OPENBSD', 'QUBES', 'KERNEL', 'HACKER'
  ];

  // Elementos
  const inputLetra = document.getElementById('letra');
  const botaoChutar = document.getElementById('chutar');
  const botaoReiniciar = document.getElementById('reiniciar');
  const spanPalavra = document.getElementById('palavra');
  const spanCertas = document.getElementById('certas');
  const spanErradas = document.getElementById('erradas');
  const mensagem = document.getElementById('mensagem');
  const preForca = document.getElementById('forca');

  // Estado do jogo
  let palavraSecreta = '';
  let letrasCertas = [];
  let letrasErradas = [];
  let maxErros = 6;

  // Desenho da forca em ASCII (6 estágios)
  const desenhosForca = [
    `+--------+
|        |
|        
|        
|        
|        
|
+--------+`,
    `+--------+
|        |
|        O
|        
|        
|        
|
+--------+`,
    `+--------+
|        |
|        O
|        |
|        
|        
|
+--------+`,
    `+--------+
|        |
|        O
|       /|
|        
|        
|
+--------+`,
    `+--------+
|        |
|        O
|       /|\\
|        
|        
|
+--------+`,
    `+--------+
|        |
|        O
|       /|\\
|       /
|        
|
+--------+`,
    `+--------+
|        |
|        O
|       /|\\
|       / \\
|        
|
+--------+`
  ];

</section>



  // Escolhe palavra aleatória
  function escolherPalavra() {
    const index = Math.floor(Math.random() * palavras.length);
    palavraSecreta = palavras[index];
    letrasCertas = Array(palavraSecreta.length).fill('_');
    letrasErradas = [];
    atualizarTela();
  }

  // Atualiza a interface
  function atualizarTela() {
    spanPalavra.textContent = letrasCertas.join(' ');
    spanCertas.textContent = letrasCertas.filter(l => l !== '_').join(', ');
    spanErradas.textContent = letrasErradas.join(', ');
    preForca.textContent = desenhosForca[letrasErradas.length];
    mensagem.textContent = '';

    // Verifica vitória/derrota
    if (letrasCertas.every(l => l !== '_')) {
      mensagem.textContent = `✅ Parabéns! A palavra era: ${palavraSecreta}`;
      mensagem.style.color = '#00ff00';
      fimDeJogo();
    }

    if (letrasErradas.length >= maxErros) {
      mensagem.textContent = `❌ Você perdeu! A palavra era: ${palavraSecreta}`;
      mensagem.style.color = '#ff0000';
      fimDeJogo();
    }
  }

  // Processa chute
  function chutarLetra() {
    const letra = inputLetra.value.trim().toUpperCase();
    inputLetra.value = '';
    inputLetra.focus();

    if (!letra || letra.length !== 1 || !/[A-Z]/.test(letra)) {
      mensagem.textContent = 'Digite uma letra válida.';
      mensagem.style.color = '#ffcc00';
      return;
    }

    if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) {
      mensagem.textContent = 'Você já chutou essa letra.';
      mensagem.style.color = '#ffcc00';
      return;
    }

    if (palavraSecreta.includes(letra)) {
      // Letra correta
      for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
          letrasCertas[i] = letra;
        }
      }
    } else {
      // Letra errada
      letrasErradas.push(letra);
    }

    atualizarTela();
  }

  // Fim de jogo
  function fimDeJogo() {
    inputLetra.disabled = true;
    botaoChutar.disabled = true;
    botaoReiniciar.style.display = 'inline-block';
  }

  // Reiniciar jogo
  function reiniciar() {
    inputLetra.disabled = false;
    botaoChutar.disabled = false;
    botaoReiniciar.style.display = 'none';
    escolherPalavra();
  }

  // Eventos
  botaoChutar.addEventListener('click', chutarLetra);
  inputLetra.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      chutarLetra();
    }
  });
  botaoReiniciar.addEventListener('click', reiniciar);

  // Inicia o jogo
  escolherPalavra();
</script>
{% endraw %}








