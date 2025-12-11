---
title: "Mapa de Camadas do Sistema Linux"
description: "Diagrama técnico das camadas do sistema Linux: hardware, kernel, init e usuário — com comandos reais associados a cada nível."
layout: manual-seo
permalink: /referencias/camadas-linux/
tags: [camadas-linux,]
---

<section>

<figure>
  <svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
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
    .line { stroke: #333; stroke-width: 1; }
  </style>

  <!-- Fundo com bordas arredondadas e brilho -->
  <rect x="2" y="2" width="596" height="216" rx="15" ry="15"
        fill="url(#grad)"
        stroke="#00ff00"
        stroke-width="2"
        filter="url(#glow)" />

  <!-- Linhas divisoras -->
  <line class="line" x1="30" y1="50" x2="570" y2="50" />
  <line class="line" x1="30" y1="100" x2="570" y2="100" />
  <line class="line" x1="30" y1="150" x2="570" y2="150" />

  <!-- Camadas -->
  <text class="label" x="40" y="30">HARDWARE (físico)</text>
  <text class="cmd" x="40" y="45">lspci, lsusb, lscpu, dmidecode</text>

  <text class="label" x="40" y="80">KERNEL (núcleo)</text>
  <text class="cmd" x="40" y="95">dmesg, sysctl, /proc, capabilities</text>

  <text class="label" x="40" y="130">INIT (serviços)</text>
  <text class="cmd" x="40" y="145">sv (runit), service (sysvinit), rc-service (OpenRC)</text>

  <text class="label" x="40" y="180">USUÁRIO (cli)</text>
  <text class="cmd" x="40" y="195">xargs, find, grep, awk, sed, ip, ss</text>
</svg>

  <figcaption>Camadas do sistema Linux e comandos técnicos associados. Útil para entender onde cada ferramenta atua.</figcaption>
</figure>



<a href="/assets/imagens/camadas-linux.png" 
   download="camadas-linux.png"
   class="btn-download">
  ⤓ Baixar SVG
</a>
</section>

<section>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Camada.</th>
      <th>Função.</th>
      <th>Comandos Técnicos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Camada">HARDWARE (físico)</td>
      <td data-label="Função">Interação com componentes físicos</td>
      <td data-label="Comandos Técnicos"><code>lspci</code>, <code>lsusb</code>, <code>lscpu</code>, <code>dmidecode</code></td>
    </tr>
    <tr>
      <td data-label="Camada">KERNEL (núcleo)</td>
      <td data-label="Função">Controle de recursos e segurança do sistema</td>
      <td data-label="Comandos Técnicos"><code>dmesg</code>, <code>sysctl</code>, <code>/proc</code>, <code>capabilities</code></td>
    </tr>
    <tr>
      <td data-label="Camada">INIT (serviços)</td>
      <td data-label="Função">Gerenciamento de serviços em segundo plano</td>
      <td data-label="Comandos Técnicos"><code>sv</code> (runit), <code>service</code> (sysvinit), <code>rc-service</code> (OpenRC)</td>
    </tr>
    <tr>
      <td data-label="Camada">USUÁRIO (cli)</td>
      <td data-label="Função">Processamento de texto, rede e automação</td>
      <td data-label="Comandos Técnicos"><code>xargs</code>, <code>find</code>, <code>grep</code>, <code>awk</code>, <code>sed</code>, <code>ip</code>, <code>ss</code></td>
    </tr>
  </tbody>
</table>


</section>
