---
layout: manual-seo
title: "Cores no Terminal – Referência Técnica ANSI"
description: "Tabela com códigos ANSI, 256 cores, truecolor, exemplos com printf e temas reais — sem fluff, só utilidade técnica."
permalink: /referencias/cores-terminal-ansi/
tags: [terminal, cores, debian, geany, prompt, ansi, conforto-visual]
---

{% include toc.html %}


<section class="post-content">


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Código ANSI.</th>
      <th>Exemplo (Bash).</th>
      <th>Observação Técnica.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tipo">Texto vermelho</td>
      <td data-label="Código ANSI"><code>\033[31m</code></td>
      <td data-label="Exemplo (Bash)">
        <code>printf '\033[31mErro\033[0m\n'</code>
        <button class="copy-btn" data-command="printf '\033[31mErro\033[0m\n'">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Use <code>printf</code> em vez de <code>echo -e</code> para portabilidade (funciona em <code>dash</code>, <code>busybox</code>).</td>
    </tr>
    <tr>
      <td data-label="Tipo">Fundo amarelo</td>
      <td data-label="Código ANSI"><code>\033[43m</code></td>
      <td data-label="Exemplo (Bash)">
        <code>printf '\033[43mAtenção\033[0m\n'</code>
        <button class="copy-btn" data-command="printf '\033[43mAtenção\033[0m\n'">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Sempre termine com <code>\033[0m</code> para resetar estilos.</td>
    </tr>
    <tr>
      <td data-label="Tipo">Texto brilhante (verde)</td>
      <td data-label="Código ANSI"><code>\033[92m</code></td>
      <td data-label="Exemplo (Bash)">
        <code>printf '\033[92mOK\033[0m\n'</code>
        <button class="copy-btn" data-command="printf '\033[92mOK\033[0m\n'">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Cores brilhantes (90–97) não são suportadas em todos os terminais antigos.</td>
    </tr>
    <tr>
      <td data-label="Tipo">Negrito + Cor</td>
      <td data-label="Código ANSI"><code>\033[1;34m</code></td>
      <td data-label="Exemplo (Bash)">
        <code>PS1='\033[1;34m\u@\h\033[0m:\w\$ '</code>
        <button class="copy-btn" data-command="PS1='\033[1;34m\u@\h\033[0m:\w\$ '">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Em muitos terminais, <code>1;</code> ativa negrito; em outros, só intensifica a cor.</td>
    </tr>
    <tr>
      <td data-label="Tipo">256 cores</td>
      <td data-label="Código ANSI"><code>\033[38;5;Nm</code></td>
      <td data-label="Exemplo (Bash)">
        <code>printf '\033[38;5;196mVermelho 256\033[0m\n'</code>
        <button class="copy-btn" data-command="printf '\033[38;5;196mVermelho 256\033[0m\n'">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">N = 0–255. Use <code>msgcat --color=test</code> para ver todas as cores suportadas.</td>
    </tr>
    <tr>
      <td data-label="Tipo">Truecolor (16M)</td>
      <td data-label="Código ANSI"><code>\033[38;2;R;G;Bm</code></td>
      <td data-label="Exemplo (Bash)">
        <code>printf '\033[38;2;255;0;128mRosa\033[0m\n'</code>
        <button class="copy-btn" data-command="printf '\033[38;2;255;0;128mRosa\033[0m\n'">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Só funciona em terminais modernos (Kitty, Alacritty, GNOME Terminal ≥3.12, etc.).</td>
    </tr>
  </tbody>
</table>

<h3 id="temas">Temas Recomendados (Instalação Real)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tema</th>
      <th>Como instalar</th>
      <th>Terminal compatível</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tema">Dracula</td>
      <td data-label="Como instalar">
        <a href="https://draculatheme.com/" target="_blank">draculatheme.com</a> → escolha seu terminal
      </td>
      <td data-label="Terminal compatível">GNOME Terminal, Kitty, Alacritty, XFCE4-terminal</td>
    </tr>
    <tr>
      <td data-label="Tema">Solarized</td>
      <td data-label="Como instalar">
        <code>git clone https://github.com/solarized/xresources.git</code><br>
        <code>xrdb merge xresources/solarized</code>
      </td>
      <td data-label="Terminal compatível">Terminais X11 (xterm, urxvt, XFCE4-terminal)</td>
    </tr>
  </tbody>
</table>

<h3 id="avisos">Avisos Técnicos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Fato</th>
      <th>Explicação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">Evite <code>echo -e</code></td>
      <td data-label="Explicação"><code>echo -e</code> não é POSIX. Prefira <code>printf</code> para scripts portáveis.</td>
    </tr>
    <tr>
      <td data-label="Fato">Transparência prejudica acessibilidade</td>
      <td data-label="Explicação">Desative transparência se usar terminal por longos períodos. Contraste > estética.</td>
    </tr>
    <tr>
      <td data-label="Fato">Cores ANSI não são universais</td>
      <td data-label="Explicação">O que é “verde” em um terminal pode ser “oliva” em outro. Teste com <code>msgcat --color=test</code>.</td>
    </tr>
  </tbody>
</table>



<fig>

<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg">
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

  <!-- Fundo arredondado -->
  <rect x="2" y="2" width="516" height="196" rx="15" ry="15"
        fill="url(#grad)" stroke="#00ff00" stroke-width="2" filter="url(#glow)" />

  <text class="label" x="20" y="30">CORES ANSI NO TERMINAL — REFERÊNCIA TÉCNICA</text>

  <!-- Códigos essenciais -->
  <text class="cmd" x="30" y="60">• \033[0m        → Resetar cores</text>
  <text class="cmd" x="30" y="85">• \033[31m texto \033[0m → Texto vermelho</text>
  <text class="cmd" x="30" y="110">• \033[42m texto \033[0m → Fundo verde</text>
  <text class="cmd" x="30" y="135">• \033[1;33m texto \033[0m → Negrito amarelo</text>
  <text class="cmd" x="30" y="160">• \033[4;34m texto \033[0m → Sublinhado azul</text>

  <!-- Dica de uso -->
  <text class="safe" x="30" y="185">✓ Use em scripts com echo -e ou printf. Funciona em bash, zsh, dash.</text>
</svg>


</fig>

<a href="/assets/imagens/cores-ansi-terminal.svg" download>⤓ Baixar SVG</a>


</section>






