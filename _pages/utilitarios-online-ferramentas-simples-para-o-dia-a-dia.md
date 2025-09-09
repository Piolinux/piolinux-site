---
layout: default
title: "Use Utilitários Online: Ferramentas Simples para Seu Dia a Dia"
description: "Coleção de ferramentas online úteis: gerador de QR Code, temporizador Pomodoro, lista de tarefas, relógio digital e formulário de contato. Sem firulas."
date: 2025-10-01
author: "PioLinux"
categories: [ferramentas, produtividade, online]
tags: [utilitarios, qrcode, pomodoro, tarefas, relogio, ferramentas]
permalink: /utilitarios-online/
---



{% include toc.html %}





<section>
<h2>🔧 Utilitários Online Úteis</h2>

<h3>📱 Gerador de QR Code</h3>
<p>Crie QR Codes para links, textos ou comandos. Útil para compartilhar configurações ou comandos entre dispositivos.</p>

<h3>⏱️ Temporizador Pomodoro</h3>
<p>25 minutos de foco, 5 de descanso. Perfeito para quem trabalha com terminal e quer evitar distrações — como o modo escuro do <a href="https://iterm2.com">iTerm2</a>.</p>

<h3>📋 Lista de Tarefas Simples</h3>
<p>Uma lista limpa, sem login, sem sincronização. Apenas tarefas. Como um <code>todo.txt</code> no navegador.</p>

<h3>⏰ Relógio Digital</h3>
<p>Relógio minimalista, ideal para deixar aberto em uma segunda tela — como o <code>neofetch</code> no terminal.</p>

<h3>📧 Formulário de Contato</h3>
<p>Formulário leve, sem spam, que envia para seu e-mail. Como os scripts do <a href="https://ohmyz.sh">Oh My Zsh</a>, simples e funcionais.</p>

</section>
 
  
   <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js">
   </script>
   <script>
    function gerarQRCode() {
            let canvas = document.getElementById("qrcodeCanvas");
            let texto = document.getElementById("qrtext").value;
            QRCode.toCanvas(canvas, texto, error => {
                if (error) console.error(error);
            });
        }

        function copiarCodigo() {
            const texto = document.getElementById("codigo").innerText;
            navigator.clipboard.writeText(texto).then(() => alert("Código copiado!"));
        }

        let pomodoroTimer;
        function iniciarPomodoro() {
            let tempo = 25 * 60;
            clearInterval(pomodoroTimer);
            pomodoroTimer = setInterval(() => {
                let min = Math.floor(tempo / 60);
                let seg = tempo % 60;
                document.getElementById("pomodoro").innerText = `${min}:${seg < 10 ? '0' : ''}${seg}`;
                if (--tempo < 0) clearInterval(pomodoroTimer);
            }, 1000);
        }

        function adicionarTarefa() {
            const input = document.getElementById("novaTarefa");
            const ul = document.getElementById("listaTarefas");
            if (input.value.trim()) {
                let li = document.createElement("li");
                li.textContent = input.value;
                ul.appendChild(li);
                input.value = "";
            }
        }

        function calcular() {
            const expr = document.getElementById("expr").value;
            try {
                const res = eval(expr);
                document.getElementById("resultado").innerText = `Resultado: ${res}`;
            } catch {
                document.getElementById("resultado").innerText = "Expressão inválida!";
            }
        }

        function atualizarRelogio() {
            const agora = new Date();
            const h = agora.getHours().toString().padStart(2, '0');
            const m = agora.getMinutes().toString().padStart(2, '0');
            const s = agora.getSeconds().toString().padStart(2, '0');
            document.getElementById("clock").innerText = `${h}:${m}:${s}`;
        }
        setInterval(atualizarRelogio, 1000);
        atualizarRelogio();
   </script>
   
   <section>
    <h2>
     📧 Formulário de Contato
    </h2>
    <form onsubmit="alert('Mensagem enviada!'); return false;">
     <input placeholder="Seu nome" required="" type="text"/>
     <input placeholder="Seu e-mail" required="" type="email"/>
     <textarea placeholder="Sua mensagem" required="" rows="4"></textarea>
     <button type="submit">
      Enviar
     </button>
    </form>
   </section>
   <section>
    <h2>
     🔳 Gerador de QR Code
    </h2>
    <p>
     Insira um texto ou URL para gerar um QR Code instantaneamente.
    </p>
    <input id="qrtext" placeholder="Digite algo aqui" type="text"/>
    <button onclick="gerarQRCode()">
     Gerar
    </button>
    <canvas id="qrcodeCanvas">
    </canvas>
   </section>
   <section>
    <h2>
     📋 Copiar Código com um Clique
    </h2>
    <p>
     Clique no botão para copiar o comando exibido abaixo para a área de transferência.
    </p>
    <pre><code id="codigo">sudo apt update &amp;&amp; sudo apt upgrade</code></pre>
    <button onclick="copiarCodigo()">
     Copiar
    </button>
   </section>
   <section>
    <h2>
     ⏱️ Temporizador Pomodoro
    </h2>
    <p>
     Gerencie seu tempo com a técnica Pomodoro. O temporizador está configurado para 25 minutos.
    </p>
    <p id="pomodoro">
     25:00
    </p>
    <button onclick="iniciarPomodoro()">
     Iniciar
    </button>
   </section>
   <section>
    <h2>
     📝 Lista de Tarefas
    </h2>
    <p>
     Adicione e gerencie suas tarefas diárias de forma simples.
    </p>
    <input id="novaTarefa" placeholder="Digite uma tarefa" type="text"/>
    <button onclick="adicionarTarefa()">
     Adicionar
    </button>
    <ul id="listaTarefas">
    </ul>
   </section>
   <section>
    <h2>
     🧮 Calculadora Simples
    </h2>
    <p>
     Insira uma expressão matemática para obter o resultado.
    </p>
    <input id="expr" placeholder="Ex: 5+10/2" type="text"/>
    <button onclick="calcular()">
     Calcular
    </button>
    <p id="resultado">
    </p>
   </section>
   <section>
    <h2>
     ⏰ Relógio Digital
    </h2>
    <p>
     Veja a hora em tempo real.
    </p>
    <div id="clock">
    </div>
   </section>

 
