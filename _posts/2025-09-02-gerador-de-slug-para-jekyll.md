---
layout: manual-seo
title: "Gere Arquivos para Jekyll: data + slug + .md Automático"
description: "Use esta ferramenta para gerar nomes de arquivo Jekyll (AAAA-MM-DD-slug.md) com precisão — ideal para organizar _posts/ sem erros."
date: 2025-09-02
categories: [ferramentas, jekyll]
tags: [jekyll, ferramenta, markdown, produtividade]
permalink: /gerador-slug-jekyll/
---






<section class="post-content">
           
      




<table class="evergreen-table">
  <thead>
    <tr><th>Regras.</th><th>Exemplos.</th></tr>
  </thead>
  <tbody>
    <tr><td>Minúsculas</td><td><code>Como Usar.</code> → <code>como-usar</code></td></tr>
    <tr><td>Remover acentos</td><td><code>móvel.</code> → <code>movel</code></td></tr>
    <tr><td>Espaços → hífens</td><td><code>post de linux.</code> → <code>post-de-linux</code></td></tr>
    <tr><td>Remover caracteres especiais</td><td><code>chmod?</code> → <code>chmod</code></td></tr>
    <tr><td>Formato Jekyll</td><td><code>2025-05-18-titulo.md</code></td></tr>
  </tbody>
</table>











<p><strong>Título do post:</strong></p>
<textarea id="titulo" placeholder="Como configurar o Jekyll no Windows" rows="2" style="width: 100%; padding: 8px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px;"></textarea>

<div style="margin: 15px 0;">
  <label>
    <input type="checkbox" id="usarDataAtual" checked> Usar data de hoje
  </label>
  <label style="margin-left: 15px;">
    <input type="checkbox" id="incluirExtensao" checked> Incluir <code>.md</code>
  </label>
</div>

<p><strong>Data (opcional):</strong></p>
<input type="date" id="data" style="padding: 8px; border: 1px solid #FFFFFF; border-radius: 4px;" />

<p><strong>Nome do arquivo sugerido:</strong></p>
<div id="resultado" style="background: #000000; padding: 10px; border-radius: 4px; font-family: monospace; word-break: break-word;">
  ...
</div>

<button id="copiar" style="margin-top: 10px; padding: 8px 12px; background: #008000; color:#1A1A1A; border: none; border-radius: 4px; cursor: pointer;">
  📋 Copiar Nome
</button>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.getElementById('titulo');
    const usarDataAtual = document.getElementById('usarDataAtual');
    const incluirExtensao = document.getElementById('incluirExtensao');
    const inputData = document.getElementById('data');
    const resultado = document.getElementById('resultado');
    const botaoCopiar = document.getElementById('copiar');

    // Desabilita campo de data se usar data atual
    function atualizaDataInput() {
      inputData.disabled = usarDataAtual.checked;
    }
    usarDataAtual.addEventListener('change', atualizaDataInput);
    atualizaDataInput();

    // Função para gerar slug
    function gerarSlug(texto) {
      return texto
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    }

    // Função para gerar nome do arquivo
    function atualizarResultado() {
      const valor = titulo.value.trim();
      if (!valor) {
        resultado.textContent = '...';
        return;
      }

      const slug = gerarSlug(valor);

      let data;
      if (usarDataAtual.checked) {
        const hoje = new Date().toISOString().split('T')[0];
        data = hoje;
      } else if (inputData.value) {
        data = inputData.value;
      } else {
        data = new Date().toISOString().split('T')[0];
      }

      let nomeArquivo = `${data}-${slug}`;
      if (incluirExtensao.checked) {
        nomeArquivo += '.md';
      }

      resultado.textContent = nomeArquivo;
    }

    // Eventos
    titulo.addEventListener('input', atualizarResultado);
    usarDataAtual.addEventListener('change', atualizarResultado);
    incluirExtensao.addEventListener('change', atualizarResultado);
    inputData.addEventListener('change', atualizarResultado);

    // Botão copiar
    botaoCopiar.addEventListener('click', function () {
      const texto = resultado.textContent;
      if (texto && texto !== '...') {
        navigator.clipboard.writeText(texto).then(() => {
          botaoCopiar.textContent = '✅ Copiado!';
          setTimeout(() => {
            botaoCopiar.textContent = '📋 Copiar Nome';
          }, 2000);
        }).catch(err => {
          alert('Falha ao copiar: ' + texto);
        });
      }
    });

    // Inicializa
    atualizarResultado();
  });
</script>
