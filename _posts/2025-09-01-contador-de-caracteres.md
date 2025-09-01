---
layout: default
title: "Contador de Caracteres para Redes Sociais"
description: "Veja em tempo real quantos caracteres você usou. Ideal para X (Twitter), Instagram, títulos de blog e legendas."
tags: [produtividade, redes-sociais, ferramenta, texto]
category: ferramentas
date: 2025-09-01 10:00:00 -0300
---

<p class="intro">
  Escrever dentro do limite é difícil.<br>
  No <strong>X (Twitter)</strong>, são 280 caracteres.<br>
  No <strong>Instagram</strong>, a legenda tem 2.200, mas só ~138 aparecem sem "leia mais".<br>
  Em <strong>títulos de blog</strong>, o ideal é entre 50 e 60 para não cortar no Google.<br><br>
  Use este <strong>contador em tempo real</strong> para não errar mais.
</p>

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
