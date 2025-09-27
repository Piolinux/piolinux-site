---
layout: default
title: Biblioteca de Jogos em JavaScript: Código Puro, Sem Frameworks (2025)
description: 'Jogos feitos com HTML, CSS e JavaScript puro — sem frameworks. Ideal para aprender, modificar e compartilhar. Inclui Pong, Jokenpô, Adivinhe o Número e mais.'
author: "PioLinux"
categories: [jogos, javascript]
tags: [jogos, javascript, html, aprendizado, piolinux]
permalink: /biblioteca-de-jogos/
---

{% include toc.html %}

  <section class="post-content">
  




<style>
  .filtros {
    margin: 20px 0;
    text-align: center;
  }
  .filtros button {
    margin: 5px;
    padding: 10px 15px;
    border: 2px solid #80ff00;
    background: #80ff00;
    color: #0074d9;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }
  .filtros button.filtro-ativo {
    background: #008000;
    color: white;
  }
  .jogos-lista {
    display: grid;
    gap: 12px;
    margin-top: 20px;
  }
  .jogo {
    padding: 12px;
    background: #008000;
    border-left: 4px solid #0074d9;
    border-radius: 6px;
  }
  .jogo a {
    text-decoration: none;
    color: #0074d9;
    font-weight: 500;
  }
  .jogo a:hover {
    text-decoration: underline;
  }
</style>












<h2>🎮 Biblioteca de Jogos em JavaScript</h2>
<p>
  Uma coleção de jogos feitos com <strong>HTML, CSS e JavaScript puro</strong> — sem frameworks, sem dependências.  
  Só código claro, funcional e educativo.
</p>

<p><strong>Dica pro:</strong> Assim como o <a href="https://iterm2.com">iTerm2</a> moderniza o terminal no macOS, ou o <a href="https://ohmyz.sh">Oh My Zsh</a> transforma seu Zsh, esses jogos mostram o poder do JavaScript puro.</p>

<!-- Filtros -->
<div class="filtros" role="group" aria-label="Filtros de jogos">
  <button class="filtro-ativo" data-filter="todos">Todos</button>
  <button data-filter="classico">Clássicos</button>
  <button data-filter="logica">Lógica</button>
  <button data-filter="reacao">Reação</button>
  <button data-filter="memoria">Memória</button>
  <button data-filter="palavras">Palavras</button>
  <button data-filter="estrategia">Estratégia</button>
  <button data-filter="texto">Texto</button>
  <button data-filter="idle">Idle / Clicker</button>
  <button data-filter="musica">Música / Ritmo</button>
</div>

<!-- Lista de Jogos -->
<div class="jogos-lista" aria-label="Lista de jogos">
  <a href="/jogo-adivinhe-o-numero/" class="jogo" data-tags="adivinhacao logica">Adivinhe o Número</a>
  <a href="/jogo-jokenpo/" class="jogo" data-tags="sorte reacao">Jokenpô</a>
  <a href="/jogo-forca/" class="jogo" data-tags="palavras logica">Jogo da Forca</a>
  <a href="/jogo-da-memoria/" class="jogo" data-tags="memoria observacao">Jogo da Memória</a>
  <a href="/jogo-caca-ao-tesouro/" class="jogo" data-tags="logica exploracao">Caça ao Tesouro</a>
  <a href="/jogo-quebra-cabeca-deslizante/" class="jogo" data-tags="logica quebra-cabeca">Quebra-Cabeça Deslizante</a>
  <a href="/jogo-da-cobrinha/" class="jogo" data-tags="reacao classico">Jogo da Cobrinha</a>
  <a href="/jogo-digitação/" class="jogo" data-tags="velocidade texto">Jogo de Digitação</a>
  <a href="/jogo-corrida-de-carros/" class="jogo" data-tags="reacao classico">Corrida de Carros</a>
  <a href="/jogo-pong/" class="jogo" data-tags="reacao classico">Pong</a>
  <a href="/jogo-arkanoid/" class="jogo" data-tags="reacao classico">Arkanoid</a>
  <a href="/jogo-plataforma/" class="jogo" data-tags="plataforma reacao">Jogo de Plataforma</a>
  <a href="/jogo-nave-espacial/" class="jogo" data-tags="reacao espacial">Nave Espacial</a>
  <a href="/jogo-defesa-de-torre/" class="jogo" data-tags="estrategia defesa">Defesa de Torre</a>
  <a href="/jogo-blackjack/" class="jogo" data-tags="sorte cartas">Blackjack</a>
  <a href="/jogo-quiz/" class="jogo" data-tags="conhecimento quiz">Quiz</a>
  <a href="/jogo-rpg-de-texto/" class="jogo" data-tags="rpg texto">RPG de Texto</a>
  <a href="/jogo-labirinto-com-tempo/" class="jogo" data-tags="logica tempo">Labirinto com Tempo</a>
  <a href="/jogo-quebra-cabeca-cores/" class="jogo" data-tags="logica cores">Quebra-Cabeça de Cores</a>
  <a href="/jogo-cliques-ociosos/" class="jogo" data-tags="clicker idle">Jogo de Cliques Ociosos</a>
  <a href="/jogo-de-ritmo/" class="jogo" data-tags="ritmo musica">Jogo de Ritmo</a>
  <a href="/jogo-batalha-por-turnos/" class="jogo" data-tags="estrategia turno">Batalha por Turnos</a>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.filtros button');
    const jogos = document.querySelectorAll('.jogo');

    botoes.forEach(botao => {
      botao.addEventListener('click', function () {
        // Atualiza botão ativo
        botoes.forEach(b => b.classList.remove('filtro-ativo'));
        this.classList.add('filtro-ativo');

        const filtro = this.getAttribute('data-filter');

        // Filtra jogos
        jogos.forEach(jogo => {
          const tags = jogo.getAttribute('data-tags').toLowerCase();
          if (filtro === 'todos' || tags.includes(filtro)) {
            jogo.style.display = 'block';
          } else {
            jogo.style.display = 'none';
          }
        });
      });
    });
  });
</script>
