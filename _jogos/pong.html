---
layout: default
title: "Pong Clássico em HTML: Jogo de Arcade com JavaScript"
description: "Jogue o clássico Pong! Use as setas para mover a barra e rebater a bolinha. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks." 
date: 2025-10-11
author: "PioLinux"
categories: [jogos, javascript]
tags: [pong, jogo, javascript, arcade, html]
permalink: /jogo-pong/
---

<section>


<div class="game-container">
    <h2>10. Pong</h2>
    <p>Use as setas para mover sua barra e rebater a bolinha.</p>
    <canvas id="pongCanvas" width="600" height="400"></canvas>
    <p>Placar: <span id="pongScore">0</span></p>
    <button onclick="resetPongGame()">Reiniciar</button>
</div>

</section>

<script>(function() {
    const canvas = document.getElementById("pongCanvas");
    const ctx = canvas.getContext("2d");

    let ball, playerPaddle, computerPaddle, score, gameLoop;

    // Constantes do jogo
    const WINNING_SCORE = 5;
    const AI_SPEED = 6; // Ajuste este valor para mudar a dificuldade da IA

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!ball) return;
        
        ctx.fillStyle = "white";
        // Desenha a raquete do jogador
        ctx.fillRect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height);
        // Desenha a raquete do computador
        ctx.fillRect(computerPaddle.x, computerPaddle.y, computerPaddle.width, computerPaddle.height);
        
        // Desenha a bola
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    function update() {
        if (!ball) return;
        
        // Move a bola
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;

        // Movimento da raquete do computador (IA)
        // A IA persegue a bola, mas com uma velocidade limitada (AI_SPEED)
        const targetY = ball.y - computerPaddle.height / 2;
        if (computerPaddle.y < targetY) {
            computerPaddle.y += AI_SPEED;
        } else if (computerPaddle.y > targetY) {
            computerPaddle.y -= AI_SPEED;
        }
        
        // Mantém a raquete do computador dentro dos limites da tela
        if (computerPaddle.y < 0) computerPaddle.y = 0;
        if (computerPaddle.y > canvas.height - computerPaddle.height) {
            computerPaddle.y = canvas.height - computerPaddle.height;
        }

        // Colisão da bola com as paredes superior e inferior
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
            ball.velocityY = -ball.velocityY;
        }

        // Colisão da bola com a raquete do jogador
        if (ball.x - ball.radius < playerPaddle.x + playerPaddle.width && 
            ball.y > playerPaddle.y && ball.y < playerPaddle.y + playerPaddle.height) {
            ball.velocityX = -ball.velocityX;
        }

        // Colisão da bola com a raquete do computador
        if (ball.x + ball.radius > computerPaddle.x &&
            ball.y > computerPaddle.y && ball.y < computerPaddle.y + computerPaddle.height) {
            ball.velocityX = -ball.velocityX;
        }

        // Lógica de pontuação e fim de jogo
        // Se a bola sai pela esquerda (jogador perdeu ponto)
        if (ball.x < 0) {
            alert("Ponto para o computador!");
            resetBall();
        }
        
        // Se a bola sai pela direita (jogador marcou ponto)
        if (ball.x > canvas.width) {
            score++;
            document.getElementById("pongScore").textContent = score;
            if (score >= WINNING_SCORE) {
                clearInterval(gameLoop);
                alert(`Fim de Jogo! Você venceu com ${score} pontos!`);
            } else {
                alert("Ponto seu!");
                resetBall();
            }
        }
        
        draw();
    }
    
    // Move a raquete do jogador
    document.addEventListener("keydown", (e => {
        if (!playerPaddle) return;
        if (e.key === "ArrowUp" && playerPaddle.y > 0) {
            playerPaddle.y -= 20;
        }
        if (e.key === "ArrowDown" && playerPaddle.y < canvas.height - playerPaddle.height) {
            playerPaddle.y += 20;
        }
    }));

    function resetBall() {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.velocityX = 5;
        ball.velocityY = Math.random() > 0.5 ? 5 : -5;
    }

    window.resetPongGame = function() {
        clearInterval(gameLoop);
        score = 0;
        document.getElementById("pongScore").textContent = score;

        ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 10, velocityX: 5, velocityY: 5 };
        playerPaddle = { x: 10, y: canvas.height / 2 - 50, width: 10, height: 100 };
        computerPaddle = { x: canvas.width - 20, y: canvas.height / 2 - 50, width: 10, height: 100 };

        gameLoop = setInterval(update, 20);
        draw();
    };

    // Inicia o jogo automaticamente ao carregar a página
    window.onload = window.resetPongGame;
})();</script>




