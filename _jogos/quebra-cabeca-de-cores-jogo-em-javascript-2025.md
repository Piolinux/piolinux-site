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


<h2>Quebra-Cabeça de Cores</h2>
<div class="game-container">
<h3>Pontuação: <span id="colorPuzzleScore">0</span></h3>
<p>Clique em um bloco e em um adjacente para trocá-los e fazer combinações de 3 ou mais!</p>
<canvas height="300" id="colorPuzzleCanvas" width="300"></canvas>
<button onclick="resetColorPuzzleGame()">Reiniciar Jogo</button>
</div>
