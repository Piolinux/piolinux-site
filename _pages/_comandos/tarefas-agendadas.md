---
layout: default
title: "⏰ Tarefas Agendadas — Comandos Linux"
description: "Guia técnico com comandos essenciais de Tarefas Agendadas. Copie, cole e use direto no terminal. Organizado por tarefas agendadas."
permalink: /tarefas-agendadas/
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
      <td data-label="Comando"><code>crontab -e</code></td>
      <td data-label="Descrição">Edita tarefas agendadas do usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="crontab -e">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>crontab -l</code></td>
      <td data-label="Descrição">Lista tarefas agendadas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="crontab -l">📋</button></td>
    </tr>
    <tr>
  <td data-label="Comando"><code>crontab -r</code></td>
  <td data-label="Descrição">Remove **todas** as tarefas do usuário **sem confirmação**. ⚠️ Irreversível.</td>
  <td data-label="Ação"><button class="copy-btn" data-command="crontab -r">📋</button></td>
</tr>
    <tr>
      <td data-label="Comando"><code>sudo crontab -e</code></td>
      <td data-label="Descrição">Edita tarefas do root.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo crontab -e">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>* * * * * /script.sh</code></td>
      <td data-label="Descrição">Executa a cada minuto.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="* * * * * /script.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>0 2 * * * /backup.sh</code></td>
      <td data-label="Descrição">Às 2h todos os dias.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="0 2 * * * /backup.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>0 3 * * 0 /limpeza.sh</code></td>
      <td data-label="Descrição">Todo domingo às 3h.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="0 3 * * 0 /limpeza.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>0 0 1 * * /relatorio.sh</code></td>
      <td data-label="Descrição">No 1º dia de cada mês.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="0 0 1 * * /relatorio.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>*/10 * * * * /ping.sh</code></td>
      <td data-label="Descrição">A cada 10 minutos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="*/10 * * * * /ping.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>@reboot /iniciar.sh</code></td>
      <td data-label="Descrição">Executa no boot.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="@reboot /iniciar.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>@daily /rotina.sh</code></td>
      <td data-label="Descrição">Uma vez por dia.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="@daily /rotina.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>@hourly /verifica.sh</code></td>
      <td data-label="Descrição">Uma vez por hora.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="@hourly /verifica.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemctl list-timers</code></td>
      <td data-label="Descrição">Mostra timers do systemd.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemctl list-timers">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>systemd-run --on-boot script.sh</code></td>
      <td data-label="Descrição">Agenda execução no próximo boot.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="systemd-run --on-boot script.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>at now + 5 minutes</code></td>
      <td data-label="Descrição">Agenda uma vez (digite comando depois)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="at now + 5 minutes">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>atq</code></td>
      <td data-label="Descrição">Lista tarefas agendadas com at.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="atq">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>atrm 3</code></td>
      <td data-label="Descrição">Remove tarefa com ID 3.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="atrm 3">📋</button></td>
    </tr>
    <tr>
  <td data-label="Comando"><code>echo "/backup.sh" | at 03:00</code></td>
  <td data-label="Descrição">Agenda <code>/backup.sh</code> para executar às 03:00.</td>
  <td data-label="Ação"><button class="copy-btn" data-command='echo "/backup.sh" | at 03:00'>📋</button></td>
</tr>
    <tr>
      <td data-label="Comando"><code>batch</code></td>
      <td data-label="Descrição">Executa quando carga do sistema está baixa.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="batch">📋</button></td>
    </tr>
   </tbody>
</table>
</div>

 

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramentas.</th>
      <th>Pacotes.</th>
      <th>Instalar (Void)</th>
      <th>Instalar (Debian/Ubuntu)</th>
      <th>Propósitos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta"><code>at</code></td>
      <td data-label="Pacote"><code>at</code></td>
      <td data-label="Instalar (Void)"><code>sudo xbps-install at</code></td>
      <td data-label="Instalar (Debian/Ubuntu)"><code>sudo apt install at</code></td>
      <td data-label="Propósito">Agendar tarefa única para execução futura.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta"><code>atq</code></td>
      <td data-label="Pacote">Incluído no <code>at</code></td>
      <td data-label="Instalar (Void)">Já instalado com <code>at</code></td>
      <td data-label="Instalar (Debian/Ubuntu)">Já instalado com <code>at</code></td>
      <td data-label="Propósito">Listar tarefas agendadas.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta"><code>atrm</code></td>
      <td data-label="Pacote">Incluído no <code>at</code></td>
      <td data-label="Instalar (Void)">Já instalado com <code>at</code></td>
      <td data-label="Instalar (Debian/Ubuntu)">Já instalado com <code>at</code></td>
      <td data-label="Propósito">Remover tarefa agendada pelo ID.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta"><code>batch</code></td>
      <td data-label="Pacote">Incluído no <code>at</code></td>
      <td data-label="Instalar (Void)">Já instalado com <code>at</code></td>
      <td data-label="Instalar (Debian/Ubuntu)">Já instalado com <code>at</code></td>
      <td data-label="Propósito">Executar tarefa quando a carga do sistema estiver baixa (< 1.5)</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Serviço <code>atd</code></td>
      <td data-label="Pacote"><code>at</code></td>
      <td data-label="Instalar (Void)"><code>sudo ln -s /etc/sv/atd /var/service/</code></td>
      <td data-label="Instalar (Debian/Ubuntu)"><code>sudo systemctl enable --now atd</code></td>
      <td data-label="Propósito">Daemon necessário para executar tarefas agendadas.</td>
    </tr>
  </tbody>
</table>
 
 



</section>

