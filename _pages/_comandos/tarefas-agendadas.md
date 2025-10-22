---
layout: manual-seo
title: "Tarefas Agendadas — Comandos Linux"
description: "Guia técnico com comandos essenciais de Tarefas Agendadas. Copie, cole e use direto no terminal. Organizado por tarefas agendadas."
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


</section>

 





