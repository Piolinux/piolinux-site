---
layout: default
title: "Batalha por Turnos em JavaScript: RPG de Texto (2025)"
description: "Controle seu herói em uma batalha por turnos contra um monstro. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks."
date: 2025-10-20
author: "PioLinux"
categories: [jogos, javascript]
tags: [batalha, rpg, jogo, javascript, html]
permalink: /jogo-batalha-por-turnos/
---

<section>




<div class="game-container">
    <h2>22. Batalha por Turnos</h2>
    <p id="rpgBattleMessage">Uma batalha épica começou!</p>
    <div id="rpgBattleStats">
        <div>
            <h3>Herói</h3>
            <p>HP: <span id="heroHP">100</span></p>
        </div>
        <div>
            <h3>Monstro</h3>
            <p>HP: <span id="monsterHP">150</span></p>
        </div>
    </div>
    <div>
        <button onclick="heroAttack()">Atacar</button>
        <button onclick="heroHeal()">Curar</button>
    </div>
    <button onclick="resetRpgBattleGame()">Reiniciar</button>
</div>



<script>!function(){let t,o;const e=document.getElementById("heroHP"),n=document.getElementById("monsterHP"),a=document.getElementById("rpgBattleMessage");function u(){t&&(e.textContent=t.hp,n.textContent=o.hp)}function r(){if(!t)return;const o=Math.floor(15*Math.random())+5;t.hp-=o,a.textContent+=` O monstro te atacou e causou ${o} de dano!`,t.hp<=0&&(a.textContent="Você foi derrotado. Fim de jogo!",t=null),u()}window.heroAttack=function(){if(!t)return;const e=Math.floor(20*Math.random())+10;o.hp-=e,a.textContent=`Você atacou e causou ${e} de dano!`,o.hp<=0?(a.textContent="Você derrotou o monstro!",t=null):setTimeout(r,1e3),u()},window.heroHeal=function(){if(!t)return;const o=Math.floor(15*Math.random())+5;t.hp+=o,a.textContent=`Você se curou e recuperou ${o} de HP!`,setTimeout(r,1e3),u()},window.resetRpgBattleGame=function(){t={hp:100},o={hp:150},a.textContent="Uma nova batalha começou!",u()}}();</script>



</section>
