---
layout: default
title: Gerador de Texto para Arte ASCII
author: Piolinux
date: 2025-08-19
description: Uma ferramenta simples para converter texto em arte ASCII de forma divertida e rápida.
keywords:
  - gerador de texto ascii
  - texto em arte
  - ascii art generator
  - converter texto em ascii
  - gerador de caracteres
  - arte com letras
  - texto estilizado
---

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

            <p><strong>Posso converter qualquer tipo de foto?</strong></p>
            <p>Sim, claro! A ferramenta aceita os formatos mais comuns (JPG, PNG) e transforma qualquer foto numa versão em texto.</p>

            <p><strong>É preciso pagar para usar isto?</strong></p>
            <p>Não, não é. A ferramenta é completamente gratuita, para usares as vezes que quiseres. Não precisas de te registar, nem nada.</p>
        </div>
  
    <div id="message-box" class="message-box"></div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const textInput = document.getElementById('text-input');
            const generateButton = document.getElementById('generate-button');
            const asciiOutput = document.getElementById('ascii-output').querySelector('code');
            const copyButton = document.getElementById('copy-button');
            const messageBox = document.getElementById('message-box');
            const styleSelect = document.getElementById('style-select');

            // Mapeamentos de estilos para arte ASCII
            const asciiStyles = {
                'default': {
                    'A': `
.d88b.
8P  Y8
8b  d8
'Y88P'
`,
                    'B': `
8888b.
8P  Y8
8888P'
8P   b
8888b.
`,
                    'C': `
.d88b.
8P   8
8b   8
'Y88P'
`,
                    'D': `
8888b.
8P   Y8
8b   d8
'Y88P'
`,
                    'E': `
888888
8P
8888
8P
888888
`,
                    'F': `
888888
8P
8888
8P
8P
`,
                    'G': `
.d88b.
8P   '
8P  d8
'Y88P'
`,
                    'H': `
888  888
888  888
8888888
888  888
888  888
`,
                    'I': `
888888
  88
  88
  88
888888
`,
                    'J': `
  8888
     88
     88
88   88
'Y8888
`,
                    'K': `
888  8
88  8
8888
88  8
888  8
`,
                    'L': `
888
888
888
888
888888
`,
                    'M': `
.d88b.
8P   Y8
'Y88P'
  8888
`,
                    'N': `
888  88
8888 88
88 8888
88  888
88  888
`,
                    'O': `
.d88b.
8P  Y8
8b  d8
'Y88P'
`,
                    'P': `
8888b.
8P  Y8
8888P'
88
88
`,
                    'Q': `
.d88b.
8P  Y8
8b  d8
'Y88P'
   '
`,
                    'R': `
8888b.
8P  Y8
8888P'
88 P
88  b
`,
                    'S': `
.d88b.
8P
'Y88P.
   Y8
'Y88P'
`,
                    'T': `
888888
  88
  88
  88
  88
`,
                    'U': `
888  888
888  888
888  888
888  888
'Y88P'
`,
                    'V': `
888  888
888  888
888  888
'Y88P'
`,
                    'W': `
888  888
888  888
8888888
888  888
888  888
`,
                    'X': `
Y8   P
Y88P
 Y88P
Y8P Y8
Y8   Y8
`,
                    'Y': `
'Y88P'
  88
  88
  88
  88
`,
                    'Z': `
888888
   88P
  88
 88
888888
`,
                    ' ': `
        
        
        
        
        
`,
                    '0': `
.d88b.
8P  Y8
8b  d8
'Y88P'
`,
                    '1': `
   d8b
 d888b
   88
   88
 d88888
`,
                    '2': `
.d88b.
8P   '
 'Y8b.
 d8b
 Y8888
`,
                    '3': `
.d8b.
Y8b.
d8P
Y8b.
`
                },
                'block': {
                    'A': `
 ████ 
█    █
██████
█    █
█    █
`,
                    'B': `
█████ 
█    █
█████ 
█    █
█████ 
`,
                    'C': `
 ████ 
█    
█    
█    
 ████ 
`,
                    'D': `
████  
█    █
█    █
█    █
████  
`,
                    'E': `
██████
█     
██████
█     
██████
`,
                    'F': `
██████
█     
██████
█     
█     
`,
                    'G': `
 ████ 
█     
█  ███
█    █
 ████ 
`,
                    'H': `
█    █
█    █
██████
█    █
█    █
`,
                    'I': `
█████
  █  
  █  
  █  
█████
`,
                    'J': `
      █
      █
      █
█     █
 █████
`,
                    'K': `
█   █
█  █ 
███  
█  █ 
█   █
`,
                    'L': `
█     
█     
█     
█     
██████
`,
                    'M': `
█    █
██  ██
█ ██ █
█    █
█    █
`,
                    'N': `
█    █
██   █
█ █  █
█  █ █
█   ██
`,
                    'O': `
 ████ 
█    █
█    █
█    █
 ████ 
`,
                    'P': `
█████ 
█    █
█████ 
█     
█     
`,
                    'Q': `
 ████ 
█    █
█    █
█  ███
 ████ █
`,
                    'R': `
█████ 
█    █
█████ 
█  █  
█   █ 
`,
                    'S': `
 █████
█     
 ████ 
     █
█████ 
`,
                    'T': `
██████
  █   
  █   
  █   
  █   
`,
                    'U': `
█    █
█    █
█    █
█    █
 ████ 
`,
                    'V': `
█    █
█    █
█    █
 ████ 
  █   
`,
                    'W': `
█    █
█    █
█ ██ █
██  ██
█    █
`,
                    'X': `
█   █
 █ █ 
  █  
 █ █ 
█   █
`,
                    'Y': `
█   █
 █ █ 
  █  
  █  
  █  
`,
                    'Z': `
██████
   █  
  █   
 █    
██████
`,
                    ' ': `
        
        
        
        
        
`,
                    '0': `
 ████ 
█    █
█    █
█    █
 ████ 
`,
                    '1': `
  █  
 ██  
  █  
  █  
█████
`,
                    '2': `
 █████
█    █
  ███ 
 █    
██████
`,
                    '3': `
█████ 
█    █
  ███ 
█    █
█████ 
`
                }
            };
            
            let currentStyle = 'default';

            // Função para mostrar uma mensagem temporária ao utilizador
            const showMessage = (text) => {
                messageBox.textContent = text;
                messageBox.classList.add('show');
                setTimeout(() => {
                    messageBox.classList.remove('show');
                }, 3000);
            };

            // Listener para mudar o estilo quando o menu é alterado
            styleSelect.addEventListener('change', (event) => {
                currentStyle = event.target.value;
            });

            // Evento para quando o utilizador clica no botão "Gerar"
            generateButton.addEventListener('click', () => {
                const inputText = textInput.value.toUpperCase();
                let asciiText = '';
                let lines = ['','','','','','']; // 6 linhas por carácter
                
                // Usar o mapa de caracteres do estilo selecionado
                const charMap = asciiStyles[currentStyle];

                if (!inputText) {
                    showMessage('Por favor, escreve algum texto para converter.');
                    return;
                }

                // Iterar sobre cada carácter do input
                for (const char of inputText) {
                    const asciiBlock = charMap[char];
                    if (asciiBlock) {
                        const blockLines = asciiBlock.trim().split('\n');
                        for (let i = 0; i < blockLines.length; i++) {
                            lines[i] += blockLines[i] + '  '; // Adicionar 2 espaços entre caracteres
                        }
                    } else {
                        // Se o carácter não existir, adiciona um espaço em branco
                        for (let i = 0; i < 6; i++) {
                            lines[i] += '       ';
                        }
                    }
                }

                asciiText = lines.join('\n');
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

