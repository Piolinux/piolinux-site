---
layout: manual-seo
title: "Cores no Terminal – Referência Técnica ANSI"
description: "Tabela com códigos ANSI, 256 cores, truecolor, exemplos com printf e temas reais — sem fluff, só utilidade técnica."
permalink: /referencias/cores-terminal-ansi/
categories: [terminal, linux, debian, configuração]
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

</section>






