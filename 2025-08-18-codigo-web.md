---
title: Guia Descomplicado para a sua Ferramenta-Web
layout: default
date: 2025-08-18
tags: [ferramenta, código, HTML, SVG, dicas]
categoria: ferramentas
description: Uma ferramenta simples e prática para formatar código HTML/XML e converter SVGs para Base64, ajudando a otimizar o seu site.
---
<section class="post-content">
    <!-- Título principal e introdução -->
    <h1 class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-center mb-6">
        📋 Olá! Guia Rápido para Usar a Ferramenta-Web
    </h1>
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
        <p class="text-gray-300 text-lg mb-4">
            E aí, tudo bem? Olha, se você já se sentiu perdido com um código bagunçado ou com um monte de arquivos de ícones, relaxa. Esta ferramenta foi feita exatamente para isso. Pense nela como a sua companheira, pronta para arrumar a bagunça e te dar umas dicas de mestre.
        </p>
        <p class="text-gray-400">
            Ela é super simples, dividida em duas partes, como um papo rápido.
        </p>
    </div>

    <!-- Seção 1: A Ferramenta de Arrumar a Casa -->
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
        <h2 class="text-2xl font-bold text-teal-400 mb-4">
            1. A Ferramenta de Arrumar a Casa do Código html
        </h2>
        <p class="mb-6 text-gray-400">
            Cole o código todo "amarrotado" na primeira caixa de texto (a da esquerda) e clicar no botão "Corrigir e Formatar". A mágica acontece em segundos: a caixa de baixo vai te devolver o código lindo, organizado, com cada linha no seu devido lugar.
            <br><br>
            <strong>Nova funcionalidade!</strong> A ferramenta agora também deteta e remove tags duplicadas (por exemplo, `<p></p><p></p>`), fazendo uma limpeza extra no seu código. Depois é só copiar e usar!
        </p>

        <!-- Ferramenta para Correção de Código -->
        <div class="bg-gray-700 p-4 rounded-xl shadow-inner grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea id="codeInput" class="w-full h-64 p-3 text-sm rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="<!-- Cole seu código aqui -->"></textarea>
            <div>
                <!-- Os botões agora estão em uma linha para melhor organização -->
                <div class="flex space-x-2 mb-4">
                    <button onclick="formatCode()" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg transition-colors">
                        Corrigir e Formatar
                    </button>
                    <button onclick="clearCode()" class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors">
                        Limpar
                    </button>
                </div>
                <textarea id="codeOutput" readonly class="w-full h-64 p-3 text-sm rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="A saída do código aparecerá aqui..."></textarea>
                <button onclick="copyToClipboard('codeOutput')" class="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 rounded-lg transition-colors">
                    Copiar Código
                </button>
            </div>
        </div>
    </div>

    <!-- Seção 2: A Mágica dos Ícones SVG -->
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold text-blue-400 mb-4">
            2. A Mágica dos Ícones SVG
        </h2>
        <p class="mb-4 text-gray-400">
            Esta é uma dica de profissional, daquelas que a gente só partilha com os amigos. Em vez de ter um arquivo .svg para cada ícone, você pode transformar o ícone inteiro numa única linha de texto. Parece bruxaria, mas os sites carregam rápido.
        </p>

        <h3 class="text-xl font-semibold mb-2 text-blue-300">
            É super fácil:
        </h3>
        <ul class="list-disc space-y-3 text-gray-400 pl-6 mb-4">
            <li>
                <strong>Cola o código:</strong> Na caixinha da direita, cola o código do seu ícone SVG.
            </li>
            <li>
                <strong>Olhe com atenção a pré-visualização:</strong> A ferramenta vai ser esperta e mostrar uma pré-visualização do seu ícone. Assim, você tem a certeza de que está a converter a coisa certa.
            </li>
            <li>
                <strong>Copia a mágica:</strong> A caixa de baixo vai ser preenchida automaticamente com a string Base64. Parece uma linha enorme de caracteres, mas é aí que está o poder!
            </li>
            <li>
                <strong>Use o ícone:</strong> Agora é só clicar em "Copiar Base64" e cole essa linha diretamente no seu HTML, no atributo src de uma tag `<img>`. E pronto! Sem mais arquivos para gerir, sem mais dor de cabeça.
            </li>
            <li>
                <strong>Teste:</strong> Depois de tudo, teste no pagespeed do Google. Isso vai te mostrar o quanto o seu site ficou mais rápido!
            </li>
        </ul>

        <!-- Ferramenta para Conversão de SVG -->
        <div class="bg-gray-700 p-4 rounded-xl shadow-inner grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea id="svgInput" class="w-full h-64 p-3 text-sm rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="<!-- Cole seu SVG aqui -->"></textarea>
            <div>
                <!-- Os botões agora estão em uma linha para melhor organização -->
                <div class="flex space-x-2 mb-4">
                    <button onclick="convertSvgToBase64()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
                        Converter para Base64
                    </button>
                    <button onclick="clearSvg()" class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors">
                        Limpar
                    </button>
                </div>
                <!-- Aumentei a altura do div para que a visualização seja melhor. -->
                <div id="svgPreview" class="w-full h-48 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-600 text-gray-500 text-sm overflow-hidden">
                    Pré-visualização do SVG
                </div>
                <textarea id="base64Output" readonly class="w-full h-64 mt-4 p-3 text-sm rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="O resultado Base64 aparecerá aqui..."></textarea>
                <button onclick="copyToClipboard('base64Output')" class="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 rounded-lg transition-colors">
                    Copiar Base64
                </button>
            </div>
        </div>

        <h4 class="text-xl font-semibold mt-8 mb-4 text-teal-300">
            Exemplo para você ver como fica:
        </h4>
        <div class="bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm text-gray-300">
            <code>
                &lt;img src="[COLA AQUI A STRING ENORME QUE A FERRAMENTA TE DEU]" alt="Ícone Legal"&gt;
            </code>
        </div>

        <p class="mt-8 text-gray-400">
            Espero que esta ferramenta torne o seu dia a dia mais tranquilo! É isso. Qualquer coisa, é só chamar. 😉
        </p>
    </div>
</section>

<!-- Scripts da Ferramenta -->
<script>
    // A função para formatar o código com indentação e remover tags duplicadas
    function formatCode() {
        const codeInput = document.getElementById('codeInput');
        const codeOutput = document.getElementById('codeOutput');
        const code = codeInput.value;

        if (!code.trim()) {
            codeOutput.value = '';
            return;
        }

        let formatted = '';
        let indentLevel = 0;
        const lines = code.split(/[\r\n]+/);
        let lastTag = '';

        lines.forEach(line => {
            let trimmedLine = line.trim();
            if (!trimmedLine) return; // Ignora linhas vazias

            // Lógica de indentação aprimorada
            if (trimmedLine.startsWith('</') || trimmedLine.endsWith('/>')) {
                if (indentLevel > 0) {
                    indentLevel--;
                }
            }

            // Verifica tags duplicadas, mas apenas se a linha não for um comentário ou doctype
            const isTag = trimmedLine.startsWith('<') && trimmedLine.endsWith('>') && !trimmedLine.startsWith('<!--') && !trimmedLine.startsWith('<!DOCTYPE');
            if (isTag && trimmedLine === lastTag) {
                return; // Ignora tags duplicadas
            }

            formatted += ' '.repeat(indentLevel * 2) + trimmedLine + '\n';

            // Aumenta a indentação para tags de abertura
            if (trimmedLine.startsWith('<') && !trimmedLine.startsWith('</') && !trimmedLine.endsWith('/>') && !trimmedLine.startsWith('<!--') && !trimmedLine.startsWith('<!DOCTYPE')) {
                indentLevel++;
            }

            // Atualiza a última tag encontrada
            if (isTag) {
                lastTag = trimmedLine;
            } else {
                lastTag = ''; // Reseta se não for uma tag
            }
        });

        codeOutput.value = formatted.trim();
    }

    // A função para limpar os campos de entrada e saída do código
    function clearCode() {
        document.getElementById('codeInput').value = '';
        document.getElementById('codeOutput').value = '';
    }

    // A função para converter SVG para Base64
    function convertSvgToBase64() {
        const svgInput = document.getElementById('svgInput');
        const base64Output = document.getElementById('base64Output');
        const svgPreview = document.getElementById('svgPreview');
        const svgCode = svgInput.value.trim();

        if (!svgCode) {
            base64Output.value = '';
            svgPreview.innerHTML = 'Pré-visualização do SVG';
            return;
        }

        try {
            // Checa se o código SVG é válido
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgCode, "image/svg+xml");
            if (doc.getElementsByTagName("parsererror").length) {
                throw new Error("Código SVG inválido.");
            }

            // Cria a string Base64
            const base64String = btoa(unescape(encodeURIComponent(svgCode)));
            const dataUrl = `data:image/svg+xml;base64,${base64String}`;

            base64Output.value = dataUrl;
            svgPreview.innerHTML = ''; // Limpa o conteúdo anterior
            const img = document.createElement('img');
            img.src = dataUrl;
            img.alt = "Pré-visualização do SVG";
            img.classList.add('w-full', 'h-full', 'object-contain');
            svgPreview.appendChild(img);

        } catch (error) {
            base64Output.value = 'Erro ao converter o SVG. Por favor, verifique o código.';
            svgPreview.innerHTML = 'Erro: Código inválido';
        }
    }

    // A função para limpar os campos de entrada, pré-visualização e saída do SVG
    function clearSvg() {
        document.getElementById('svgInput').value = '';
        document.getElementById('base64Output').value = '';
        document.getElementById('svgPreview').innerHTML = 'Pré-visualização do SVG';
    }

    // A função para copiar texto para a área de transferência
    function copyToClipboard(elementId) {
        const element = document.getElementById(elementId);
        element.select();
        element.setSelectionRange(0, 99999); // Para dispositivos móveis

        try {
            document.execCommand('copy');
            console.log('Conteúdo copiado com sucesso!');
        } catch (err) {
            console.error('Erro ao copiar para a área de transferência.');
        }
    }

    // Adiciona um listener para atualizar a pré-visualização do SVG em tempo real
    document.getElementById('svgInput').addEventListener('input', convertSvgToBase64);
</script>
