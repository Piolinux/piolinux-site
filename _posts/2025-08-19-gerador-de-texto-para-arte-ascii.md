---
layout: default
title: "Gere Arte ASCII: Texto Estilizado para Seu Terminal"
description: "Converta qualquer texto em arte ASCII com estilo de terminal. Ferramenta simples e divertida para usar no Linux, Geany ou linha de comando."
date: 2025-08-19
author: "PioLinux"
categories: [ferramentas, terminal, arte, linux]
tags: [ascii, arte, gerador, texto, terminal, figlet, banner]
permalink: /gerador-ascii-art/
---

{% include toc.html %}


<section class="post-content">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

        
        
        .container {
            max-width: 800px;
            width: 100%;
            background-color: #1e1e1e;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px var(--cor-sombra);
            margin: 20px auto;
        }

        h1 {
            color: var(--cor-destaque);
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 15px;
        }

        .controls {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-top: 25px;
            width: 100%;
        }

        textarea {
            width: 100%;
            max-width: 600px;
            padding: 12px;
            border-radius: 10px;
            border: 2px solid var(--cor-borda);
            background-color: #333;
            color: var(--cor-texto);
            outline: none;
            resize: vertical;
            min-height: 100px;
            font-size: 1em;
        }

        select {
            width: 100%;
            max-width: 600px;
            padding: 12px;
            border-radius: 10px;
            border: 2px solid var(--cor-borda);
            background-color: #333;
            color: var(--cor-texto);
            outline: none;
            font-size: 1em;
            cursor: pointer;
        }

        #generate-button {
            background-color: var(--cor-destaque);
            color: #fff;
            padding: 12px 25px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            font-weight: bold;
        }
        
        #generate-button:hover {
            background-color: #21879c;
            transform: translateY(-2px);
        }

        #ascii-output {
            background-color: var(--cor-fundo-pre);
            border: 1px solid var(--cor-borda);
            padding: 15px;
            margin-top: 25px;
            border-radius: 10px;
            overflow-x: auto;
            white-space: pre;
            text-align: left;
            font-family: monospace;
            font-size: 10px;
            line-height: 1;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
        }

        #ascii-output code {
            font-size: inherit;
        }

        #copy-button {
            background-color: var(--cor-destaque);
            color: #fff;
            padding: 12px 25px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            font-weight: bold;
            margin-top: 15px;
        }

        #copy-button:hover {
            background-color: #21879c;
            transform: translateY(-2px);
        }

        .message-box {
            background-color: var(--cor-destaque);
            color: #fff;
            padding: 15px;
            border-radius: 10px;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            pointer-events: none;
            z-index: 1000;
        }

        .message-box.show {
            opacity: 1;
        }

        .faq-section {
            margin-top: 40px;
            text-align: left;
        }

        .faq-section h3 {
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
    
    
      
        <p>Já alguma vez quiseste fazer um desenho só com letras e símbolos? Aquelas imagens que víamos na internet, feitas com caracteres de texto? O nosso gerador de arte ASCII faz isso por ti. É uma ferramenta super simples para transformar qualquer texto numa espécie de "fotografia de texto" em segundos.</p>

        <p>Não precisas de perceber nada de código ou de design. A ideia aqui é a simplicidade. O gerador faz todo o trabalho: analisa o teu texto e usa um mapa de caracteres para criar o desenho de cada letra com símbolos. O resultado é um bloco de texto que podes copiar e colar onde quiseres.</p>

        <h3>Como funcionará, em poucas palavras</h3>
        <p><strong>Escreve o teu texto: Digita ou cola o que queres converter na caixa.<p>
        <p><strong>Escolhe o estilo: No menu, seleciona a forma de arte ASCII (por exemplo, "Padrão" ou "Bloco").<p>
        <p><strong>Clica para gerar: Clica no botão "Converter" e a tua 
        arte em texto aparecerá.<p>

        <div class="controls">
            <label for="style-select">Escolhe um estilo de arte:</label>
            <select id="style-select">
                <option value="default">Padrão</option>
                <option value="block">Bloco</option>
            </select>
            <textarea id="text-input" placeholder="Escreve o teu texto aqui..."></textarea>
            <button id="generate-button">Gerar Arte ASCII</button>
        </div>

        <div id="ascii-output">
            <code></code>
        </div>
        <button id="copy-button" style="display:none;">Copiar Texto</button>

        <p>Podes usar a arte que criaste para dar um toque especial nas tuas redes sociais, numa assinatura de e-mail, ou só para te divertires a ver como as teus textos e numeros ficam neste estilo. A criatividade é tua!</p>

        <div class="faq-section">
            <hr>
            <h3>Perguntas que pessoas costumam fazer?</h3>
            <p><strong>O que é essa tal de arte ASCII?</strong></p>
            <p>É a forma de desenhar usando os caracteres do teu teclado: letras, números, símbolos. É uma das formas mais antigas de arte digital e é super interessante.</p>

            <p><strong>Posso converter qualquer tipo de texto?</strong></p>
            <p>Sim, claro! A ferramenta converter texto em arte.</p>

            <p><strong>É preciso pagar para usar isto?</strong></p>
            <p>Não, não é. A ferramenta é completamente gratuita, para usares as vezes que quiseres. Não precisas de te registar, nem nada.</p>
        </div>
  
    <div id="message-box" class="message-box"></div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Seleciona todos os elementos do DOM uma única vez
      const textInput = document.getElementById('text-input');
      const generateButton = document.getElementById('generate-button');
      const asciiOutput = document.getElementById('ascii-output').querySelector('code');
      const copyButton = document.getElementById('copy-button');
      const messageBox = document.getElementById('message-box');
      const styleSelect = document.getElementById('style-select');

      // Mapeamentos de estilos para arte ASCII.
      // Apenas o estilo 'default' é carregado inicialmente.
      const asciiStyles = {
        'default': {
          'A': `\n.d88b.\n8P  Y8\n8b  d8\n'Y88P'\n`,
          'B': `\n8888b.\n8P  Y8\n8888P'\n8P  b\n8888b.\n`,
          'C': `\n.d88b.\n8P  8\n8b  8\n'Y88P'\n`,
          'D': `\n8888b.\n8P  Y8\n8b  d8\n'Y88P'\n`,
          'E': `\n888888\n8P\n8888\n8P\n888888\n`,
          'F': `\n888888\n8P\n8888\n8P\n8P\n`,
          'G': `\n.d88b.\n8P  '\n8P d8\n'Y88P'\n`,
          'H': `\n888  888\n888  888\n8888888\n888  888\n888  888\n`,
          'I': `\n888888\n  88\n  88\n  88\n888888\n`,
          'J': `\n  8888\n    88\n    88\n88  88\n'Y8888\n`,
          'K': `\n888 8\n88 8\n8888\n88 8\n888 8\n`,
          'L': `\n888\n888\n888\n888\n888888\n`,
          'M': `\n.d88b.\n8P  Y8\n'Y88P'\n  8888\n`,
          'N': `\n888  88\n8888 88\n88 8888\n88  888\n88  888\n`,
          'O': `\n.d88b.\n8P  Y8\n8b  d8\n'Y88P'\n`,
          'P': `\n8888b.\n8P  Y8\n8888P'\n88\n88\n`,
          'Q': `\n.d88b.\n8P  Y8\n8b  d8\n'Y88P'\n  '\n`,
          'R': `\n8888b.\n8P  Y8\n8888P'\n88 P\n88  b\n`,
          'S': `\n.d88b.\n8P\n'Y88P.\n   Y8\n'Y88P'\n`,
          'T': `\n888888\n  88\n  88\n  88\n  88\n`,
          'U': `\n888  888\n888  888\n888  888\n888  888\n'Y88P'\n`,
          'V': `\n888  888\n888  888\n888  888\n'Y88P'\n`,
          'W': `\n888  888\n888  888\n8888888\n888  888\n888  888\n`,
          'X': `\nY8  P\nY88P\n Y88P\nY8P Y8\nY8  Y8\n`,
          'Y': `\n'Y88P'\n  88\n  88\n  88\n  88\n`,
          'Z': `\n888888\n   88P\n  88\n 88\n888888\n`,
          ' ': `\n \n \n \n \n \n`,
          '0': `\n.d88b.\n8P  Y8\n8b  d8\n'Y88P'\n`,
          '1': `\n  d8b\nd888b\n  88\n  88\nd88888\n`,
          '2': `\n.d88b.\n8P  '\n 'Y8b.\nd8b\n Y8888\n`,
          '3': `\n.d8b.\nY8b.\nd8P\nY8b.\n`
        }
      };

      // Simula o carregamento assíncrono do estilo 'block'.
      // Na vida real, você faria um 'fetch' para um arquivo JSON.
      const loadBlockStyle = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            const blockStyle = {
              'block': {
                'A': `\n ████ \n█    █\n██████\n█    █\n█    █\n`,
                'B': `\n█████ \n█    █\n█████ \n█    █\n█████ \n`,
                'C': `\n ████ \n█    \n█    \n█    \n ████ \n`,
                'D': `\n████  \n█    █\n█    █\n█    █\n████  \n`,
                'E': `\n██████\n█     \n██████\n█     \n██████\n`,
                'F': `\n██████\n█     \n██████\n█     \n█     \n`,
                'G': `\n ████ \n█     \n█ ███\n█    █\n ████ \n`,
                'H': `\n█    █\n█    █\n██████\n█    █\n█    █\n`,
                'I': `\n█████\n  █  \n  █  \n  █  \n█████\n`,
                'J': `\n      █\n      █\n      █\n█      █\n █████\n`,
                'K': `\n█   █\n█  █ \n███  \n█  █ \n█   █\n`,
                'L': `\n█     \n█     \n█     \n█     \n██████\n`,
                'M': `\n█    █\n██  ██\n█ ██ █\n█    █\n█    █\n`,
                'N': `\n█    █\n██   █\n█ █  █\n█  █ █\n█   ██\n`,
                'O': `\n ████ \n█    █\n█    █\n█    █\n ████ \n`,
                'P': `\n█████ \n█    █\n█████ \n█     \n█     \n`,
                'Q': `\n ████ \n█    █\n█    █\n█  ███\n ████ █\n`,
                'R': `\n█████ \n█    █\n█████ \n█  █  \n█   █ \n`,
                'S': `\n █████\n█     \n ████ \n     █\n█████ \n`,
                'T': `\n██████\n  █   \n  █   \n  █   \n  █   \n`,
                'U': `\n█    █\n█    █\n█    █\n█    █\n ████ \n`,
                'V': `\n█    █\n█    █\n█    █\n ████ \n  █   \n`,
                'W': `\n█    █\n█    █\n█ ██ █\n██  ██\n█    █\n`,
                'X': `\n█   █\n █ █ \n  █  \n █ █ \n█   █\n`,
                'Y': `\n█    █\n █ █ \n  █  \n  █  \n  █  \n`,
                'Z': `\n██████\n   █  \n  █   \n █    \n██████\n`,
                ' ': `\n \n \n \n \n \n`,
                '0': `\n ████ \n█    █\n█    █\n█    █\n ████ \n`,
                '1': `\n  █  \n ██  \n  █  \n  █  \n█████\n`,
                '2': `\n █████\n█    █\n  ███ \n █    \n██████\n`,
                '3': `\n█████ \n█    █\n ███  \n█    █\n█████ \n`
              }
            };
            resolve(blockStyle);
          }, 500); // Simula um pequeno atraso de rede
        });
      };

      // Armazena o estado de carregamento do estilo 'block'
      let isBlockStyleLoaded = false;
      let currentStyle = 'default';

      // Função para mostrar uma mensagem temporária ao usuário
      const showMessage = (text) => {
        messageBox.textContent = text;
        messageBox.classList.add('show');
        setTimeout(() => {
          messageBox.classList.remove('show');
        }, 3000);
      };

      // Listener para mudar o estilo e carregar o novo se necessário
      styleSelect.addEventListener('change', async (event) => {
        currentStyle = event.target.value;
        if (currentStyle === 'block' && !isBlockStyleLoaded) {
          generateButton.classList.add('loading');
          generateButton.textContent = 'A carregar...';
          const blockData = await loadBlockStyle();
          Object.assign(asciiStyles, blockData); // Mescla o novo estilo com os existentes
          isBlockStyleLoaded = true;
          generateButton.classList.remove('loading');
          generateButton.textContent = 'Gerar Arte ASCII';
          showMessage('Estilo "Bloco" carregado!');
        }
      });

      // Evento para quando o utilizador clica no botão "Gerar"
      generateButton.addEventListener('click', () => {
        if (generateButton.classList.contains('loading')) {
          return; // Ignora o clique se o botão estiver em estado de carregamento
        }
        const inputText = textInput.value.toUpperCase();
        let lines = ['', '', '', '', '']; // 5 linhas por caractere, ajustado para os novos mapas
        const charMap = asciiStyles[currentStyle];

        if (!inputText) {
          showMessage('Por favor, escreve algum texto para converter.');
          return;
        }

        // Itera sobre cada caractere do input para construir a arte
        for (const char of inputText) {
          const asciiBlock = charMap[char];
          if (asciiBlock) {
            const blockLines = asciiBlock.trim().split('\n');
            for (let i = 0; i < blockLines.length; i++) {
              if (lines[i] !== undefined) {
                lines[i] += blockLines[i] + '  '; // Adiciona 2 espaços entre caracteres
              }
            }
          } else {
            // Se o caractere não existir, adiciona espaços em branco
            for (let i = 0; i < 5; i++) {
              lines[i] += '        ';
            }
          }
        }
        const asciiText = lines.join('\n');
        asciiOutput.textContent = asciiText;
        copyButton.style.display = 'block';
        showMessage('Arte ASCII gerada com sucesso!');
      });

      // Evento para o botão de copiar
      copyButton.addEventListener('click', () => {
        try {
          const range = document.createRange();
          range.selectNode(asciiOutput);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand('copy');
          window.getSelection().removeAllRanges();
          showMessage('Texto copiado para a área de transferência!');
        } catch (err) {
          console.error('Falha ao copiar o texto:', err);
          showMessage('Erro ao copiar o texto.');
        }
      });
    });
  </script>
  
  
  <div style="background:#121212; color:#80ff00; padding:1em; border-radius:8px; font-family:monospace; white-space:pre;">
  _____     _       _ _       
 |   __|___| |___ _| | |_ ___ 
 |__ |  _| . | . | . |  _| -_|
 |_____| |___|___|___|_| |___|
</div>
  
  
