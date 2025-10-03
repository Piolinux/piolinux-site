---
layout: default
title: "📋 Logs e Diagnóstico — Comandos Linux"
description: "Guia técnico com comandos essenciais de Logs e Diagnóstico. Copie, cole e use direto no terminal. Organizado por logs e diagnóstico."
permalink: /logs-e-diagnostico/
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
      <th>Comandos</th>
      <th>Descrições.</th>
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>journalctl -xe</code></td>
      <td data-label="Descrição">Logs detalhados com contexto.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl -xe">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>journalctl --boot</code></td>
      <td data-label="Descrição">Logs do boot atual.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl --boot">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>journalctl --boot=-1</code></td>
      <td data-label="Descrição">Logs do boot anterior.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl --boot=-1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tail /var/log/syslog</code></td>
      <td data-label="Descrição">Logs do sistema (Debian/Ubuntu).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tail /var/log/syslog">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tail /var/log/messages</code></td>
      <td data-label="Descrição">Logs do sistema (Fedora/RHEL).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tail /var/log/messages">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dmesg</code></td>
      <td data-label="Descrição">Mensagens do kernel.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dmesg">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lshw</code></td>
      <td data-label="Descrição">Informações detalhadas de hardware.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lshw">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lscpu</code></td>
      <td data-label="Descrição">Informações da CPU.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lscpu">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lsblk</code></td>
      <td data-label="Descrição">Lista blocos (discos e partições)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsblk">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lspci</code></td>
      <td data-label="Descrição">Lista dispositivos PCI.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lspci">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lsusb</code></td>
      <td data-label="Descrição">Lista dispositivos USB.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsusb">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dmidecode</code></td>
      <td data-label="Descrição">Informações da BIOS, memória, etc.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dmidecode">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>smartctl -a /dev/sdx</code></td>
      <td data-label="Descrição">Diagnóstico de disco (S.M.A.R.T.)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="smartctl -a /dev/sda">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>badblocks -v /dev/sdX</code></td>
      <td data-label="Descrição">Verifica blocos ruins.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="badblocks -v /dev/sda">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>strace -p 1234</code></td>
      <td data-label="Descrição">Rastreia chamadas de sistema.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="strace -p 1234">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ltrace programa</code></td>
      <td data-label="Descrição">Rastreia chamadas a bibliotecas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ltrace programa">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>perf top</code></td>
      <td data-label="Descrição">Perfil de desempenho em tempo real.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="perf top">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tcpdump -i eth0</code></td>
      <td data-label="Descrição">Captura pacotes de rede</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tcpdump -i eth0">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>journalctl -u ssh --since "1 hour ago"</code></td>
      <td data-label="Descrição">Logs do SSH na última hora.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl -u ssh --since &quot;1 hour ago&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>logrotate -d /etc/logrotate.conf</code></td>
      <td data-label="Descrição">Testa configuração de rotação.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="logrotate -d /etc/logrotate.conf">📋</button></td>
    </tr>
  </tbody>
</table>
</div>














</section>

