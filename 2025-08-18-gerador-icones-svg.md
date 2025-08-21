---
layout: default
title: "Gerador de Ícones SVG: Código Limpo e Design Livre"
date: 2025-08-18
author: "Piolinux"
tags: [SVG, Ícones, Gerador, Código, Design, Webdev]
---


{% include toc.html %}



<section class="post-content">

<p>Cansado de bibliotecas de ícones pesados e cheios de dependências que prejudicam a performance do seu site? Acreditamos que a liberdade de design começa com a liberdade do código. Apresentamos uma ferramenta simples e eficiente para gerar ícones SVG, sem compromissos.</p>

<h2>A Vantagem do Vetor</h2>

<p>Ícones SVG não são apenas gráficos; são vetores escaláveis. Isso significa que eles se adaptam a qualquer tela, de alta resolução a dispositivos móveis, sem perder a qualidade. Sem pixels borrados, sem a necessidade de múltiplos arquivos para diferentes tamanhos. Apenas um único arquivo SVG leve para uma experiência de usuário impecável para usar gratuitamente.</p>

<h2>O Controle Está em Suas Mãos</h2>

<p>Diferente de soluções inchadas que forçam você a carregar frameworks inteiros para um punhado de ícones, nosso gerador entrega exatamente o que você precisa: código SVG puro. Você não está amarrado a nada.</p>

<h3>Personalização Total</h3>

<p>Você tem o controle total sobre o resultado final. Escolha o ícone que melhor se adapta à sua visão e selecione a cor exata para combinar com a identidade visual do seu projeto. O que você vê é o que você obtém.</p>

<style>
body {
    
    color: #ffffff; /* Essa é a cor do texto padrão */
   
        }
        .icon-generator-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2.5rem;
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .intro-header h1 {
            font-size: 2.5rem;
            text-align: center;
            font-weight: 700;
        }
        .intro-text p {
            margin-bottom: 1.5rem;
            font-size: 1rem;
        }
        .generator-app {
            display: grid;
            gap: 2rem;
        }
        @media (min-width: 768px) {
            .generator-app {
                grid-template-columns: 2fr 1fr;
            }
        }
        .controls-panel {
            background-color: #fafafa;
            border-radius: 0.75rem;
            padding: 1.5rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            font-weight: 500;
            display: block;
            margin-bottom: 0.5rem;
        }
        .icon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
            gap: 1rem;
            padding: 1rem;
            background-color: #f2f2f2;
            border-radius: 0.75rem;
            max-height: 400px;
            overflow-y: auto;
        }
        .icon-item {
            cursor: pointer;
            padding: 0.75rem;
            border-radius: 0.5rem;
            border: 2px solid transparent;
            text-align: center;
            transition: all 0.2s ease-in-out;
        }
        .icon-item:hover {
            background-color: #e5e7eb;
        }
        .icon-item.selected {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px #bfdbfe;
        }
        .icon-item svg {
            width: 40px;
            height: 40px;
            margin-bottom: 0.25rem;
        }
        .icon-item span.icon-name {
            font-size: 0.8rem;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .icon-preview-box {
            border: 2px dashed #d1d5db;
            border-radius: 0.75rem;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #f2f2f2;
            text-align: center;
        }
        .icon-preview-box svg {
            width: 120px;
            height: 120px;
            transition: all 0.3s ease-in-out;
        }
        .download-button {
            background-color: #3b82f6;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            width: 100%;
            text-align: center;
            margin-top: 1rem;
            transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
        }
        .download-button:hover {
            background-color: #2563eb;
            transform: translateY(-2px);
        }
    </style>


        <div class="intro-text">
            <p>
                Selecione um pacote de ícones e personalize a cor para fazer o download. 
                Os ícones são baseados na popular biblioteca Feather Icons.
            </p>
        </div>

        <hr>

        <div class="generator-app">
            <div class="controls-panel">
                <div class="form-group">
                    <label for="package-select">Selecione o pacote:</label>
                    <select id="package-select" class="w-full p-2 border rounded-md">
                        <option value="basic">Básico</option>
                        <option value="tech">Tecnologia</option>
                        <option value="social">Social</option>
                        <option value="dev">Desenvolvimento</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="color-picker">Cor do Ícone:</label>
                    <input type="color" id="color-picker" value="#3b82f6" class="w-full h-10 cursor-pointer">
                </div>

                <div class="form-group">
                    <label for="text-color-picker">Cor do Texto:</label>
                    <input type="color" id="text-color-picker" value="#333333" class="w-full h-10 cursor-pointer">
                </div>

                <div class="form-group">
                    <p>Escolha um ícone:</p>
                    <div id="icon-grid" class="icon-grid">
                        <!-- O conteúdo do pacote de ícones 'Básico' é agora pré-renderizado no HTML -->
                        <div class="icon-item selected">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span class="icon-name" style="color: rgb(51, 51, 51);">Casa</span>
                        </div>
                        <div class="icon-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V23a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 4.6 19.4a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1.51-1V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82.33l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V19.4a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            <span class="icon-name" style="color: rgb(51, 51, 51);">Engrenagem</span>
                        </div>
                        <div class="icon-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            <span class="icon-name" style="color: rgb(51, 51, 51);">Coração</span>
                        </div>
                        <div class="icon-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <span class="icon-name" style="color: rgb(51, 51, 51);">Pasta</span>
                        </div>
                        <div class="icon-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                            <span class="icon-name" style="color: rgb(51, 51, 51);">Arquivo</span>
                        </div>
                    </div>
                </div>

                <button id="download-button" class="download-button" style="display: block;">Download SVG</button>
            </div>

            <div class="preview-panel">
                <h2>Pré-visualização do Ícone</h2>
                <p>O ícone selecionado aparecerá aqui.</p>
                <div id="icon-preview-container" class="icon-preview-box">
                    <!-- O ícone padrão é agora pré-renderizado no HTML -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
            </div>
        </div>

    <!-- O JavaScript é agora carregado ao final do corpo para não bloquear a renderização -->
    <script>
        (function() {
            // Objeto contendo os pacotes de ícones
            const iconPackages = {
                basic: [
                    { name: "Casa", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>' },
                    { name: "Engrenagem", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V23a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 4.6 19.4a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1.51-1V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82.33l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V19.4a1.65 1.65 0 0 0-1.51 1z"></path></svg>' },
                    { name: "Coração", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>' },
                    { name: "Pasta", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>' },
                    { name: "Arquivo", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>' }
                ],
                tech: [
                    { name: "Computador", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' },
                    { name: "Nuvem", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>' },
                    { name: "Telefone", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.06 16.48 16.48 0 0 1-5.22-1.39A1.06 1.06 0 0 1 12.35 19L7 13.65a1.06 1.06 0 0 1-1.68-1.57A16.48 16.48 0 0 1 4 6a2 2 0 0 1 2-2h3.08a2 2 0 0 1 2 2c.2 1.33.6 2.62 1.2 3.82a1 1 0 0 1-1.35 1.55l-.33.27-2.17 2.17a1 1 0 0 1-1.42 0L6 14.58l-1.07-1.07a1 1 0 0 0-1.42 0L1 15a1 1 0 0 0 0 1.42z"></path></svg>' },
                    { name: "Servidor", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>' },
                    { name: "Banco de Dados", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>' }
                ],
                social: [
                    { name: "Usuário", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
                    { name: "Like", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"></path></svg>' },
                    { name: "Compartilhar", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>' },
                    { name: "Mensagem", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>' },
                    { name: "Estrela", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>' }
                ],
                dev: [
                    { name: "Código", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>' },
                    { name: "Branch", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>' },
                    { name: "Bug", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bug"><path d="M13 16h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2z"></path><path d="M21 16V8a2 2 0 0 0-2-2h-3v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6h-3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v1a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2v-1h3a2 2 0 0 0 2-2z"></path></svg>' },
                    { name: "Terminal", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>' },
                    { name: "Caixa", svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path><polyline points="21 8 12 14 3 8"></polyline></svg>' }
                ]
            };

            // Mapeamento dos elementos do DOM
            const packageSelect = document.getElementById('package-select');
            const colorPicker = document.getElementById('color-picker');
            const textColorPicker = document.getElementById('text-color-picker');
            const iconGrid = document.getElementById('icon-grid');
            const downloadButton = document.getElementById('download-button');
            const iconPreviewContainer = document.getElementById('icon-preview-container');

            // Variável para rastrear o ícone selecionado. O padrão é o primeiro ícone do pacote 'basic'.
            let selectedIcon = iconPackages.basic[0];

            // Adiciona o evento de clique para cada item de ícone renderizado inicialmente
            document.querySelectorAll('.icon-item').forEach(item => {
                item.addEventListener('click', handleIconSelection);
            });

            function handleIconSelection(event) {
                const clickedItem = event.currentTarget;
                document.querySelectorAll('.icon-item').forEach(item => {
                    item.classList.remove('selected');
                });
                clickedItem.classList.add('selected');
                
                const iconName = clickedItem.querySelector('.icon-name').textContent;
                selectedIcon = iconPackages[packageSelect.value].find(icon => icon.name === iconName);
                
                updatePreview();
            }

            /**
             * Renderiza os ícones no grid.
             * @param {string} packageKey A chave do pacote de ícones.
             */
            function renderIcons(packageKey) {
                iconGrid.innerHTML = '';
                const icons = iconPackages[packageKey];
                const currentColor = colorPicker.value;
                const currentTextColor = textColorPicker.value;

                icons.forEach(icon => {
                    const iconItem = document.createElement('div');
                    iconItem.className = 'icon-item';
                    
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = icon.svg;
                    const svgElement = tempDiv.querySelector('svg');
                    svgElement.setAttribute('stroke', currentColor);

                    const iconNameSpan = document.createElement('span');
                    iconNameSpan.className = 'icon-name';
                    iconNameSpan.textContent = icon.name;
                    iconNameSpan.style.color = currentTextColor;

                    iconItem.innerHTML = svgElement.outerHTML;
                    iconItem.appendChild(iconNameSpan);
                    
                    iconItem.addEventListener('click', handleIconSelection);
                    iconGrid.appendChild(iconItem);
                });
            }

            /**
             * Atualiza a pré-visualização do ícone.
             */
            function updatePreview() {
                if (!selectedIcon) {
                    iconPreviewContainer.innerHTML = '<p>Selecione um ícone para começar a personalizá-lo.</p>';
                    downloadButton.style.display = 'none';
                    return;
                }

                const coloredSvg = selectedIcon.svg.replace(/stroke="[^"]*"/, `stroke="${colorPicker.value}"`);
                iconPreviewContainer.innerHTML = coloredSvg;
                downloadButton.style.display = 'block';
            }

            /**
             * Atualiza a cor do stroke dos ícones no grid e no preview.
             * @param {string} newColor A nova cor.
             */
            function updateSvgColors(newColor) {
                document.querySelectorAll('#icon-grid svg, #icon-preview-container svg').forEach(svg => {
                    svg.setAttribute('stroke', newColor);
                });
            }

            /**
             * Atualiza a cor do texto dos nomes dos ícones.
             * @param {string} newColor A nova cor.
             */
            function updateTextColors(newColor) {
                document.querySelectorAll('.icon-name').forEach(span => {
                    span.style.color = newColor;
                });
            }

            /**
             * Inicia o download do arquivo SVG.
             */
            function downloadSvg() {
                if (!selectedIcon) {
                    return;
                }

                const finalSvg = selectedIcon.svg.replace(/stroke="[^"]*"/, `stroke="${colorPicker.value}"`);
                const filename = `${selectedIcon.name.toLowerCase().replace(/\s/g, '-')}.svg`;
                
                const blob = new Blob([finalSvg], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }

            // Centraliza o registro de eventos em um único bloco.
            function setupEventListeners() {
                packageSelect.addEventListener('change', (e) => {
                    selectedIcon = null; // Reseta o ícone selecionado
                    renderIcons(e.target.value);
                    updatePreview();
                });

                colorPicker.addEventListener('input', (e) => {
                    updateSvgColors(e.target.value);
                });

                textColorPicker.addEventListener('input', (e) => {
                    updateTextColors(e.target.value);
                });

                downloadButton.addEventListener('click', downloadSvg);
            }

            setupEventListeners();
        })(); // Fim da IIFE
    </script>
