---
layout: manual-seo
title: "Tarefas Agendadas — Comandos Linux"
description: "Tabela prática de comandos para agendar tarefas com cron, crontab e systemd timer. Inclui exemplos seguros, edição de jobs e dicas de diagnóstico. Funciona em Devuan, antiX e sistemas sem systemd."
permalink: /tarefas-agendadas/
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
      <th>Comando</th>
      <th>Descrição</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>crontab -e</code></td>
      <td>Edita tarefas agendadas do usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="crontab -e">📋</button></td>
    </tr>
    <tr>
      <td><code>crontab -l</code></td>
      <td>Listar tarefas agendadas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="crontab -l">📋</button></td>
    </tr>
    <tr>
      <td><code>crontab -r</code></td>
      <td>Remove **todas** as tarefas do usuário **sem confirmação**.</td>
      <td data-label="Ação">⚠️ Irreversível</td>
    </tr>
    <tr>
      <td><code>sudo crontab -e</code></td>
      <td>Edita tarefas do root.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo crontab -e">📋</button></td>
    </tr>
    <tr>
      <td><code>* * * * * /script.sh</code></td>
      <td>Executa a cada minuto.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="* * * * * /script.sh">📋</button></td>
    </tr>
    <tr>
      <td><code>0 2 * * * /backup.sh</code></td>
      <td>Às 2h todos os dias.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="0 2 * * * /backup.sh">📋</button></td>
    </tr>
    <tr>
      <td><code>0 3 * * 0 /limpeza.sh</code></td>
      <td>Todo domingo às 3h.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="0 3 * * 0 /limpeza.sh">📋</button></td>
    </tr>
    <tr>
      <td><code>@reboot /iniciar.sh</code></td>
      <td>Executa no boot.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="@reboot /iniciar.sh">📋</button></td>
    </tr>
    <tr>
      <td><code>systemctl list-timers</code></td>
      <td>Mostra timers do systemd (alternativa moderna).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl list-timers">📋</button></td>
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

  <text class="label" x="20" y="30">TAREFAS AGENDADAS — CRON NO LINUX</text>

  <!-- Comandos essenciais -->
  <text class="cmd" x="30" y="60">• crontab -e          → Editar tarefas do usuário</text>
  <text class="cmd" x="30" y="85">• crontab -l          → Listar tarefas ativas</text>
  <text class="cmd" x="30" y="110">• sudo crontab -e     → Tarefas do root</text>
  <text class="cmd" x="30" y="135">• /etc/crontab        → Tarefas globais (sistemas clássicos)</text>

  <!-- Formato do cron -->
  <text class="safe" x="30" y="165">✓ Formato: min hora dia mes semana comando</text>
</svg>




</figure>

<a href="/assets/imagens/tarefas-agendadas.svg" download>⤓ Baixar SVG</a>




</section>

 





