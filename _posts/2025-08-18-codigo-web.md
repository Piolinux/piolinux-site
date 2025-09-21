---
layout: default
title: "Guia Descomplicado: Crie Ferramentas Web com HTML Puro"
date: 2025-08-18
author: "PioLinux"
categories: ferramentas jekyll desenvolvimento web
tags: [html, ferramenta, web, tutorial, codigo, puro]
description: "Aprenda a criar ferramentas web simples e funcionais com HTML, CSS e JavaScript puro. Sem frameworks, sem complicações — só código limpo."
permalink: /guia-ferramentas-web/
---

{% include toc.html %}




<section class="post-content">
    <!-- Título principal e introdução -->
    <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-center mb-6">
        📋 Olá! Guia Rápido para Usar a Ferramenta-Web
    </h2>
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

        <!-- Tool for Code Correction — UX Aprimorada -->
<div class="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
    <h3 class="text-xl font-bold text-teal-400 mb-4 flex items-center gap-2">
        🧹 Cole seu código HTML/CSS/JS para corrigir e formatar
    </h3>

    <!-- Input Code -->
    <div class="mb-4">
        <label class="block text-gray-300 text-sm font-medium mb-2" for="codeInput">
            🔤 Cole seu código aqui:
        </label>
        <textarea
            id="codeInput"
            class="w-full h-40 p-4 text-sm rounded-lg bg-gray-900 border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-mono"
            placeholder="<!-- Ex: <div><p>Olá Mundo</p></div> -->"
            oninput="autoFormatPreview()"
        ></textarea>
    </div>

    <!-- Output + Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Formatted Output -->
        <div>
            <h4 class="text-sm font-semibold text-gray-300 mb-2">✅ Código Formatado:</h4>
            <div class="relative">
                <textarea
                    id="codeOutput"
                    readonly
                    class="w-full h-40 p-4 text-sm rounded-lg bg-gray-900 border border-gray-600 text-gray-200 focus:outline-none font-mono"
                    placeholder="O código formatado aparecerá aqui..."
                ></textarea>
                <button
                    onclick="copyToClipboard('codeOutput')"
                    class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 p-2 rounded transition-colors"
                    title="Copiar código formatado"
                >
                    📋
                </button>
            </div>
            <p id="formatStatus" class="text-xs text-gray-400 mt-2 italic">
                — Clique em "Corrigir e Formatar" ou digite para ver preview —
            </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col justify-end">
            <div class="space-y-3">
                <button
                    onclick="formatCode()"
                    class="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                    🔄 Corrigir e Formatar Agora
                </button>
                <button
                    onclick="clearCode()"
                    class="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                    🗑️ Limpar Tudo
                </button>
            </div>
        </div>
    </div>

    <!-- Dica final -->
    <div class="mt-6 p-4 bg-gray-700 rounded-lg border-l-4 border-teal-500">
        <p class="text-gray-300 text-sm">
            💡 <strong>Dica:</strong> A ferramenta remove tags duplicadas consecutivas e formata com indentação automática. Ideal para limpar código colado de sites ou IA.
        </p>
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

      <!-- Tool for SVG Conversion — UX Aprimorada -->
<div class="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
    <h3 class="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
        🖼️ Cole seu SVG para converter em Base64
    </h3>

    <!-- Input SVG -->
    <div class="mb-4">
        <label class="block text-gray-300 text-sm font-medium mb-2" for="svgInput">
            🔤 Cole o código SVG aqui:
        </label>
        <textarea
            id="svgInput"
            class="w-full h-40 p-4 text-sm rounded-lg bg-gray-900 border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono"
            placeholder="<svg width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot;>...</svg>"
            oninput="convertSvgToBase64()"
        ></textarea>
    </div>

    <!-- Preview + Status -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Preview -->
        <div>
            <h4 class="text-sm font-semibold text-gray-300 mb-2">👁️ Pré-visualização (atualiza em tempo real):</h4>
            <div id="svgPreview" class="w-full h-48 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center overflow-hidden p-4">
                <p class="text-gray-500 text-center">Cole um SVG válido para visualizar</p>
            </div>
            <p id="previewStatus" class="text-xs text-gray-400 mt-2 italic">
                — A pré-visualização atualiza automaticamente —
            </p>
        </div>

        <!-- Output -->
        <div>
            <h4 class="text-sm font-semibold text-gray-300 mb-2">📋 Resultado Base64:</h4>
            <div class="relative">
                <textarea
                    id="base64Output"
                    readonly
                    class="w-full h-40 p-4 text-sm rounded-lg bg-gray-900 border border-gray-600 text-gray-200 focus:outline-none font-mono"
                    placeholder="O Base64 será gerado aqui..."
                ></textarea>
                <button
                    onclick="copyToClipboard('base64Output')"
                    class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 p-2 rounded transition-colors"
                    title="Copiar Base64"
                >
                    📋
                </button>
            </div>
            <p id="copyStatus" class="text-xs text-gray-400 mt-2 italic">
                — Clique no ícone 📋 para copiar —
            </p>
        </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-3 justify-center">
        <button
            onclick="convertSvgToBase64()"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
            🔄 Converter Agora
        </button>
        <button
            onclick="clearSvg()"
            class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
            🗑️ Limpar Tudo
        </button>
    </div>

    <!-- Dica final -->
    <div class="mt-6 p-4 bg-gray-700 rounded-lg border-l-4 border-blue-500">
        <p class="text-gray-300 text-sm">
            💡 <strong>Dica:</strong> Use o Base64 gerado diretamente no atributo <code class="bg-gray-800 px-1 rounded">src</code> de uma tag <code class="bg-gray-800 px-1 rounded">img</code>:
        </p>
        <code class="block mt-2 p-3 bg-gray-900 text-gray-300 text-xs rounded break-all">
            <img src="data:image/svg+xml;base64,[SEU_BASE64_AQUI]" alt="Ícone" />
        </code>
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

<script>
// ✅ CORRIGIDO: Removido espaço extra na URL do Tailwind
const head = document.head || document.getElementsByTagName('head')[0];

const tailwind = document.createElement('script');
tailwind.src = "https://cdn.tailwindcss.com"; // ← SEM ESPAÇOS!
head.appendChild(tailwind);

const inter = document.createElement('style');
inter.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');";
head.appendChild(inter);

// Função para formatar o código com indentação inteligente e remoção de tags duplicadas consecutivas
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
    let lastLine = '';

    lines.forEach(line => {
        let trimmedLine = line.trim();
        if (!trimmedLine) return; // Pula linhas vazias

        // ❗ Melhor detecção de tags para evitar indentação incorreta
        const isOpeningTag = /^<[^\/!>][^>]*>$/.test(trimmedLine); // <div>, <p class="...">
        const isSelfClosingTag = /^<[^>]*\/>$/.test(trimmedLine); // <img/>, <br/>
        const isClosingTag = /^<\/[^>]+>$/.test(trimmedLine); // </div>, </p>
        const isCommentOrDoctype = /^<(!|--)/.test(trimmedLine); // <!DOCTYPE>, <!-- comment -->

        // ❌ Remove tag duplicada consecutiva (ex: <p></p><p></p>)
        if (trimmedLine === lastLine && (isOpeningTag || isClosingTag || isSelfClosingTag)) {
            return;
        }

        // Ajusta indentação ANTES de adicionar a linha
        if (isClosingTag && indentLevel > 0) {
            indentLevel--;
        }

        formatted += ' '.repeat(indentLevel * 2) + trimmedLine + '\n';

        // Aumenta indentação DEPOIS, só para tags de abertura normais
        if (isOpeningTag && !isSelfClosingTag) {
            indentLevel++;
        }

        lastLine = trimmedLine;
    });

    codeOutput.value = formatted.trim();
}

// Limpar campos de código
function clearCode() {
    document.getElementById('codeInput').value = '';
    document.getElementById('codeOutput').value = '';
}

// Converter SVG para Base64 com validação robusta
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
        // ✅ Validação melhorada de SVG
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgCode, "image/svg+xml");

        // Verifica erros de parsing
        const parserError = doc.querySelector('parsererror');
        if (parserError) {
            throw new Error("SVG inválido: " + parserError.textContent);
        }

        // Verifica se é realmente um SVG
        const svgRoot = doc.querySelector('svg');
        if (!svgRoot) {
            throw new Error("O código não contém um elemento <svg> raiz.");
        }

        // Gera Base64
        const base64String = btoa(unescape(encodeURIComponent(svgCode)));
        const dataUrl = `data:image/svg+xml;base64,${base64String}`;

        base64Output.value = dataUrl;

        // Atualiza preview
        svgPreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = dataUrl;
        img.alt = "Pré-visualização do SVG";
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        svgPreview.appendChild(img);

    } catch (error) {
        base64Output.value = `Erro: ${error.message}`;
        svgPreview.innerHTML = `<div style="color: #f87171; padding: 8px;">${error.message}</div>`;
    }
}

// Limpar campos de SVG
function clearSvg() {
    document.getElementById('svgInput').value = '';
    document.getElementById('base64Output').value = '';
    document.getElementById('svgPreview').innerHTML = 'Pré-visualização do SVG';
}

// Copiar para área de transferência com feedback via console (sem alert)
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    element.setSelectionRange(0, 99999); // Para dispositivos móveis

    try {
        const success = document.execCommand('copy');
        if (success) {
            console.log('✅ Conteúdo copiado com sucesso!');
            // ✅ Opcional: adicionar toast depois, se quiser
        } else {
            console.warn('❌ Falha ao copiar. Tente Ctrl+C.');
        }
    } catch (err) {
        console.error('❌ Erro ao copiar:', err);
    }
}

// Atualiza preview em tempo real
document.getElementById('svgInput').addEventListener('input', convertSvgToBase64);
</script>
