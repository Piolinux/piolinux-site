---
layout: default
title: "Ferramentas Técnicas Online — 100% no Navegador, 0% Setup "
description: "Gere comandos Docker, cron, chmod, IPs, senhas e mais — tudo online, sem cadastro, 100% grátis. Ideal para terminal, automação e sysadmin."
date: 2025-10-01
author: "PioLinux"
categories: [ferramentas, produtividade, online]
tags: [utilitarios, qrcode, pomodoro, tarefas, relogio, ferramentas]
permalink: /utilitarios-online/
---



{% include toc.html %}





<section>
<h2>🔧 Utilitários Online Úteis</h2>



</section>
 
  <!-- ❌ REMOVA O FORMULÁRIO DE CONTATO (inútil sem backend) -->

<section>
  <h2>🐧 Gerador de QR Code — Para Chaves SSH, Comandos, URLs</h2>
  <p>Útil para compartilhar comandos, chaves públicas ou URLs de repositórios. Cole no terminal com <code>Ctrl+Shift+V</code>.</p>
  <input id="qrtext" placeholder="Ex: ssh-ed25519 AAA... user@host" type="text" style="width: 100%; max-width: 500px; padding: 8px; background: #1a1a1a; color: #e0e0e0; border: 1px solid #333; border-radius: 4px; margin: 8px 0;">
  <button onclick="gerarQRCode()" style="background: #4caf50; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 8px 0;">Gerar QR Code</button>
  <div style="text-align: center; margin: 16px 0;">
    <canvas id="qrcodeCanvas" style="border: 1px solid #333; border-radius: 8px;"></canvas>
  </div>
  <p style="font-size: 0.9em; color: #8bc34a;"><strong>💡 Dica:</strong> Use para compartilhar sua chave SSH pública com colegas.</p>
</section>

<section>
  <h2>🐧 Copiar Comando — Um Clique, Zero Erro</h2>
  <p>Comandos prontos para colar no terminal. Nada de digitar — evite typos.</p>
  <pre style="background: #1a1a1a; padding: 12px; border-radius: 6px; overflow-x: auto;"><code id="codigo1">chmod 755 script.sh</code></pre>
  <button onclick="copiarCodigo('codigo1')" style="background: #2196F3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 8px 0;">📋 Copiar</button>
  
  <pre style="background: #1a1a1a; padding: 12px; border-radius: 6px; margin-top: 16px; overflow-x: auto;"><code id="codigo2">sudo systemctl restart nginx</code></pre>
  <button onclick="copiarCodigo('codigo2')" style="background: #2196F3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 8px 0;">📋 Copiar</button>
</section>

<section>
  <h2>🐧 Pomodoro Técnico — 25min de Foco, 5min de Shell</h2>
  <p>Configure seu foco para sessões de terminal, estudo ou configuração de sistema.</p>
  <div id="pomodoro" style="font-size: 2em; font-family: monospace; color: #8bc34a; margin: 16px 0;">25:00</div>
  <button onclick="iniciarPomodoro()" style="background: #ff9800; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 1.1em;">▶️ Iniciar Foco</button>
  <p style="font-size: 0.9em; color: #8bc34a;"><strong>💡 Dica:</strong> Use os 5min de pausa para checar <code>htop</code> ou ler logs.</p>
</section>

<section>
  <h2>🐧 Lista de Tarefas de Sysadmin</h2>
  <p>Adicione comandos, lembretes ou tarefas pendentes. Marque como feito — ou delete com 🗑️.</p>
  <input id="novaTarefa" placeholder="Ex: Verificar /var/log/syslog" type="text" style="width: 100%; max-width: 500px; padding: 8px; background: #1a1a1a; color: #e0e0e0; border: 1px solid #333; border-radius: 4px; margin: 8px 0;">
  <button onclick="adicionarTarefa()" style="background: #4caf50; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 8px 0;">➕ Adicionar</button>
  <ul id="listaTarefas" style="list-style: none; padding: 0; margin: 16px 0;">
    <!-- Tarefas aparecem aqui -->
  </ul>
</section>

<section>
  <h2>🐧 Calculadora de Sysadmin — Permissões, Subnets, Math</h2>
  <p>Calcule permissões octal, subnets, ou expressões matemáticas. Use <code>^</code> para potência.</p>
  <input id="expr" placeholder="Ex: 644, 2^10, 255-32" type="text" style="width: 100%; max-width: 500px; padding: 8px; background: #1a1a1a; color: #e0e0e0; border: 1px solid #333; border-radius: 4px; margin: 8px 0;">
  <button onclick="calcular()" style="background: #9c27b0; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 8px 0;">🧮 Calcular</button>
  <p id="resultado" style="font-size: 1.2em; font-family: monospace; margin: 16px 0;"></p>
  <p style="font-size: 0.9em; color: #8bc34a;"><strong>💡 Exemplos:</strong> <code>644</code> (octal), <code>2^20</code> (1MB em bytes), <code>255-32</code> (máscara de rede)</p>
</section>

<section>
  <h2>🐧 Relógio + Uptime — Estilo Terminal</h2>
  <p>Veja a hora e um uptime simulado — como num servidor Linux.</p>
  <div style="font-family: monospace; font-size: 1.5em; color: #8bc34a; margin: 16px 0;">
    <div id="clock"></div>
    <div id="uptime" style="margin-top: 8px;"></div>
  </div>
  <p style="font-size: 0.9em; color: #8bc34a;"><strong>🐧 Sysadmin mood:</strong> Seu sistema está estável — continue assim.</p>
</section>







   <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
<script>
// QR Code para SSH, Docker, URLs técnicas
function gerarQRCode() {
    let canvas = document.getElementById("qrcodeCanvas");
    let texto = document.getElementById("qrtext").value.trim();
    if (!texto) {
        alert("Digite um comando, URL ou chave SSH!");
        return;
    }
    QRCode.toCanvas(canvas, texto, { width: 200 }, error => {
        if (error) console.error(error);
    });
}

// Copiar comando técnico com feedback
function copiarCodigo(id) {
    const texto = document.getElementById(id).innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("✅ Comando copiado! Cole no terminal.");
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
        alert("❌ Falha ao copiar. Tente manualmente.");
    });
}

// Pomodoro para sessões de terminal (25min foco, 5min pausa)
let pomodoroTimer;
function iniciarPomodoro() {
    let tempo = 25 * 60; // 25 minutos
    clearInterval(pomodoroTimer);
    pomodoroTimer = setInterval(() => {
        let min = Math.floor(tempo / 60);
        let seg = tempo % 60;
        document.getElementById("pomodoro").innerText = `${min}:${seg < 10 ? '0' : ''}${seg}`;
        if (--tempo < 0) {
            clearInterval(pomodoroTimer);
            alert("⏰ Tempo esgotado! Faça uma pausa de 5 minutos.");
        }
    }, 1000);
}

// Lista de tarefas para sysadmins (comandos, lembretes)
function adicionarTarefa() {
    const input = document.getElementById("novaTarefa");
    const ul = document.getElementById("listaTarefas");
    if (input.value.trim()) {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${input.value}</span>
            <button onclick="this.parentElement.remove()" style="margin-left: 10px; background: #ff5252; color: white; border: none; padding: 2px 6px; border-radius: 4px; cursor: pointer;">🗑️</button>
        `;
        ul.appendChild(li);
        input.value = "";
    }
}

// Calculadora para expressões de permissões, subnets, etc.
function calcular() {
    const expr = document.getElementById("expr").value;
    try {
        // Permite cálculos úteis: 644 em octal, 2^10, etc.
        const res = eval(expr.replace(/\^/g, '**'));
        document.getElementById("resultado").innerText = `= ${res}`;
        document.getElementById("resultado").style.color = "#8bc34a";
    } catch {
        document.getElementById("resultado").innerText = "Expressão inválida!";
        document.getElementById("resultado").style.color = "#ff5252";
    }
}

// Relógio + uptime simulado (estilo terminal)
function atualizarRelogio() {
    const agora = new Date();
    const h = agora.getHours().toString().padStart(2, '0');
    const m = agora.getMinutes().toString().padStart(2, '0');
    const s = agora.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
    // Simula uptime (dias:horas:minutos)
    const uptime = "3d 14h 22m";
    document.getElementById("uptime").innerText = `uptime: ${uptime}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
</script>
