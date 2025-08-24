---
layout: default
title: "Chegou o Nosso Gerador de Logótipos Tux"
author: Piolinux
date: 2025-08-17 09:00:00 -0300
description: "Gere seu próprio Tux interativo. Personalize boné, cabelo, expressões e cores para um logo exclusivo, pronto para baixar em SVG."
categories: [tutoriais, web, design, linux]
tags: [tux, linux, logótipo, gerador, svg, diy, codigo-aberto]
---


{% include toc.html %}



<section class="post-content">
<p>Olá, pessoal tudo bem!</p>
<p>Lembram-se de quando estivemos a criar o nosso logótipo, com o pinguim, o boné e a cria? Enquanto estava a mexer no código, tive uma ideia: e se toda a gente pudesse criar o seu próprio Tux?</p>
<p>O Tux, o nosso pinguim amado, é a mascote perfeita, mas a personalização é o que faz com que um projeto seja realmente nosso. Sabia que seria incrível se todos tivessem uma ferramenta simples para criar o seu próprio logópio sem precisar de ser designers ou programadores.</p>
<p>Então, com muito carinho e dedicação, criei esta pequena ferramenta online para a nossa comunidade! É a nossa forma de partilhar a magia do código aberto.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Uma Ferramenta Para Todos</h2>
    <p>Esta ferramenta foi feita para ser super simples. Não precisam de ser designers nem de perceber de código. Basta "brincar" com os botões e os menus para ver a magia a acontecer em tempo real no vosso ecrã.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">As Opções de Personalização</h2>
    <p>Querem um Tux mais escuro ou mais claro? A escolha é vossa! As opções são intuitivas e permitem personalizar a sua mascote de forma única.</p>

    <h3 class="text-xl font-bold mt-4 mb-2">Cores</h3>
    <p>Podem mudar a cor do corpo, barriga, bico e pés. Façam um Tux com as vossas cores favoritas!</p>

    <h3 class="text-xl font-bold mt-4 mb-2">Acessórios</h3>
    <p>Aqui é que a diversão começa! Podem dar-lhe um boné clássico, uma cartola elegante, ou um chapéu de chef. É só escolher!</p>

    <h3 class="text-xl font-bold mt-4 mb-2">Expressões</h3>
    <p>Dêem personalidade ao vosso Tux! Escolham entre um olhar padrão, um feliz ou um surpreso. E, claro, podem adicionar um cachecol para os dias frios!</p>
    <p>Quando o vosso Tux estiver perfeito, é só clicar no botão "Descarregar PNG" para ter o logópio pronto para usar em qualquer lugar!</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">A Magia por Trás da Ferramenta</h2>
    <p>Tudo o que veem é gerado em tempo real no vosso navegador. O código é super leve e não precisa de nada para funcionar. Se tiverem curiosidade, podem ver o código completo mesmo aqui em baixo.</p>
</section>

<!-- O código HTML da ferramenta começa aqui -->

<div class="bg-gray-800 text-gray-100 p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto text-left mt-8">
    <h2 class="text-3xl sm:text-4xl font-bold mb-4">Gerador de Logótipos Tux</h2>
    <p class="text-gray-400 mb-8">Personalize o logótipo do Tux e descarregue-o como um ficheiro PNG.</p>

    <!-- Controlo e Canvas Container -->
    <div class="flex flex-col md:flex-row items-center md:items-start justify-start gap-8 mb-8">
        
        <!-- Controles de Cores e Opções -->
        <div class="flex flex-col space-y-4 w-full md:w-1/2">
            
            <!-- Controlo da cor do corpo -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="bodyColor" class="text-sm font-medium">Cor do Corpo:</label>
                <input type="color" id="bodyColor" value="#000000" class="rounded-full cursor-pointer">
            </div>

            <!-- Controlo da cor da barriga -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="bellyColor" class="text-sm font-medium">Cor da Barriga:</label>
                <input type="color" id="bellyColor" value="#e2e8f0" class="rounded-full cursor-pointer">
            </div>

            <!-- Controlo da cor do bico e pés -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="beakColor" class="text-sm font-medium">Cor do Bico e Pés:</label>
                <input type="color" id="beakColor" value="#f6ad55" class="rounded-full cursor-pointer">
            </div>

            <!-- Controlo da cor do boné -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="hatColor" class="text-sm font-medium">Cor do Boné:</label>
                <input type="color" id="hatColor" value="#4299e1" class="rounded-full cursor-pointer">
            </div>
            
            <!-- Opção de estilo do boné -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="hatStyle" class="text-sm font-medium">Estilo do Chapéu:</label>
                <select id="hatStyle" class="bg-gray-600 text-white rounded-md py-1 px-2">
                    <option value="none">Nenhum</option>
                    <option value="beanie">Boné</option>
                    <option value="tophat">Cartola</option>
                    <option value="cowboy">Cowboy</option>
                    <option value="party">Festa</option>
                    <option value="witch">Bruxa</option>
                    <option value="graduation">Formatura</option>
                    <option value="headset">Headset</option>
                    <option value="visor">Viseira</option>
                </select>
            </div>

            <!-- Opção de estilo de cabelo -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="hairStyle" class="text-sm font-medium">Estilo de Cabelo:</label>
                <select id="hairStyle" class="bg-gray-600 text-white rounded-md py-1 px-2">
                    <option value="none">Nenhum</option>
                    <option value="spiky">Espetado</option>
                    <option value="mohawk">Moicano</option>
                    <option value="afro">Afro</option>
                    <option value="parted">Partido</option>
                    <option value="messy">Desgrenhado</option>
                </select>
            </div>
            
            <!-- Opção de expressão dos olhos -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="eyeStyle" class="text-sm font-medium">Expressão dos Olhos:</label>
                <select id="eyeStyle" class="bg-gray-600 text-white rounded-md py-1 px-2">
                    <option value="default">Padrão</option>
                    <option value="happy">Feliz</option>
                    <option value="surprised">Surpreso</option>
                    <option value="winking">A piscar</option>
                    <option value="tired">Cansado</option>
                    <option value="angry">Zangado</option>
                    <option value="bored">Entediado</option>
                    <option value="concentrated">Concentrado</option>
                    <option value="focused">Com Foco</option>
                </select>
            </div>

            <!-- Opção de estilo dos pés -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="feetStyle" class="text-sm font-medium">Estilo dos Pés:</label>
                <select id="feetStyle" class="bg-gray-600 text-white rounded-md py-1 px-2">
                    <option value="default">Padrão</option>
                    <option value="pointy">Pontiagudos</option>
                    <option value="wide">Largos</option>
                    <option value="flippers">Nadadeiras</option>
                </select>
            </div>
            
            <!-- Controlo da cor do cachecol -->
            <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <label for="scarfColor" class="text-sm font-medium">Cor do Cachecol:</label>
                <input type="color" id="scarfColor" value="#ef4444" class="rounded-full cursor-pointer">
                <input type="checkbox" id="scarfToggle" class="ml-2 h-4 w-4 text-blue-600 rounded">
            </div>
            
            <!-- Botão de Download -->
            <button id="downloadBtn" class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                Descarregar PNG
            </button>
        </div>
        
        <!-- Canvas de Desenho - Com fundo branco para garantir o contraste -->
        <div class="flex-shrink-0 bg-white rounded-xl shadow-inner p-4">
            <canvas id="tuxCanvas" width="256" height="256"></canvas>
        </div>
    </div>
</div>
<script>
    // O código JavaScript para desenhar o Tux e gerir a interação
    document.addEventListener('DOMContentLoaded', main);

    /**
     * A função principal que inicia a aplicação.
     * Organiza a inicialização do canvas e os listeners de eventos.
     */
    function main() {
        const config = {
            colors: {
                body: "#000000",
                belly: "#e2e8f0",
                beak_and_feet: "#f6ad55",
                hat: "#4299e1",
                scarf: "#ef4444"
            },
            styles: {
                hat_style: "beanie",
                hair_style: "none",
                eye_style: "default",
                feet_style: "default",
                show_scarf: true
            }
        };

        const canvas = document.getElementById('tuxCanvas');
        const ctx = canvas.getContext('2d');
        
        // Referências aos elementos de input
        const bodyColorInput = document.getElementById('bodyColor');
        const bellyColorInput = document.getElementById('bellyColor');
        const beakColorInput = document.getElementById('beakColor');
        const hatColorInput = document.getElementById('hatColor');
        const hatStyleSelect = document.getElementById('hatStyle');
        const hairStyleSelect = document.getElementById('hairStyle');
        const eyeStyleSelect = document.getElementById('eyeStyle');
        const feetStyleSelect = document.getElementById('feetStyle');
        const scarfColorInput = document.getElementById('scarfColor');
        const scarfToggle = document.getElementById('scarfToggle');
        const downloadBtn = document.getElementById('downloadBtn');

        /**
         * Desenha o Tux no canvas com base nas opções fornecidas.
         * @param {object} options - As opções de personalização.
         */
        const drawTux = (options) => {
            const { bodyColor, bellyColor, beakColor, hatColor, hatStyle, hairStyle, eyeStyle, feetStyle, scarfColor, showScarf } = options;
            const size = canvas.width;
            ctx.clearRect(0, 0, size, size); // Limpa o canvas

            // Função auxiliar para desenhar um elemento SVG
            const drawElement = (path, fill) => `<path fill="${fill}" d="${path}" />`;

            let svgContent = '';

            // Pés (desenhados primeiro para ficarem por baixo do corpo)
            switch (feetStyle) {
                case 'pointy':
                    svgContent += drawElement('M45,90 C40,95 35,95 30,90 Z', beakColor);
                    svgContent += drawElement('M55,90 C60,95 65,95 70,90 Z', beakColor);
                    break;
                case 'wide':
                    svgContent += drawElement('M40,90 C30,95 25,95 20,90 Z', beakColor);
                    svgContent += drawElement('M60,90 C70,95 75,95 80,90 Z', beakColor);
                    break;
                case 'flippers':
                    svgContent += drawElement('M40,90 Q20,105 40,110 Q50,105 60,90 Z', beakColor);
                    svgContent += drawElement('M60,90 Q80,105 60,110 Q50,105 40,90 Z', beakColor);
                    break;
                case 'default':
                default:
                    svgContent += drawElement('M45,90 C40,95 35,95 30,90 V85 Z', beakColor);
                    svgContent += drawElement('M55,90 C60,95 65,95 70,90 V85 Z', beakColor);
                    break;
            }

            // Corpo principal e barriga
            svgContent += drawElement('M50,90 C70,90 75,70 75,50 C75,30 65,20 50,20 C35,20 25,30 25,50 C25,70 30,90 50,90 Z', bodyColor);
            svgContent += drawElement('M50,85 C65,85 70,65 70,50 C70,35 60,30 50,30 C40,30 30,35 30,50 C30,65 35,85 50,85 Z', bellyColor);

            // Cabelo (desenhado antes do chapéu)
            switch (hairStyle) {
                case 'spiky':
                    svgContent += drawElement('M40,20 L30,5 L35,15 L45,0 L50,10 L55,0 L65,15 L70,5 L60,20 Z', bodyColor);
                    break;
                case 'mohawk':
                    svgContent += drawElement('M48,20 L52,20 L52,5 L48,5 Z', bodyColor);
                    svgContent += drawElement('M50,5 C55,0 60,10 50,0 Q40,10 45,5 Z', bodyColor);
                    break;
                case 'afro':
                    svgContent += drawElement('M50,15 C30,-5 25,25 50,25 C75,25 70,-5 50,15 Z', bodyColor);
                    break;
                case 'parted':
                    svgContent += drawElement('M50,20 Q50,15 45,20 T55,20 Z', bodyColor);
                    svgContent += `<line x1="50" y1="20" x2="50" y2="40" stroke="${bodyColor}" stroke-width="1" stroke-linecap="round" />`;
                    break;
                case 'messy':
                    svgContent += drawElement('M40,15 Q30,5 35,0 C45,0 50,5 50,10 C50,5 55,0 65,0 C70,5 60,15 60,20 Z', bodyColor);
                    break;
            }

            // Estilos do chapéu
            switch (hatStyle) {
                case 'beanie':
                    svgContent += drawElement('M30,30 L70,30 L65,25 L35,25 Z', hatColor);
                    svgContent += drawElement('M35,25 C30,20 35,15 50,15 C65,15 70,20 65,25 Z', hatColor);
                    break;
                case 'tophat':
                    svgContent += drawElement('M30,30 L70,30 L70,10 L30,10 Z', hatColor);
                    svgContent += drawElement('M25,30 Q50,40 75,30 Z', hatColor);
                    break;
                case 'cowboy':
                    svgContent += drawElement('M20,30 Q50,20 80,30 Z', hatColor);
                    svgContent += drawElement('M35,25 L65,25 L65,15 L35,15 Z', hatColor);
                    break;
                case 'party':
                    svgContent += drawElement('M45,30 L55,30 L50,10 Z', hatColor);
                    svgContent += drawElement('M50,10 Q55,5 50,0 T45,10 Z', 'white');
                    break;
                case 'witch':
                    svgContent += drawElement('M50,10 L30,25 Q40,20 50,10 Q60,20 70,25 Z', hatColor);
                    svgContent += drawElement('M40,25 C30,30 20,15 45,5 C70,-5 80,30 60,25 Z', hatColor);
                    break;
                case 'graduation':
                    svgContent += drawElement('M30,30 L70,30 L70,25 L30,25 Z', hatColor);
                    svgContent += drawElement('M20,25 Q50,35 80,25 Z', hatColor);
                    svgContent += drawElement('M50,25 Q50,20 45,20 T55,20 Z', hatColor);
                    break;
                case 'headset':
                    svgContent += drawElement('M35,30 Q50,20 65,30 Z', hatColor);
                    svgContent += `<circle fill="${hatColor}" cx="33" cy="35" r="5"/><circle fill="${hatColor}" cx="67" cy="35" r="5"/>`;
                    break;
                case 'visor':
                    svgContent += drawElement('M25,35 L75,35 Q70,25 50,25 Q30,25 25,35 Z', hatColor);
                    break;
            }

            // Estilos dos olhos (emoções)
            switch (eyeStyle) {
                case 'default':
                default:
                    svgContent += `<circle fill="${bodyColor}" cx="43" cy="40" r="3"/><circle fill="${bodyColor}" cx="57" cy="40" r="3"/>`;
                    break;
                case 'happy':
                    svgContent += drawElement('M40,40 Q43,45 46,40', bodyColor);
                    svgContent += drawElement('M54,40 Q57,45 60,40', bodyColor);
                    break;
                case 'surprised':
                    svgContent += `<circle fill="${bodyColor}" cx="43" cy="40" r="5"/><circle fill="${bodyColor}" cx="57" cy="40" r="5"/>`;
                    break;
                case 'winking':
                    svgContent += `<circle fill="${bodyColor}" cx="43" cy="40" r="3"/>`;
                    svgContent += drawElement('M54,40 Q57,45 60,40', bodyColor);
                    break;
                case 'tired':
                    svgContent += `<line x1="38" y1="40" x2="48" y2="40" stroke="${bodyColor}" stroke-width="2" stroke-linecap="round" />`;
                    svgContent += `<line x1="52" y1="40" x2="62" y2="40" stroke="${bodyColor}" stroke-width="2" stroke-linecap="round" />`;
                    break;
                case 'angry':
                    svgContent += drawElement('M40,35 Q45,30 50,35', bodyColor);
                    svgContent += drawElement('M60,35 Q55,30 50,35', bodyColor);
                    svgContent += `<circle fill="${bodyColor}" cx="43" cy="43" r="3"/><circle fill="${bodyColor}" cx="57" cy="43" r="3"/>`;
                    break;
                case 'bored':
                    svgContent += drawElement('M40,40 Q43,42 46,40', bodyColor);
                    svgContent += drawElement('M54,40 Q57,42 60,40', bodyColor);
                    break;
                case 'concentrated':
                    svgContent += `<path d="M40,35 Q45,30 50,35 M60,35 Q55,30 50,35" stroke="${bodyColor}" stroke-width="2" stroke-linecap="round" fill="none"/>`;
                    svgContent += `<circle fill="${bodyColor}" cx="43" cy="40" r="3"/><circle fill="${bodyColor}" cx="57" cy="40" r="3"/>`;
                    break;
                case 'focused':
                    svgContent += drawElement('M40,40 L46,40', bodyColor);
                    svgContent += drawElement('M54,40 L60,40', bodyColor);
                    break;
            }
            
            // Bico
            svgContent += drawElement('M50,50 L45,55 L55,55 Z', beakColor);

            // Cachecol (opcional)
            if (showScarf) {
                svgContent += drawElement('M35,60 C40,65 60,65 65,60 L65,70 Q50,75 35,70 Z', scarfColor);
            }

            // Cria a URL de dados para o SVG, corrigindo a URL do namespace
            const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${svgContent}</svg>`)}`;
            
            const img = new Image();
            
            img.onload = () => {
                ctx.drawImage(img, 0, 0, size, size);
            };
            img.src = svgUrl;
        };

        /**
         * Atualiza o canvas com os valores atuais dos inputs.
         */
        const updateCanvas = () => {
            const options = {
                bodyColor: bodyColorInput.value,
                bellyColor: bellyColorInput.value,
                beakColor: beakColorInput.value,
                hatColor: hatColorInput.value,
                hatStyle: hatStyleSelect.value,
                hairStyle: hairStyleSelect.value,
                eyeStyle: eyeStyleSelect.value,
                feetStyle: feetStyleSelect.value,
                scarfColor: scarfColorInput.value,
                showScarf: scarfToggle.checked
            };
            drawTux(options);
        };

        /**
         * Define os valores iniciais dos inputs com base na configuração.
         */
        const setInitialValues = () => {
            bodyColorInput.value = config.colors.body;
            bellyColorInput.value = config.colors.belly;
            beakColorInput.value = config.colors.beak_and_feet;
            hatColorInput.value = config.colors.hat;
            hatStyleSelect.value = config.styles.hat_style;
            hairStyleSelect.value = config.styles.hair_style;
            eyeStyleSelect.value = config.styles.eye_style;
            feetStyleSelect.value = config.styles.feet_style;
            scarfColorInput.value = config.colors.scarf;
            scarfToggle.checked = config.styles.show_scarf;
        };

        /**
         * Inicia os listeners de eventos.
         */
        const setupEventListeners = () => {
            bodyColorInput.addEventListener('input', updateCanvas);
            bellyColorInput.addEventListener('input', updateCanvas);
            beakColorInput.addEventListener('input', updateCanvas);
            hatColorInput.addEventListener('input', updateCanvas);
            hatStyleSelect.addEventListener('change', updateCanvas);
            hairStyleSelect.addEventListener('change', updateCanvas);
            eyeStyleSelect.addEventListener('change', updateCanvas);
            feetStyleSelect.addEventListener('change', updateCanvas);
            scarfColorInput.addEventListener('input', updateCanvas);
            scarfToggle.addEventListener('change', updateCanvas);
            downloadBtn.addEventListener('click', downloadImage);
        };
        
        /**
         * Lida com o download do ficheiro PNG.
         */
        const downloadImage = () => {
            const link = document.createElement('a');
            link.download = 'tux-logo.png';
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        // Inicia a aplicação: define os valores, configura os eventos e desenha a primeira imagem.
        setInitialValues();
        setupEventListeners();
        updateCanvas();
    }
    
    </script>
