---
layout: default
title: "Monitoramento e Processos — Comandos Linux"
description: "Guia técnico com comandos essenciais de Monitoramento e Processos. Copie, cole e use direto no terminal. Organizado por monitoramento e processos."
permalink: /monitoramento-e-processos/
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
      <th>Descrições.</th>
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>ps aux</code></td>
      <td data-label="Descrição">Lista todos os processos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ps aux">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ps aux \| grep nginx</code></td>
      <td data-label="Descrição">Filtra processos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ps aux \| grep nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>top</code></td>
      <td data-label="Descrição">Monitoramento em tempo real.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="top">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>htop</code></td>
      <td data-label="Descrição">Versão melhorada (instale com apt install htop)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="htop">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>kill 1234</code></td>
      <td data-label="Descrição">Mata processo por PID.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="kill 1234">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>killall firefox</code></td>
      <td data-label="Descrição">Mata todos os processos chamados firefox.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="killall firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pkill sshd</code></td>
      <td data-label="Descrição">Mata por nome.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pkill sshd">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>bg</code></td>
      <td data-label="Descrição">Retoma processo em background.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="bg">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>fg</code></td>
      <td data-label="Descrição">Traz para foreground.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="fg">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>jobs</code></td>
      <td data-label="Descrição">Lista jobs em background.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="jobs">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nohup comando &</code></td>
      <td data-label="Descrição">Executa mesmo após sair.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nohup comando &">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nice -n 10 comando</code></td>
      <td data-label="Descrição">Executa com baixa prioridade.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nice -n 10 comando">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>renice -5 1234</code></td>
      <td data-label="Descrição">Altera prioridade de processo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="renice -5 1234">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lsof +D /home</code></td>
      <td data-label="Descrição">Arquivos abertos no diretório.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsof +D /home">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lsof -i :80</code></td>
      <td data-label="Descrição">Processos usando porta 80.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsof -i :80">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>vmstat 1</code></td>
      <td data-label="Descrição">Estatísticas de CPU, memória, I/O</td>
      <td data-label="Ação"><button class="copy-btn" data-command="vmstat 1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>iostat -x 1</code></td>
      <td data-label="Descrição">Uso de disco detalhado.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="iostat -x 1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sar -u 1 5</code></td>
      <td data-label="Descrição">Uso de CPU (requer sysstat)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sar -u 1 5">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dmesg \| tail</code></td>
      <td data-label="Descrição">Últimas mensagens do kernel.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dmesg \| tail">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>journalctl -u nginx</code></td>
      <td data-label="Descrição">Logs do serviço nginx.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl -u nginx">📋</button></td>
    </tr>
  </tbody>
</table>
</div>










</section>
