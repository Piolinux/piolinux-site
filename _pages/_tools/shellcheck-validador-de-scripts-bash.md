---
title: "ShellCheck — Validador de Scripts Bash"
description: "Ferramenta essencial para analisar scripts Bash/Zsh, identificar erros, más práticas e vulnerabilidades. Disponível online e via terminal."
layout: manual-seo
permalink: /ferramentas/shellcheck/
---


<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramenta.</th>
      <th>Uso Típico.</th>
      <th>Resultado.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta"><a href="https://www.shellcheck.net/" target="_blank" rel="noopener noreferrer">ShellCheck Online.</a></td>
      <td data-label="Uso Típico">Validar scripts Bash/Zsh quanto a erros, más práticas e vulnerabilidades.</td>
      <td data-label="Resultado">Correções sugeridas em tempo real, com explicações claras e referências à documentação.</td>
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

  <!-- Fundo com bordas arredondadas e brilho -->
  <rect x="2" y="2" width="516" height="176" rx="15" ry="15"
        fill="url(#grad)"
        stroke="#00ff00"
        stroke-width="2"
        filter="url(#glow)" />

  <!-- Título -->
  <text class="label" x="20" y="30">SHELLCHECK — ANÁLISE ESTÁTICA DE SCRIPTS</text>

  <!-- Comandos e uso -->
  <text class="cmd" x="30" y="60">• Online: shellcheck.net</text>
  <text class="cmd" x="30" y="85">• Terminal: shellcheck script.sh</text>
  <text class="cmd" x="30" y="110">• Detecta: erros, más práticas, security issues</text>
  <text class="cmd" x="30" y="135">• Suporte: Bash, Dash, Ksh, Zsh</text>

  <!-- Observação -->
  <text class="safe" x="30" y="165">✓ Open source, sem tracking, disponível via apt</text>
</svg>

  
  
  
  <figcaption>ShellCheck — análise estática de scripts Bash</figcaption>
</figure>  
  
     
     
<a href="/assets/imagens/shellcheck-info.png" download>⤓ Baixar PNG</a>



<blockquote>
  <strong>Dicas:</strong> Disponível via terminal (<code>sudo apt install shellcheck</code>). Use a versão online para scripts rápidos ou quando não tiver acesso local.
</blockquote>


</section>


