---
layout: default
title: "Labirinto com Tempo em JavaScript: Jogo de Velocidade"
description: "Encontre a saída do labirinto antes que o tempo acabe. Use as setas do teclado. Jogo feito com HTML, CSS e JavaScript puro — sem frameworks."
date: 2025-10-05
author: "PioLinux"
categories: [jogos, javascript]
tags: [labirinto, jogo, javascript, tempo, html]
permalink: /jogo-labirinto-com-tempo/
---

<h2>18. Labirinto com Tempo</h2>
  
<section>

<p>
  Você é um <strong>hacker do tempo</strong>, enviado para corrigir falhas no código da realidade.<br>
  Use comandos fictícios, escolha seu caminho e evite os <strong>antivírus temporais</strong>.<br>
  Estilo terminal Linux. Escolha seu destino.
</p>

<!-- Terminal -->
<div id="terminal" style="
  background: #000;
  color: #80ff00;
  font-family: 'Courier New', monospace;
  padding: 20px;
  border: 1px solid #80ff00;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 800px;
  min-height: 400px;
  max-height: 600px;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(128, 255, 0, 0.3);
">
  <div id="historia"></div>
</div>

<!-- Input -->
<input 
  id="cmd" 
  type="text" 
  placeholder="Digite um comando..." 
  style="
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: block;
    padding: 12px;
    font-family: 'Courier New', monospace;
    background: #000;
    color: #80ff00;
    border: 1px solid #80ff00;
    border-radius: 4px;
    outline: none;
  "
  autofocus
/>

<script>
  const terminal = document.getElementById('historia');
  const input = document.getElementById('cmd');

  // Estado do jogo
  let local = 'nave';
  let tempo = 'desconhecido';
  let inventario = [];
  let conhecidos = [];

  // Função para adicionar linha
  function print(texto) {
    const linha = document.createElement('div');
    linha.innerHTML = texto;
    terminal.appendChild(linha);
    terminal.scrollTop = terminal.scrollHeight;
  }

  // Comandos disponíveis
  function ajuda() {
    print(`
<strong>Comandos disponíveis:</strong><br>
<strong>ir [lugar]</strong> - Vá para outro local<br>
<strong>usar [item]</strong> - Use um item<br>
<strong>olhar</strong> - Veja detalhes do local<br>
<strong>inventario</strong> - Veja seus itens<br>
<strong>ajuda</strong> - Mostra comandos
    `);
  }

  // Descrição dos locais
  function descrever(local, tempo) {
    if (local === 'nave' && tempo === 'desconhecido') {
      print(`
<strong>Nave do Tempo</strong><br>
Você está na cabine de comando da <strong>Nave Chronos</strong>.<br>
Telas verdes piscam com código antigo.<br>
O sistema pede: <strong>"Escolha uma era: 90s, 2000, 2025"</strong>
      `);
    }
    else if (local === '90s') {
      print(`
<strong>São Paulo - 1998</strong><br>
Cabine de LAN House.<br>
Um <strong>CD do Slackware Linux</strong> está no drive.<br>
Um papel com a senha: <strong>"root: abacaxi32"</strong><br>
No canto, um cartaz: <strong>"Conheça a Internet!"</strong>
      `);
    }
    else if (local === '2000') {
      print(`
<strong>Escritório - 2004</strong><br>
Computadores com Windows XP.<br>
Uma tela exibe: <strong>"Falha no firewall. Hacker no sistema."</strong><br>
Um pendrive está na porta USB. Rotulado: <strong>"Backup - NÃO TOCAR"</strong>
      `);
    }
    else if (local === '2025') {
      print(`
<strong>Centro de Dados - 2025</strong><br>
Sala com servidores quânticos.<br>
Um log mostra: <strong>"Ameaça temporal detectada. Origem: 1998"</strong><br>
Uma IA diz: <strong>"Você precisa corrigir o passado."</strong>
      `);
    }
    else {
      print(`Local desconhecido. Use 'ir' para viajar.`);
    }
  }

  // Processa comando
  function executar(cmd) {
    const args = cmd.trim().toLowerCase().split(' ');
    const comando = args[0];

    print(`<strong>> ${cmd}</strong>`);

    if (!comando) return;

    switch (comando) {
      case 'ajuda':
      case 'help':
        ajuda();
        break;

      case 'olhar':
        descrever(local, tempo);
        break;

      case 'inventario':
        if (inventario.length === 0) {
          print('Seu inventário está vazio.');
        } else {
          print('<strong>Itens:</strong> ' + inventario.join(', '));
        }
        break;

      case 'ir':
        const destino = args[1];
        if (!destino) {
          print('Ir para onde? Ex: <strong>ir 90s</strong>');
          return;
        }

        if (destino === '90s' && !conhecidos.includes('90s')) {
          print('Você ativa a nave e viaja no tempo...');
          local = '90s';
          tempo = '1998';
          conhecidos.push('90s');
          descrever(local, tempo);
        }
        else if (destino === '2000' && conhecidos.includes('90s')) {
          print('Você viaja para o ano 2004...');
          local = '2000';
          tempo = '2004';
          conhecidos.push('2000');
          descrever(local, tempo);
        }
        else if (destino === '2025' && conhecidos.includes('2000')) {
          print('Você viaja para o futuro...');
          local = '2025';
          tempo = '2025';
          conhecidos.push('2025');
          descrever(local, tempo);
        }
        else if (destino === 'nave') {
          print('Você retorna para a nave do tempo.');
          local = 'nave';
          tempo = 'desconhecido';
          descrever(local, tempo);
        }
        else {
          print(`Você não pode ir para <strong>${destino}</strong> agora.`);
          if (destino === '2000') {
            print('Primeiro, visite os anos 90.');
          }
          if (destino === '2025') {
            print('Primeiro, resolva o problema em 2004.');
          }
        }
        break;

      case 'usar':
        const item = args.slice(1).join(' ');
        if (!item) {
          print('Usar o quê?');
          return;
        }

        if (item === 'cd' && local === '90s') {
          print(`
<strong>CD do Slackware</strong><br>
Você insere o CD. O sistema inicia.<br>
A tela mostra: <strong>"Sistema Linux ativado. Firewall do tempo restaurado."</strong><br>
Uma mensagem surge: <strong>"O passado foi corrigido. Volte para 2025."</strong>
          `);
          if (!inventario.includes('CD do Slackware')) {
            inventario.push('CD do Slackware');
            print('<strong>(CD adicionado ao inventário)</strong>');
          }
        }
        else if (item === 'pendrive' && local === '2000') {
          print(`
<strong>Pendrive</strong><br>
Você copia os logs. O sistema avisa:<br>
<strong>"Ataque bloqueado. Hacker identificado: Eu do futuro."</strong><br>
Você precisa avisar o passado.
          `);
          if (!inventario.includes('Pendrive com logs')) {
            inventario.push('Pendrive com logs');
          }
        }
        else if (item === 'cd do slackware' && inventario.includes('CD do Slackware') && local === '2025') {
          print(`
<strong>CD do Slackware</strong><br>
Você insere no servidor quântico.<br>
<strong>SISTEMA RESTAURADO.</strong><br>
A linha do tempo se conserta.<br>
<strong>PARABÉNS, HACKER DO TEMPO!</strong><br>
Você salvou a realidade.
          `);
          fimDeJogo(true);
        }
        else {
          print(`Você não pode usar <strong>${item}</strong> aqui.`);
        }
        break;

      default:
        print(`${comando}: comando não encontrado. Digite 'ajuda' para ajuda.`);
        break;
    }
  }

  // Fim de jogo
  function fimDeJogo(vitoria) {
    const final = document.createElement('div');
    final.style.marginTop = '20px';
    final.style.padding = '15px';
    final.style.border = '1px dashed #80ff00';
    final.style.color = vitoria ? '#80ff00' : '#ff0000';
    final.innerHTML = vitoria
      ? '<strong>🚀 MISSÃO CUMPRIDA!</strong><br>Você consertou a linha do tempo. A realidade está segura.'
      : '<strong>💀 O TEMPO COLAPSA!</strong><br>Você falhou. O universo desaparece.';
    terminal.appendChild(final);
    input.disabled = true;
  }

  // Inicializa
  window.onload = function() {
    print(`
<strong>simulador@chronos:~$</strong> Iniciando Nave do Tempo...<br>
<strong>Sistema de Viagem Temporal ativado.</strong><br>
Você foi enviado para corrigir falhas no código da realidade.<br>
Use comandos de terminal para navegar.<br>
Digite <strong>ajuda</strong> para começar.
    `);
  };

  // Evento de envio
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const cmd = input.value;
      executar(cmd);
      input.value = '';
    }
  });

  // Dica inicial
  setTimeout(() => {
    if (terminal.children.length <= 1) {
      print('<strong>Dica:</strong> digite <strong>ajuda</strong> para ver os comandos.');
    }
  }, 3000);
</script>
</section>
