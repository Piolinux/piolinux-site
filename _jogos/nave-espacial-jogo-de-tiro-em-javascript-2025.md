---
layout: default
title: "Nave Espacial: Jogo de Tiro em JavaScript (2025)"
description: "Controle uma nave espacial e atire em inimigos neste jogo clássico. Feito com HTML, CSS e JavaScript puro — sem frameworks."
date: 2025-10-16
author: "PioLinux"
categories: [jogos, javascript]
tags: [nave, jogo, javascript, tiro, html]
permalink: /jogo-nave-espacial/
---


<h1>Nave Espacial</h1>
<div class="game-info">
<h3>Pontuação: <span id="spaceShooterScore">0</span></h3>
</div>
<div class="game-container">
<p>Use as setas para mover. A nave atira automaticamente nos inimigos!</p>
<canvas height="400" id="spaceShooterCanvas" width="400"></canvas>
<button onclick="resetSpaceShooterGame()">Reiniciar</button>
</div>
