---
layout: manual-seo
title: "Limites de Caracteres por Plataforma"
description: "Tabela com limites reais do Google, X, Instagram e meta descriptions — para escrever com clareza."
author: "Piolinux"
categories: [seo, redes-sociais, escrita]
tags: [caracteres, twitter, instagram, google, seo, limite]
permalink: /limites-caracteres-plataformas/
---



<section class="post-content">



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Plataforma.</th>
      <th>Limite Total.</th>
      <th>Visível Sem Clique.</th>
      <th>Impacto.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Plataforma">Google (título de busca).</td>
      <td data-label="Limite Total">60 caracteres</td>
      <td data-label="Visível Sem Clique">~50–60</td>
      <td data-label="Impacto">Títulos mais longos são cortados com "…"</td>
    </tr>
    <tr>
      <td data-label="Plataforma">X (Twitter).</td>
      <td data-label="Limite Total">280 caracteres</td>
      <td data-label="Visível Sem Clique">280</td>
      <td data-label="Impacto">Tudo visível, mas concisão aumenta engajamento.</td>
    </tr>
    <tr>
      <td data-label="Plataforma">Instagram (legenda).</td>
      <td data-label="Limite Total">2.200 caracteres</td>
      <td data-label="Visível Sem Clique">~138</td>
      <td data-label="Impacto">Texto após isso fica sob “mais” — poucos leem.</td>
    </tr>
    <tr>
      <td data-label="Plataforma">Meta Description (Google.</td>
      <td data-label="Limite Total">160 caracteres</td>
      <td data-label="Visível Sem Clique">155–160</td>
      <td data-label="Impacto">Descrições longas são truncadas.</td>
    </tr>
  </tbody>
</table>

<label for="texto"><strong>Digite seu texto:</strong></label>
<textarea id="texto" placeholder="Seu post, título ou legenda..."></textarea>

<div class="contador">
  <strong>Caracteres:</strong> <span id="contagem">0</span> / <span id="limite">280</span>
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
