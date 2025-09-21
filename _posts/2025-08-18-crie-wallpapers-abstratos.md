---
layout: default
title: "Crie Wallpapers Abstratos com PNG: Código no Seu Blog"
date: 2025-08-18
author: "PioLinux"
categories: [svg, arte, ferramentas, jekyll]
tags: [wallpaper, svg, abstrato, gerador, html, código, blog]
description: "Crie wallpapers abstratos com SVG direto no seu blog — arte vetorial com código puro, sem dependências externas."
permalink: /wallpapers-abstratos-png/
---


{% include toc.html %}




<section class="post-content p-6 md:p-12">
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
        <h2 class="text-2xl font-bold text-gray-100 mt-6 mb-4">Sabe qual é a melhor parte?</h2>
        <p class="text-gray-300 text-lg mb-4">
            O mais legal é que essa ferramenta foi pensada para você ter <strong>total controle</strong>. Ela funciona de um jeito 100% autônomo. O que isso significa? Simples: tudo acontece direto no seu navegador!
        </p>
        <p class="text-gray-300 text-lg mb-4">
            Você não precisa da internet para criar o seu desenho, não utilizar nenhuma API externa e, o mais importante, não envia nenhuma informação sua para fora. É só você e a sua criatividade, com total segurança e privacidade.
        </p>
        
        <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-2">A mágica da tela Canvas</h3>
        <p class="text-gray-300 text-lg mb-4">
            Em vez de um campo de texto comum, a ferramenta usa o poder do <strong>HTML Canvas</strong>. Pense nele como uma tela em branco no seu navegador, pronta para ser pintada.
        </p>
        <p class="text-gray-300 text-lg mb-4">
            E o nosso pincel? Linguagem JavaScript! Sem a necessidade de comandos, a gente consegue desenhar formas, linhas, cores e criar padrões que são únicos. É como se você estivesse programando uma obra de arte!
        </p>

        <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-2">Criar é mais fácil do que parece!</h3>
        <p class="text-gray-300 text-lg mb-4">
            Usar a ferramenta é super simples e direto. Basta clicar no botão "Gerar" e ver o novo padrão aparecer. Se não gostar, clique de novo! Cada clique é uma nova criação, com cores e formas aleatórias.
        </p>
        <p class="text-gray-300 text-lg mb-4">
            E para deixar a sua arte com a sua cara, tem um campo onde você pode escrever o que quiser. O texto vai aparecer bem no meio do seu design. Quando estiver do jeitinho que você quer, é só baixar a imagem com um clique. Sem complicação!
        </p>
    </div>
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
        <p class="text-gray-300 text-lg mb-0">
            Essa ferramenta foi feita para te dar total liberdade e controle sobre a sua arte. Espero que goste!
        </p>
    </div>




    <style>
        body {
            background: #1a1a1a;
            color: #e0e0e0;
            font-family: 'Segoe UI', sans-serif;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .container {
            max-width: 800px;
            width: 100%;
            background: #2a2a2a;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            margin-bottom: 30px;
        }
        h1 {
            text-align: center;
            color: #8bc34a;
            margin: 0 0 20px 0;
            font-size: 2em;
        }
        .controls {
            display: grid;
            gap: 20px;
            margin-bottom: 30px;
        }
        .control-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        label {
            font-weight: bold;
            color: #a6e3a1;
        }
        input[type="text"], input[type="range"], button {
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #444;
            background: #3a3a3a;
            color: #e0e0e0;
            font-size: 16px;
        }
        input[type="range"] {
            cursor: pointer;
        }
        button {
            background: linear-gradient(90deg, #4caf50, #8bc34a);
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        #wallpaper-container {
            width: 100%;
            background: #121212;
            padding: 20px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        #wallpaper-canvas {
            border: 2px solid #333;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .btn-group {
            display: flex;
            gap: 15px;
            width: 100%;
        }
        .btn-group button {
            flex: 1;
        }
        #download-btn {
            background: linear-gradient(90deg, #2196F3, #4fc3f7);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Gerador de Wallpapers Abstratos</h1>
        
        <div class="controls">
            <div class="control-group">
                <label for="text-input">Texto (opcional):</label>
                <input type="text" id="text-input" placeholder="Ex: Meu Wallpaper">
            </div>
            
            <div class="control-group">
                <label for="opacity-slider">Opacidade das formas: <span id="opacity-value">50%</span></label>
                <input type="range" id="opacity-slider" min="10" max="100" value="50">
            </div>
            
            <div class="control-group">
                <label for="shapes-slider">Número de formas: <span id="shapes-value">75</span></label>
                <input type="range" id="shapes-slider" min="20" max="200" value="75">
            </div>
            
            <div class="control-group">
                <label for="size-slider">Tamanho máximo: <span id="size-value">100px</span></label>
                <input type="range" id="size-slider" min="30" max="300" value="100">
            </div>
        </div>
        
        <div class="btn-group">
            <button id="generate-btn">🎲 Gerar Novo Wallpaper</button>
            <button id="download-btn">📥 Baixar PNG</button>
        </div>
    </div>

    <div id="wallpaper-container">
        <canvas id="wallpaper-canvas" width="1920" height="1080"></canvas>
    </div>

    <script>
        // Elementos
        const canvas = document.getElementById('wallpaper-canvas');
        const ctx = canvas.getContext('2d');
        const generateBtn = document.getElementById('generate-btn');
        const downloadBtn = document.getElementById('download-btn');
        const textInput = document.getElementById('text-input');
        const opacitySlider = document.getElementById('opacity-slider');
        const shapesSlider = document.getElementById('shapes-slider');
        const sizeSlider = document.getElementById('size-slider');
        
        // Labels
        const opacityValue = document.getElementById('opacity-value');
        const shapesValue = document.getElementById('shapes-value');
        const sizeValue = document.getElementById('size-value');

        // Paletas de cores
        const colorPalettes = [
            ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'],
            ['#F08080', '#F4A460', '#A2CD5A', '#6B8E23', '#2F4F4F'],
            ['#93A5CF', '#E4EfE9', '#A3D2CA', '#68BBE3', '#5E8B7E'],
            ['#283618', '#606C38', '#FEFAE0', '#DDA15E', '#BC6C25'],
            ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
        ];

        // Atualiza labels
        opacitySlider.addEventListener('input', () => {
            opacityValue.textContent = `${opacitySlider.value}%`;
        });
        shapesSlider.addEventListener('input', () => {
            shapesValue.textContent = shapesSlider.value;
        });
        sizeSlider.addEventListener('input', () => {
            sizeValue.textContent = `${sizeSlider.value}px`;
        });

        // Gera wallpaper
        function drawWallpaper() {
            const width = 1920;
            const height = 1080;
            
            // Limpa canvas
            ctx.clearRect(0, 0, width, height);
            
            // Escolhe paleta
            const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
            const opacity = opacitySlider.value / 100;
            const numShapes = parseInt(shapesSlider.value);
            const maxSize = parseInt(sizeSlider.value);
            
            // Fundo
            ctx.fillStyle = palette[0];
            ctx.fillRect(0, 0, width, height);
            
            // Desenha formas
            for (let i = 0; i < numShapes; i++) {
                const shapeType = Math.random();
                const color = palette[Math.floor(Math.random() * palette.length)];
                
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.globalAlpha = opacity;
                
                const x = Math.random() * width;
                const y = Math.random() * height;
                
                if (shapeType < 0.33) {
                    // Círculos
                    const radius = 20 + Math.random() * maxSize;
                    ctx.arc(x, y, radius, 0, 2 * Math.PI);
                } else if (shapeType < 0.66) {
                    // Retângulos
                    const size = 30 + Math.random() * maxSize;
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(Math.random() * Math.PI);
                    ctx.fillRect(-size / 2, -size / 2, size, size);
                    ctx.restore();
                } else {
                    // Triângulos
                    const size = 40 + Math.random() * maxSize;
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + size, y);
                    ctx.lineTo(x + size / 2, y + size * Math.sqrt(3) / 2);
                    ctx.closePath();
                }
                ctx.fill();
            }
            
            // Adiciona texto
            const text = textInput.value.trim();
            if (text) {
                ctx.globalAlpha = 1.0;
                ctx.fillStyle = '#FFFFFF';
                ctx.font = 'bold 80px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(text, width / 2, height - 100);
            }
            
            // Atualiza link de download
            updateDownloadLink();
        }
        
        // Atualiza link de download
        function updateDownloadLink() {
            const dataUrl = canvas.toDataURL('image/png');
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.download = `wallpaper-${Date.now()}.png`;
                link.href = dataUrl;
                link.click();
            };
        }
        
        // Eventos
        generateBtn.addEventListener('click', drawWallpaper);
        
        // Gera inicial
        drawWallpaper();
    </script>


