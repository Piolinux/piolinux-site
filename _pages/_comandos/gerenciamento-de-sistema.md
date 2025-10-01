---
layout: default
title: "🖥 Gerenciamento de Sistema — Comandos Linux"
description: "Guia técnico com comandos essenciais de Gerenciamento de Sistema. Copie, cole e use direto no terminal. Organizado por gerenciamento de sistema."
permalink: /gerenciamento-de-sistema/
---

<section>



<h2>🖥 Comandos Gerais.</h2>

<input type="text" oninput="filtrarLinhas(this.value)" placeholder="Filtrar comandos...">
<script>
function filtrarLinhas(termo) {
  const linhas = document.querySelectorAll('tbody tr');
  linhas.forEach(linha => {
    linha.style.display = linha.textContent.toLowerCase().includes(termo.toLowerCase()) ? '' : 'none';
  });
}
</script>


<div class="table-container">
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Descrições</th>
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>uname -a</code></td>
      <td data-label="Descrição">Informações do kernel</td>
      <td data-label="Ação"><button class="copy-btn" data-command="uname -a">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>hostnamectl</code></td>
      <td data-label="Descrição">Status do hostname</td>
      <td data-label="Ação"><button class="copy-btn" data-command="hostnamectl">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>hostnamectl set-hostname servidor</code></td>
      <td data-label="Descrição">Muda nome da máquina</td>
      <td data-label="Ação"><button class="copy-btn" data-command="hostnamectl set-hostname servidor">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>timedatectl</code></td>
      <td data-label="Descrição">Data, hora e fuso</td>
      <td data-label="Ação"><button class="copy-btn" data-command="timedatectl">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>timedatectl set-timezone America/Sao_Paulo</code></td>
      <td data-label="Descrição">Define fuso horário</td>
      <td data-label="Ação"><button class="copy-btn" data-command="timedatectl set-timezone America/Sao_Paulo">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>timedatectl set-ntp true</code></td>
      <td data-label="Descrição">Ativa sincronização NTP</td>
      <td data-label="Ação"><button class="copy-btn" data-command="timedatectl set-ntp true">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl reboot</code></td>
      <td data-label="Descrição">Reinicia o sistema</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl reboot">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl poweroff</code></td>
      <td data-label="Descrição">Desliga o sistema</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl poweroff">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl suspend</code></td>
      <td data-label="Descrição">Suspensão</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl suspend">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl hibernate</code></td>
      <td data-label="Descrição">Hibernação</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl hibernate">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>uptime</code></td>
      <td data-label="Descrição">Tempo de atividade</td>
      <td data-label="Ação"><button class="copy-btn" data-command="uptime">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>whoami</code></td>
      <td data-label="Descrição">Usuário atual</td>
      <td data-label="Ação"><button class="copy-btn" data-command="whoami">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>id</code></td>
      <td data-label="Descrição">ID e grupos do usuário</td>
      <td data-label="Ação"><button class="copy-btn" data-command="id">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>last</code></td>
      <td data-label="Descrição">Últimos logins</td>
      <td data-label="Ação"><button class="copy-btn" data-command="last">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>history</code></td>
      <td data-label="Descrição">Histórico de comandos</td>
      <td data-label="Ação"><button class="copy-btn" data-command="history">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo shutdown -h now</code></td>
      <td data-label="Descrição">Desliga agora</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo shutdown -h now">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo shutdown -r +10</code></td>
      <td data-label="Descrição">Reinicia em 10 minutos</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo shutdown -r +10">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>df -h</code></td>
      <td data-label="Descrição">Espaço em disco (legível)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="df -h">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>df -i</code></td>
      <td data-label="Descrição">Uso de inodes</td>
      <td data-label="Ação"><button class="copy-btn" data-command="df -i">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>du -sh /home</code></td>
      <td data-label="Descrição">Tamanho do diretório</td>
      <td data-label="Ação"><button class="copy-btn" data-command="du -sh /home">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>free -h</code></td>
      <td data-label="Descrição">Uso de memória RAM e swap</td>
      <td data-label="Ação"><button class="copy-btn" data-command="free -h">📋</button></td>
    </tr>
  </tbody>
</table>
</div>







</section>
