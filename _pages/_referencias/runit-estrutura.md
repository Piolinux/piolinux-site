---
title: "Estrutura de um Serviço com runit"
description: "Diagrama da estrutura de diretórios e arquivos exigidos por um serviço gerenciado pelo runit (Debian, Devuan, Void). Inclui run, finish e logger separado."
layout: manual-seo
permalink: /referencias/runit-estrutura/
tags: [runit, ufw, runit-estrutura]
---


<section>

<figure>
  <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
      <feFlood flood-color="#00ff00" result="glowColor"/>
      <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
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
    .title { fill: #a0f0f0; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 14px; font-weight: bold; }
    .file { fill: #80d0ff; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 12px; }
    .comment { fill: #80ffaa; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 11px; font-style: italic; }
    .cmd { fill: #ffff80; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 12px; }
  </style>

  <!-- Fundo com bordas arredondadas e brilho -->
  <rect x="2" y="2" width="516" height="196" rx="15" ry="15"
        fill="url(#grad)"
        stroke="#00ff00"
        stroke-width="2"
        filter="url(#glow)" />

  <!-- Caminho base -->
  <text class="title" x="20" y="30">/etc/service/ufw/</text>

  <!-- Arquivos -->
  <text class="file" x="40" y="60">├── run</text>
  <text class="file" x="40" y="80">├── finish</text>
  <text class="file" x="40" y="100">└── log/</text>
  <text class="file" x="60" y="120">    └── run</text>

  <!-- Comentários -->
  <text class="comment" x="100" y="60">← script de execução (deve usar exec)</text>
  <text class="comment" x="100" y="80">← (opcional) ao parar o serviço</text>
  <text class="comment" x="120" y="120">← logger separado</text>

  <!-- Comandos úteis -->
  <text class="cmd" x="20" y="160">→ Listar serviços: ls -1 /etc/service</text>
  <text class="cmd" x="20" y="180">→ Ver status: sv status ufw</text>
</svg>

  
  
  
  
  <figcaption>Estrutura mínima de um serviço no <code>runit</code>. O script <code>run</code> deve ser executável e não retornar (geralmente com <code>exec</code>).</figcaption>
</figure>


<a href="/assets/imagens/runit-estrutura.svg" 
   download="runit-estrutura.svg"
   class="btn-download">
  ⤓ Baixar SVG
</a>


</section>

<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Situações.</th>
      <th>Comandos.</th>
      <th>Resultados.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Situação">Uso incorreto: confusão com listas.</td>
      <td data-label="Comando"><code>ls -1 /etc/service/ufw | xargs -n 1 sv status</code></td>
      <td data-label="Resultado">falha: <code>/etc/service/ufw</code> é um diretório, não uma lista. O <code>comando ls</code> lista arquivos <em>dentro</em> dele (exemplos: <code>run</code>, <code>finish</code>) <code>sv status run</code> não faz sentido.</td>
    </tr>
    <tr>
      <td data-label="Situação">Uso correto: status de um serviço.</td>
      <td data-label="Comando"><code>sv status ufw</code></td>
      <td data-label="Resultado">Mostra o status real do serviço <code>ufw</code> (ex: <code>run: up (pid 123) 5s</code>).</td>
    </tr>
    <tr>
      <td data-label="Situação">Uso avançado: status de vários serviços.</td>
      <td data-label="Comando"><code>printf '%s\n' ufw cron ssh | xargs -n 1 sv status</code></td>
      <td data-label="Resultado">status de <code>UFW</code>, <code>CRON</code> e <code>SSH</code> - útil para checagem em lote.</td>
    </tr>
  </tbody>
</table>


</section>
