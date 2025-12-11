---
title: "Pacotes de Idioma para o LibreOffice — Instalação no Linux"
description: "Tabela de instalação de pacotes de idioma (ex: português do Brasil) no LibreOffice em distribuições baseadas em Debian, Devuan, Ubuntu e derivados."
permalink: /tabelas/libreoffice-idioma/
layout: manual-seo
---

<section>


<h3>Pacotes de Idioma (Interface do LibreOffice)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas.</th>
      <th>Debian/Devuan.</th>
      <th>Arch/Artix.</th>
      <th>Comandos (Debian/Devuan)</th>
      <th>Comandos (Artix)</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-pt-br</td>
      <td data-label="Arch/Artix">libreoffice-fresh-pt</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-pt-br</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-pt</code></td>
      <td data-label="Observações">Reinicie o LibreOffice após instalar.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês -EUA.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-en-us</td>
      <td data-label="Arch/Artix">libreoffice-fresh-en</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-en-us</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-en</code></td>
      <td data-label="Observações">Geralmente já instalado por padrão.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-es</td>
      <td data-label="Arch/Artix">libreoffice-fresh-es</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-es</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-es</code></td>
      <td data-label="Observações">Cobre es-ES, es-MX e outras variantes.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-fr</td>
      <td data-label="Arch/Artix">libreoffice-fresh-fr</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-fr</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-fr</code></td>
      <td data-label="Observações">Único pacote para todas as variantes.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-de</td>
      <td data-label="Arch/Artix">libreoffice-fresh-de</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-de</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-de</code></td>
      <td data-label="Observações">Inclui suporte à ortografia moderna.</td>
    </tr>
  </tbody>
</table>


<h3>Dicionários de Ortografia (Corretor do LibreOffice)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas</th>
      <th>Debian/Devuan.</th>
      <th>Arch/Artix.</th>
      <th>Comando (Debian/Devuan)</th>
      <th>Comando (Artix)</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil</td>
      <td data-label="Debian/Devuan">hunspell-pt-br</td>
      <td data-label="Arch/Artix">hunspell-pt_BR</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-pt-br</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-pt_BR</code></td>
      <td data-label="Observações">Necessário para verificação ortográfica.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês -EUA-</td>
      <td data-label="Debian/Devuan">hunspell-en-us.</td>
      <td data-label="Arch/Artix">hunspell-en_US.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-en-us</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-en_US</code></td>
      <td data-label="Observações">Geralmente já presente.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Debian/Devuan">hunspell-es.</td>
      <td data-label="Arch/Artix">hunspell-es_ES.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-es</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-es_ES</code></td>
      <td data-label="Observações">Funciona com múltiplas variantes.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Debian/Devuan">hunspell-fr</td>
      <td data-label="Arch/Artix">hunspell-fr</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-fr</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-fr</code></td>
      <td data-label="Observações">Mesmo nome nos dois ecossistemas.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão.</td>
      <td data-label="Debian/Devuan">hunspell-de-de.</td>
      <td data-label="Arch/Artix">hunspell-de_DE.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-de-de</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-de_DE</code></td>
      <td data-label="Observações">Verifique ortografia após instalação.</td>
    </tr>
  </tbody>
</table>


<h3>Tesauro (MyThes) — Sinônimos no LibreOffice.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas.</th>
      <th>Debian/Devuan.</th>
      <th>Arch/Artix.</th>
      <th>Comando (Debian/Devuan)</th>
      <th>Comando (Artix)</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil.</td>
      <td data-label="Debian/Devuan">mythes-pt-br.</td>
      <td data-label="Arch/Artix">mythes-pt_BR.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-pt-br</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-pt_BR</code></td>
      <td data-label="Observações">Ativado em <em>Ferramentas → Tesauro</em> (tecla <code>Ctrl+F7</code>).</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês -EUA-</td>
      <td data-label="Debian/Devuan">mythes-en-us.</td>
      <td data-label="Arch/Artix">mythes-en_US.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-en-us</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-en_US</code></td>
      <td data-label="Observações">Geralmente instalado com o pacote principal do LibreOffice.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Debian/Devuan">mythes-es</td>
      <td data-label="Arch/Artix">mythes-es_ES</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-es</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-es_ES</code></td>
      <td data-label="Observações">Funciona para variantes principais (es-ES, es-MX).</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Debian/Devuan">mythes-fr</td>
      <td data-label="Arch/Artix">mythes-fr</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-fr</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-fr</code></td>
      <td data-label="Observações">Mesmo nome nos dois ecossistemas.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão.</td>
      <td data-label="Debian/Devuan">mythes-de.</td>
      <td data-label="Arch/Artix">mythes-de_DE.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-de</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-de_DE</code></td>
      <td data-label="Observações">Inclui sinônimos da norma moderna (nach Duden).</td>
    </tr>
  </tbody>
</table>

<figure>
<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg">
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
  <rect x="2" y="2" width="516" height="176" rx="15" ry="15"
        fill="url(#grad)" stroke="#00ff00" stroke-width="2" filter="url(#glow)" />

  <text class="label" x="20" y="30">PACOTES DE IDIOMA — LIBREOFFICE NO LINUX</text>

  <!-- Comandos por distro -->
  <text class="cmd" x="30" y="60">• Debian/Devuan: sudo apt install libreoffice-l10n-pt-br</text>
  <text class="cmd" x="30" y="85">• Ubuntu/Mint:   sudo apt install libreoffice-l10n-pt-br</text>
  <text class="cmd" x="30" y="110">• Void Linux:    sudo xbps-install -S libreoffice-i18n-pt-BR</text>
  <text class="cmd" x="30" y="135">• Arch/Artix:    sudo pacman -S libreoffice-fresh-pt-br</text>

  <!-- Observação -->
  <text class="safe" x="30" y="165">✓ Reinicie o LibreOffice após instalar — não é necessário reboot</text>
</svg>
</figure>


<a href="/assets/imagens/libreoffice-idioma.svg" download>⤓ Baixar SVG</a>



</section>
