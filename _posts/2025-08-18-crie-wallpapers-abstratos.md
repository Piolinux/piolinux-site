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

        /* Estilos CSS da ferramenta, completamente independentes de qualquer documento externo. */
        .tool-container {
            font-family: 'Inter', sans-serif;
            background-color: #1e293b;
            color: #e2e8f0;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            max-width: 672px;
            margin: auto;
        }

        .tool-title {
            font-size: 2.25rem;
            line-height: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            background-image: linear-gradient(to right, #60a5fa, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .tool-subtitle {
            font-size: 1.125rem;
            margin-bottom: 2rem;
            color: #94a3b8;
        }

        .tool-panel {
            background-color: #334155;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }
        
        .tool-input-field {
            width: 100%;
            padding: 1rem;
            font-size: 1rem;
            background-color: #475569;
            color: #e2e8f0;
            border-radius: 0.5rem;
            border: 1px solid #64748b;
            outline: none;
            transition: all 0.3s;
            resize: none;
        }

        .tool-button {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            color: white;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
            cursor: pointer;
            margin-top: 1rem;
            background-color: #a855f7;
            transition: background-color 0.3s;
        }
        
        .tool-button:hover {
            background-color: #7e22ce;
        }

        .image-container {
            width: 100%;
            max-width: 1024px;
            margin: 1.5rem auto 0 auto; /* Centraliza o contêiner da imagem */
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            position: relative;
        }
        
        canvas {
            background-color: #334155;
            display: block;
            width: 100%;
            height: auto;
        }

        .download-link {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            background-color: #2563eb;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
            transform: scale(0);
            opacity: 0;
            text-decoration: none;
            cursor: pointer;
        }
        
        .image-container:hover .download-link {
            transform: scale(1);
            opacity: 1;
        }

</style>
<body class="bg-slate-900 text-slate-100 p-4 md:p-8 flex flex-col items-center justify-center min-h-screen">

    <div class="tool-container">
        <h2 class="tool-title text-center">
            🎨 Gerador de Wallpapers Abstratos
        </h2>
        <p class="tool-subtitle text-center">
            Crie imagens únicas e elegantes para o seu computador ou celular.
        </p>

        <!-- Controles avançados -->
        <div class="controls-grid">
            <div class="control-group">
                <label class="control-label">Texto (opcional)</label>
                <input type="text" id="text-input" class="tool-input-field" placeholder="Ex: Meu Wallpaper">
            </div>
            <div class="control-group">
                <label class="control-label">Opacidade das formas: <span id="opacity-value">50%</span></label>
                <input type="range" id="opacity-slider" class="control-slider" min="10" max="100" value="50">
            </div>
            <div class="control-group">
                <label class="control-label">Número de formas: <span id="shapes-value">75</span></label>
                <input type="range" id="shapes-slider" class="control-slider" min="20" max="200" value="75">
            </div>
            <div class="control-group">
                <label class="control-label">Tamanho máximo: <span id="size-value">100px</span></label>
                <input type="range" id="size-slider" class="control-slider" min="30" max="300" value="100">
            </div>
        </div>

        <!-- Botões -->
        <div class="flex gap-3">
            <button id="generate-btn" class="tool-button flex-1">
                🎲 Gerar Novo Wallpaper
            </button>
            <button id="download-btn" class="download-link flex-1 text-center">
                📥 Baixar PNG
            </button>
        </div>
    </div>

    <!-- Preview -->
    <div class="mt-8 w-full max-w-4xl">
        <div class="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <canvas id="wallpaper-canvas" class="w-full max-w-full h-auto"></canvas>
        </div>
    </div>

    <script>
        // Elementos do DOM
        const canvas = document.getElementById('wallpaper-canvas');
        const ctx = canvas.getContext('2d');
        const generateBtn = document.getElementById('generate-btn');
        const downloadBtn = document.getElementById('download-btn');
        const textInput = document.getElementById('text-input');
        const opacitySlider = document.getElementById('opacity-slider');
        const shapesSlider = document.getElementById('shapes-slider');
        const sizeSlider = document.getElementById('size-slider');
        
        // Labels de valor
        const opacityValue = document.getElementById('opacity-value');
        const shapesValue = document.getElementById('shapes-value');
        const sizeValue = document.getElementById('size-value');

        // Resolução HD
        const width = 1920;
        const height = 1080;

        // Paletas de cores
        const colorPalettes = [
            ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'],
            ['#F08080', '#F4A460', '#A2CD5A', '#6B8E23', '#2F4F4F'],
            ['#93A5CF', '#E4EfE9', '#A3D2CA', '#68BBE3', '#5E8B7E'],
            ['#283618', '#606C38', '#FEFAE0', '#DDA15E', '#BC6C25'],
            ['#14213d', '#fca311', '#e5e5e5', '#808080', '#4a4e4d'],
            ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
            ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#06B6D4'],
        ];

        // Atualiza labels dos sliders
        opacitySlider.addEventListener('input', () => {
            opacityValue.textContent = `${opacitySlider.value}%`;
        });
        shapesSlider.addEventListener('input', () => {
            shapesValue.textContent = opacitySlider.value;
        });
        sizeSlider.addEventListener('input', () => {
            sizeValue.textContent = `${sizeSlider.value}px`;
        });

        // Configura canvas
        function resizeCanvas() {
            const ratio = window.devicePixelRatio || 1;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(ratio, ratio);
        }

        // Gera wallpaper
        function drawWallpaper() {
            ctx.clearRect(0, 0, width, height);

            const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
            const opacity = opacitySlider.value / 100;
            const numShapes = parseInt(shapesSlider.value);
            const maxSize = parseInt(sizeSlider.value);

            // Fundo
            ctx.fillStyle = palette[0];
            ctx.fillRect(0, 0, width, height);

            // Formas
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

            // Texto
            const text = textInput.value.trim();
            if (text) {
                ctx.globalAlpha = 1.0;
                ctx.fillStyle = '#FFFFFF';
                ctx.font = 'bold 80px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(text, width / 2, height - 100);
            }

            // Atualiza download
            downloadBtn.href = canvas.toDataURL('image/png');
            downloadBtn.download = `wallpaper-${Date.now()}.png`;
        }

        // Eventos
        generateBtn.addEventListener('click', () => {
            generateBtn.innerHTML = '🔄 Gerando...';
            generateBtn.disabled = true;
            
            setTimeout(() => {
                drawWallpaper();
                generateBtn.innerHTML = '🎲 Gerar Novo Wallpaper';
                generateBtn.disabled = false;
            }, 100);
        });

        downloadBtn.addEventListener('click', (e) => {
            if (!canvas.toDataURL().startsWith('data:image')) {
                e.preventDefault();
                alert('⚠️ Gere um wallpaper primeiro!');
            }
        });

        // Inicializa
        window.onload = () => {
            resizeCanvas();
            drawWallpaper();
        };

        window.addEventListener('resize', () => {
            resizeCanvas();
            drawWallpaper();
        });
    </script>

