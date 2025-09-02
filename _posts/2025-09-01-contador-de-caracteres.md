---
layout: default
title: "Contador de Caracteres para Redes Sociais"
description: "Veja em tempo real quantos caracteres você usou. Ideal para X (Twitter), Instagram, títulos de blog e legendas."
tags: [produtividade, redes-sociais, ferramenta, texto]
category: ferramentas
date: 2025-09-01 10:00:00 -0300
---





<section class="post-content">


<h1>Escrever dentro do limite é difícil — use este contador</h1>

<h2>Limites em redes sociais</h2>
<ul>
  <li><strong>X (Twitter)</strong>: 280 caracteres</li>
  <li><strong>Instagram</strong>: 2.200 caracteres, mas só ~138 aparecem sem "leia mais"</li>
  <li><strong>Títulos de blog</strong>: 50–60 caracteres para não cortar no Google</li>
</ul>

<h2>Por que isso importa</h2>
<p>Se o título for muito longo, o Google corta. Se a legenda do Instagram for longa, o usuário não lê. Escrever com limite é treinar clareza.</p>

<h2>Use esta ferramenta</h2>
<p>Este contador em tempo real mostra exatamente quantos caracteres você usou — e onde aparecerá cortado.</p>

<label for="texto"><strong>Digite seu texto:</strong></label>
<textarea id="texto" placeholder="Seu post, título ou legenda..."></textarea>

<div class="contador">
  <strong>Caracteres:</strong> <span id="contagem">0</span> / <span id="limite">280</span>
</div>

<div class="dica">
  <strong>📌 Dica por plataforma:</strong>
  <br>• <strong>X (Twitter)</strong>: até <strong>280</strong> caracteres
  <br>• <strong>Instagram</strong>: use até <strong>138</strong> no início (o resto fica escondido)
  <br>• <strong>Facebook</strong>: até <strong>80–100</strong> para melhor engajamento
  <br>• <strong>Título de blog</strong>: <strong>50–60</strong> caracteres (SEO ideal)
</div>

<script>
  const textarea = document.getElementById('texto');
  const contagem = document.getElementById('contagem');
  const limiteSpan = document.getElementById('limite');
  const limite = 280;

  textarea.addEventListener('input', function () {
    const qtd = this.value.length;
    contagem.textContent = qtd;
    
    if (qtd > limite) {
      contagem.style.color = '#e74c3c';
      limiteSpan.style.color = '#e74c3c';
    } else {
      contagem.style.color = '#27ae60';
      limiteSpan.style.color = '#27ae60';
    }
  });
</script>

<style>
  .intro {
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  textarea {
    width: 100%;
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    font-family: inherit;
    resize: vertical;
    margin-bottom: 10px;
  }
  .contador {
    padding: 10px 12px;
    background: #f8f9fa;
    border-radius: 6px;
    font-family: monospace;
    font-size: 15px;
    color: #333;
  }
  .dica {
    margin-top: 20px;
    padding: 15px;
    background: #e6f7ff;
    border-left: 4px solid #1890ff;
    border-radius: 6px;
    line-height: 1.6;
    font-size: 15px;
  }
  .dica strong {
    color: #0050b3;
  }
</style>
