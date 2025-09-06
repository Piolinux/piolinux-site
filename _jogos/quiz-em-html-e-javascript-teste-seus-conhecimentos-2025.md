---
layout: default
title: "Quiz em HTML e JavaScript: Teste seus Conhecimentos (2025)"
description: "Responda a perguntas para testar seus conhecimentos. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks. Ideal para aprender lógica."
date: 2025-10-15
author: "PioLinux"
categories: [jogos, javascript]
tags: [quiz, jogo, javascript, perguntas, html]
permalink: /jogo-quiz/
---

<section>








<div class="game-container">
    <h2>16. Quiz</h2>
    <p id="quizQuestion">Clique em "Iniciar" para começar.</p>
    <div id="quizOptions"></div>
    <p id="quizResult"></p>
    <button onclick="startQuizGame()">Iniciar</button>
</div>


<script>!function(){const o=[{q:"Qual a capital da França?",a:"Paris",options:["Berlim","Roma","Paris","Madri"]},{q:"Qual o maior planeta do nosso Sistema Solar?",a:"Júpiter",options:["Marte","Vênus","Júpiter","Saturno"]},{q:"Quem pintou a Mona Lisa?",a:"Leonardo da Vinci",options:["Pablo Picasso","Vincent van Gogh","Leonardo da Vinci","Claude Monet"]},{q:"Em que ano o Brasil foi descoberto?",a:"1500",options:["1492","1500","1520","1600"]},{q:"Quantos estados tem o Brasil?",a:"26",options:["27","25","26","28"]},{q:"Qual o símbolo químico para o ouro?",a:"Au",options:["Ag","O","Au","Pb"]},{q:"Qual o maior oceano do mundo?",a:"Oceano Pacífico",options:["Oceano Atlântico","Oceano Índico","Oceano Ártico","Oceano Pacífico"]},{q:"Quem escreveu 'O Pequeno Príncipe'?",a:"Antoine de Saint-Exupéry",options:["Machado de Assis","Antoine de Saint-Exupéry","Fernando Pessoa","J.K. Rowling"]},{q:"Qual a raiz quadrada de 144?",a:"12",options:["10","14","12","11"]},{q:"Qual animal é conhecido como o 'rei da selva'?",a:"Leão",options:["Tigre","Leão","Elefante","Gorila"]},{q:"Qual a maior cordilheira do mundo?",a:"Andes",options:["Himalaia","Montanhas Rochosas","Andes","Cordilheira dos Alpes"]},{q:"Quem inventou a lâmpada elétrica?",a:"Thomas Edison",options:["Nikola Tesla","Thomas Edison","Albert Einstein","Marie Curie"]}];let n;const a=document.getElementById("quizQuestion"),e=document.getElementById("quizOptions"),t=document.getElementById("quizResult");function i(){if(n>=o.length)return t.textContent="Parabéns, você completou o quiz!",a.textContent="",void(e.innerHTML="");const s=o[n];a.textContent=s.q,e.innerHTML="",s.options.forEach((o=>{const a=document.createElement("button");a.textContent=o,a.onclick=()=>{o===s.a?(t.textContent="Correto!",n++,setTimeout(i,1e3)):t.textContent="Incorreto, tente novamente."},e.appendChild(a)}))}window.startQuizGame=function(){n=0,t.textContent="",i()},startQuizGame()}();</script>



</section>

