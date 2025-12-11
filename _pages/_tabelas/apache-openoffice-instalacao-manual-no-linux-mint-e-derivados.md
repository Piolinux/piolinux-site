---
title: "Apache OpenOffice — Instalação Manual no Linux Mint e Derivados"
description: "Tabela técnica para instalar o Apache OpenOffice via arquivo .deb no Linux Mint, Debian, Devuan e outras distros baseadas em .deb. Inclui comandos, links oficiais e observações práticas."
permalink: /tabelas/openoffice-instalação-manual/
layout: manual-seo
---




<section>





<h3>Apache OpenOffice — Instalação Manual (Arquivo .deb Universal)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas.</th>
      <th>Arquivos .deb (Download)</th>
      <th>Comandos de Instalação.</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/pt-br/download/" target="_blank" rel="noopener">openoffice.org/pt-br/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Baixe o pacote <code>.tar.gz</code>, extraia e instale todos os <code>.deb</code> na pasta <code>DEBS/</code>.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês (EUA)</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/download/" target="_blank" rel="noopener">openoffice.org/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Versão padrão. Inclui interface e dicionário.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/es/download/" target="_blank" rel="noopener">openoffice.org/es/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Funciona em sistemas com locale <code>es_ES</code> ou <code>es_MX</code>.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/fr/download/" target="_blank" rel="noopener">openoffice.org/fr/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Inclui correção ortográfica e tesauro.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/de/download/" target="_blank" rel="noopener">openoffice.org/de/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Compatível com normas DIN e Duden.</td>
    </tr>
  </tbody>
</table>

<h3>Instruções de Instalação — Apache OpenOffice (via .deb)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Passo</th>
      <th>Ação</th>
      <th>Comando / Procedimento</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Passo">0</td>
      <td data-label="Ação">Remova o LibreOffice (obrigatório)</td>
      <td data-label="Comando / Procedimento"><code>sudo apt remove --purge libreoffice*</code><br><code>sudo apt autoremove</code></td>
      <td data-label="Observações">O OpenOffice e o LibreOffice não coexistem. A instalação falhará ou corromperá o sistema se ambos estiverem presentes.</td>
    </tr>
    <tr>
      <td data-label="Passo">1-</td>
      <td data-label="Ação">Acesse o link do idioma desejado.</td>
      <td data-label="Comando / Procedimento"><a href="https://www.openoffice.org/pt-br/download/" target="_blank" rel="noopener">openoffice.org/pt-br/download</a></td>
      <td data-label="Observações">Escolha a versão para Linux (arquivo .tar.gz).</td>
    </tr>
    <tr>
      <td data-label="Passo">2-</td>
      <td data-label="Ação">Baixe o arquivo.</td>
      <td data-label="Comando / Procedimento"><code>Apache_OpenOffice_4.1.14_Linux_x86-64_pt-BR.tar.gz</code></td>
      <td data-label="Observações">O nome varia conforme versão e idioma.</td>
    </tr>
    <tr>
      <td data-label="Passo">3-</td>
      <td data-label="Ação">Extraia o arquivo.</td>
      <td data-label="Comando / Procedimento"><code>tar -xzf Apache_OpenOffice_*.tar.gz</code></td>
      <td data-label="Observações">Gera uma pasta com subdiretórios <code>DEBS/</code> e <code>DEBS/dict/</code>.</td>
    </tr>
    <tr>
      <td data-label="Passo">4-</td>
      <td data-label="Ação">Instale os pacotes principais.</td>
      <td data-label="Comando / Procedimento"><code>cd DEBS/ && sudo dpkg -i *.deb</code></td>
      <td data-label="Observações">Instala a interface e funcionalidades básicas.</td>
    </tr>
    <tr>
      <td data-label="Passo">5-</td>
      <td data-label="Ação">Corrija dependências.</td>
      <td data-label="Comando / Procedimento"><code>sudo apt install -f</code></td>
      <td data-label="Observações">Resolve pacotes ausentes automaticamente.</td>
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

  <text class="label" x="20" y="30">APACHE OPENOFFICE — INSTALAÇÃO MANUAL</text>

  <!-- Passos essenciais -->
  <text class="cmd" x="30" y="60">1. Baixe do site oficial: openoffice.org</text>
  <text class="cmd" x="30" y="85">2. Extraia: tar -xvf Apache_OpenOffice_*.tar.gz</text>
  <text class="cmd" x="30" y="110">3. Instale: cd /pt-BR/DEBS/ sudo dpkg -i *.deb</text>
  

  <!-- Aviso de segurança -->
  <text class="safe" x="30" y="165">✓ Nunca use scripts de terceiros — baixe só do site oficial</text>
</svg>


</figure>

<a href="/assets/imagens/openoffice-instalacao.png" download>⤓ Baixar PNG<</a>


</section>


