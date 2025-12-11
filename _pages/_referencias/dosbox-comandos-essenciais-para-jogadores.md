---
title: "DOSBox — Comandos Essenciais para Jogadores"
description: "Tabela de comandos práticos do DOSBox para montar drives, configurar teclado em português (ABNT2) e executar jogos clássicos como Doom, Duke Nukem e Commander Keen em sistemas modernos como Devuan e antiX."
layout: manual-seo
permalink: /referencias/dosbox/
tags: [dosbox, dos, jogos,]
---




<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Uso Típicos.</th>
      <th>Resultados.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>mount c /home/seuuser/jogos</code></td>
      <td data-label="Uso Típico">Monta a pasta local como unidade C: no DOS</td>
      <td data-label="Resultado">Permite acessar arquivos do Linux como se fossem do DOS.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>c:</code></td>
      <td data-label="Uso Típico">Mudar para a unidade C:</td>
      <td data-label="Resultado">Navega para o disco montado (necessário após mount)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dir</code></td>
      <td data-label="Uso Típico">Listar arquivos no diretório atual.</td>
      <td data-label="Resultado">Mostra arquivos e pastas, como no MS-DOS real.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd GAME</code></td>
      <td data-label="Uso Típico">Entrar na pasta GAME.</td>
      <td data-label="Resultado">Navegação típica para acessar jogos.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>GAME.EXE</code></td>
      <td data-label="Uso Típico">Executar o jogo (ou programa)</td>
      <td data-label="Resultado">Inicia o software legado em modo emulado.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mount d /home/seuuser/iso -t cdrom</code></td>
      <td data-label="Uso Típico">Montar pasta como CD-ROM (para jogos com proteção).</td>
      <td data-label="Resultado">Simula unidade de CD - necessário para alguns jogos.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>exit</code></td>
      <td data-label="Uso Típico">Sair do DOSBox.</td>
      <td data-label="Resultado">Fecha o emulador.</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Elementos.</th>
      <th>Configuração.</th>
      <th>Finalidades.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Elemento">Arquivo de configuração.</td>
      <td data-label="Configuração"><code>~/.dosbox/dosbox-0.74.conf</code></td>
      <td data-label="Finalidade">Local padrão do arquivo de configuração no Linux.</td>
    </tr>
    <tr>
      <td data-label="Elemento">Teclado (emulador)</td>
      <td data-label="Configuração"><code>keyboardlayout=pt-BR</code></td>
      <td data-label="Finalidade">Permite que o DOSBox interprete corretamente teclas acentuadas do teclado brasileiro.</td>
    </tr>
    <tr>
      <td data-label="Elemento">Teclado (DOS)</td>
      <td data-label="Configuração"><code>KEYB BR</code></td>
      <td data-label="Finalidade">Carrega o driver de teclado do DOS para o layout brasileiro (ABNT2)</td>
    </tr>
    <tr>
      <td data-label="Elemento">Inicialização automática.</td>
      <td data-label="Configuração"><code>mount c ~/jogos<br>c:<br>KEYB BR</code></td>
      <td data-label="Finalidade">Monta disco, muda para C: e configura teclado ao iniciar.</td>
    </tr>
  </tbody>
</table>


<figure>

<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
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
    .label { fill: #a0f0f0; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 14px; font-weight: bold; }
    .cmd { fill: #80d0ff; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 12px; }
    .safe { fill: #80ffaa; font-family: 'Fira Code', 'DejaVu Sans Mono', monospace; font-size: 11px; font-style: italic; }
  </style>

  <!-- Fundo com bordas arredondadas e brilho -->
  <rect x="2" y="2" width="516" height="176" rx="15" ry="15" 
        fill="url(#grad)" 
        stroke="#00ff00" 
        stroke-width="2" 
        filter="url(#glow)" />

  <!-- Título -->
  <text class="label" x="20" y="30">DOSBOX — FLUXO BÁSICO</text>

  <!-- Passos -->
  <text class="cmd" x="30" y="60">1. mount c /home/seuuser/jogos</text>
  <text class="cmd" x="30" y="80">2. c:</text>
  <text class="cmd" x="30" y="105">3.  dir </text>
  <text class="cmd" x="30" y="125">4. cd MEU_JOGO</text>
 <text class="cmd" x="30" y="145">5. JOGO.EXE</text>
 
  <text class="safe" x="30" y="165">✓ Nenhum comando complexo — só o essencial para rodar software legado</text>
</svg>


<figcaption>Fluxo básico do DOSBox.</figcaption>
</figure>




<a href="/assets/imagens/dosbox-fluxo.png" download>⤓ Baixar PNG</a>



</section>

