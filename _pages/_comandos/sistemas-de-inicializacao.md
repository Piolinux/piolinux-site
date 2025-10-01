---
layout: default
title: "⚡ Sistemas de Inicialização — Comandos Linux"
description: "Guia técnico com comandos essenciais de Sistemas de Inicialização. Copie, cole e use direto no terminal. Organizado por sistemas de inicialização."
permalink: /sistemas-de-inicializacao/
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
      <td data-label="Comando"><code>systemctl start nginx</code></td>
      <td data-label="Descrição">Inicia serviço.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl start nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl stop nginx</code></td>
      <td data-label="Descrição">Para serviço.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl stop nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl restart nginx</code></td>
      <td data-label="Descrição">Reinicia serviço.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl restart nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl reload nginx</code></td>
      <td data-label="Descrição">Recarrega configuração.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl reload nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl enable nginx</code></td>
      <td data-label="Descrição">Habilita no boot.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl enable nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl disable nginx</code></td>
      <td data-label="Descrição">Desabilita no boot.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl disable nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl status nginx</code></td>
      <td data-label="Descrição">Mostra status do serviço.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl status nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl is-active nginx</code></td>
      <td data-label="Descrição">Verifica se está ativo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl is-active nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl list-units --type=service</code></td>
      <td data-label="Descrição">Lista serviços ativos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl list-units --type=service">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl list-unit-files --type=service</code></td>
      <td data-label="Descrição">Lista todos os serviços.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl list-unit-files --type=service">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>journalctl -u nginx</code></td>
      <td data-label="Descrição">Logs do serviço nginx.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl -u nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>journalctl --since "2 hours ago"</code></td>
      <td data-label="Descrição">Logs das últimas 2h.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl --since &quot;2 hours ago&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>journalctl -f</code></td>
      <td data-label="Descrição">Monitora logs em tempo real.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="journalctl -f">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>hostnamectl set-boot-verbose true</code></td>
      <td data-label="Descrição">Habilita boot verboso.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="hostnamectl set-boot-verbose true">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemd-analyze</code></td>
      <td data-label="Descrição">Tempo de inicialização.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemd-analyze">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemd-analyze blame</code></td>
      <td data-label="Descrição">Mostra serviços que mais demoraram.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemd-analyze blame">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl mask service</code></td>
      <td data-label="Descrição">Impede que o serviço seja iniciado.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl mask service">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl unmask service</code></td>
      <td data-label="Descrição">Desfaz mask.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl unmask service">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>init 3</code></td>
      <td data-label="Descrição">Muda para modo multiuser (SysV)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="init 3">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>telinit 6</code></td>
      <td data-label="Descrição">Reinicia (SysV)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="telinit 6">📋</button></td>
    </tr>
  </tbody>
</table>
</div>

</section>




