---
title: "Fluxo Seguro: find + xargs com -print0 / -0"
description: "Diagrama técnico mostrando o uso correto de find -print0 e xargs -0 para evitar falhas com nomes de arquivo contendo espaços, quebras de linha ou caracteres especiais."
layout: manual-seo
permalink: /referencias/find-xargs-fluxo/
tags: [find-xargs-fluxo,]
---

<section>

<figure>
  <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feFlood flood-color="#00ff00" result="glow"/>
      <feComposite in="glow" in2="blur" operator="in" result="softGlow"/>
      <feMerge>
        <feMergeNode in="softGlow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0f0f;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1"/>
    </linearGradient>
  </defs>

  <style>
    .label { fill: #a0f0f0; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 14px; font-weight: bold; }
    .cmd { fill: #80d0ff; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 12px; }
    .safe { fill: #80ffaa; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 11px; font-style: italic; }
  </style>

  <!-- Fundo com bordas arredondadas -->
  <rect x="2" y="2" width="516" height="156" rx="15" ry="15"
        fill="url(#grad)" stroke="#00ff00" stroke-width="2" filter="url(#glow)" />

  <text class="label" x="20" y="30">FIND — FLUXO SEGURO COM XARGS</text>

  <text class="cmd" x="30" y="60">find . -name "*.tmp" -print0 | xargs -0 trash</text>

  <text class="safe" x="30" y="95">✓ Evita falhas com nomes como "relatório 2025 (cópia).tmp"</text>
  <text class="safe" x="30" y="120">✓ Funciona em Devuan, antiX, Void — sem risco de corrupção</text>
</svg>

  <figcaption>Use sempre <code>find ... -print0 | xargs -0 ...</code> para evitar falhas com nomes de arquivo complexos. A forma sem <code>-0</code> quebra em arquivos com espaço.</figcaption>
</figure>


<a href="/assets/imagens/find-xargs-fluxo.svg" 
   download="find-xargs-fluxo.svg"
   class="btn-download">
  ⤓ Baixar SVG
</a>

</section>



<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Utilização.</th>
      <th>Comandos Corretos.</th>
      <th>O que Fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Uso">Seguro com <code>trash</code></td>
      <td data-label="Comando Correto"><code>find . -name "*.tmp" -print0 | xargs -0 trash</code></td>
      <td data-label="O que Faz">Move arquivos <code>.tmp</code> para a lixeira (<code>~/.local/share/Trash</code>). Recuperável com <code>trash-list</code> e <code>trash-restore</code>.</td>
    </tr>
    <tr>
      <td data-label="Uso">Listar lixeira</td>
      <td data-label="Comando Correto"><code>trash-list</code></td>
      <td data-label="O que Faz">Mostra todos os arquivos atualmente na lixeira, com caminho original e data de exclusão.</td>
    </tr>
    <tr>
      <td data-label="Uso">Perigoso (sem <code>-print0</code>)</td>
      <td data-label="Comando Correto"><code>find . -name "*.tmp" | xargs rm.</code></td>
      <td data-label="O que Faz">Falha com nomes contendo espaço (ex: <code>relatório 2025.tmp</code> - apaga só <code>relatório.</code>).</td>
    </tr>
    <tr>
      <td data-label="Uso">Inválido (só <code>xargs -0</code>)</td>
      <td data-label="Comando Correto"><code>xargs -0 rm.</code></td>
      <td data-label="O que Faz"><strong>Não funciona sozinho.</strong> — espera entrada com null bytes. Sempre use com <code>find -print0.</code>.</td>
    </tr>
  </tbody>
</table>

<blockquote>
  <strong>Atenção:</strong> O <code>.</code> no comando significa <strong>diretório atual</strong> - não o diretório do usuário (<code>/home/user</code>) nem a raiz (<code>/</code>).  
  Para operar em outro local, substitua <code>.</code> pelo caminho 
  desejado (exemplos: <code>/tmp</code>, <code>/var/cache</code>).
</blockquote>


</section>
