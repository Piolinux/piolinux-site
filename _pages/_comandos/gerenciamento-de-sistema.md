---
layout: manual-seo
title: "Gerenciamento de Sistema — Comandos Linux"
description: "Guia técnico com comandos essenciais de Gerenciamento de Sistema. Copie, cole e use direto no terminal. Organizado por gerenciamento de sistema."
permalink: /gerenciamento-de-sistema/
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
      <th>Descrições.</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>uname -a</code></td>
      <td>Informações do kernel</td>
      <td data-label="Ação"><button class="copy-btn" data-command="uname -a">📋</button></td>
    </tr>
    <tr>
      <td><code>uptime</code></td>
      <td>Tempo de atividade do sistema</td>
      <td data-label="Ação"><button class="copy-btn" data-command="uptime">📋</button></td>
    </tr>
    <tr>
      <td><code>whoami</code></td>
      <td>Usuário atual</td>
      <td data-label="Ação"><button class="copy-btn" data-command="whoami">📋</button></td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>ID e grupos do usuário</td>
      <td data-label="Ação"><button class="copy-btn" data-command="id">📋</button></td>
    </tr>
    <tr>
      <td><code>last</code></td>
      <td>Últimos logins</td>
      <td data-label="Ação"><button class="copy-btn" data-command="last">📋</button></td>
    </tr>
    <tr>
      <td><code>history</code></td>
      <td>Histórico de comandos</td>
      <td data-label="Ação"><button class="copy-btn" data-command="history">📋</button></td>
    </tr>
    <tr>
      <td><code>df -h</code></td>
      <td>Espaço em disco (formato legível)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="df -h">📋</button></td>
    </tr>
    <tr>
      <td><code>df -i</code></td>
      <td>Uso de inodes</td>
      <td data-label="Ação"><button class="copy-btn" data-command="df -i">📋</button></td>
    </tr>
    <tr>
      <td><code>du -sh /home</code></td>
      <td>Tamanho do diretório /home</td>
      <td data-label="Ação"><button class="copy-btn" data-command="du -sh /home">📋</button></td>
    </tr>
    <tr>
      <td><code>free -h</code></td>
      <td>Uso de memória RAM e swap</td>
      <td data-label="Ação"><button class="copy-btn" data-command="free -h">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo shutdown -h now</code></td>
      <td>Desliga agora (funciona em SysV, OpenRC, systemd)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo shutdown -h now">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo shutdown -r +10</code></td>
      <td>Reinicia em 10 minutos (universal)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo shutdown -r +10">📋</button></td>
    </tr>
  </tbody>
</table>

</section>

