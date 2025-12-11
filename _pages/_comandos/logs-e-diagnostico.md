---
layout: manual-seo
title: "Logs e Diagnóstico — Comandos Linux"
description: "Guia técnico com comandos essenciais de Logs e Diagnóstico. Copie, cole e use direto no terminal. Organizado por logs e diagnóstico."
permalink: /logs-e-diagnostico/
---

<section>



<h2>Comandos Gerais.</h2>


<input type="text" oninput="filtrarLinhas(this.value)" placeholder="Filtrar comandos...">
<script>
function filtrarLinhas(termo) {
  const linhas = document.querySelectorAll('tbody tr');
  linhas.forEach(linha => {
    linha.style.display = linha.textContent.toLowerCase().includes(termo.toLowerCase()) ? '' : 'none';
  });
}
</script>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Descrição Técnica.</th>
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <!-- LOGS (UNIVERSAL OU SEM SYSTEMD) -->
    <tr>
      <td><code>tail -f /var/log/syslog</code></td>
      <td>Logs do sistema em tempo real (Debian, Ubuntu, Mint, Devuan).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tail -f /var/log/syslog">📋</button></td>
    </tr>
    <tr>
      <td><code>tail -f /var/log/messages</code></td>
      <td>Logs do sistema em distros com SysV/OpenRC (ex: Gentoo, Devuan legado).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tail -f /var/log/messages">📋</button></td>
    </tr>
    <tr>
      <td><code>dmesg -T | tail -20</code></td>
      <td>Mensagens do kernel com timestamp legível (últimas 20 linhas).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dmesg -T | tail -20">📋</button></td>
    </tr>

    <!-- DIAGNÓSTICO DE HARDWARE -->
    <tr>
      <td><code>lshw -short</code></td>
      <td>Lista resumida de hardware (requer <code>sudo</code> para detalhes).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lshw -short">📋</button></td>
    </tr>
    <tr>
      <td><code>lscpu</code></td>
      <td>Informações detalhadas da CPU (arquitetura, núcleos, threads).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lscpu">📋</button></td>
    </tr>
    <tr>
      <td><code>lsblk -f</code></td>
      <td>Discos, partições e sistemas de arquivos (com UUID e tipo).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsblk -f">📋</button></td>
    </tr>
    <tr>
      <td><code>lspci -v</code></td>
      <td>Dispositivos PCI (placa de vídeo, rede, som).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lspci -v">📋</button></td>
    </tr>
    <tr>
      <td><code>lsusb -v</code></td>
      <td>Dispositivos USB conectados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsusb -v">📋</button></td>
    </tr>

    <!-- DISCO E INTEGRIDADE -->
    <tr>
      <td><code>sudo smartctl -a /dev/SEU_DISCO</code></td>
      <td>Diagnóstico S.M.A.R.T. do disco (substitua <code>SEU_DISCO</code> pelo seu).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo smartctl -a /dev/SEU_DISCO">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo badblocks -v /dev/SEU_DISCO</code></td>
      <td>Verifica blocos ruins em uma partição (use com cuidado).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo badblocks -v /dev/SEU_DISCO">📋</button></td>
    </tr>

    <!-- DEPURAÇÃO AVANÇADA -->
    <tr>
      <td><code>strace -c ls >/dev/null</code></td>
      <td>Chamadas de sistema resumida em tabela.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="strace -c ls >/dev/null">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo tcpdump -i eth0 -nn</code></td>
      <td>Captura tráfego de rede bruto (substitua <code>eth0</code> pela sua interface).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo tcpdump -i eth0 -nn">📋</button></td>
    </tr>

    <!-- ROTAÇÃO DE LOGS (UNIVERSAL) -->
    <tr>
      <td><code>sudo /usr/sbin/logrotate -dv /etc/logrotate.conf</code></td>
      <td>Testa configuração de rotação de logs sem executar.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo /usr/sbin/logrotate -dv /etc/logrotate.conf">📋</button></td>
    </tr>
    
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Uso Típico.</th>
      <th>Resultados.</th>
    </tr>
  </thead>
  <tbody>
  
  
  
 <tr>
  <td data-label="Comando"><code>file /bin/* | grep "shell script"</code></td>
  <td data-label="Uso Típico">Lista todos os scripts shell em <code>/bin</code></td>
  <td data-label="Resultado">Mostra caminhos de arquivos interpretados por <code>/bin/sh</code>, <code>/bin/bash</code>, etc.
    <button class="copy-btn" data-command='file /bin/* | grep "shell script"'>📋</button>
  </td>
</tr>
<tr>
  <td data-label="Comando"><code>file /bin/* | grep "ELF"</code></td>
  <td data-label="Uso Típico">Lista todos os binários executáveis em <code>/bin</code></td>
  <td data-label="Resultado">Mostra caminhos de programas compilados (ex: <code>ls</code>, <code>cp</code>, <code>grep</code>).
    <button class="copy-btn" data-command='file /bin/* | grep "ELF"'>📋</button>
  </td>
</tr>
  
  
  
    <tr>
      <td data-label="Comando"><code>ldd /bin/ls</code></td>
      <td data-label="Uso Típico">Listar bibliotecas compartilhadas (.so) que um binário depende</td>
      <td data-label="Resultado">Mostra caminhos reais das libs (ex: <code>libc.so.6 → /lib/x86_64-linux-gnu/libc.so.6</code>)
      <button class="copy-btn" data-command="ldd /bin/ls">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>readelf -d /bin/ls | grep NEEDED</code></td>
      <td data-label="Uso Típico">Ver dependências diretamente no cabeçalho ELF (mesmo se o binário estiver quebrado)</td>
      <td data-label="Resultado">Lista apenas os nomes das bibliotecas exigidas (ex: <code>libselinux.so.1</code>)
      <button class="copy-btn" data-command="readelf -d /bin/ls | grep NEEDED">📋</button></td>
    </tr>
  <tr>
  <td data-label="Comando"><code>ltrace /bin/ls</code></td>
  <td data-label="Uso Típico">Rastrear chamadas a funções de biblioteca em tempo real</td>
  <td data-label="Resultado">Mostra chamadas como <code>malloc(1024)</code>, <code>getenv("PATH")</code>
  <button class="copy-btn" data-command="ltrace /bin/ls">📋</button></td>
 </tr>
 
  <tr>
  <td data-label="Comando"><code>ltrace -c /bin/ls</code></td>
  <td data-label="Uso Típico">Perfilamento de desempenho: conta quantas vezes cada função foi chamada</td>
  <td data-label="Resultado">Tabela com % do tempo, média por chamada, total de chamadas
  <button class="copy-btn" data-command="ltrace -c /bin/ls">📋</button></td>
    </tr>
  </tbody>
</table>

<blockquote>
  💡 <strong>Dica:</strong> Use <code>ldd</code> para diagnóstico rápido. Use <code>readelf</code> se o binário não rodar. Use <code>ltrace</code> só para debug dinâmico.
</blockquote>



<figure>
  <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
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
  <rect x="2" y="2" width="596" height="196" rx="15" ry="15"
        fill="url(#grad)" stroke="#00ff00" stroke-width="2" filter="url(#glow)" />

  <text class="label" x="20" y="30">COMO O LINUX EXECUTA PROGRAMAS</text>

  <!-- Script shell -->
  <text class="cmd" x="30" y="60">• script.sh</text>
  <text class="cmd" x="50" y="80">#!/bin/sh</text>
  <text class="cmd" x="50" y="100">echo "Olá"</text>
  <text class="safe" x="30" y="125">→ Não é ELF. Não funciona com ldd.</text>

  <!-- Binário -->
  <text class="cmd" x="320" y="60">• /bin/ls</text>
  <text class="cmd" x="320" y="80">ldd /bin/ls</text>
  <text class="cmd" x="320" y="100">mostra libs: libc.so.6, etc.</text>
  <text class="safe" x="320" y="125">→ É ELF. Executado pelo kernel.</text>

  <!-- Linha divisória -->
  <line x1="300" y1="50" x2="300" y2="140" stroke="#333" stroke-width="1"/>

  <text class="safe" x="30" y="170">✓ Scripts: texto legível. Binários: código de máquina (ELF).</text>
</svg>

  
</figure>



<a href="/assets/imagens/sh-vs-binario.png" 
   download="camadas-linux.png"
   class="btn-download">
  ⤓ Baixar PNG
</a>



<p>Todo script precisa de um <code>#!</code> (shebang). Binários não precisam.</p>





</section>







