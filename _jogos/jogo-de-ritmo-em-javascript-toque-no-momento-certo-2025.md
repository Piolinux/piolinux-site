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


<h1>Jogo de Ritmo</h1>
<div class="game-container">
<h3>Pontuação: <span id="rhythmScore">0</span></h3>
<p>Aperte as teclas A, S, D, F quando os quadrados azuis se alinharem com as bases cinzas.</p>
<canvas height="400" id="rhythmCanvas" width="400"></canvas>
<button onclick="resetRhythmGame()">Reiniciar Jogo</button>
</div>
<style>
    /* Estilos para o jogo de ritmo */
    .game-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    canvas {
        background-color: #111;
        border: 2px solid #ccc;
    }
    .game-container h3 {
        margin-bottom: 5px;
    }
</style>
