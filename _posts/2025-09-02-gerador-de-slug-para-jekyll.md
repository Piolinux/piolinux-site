---
layout: default
title: "Gerador de Arquivo para Jekyll: data + slug + .md"
description: "Ferramenta simples que gera o nome completo do arquivo para Jekyll: AAAA-MM-DD-slug.md. Ideal para organizar posts em _posts/ com precisão e sem erros."
date: 2025-09-02
categories: ferramentas jekyll
tags: [jekyll, ferramenta, markdown, produtividade]
permalink: /gerador-slug-jekyll/
---



{% include toc.html %}


<section class="post-content">
           
      






<h3>🔤 Como funciona o Gerador de Slug</h3>




<p>Converte o título do seu post para o formato correto de arquivos Jekyll, tornando a tarefa de postar mais fácil. Se houver vários posts, o gerenciamento se torna mais simples.</p>
<pre><code>AAAA-MM-DD-titulo-do-post.md</code></pre>

<h4>🔧 Regras aplicadas:</h4>
<ul>
  <li>✅ <strong>Minúsculas</strong>: "Como Usar" → "como usar"</li>
  <li>✅ <strong>Remoção de acentos</strong>: "móvel" → "móvel" → "movel"</li>
  <li>✅ <strong>Espaços viram hífens</strong>: "post de linux" → "post-de-linux"</li>
  <li>✅ <strong>Caracteres especiais removidos</strong>: "como usar chmod?" → "como-usar-chmod"</li>
  <li>✅ <strong>Data atual</strong>: usa a data de hoje no formato <code>AAAA-MM-DD</code></li>
</ul>

<h4>📌 Exemplo prático</h4>
<p><strong>Título:</strong> Como particionar disco no Linux</p>
<p><strong>Resultado:</strong></p>
<pre><code>2025-05-18-como-particionar-disco-no-linux.md</code></pre>

<h4>💡 Dica para Jekyll</h4>
<p>Use esse nome no diretório <code>_posts/</code>:</p>
<pre><code>_posts/2025-05-18-como-particionar-disco-no-linux.md</code></pre>
<p>E o <code>permalink</code> será automaticamente:</p>
<pre><code>/como-particionar-disco-no-linux/</code></pre>

<div style="background:#e8f5e9; border-left:4px solid #2e7d32; padding:1em; margin:1.5em 0; border-radius:0 8px 8px 0; font-size:0.95em;">
  <strong>✅ Dica pro:</strong> Combine este gerador com seu fluxo no <em>Geany</em> e <em>Debian</em>. 
  Crie o arquivo, escreva o post, e publique com <code>bundle exec jekyll serve</code>.
</div>









<p>
  Gere o <strong>nome completo do arquivo</strong> para seu post no Jekyll, no formato:
  <br>
  <code>AAAA-MM-DD-seu-titulo.md</code>
</p>

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
<div id="resultado" style="background: #FFFFFF; padding: 10px; border-radius: 4px; font-family: monospace; word-break: break-word;">
  ...
</div>

<button id="copiar" style="margin-top: 10px; padding: 8px 12px; background: #008000; color:#000000; border: none; border-radius: 4px; cursor: pointer;">
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
