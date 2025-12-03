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
      <td><code>strace -c ls</code></td>
      <td>Chamadas de sistema resumida em uma tabela.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="strace -c ls">📋</button></td>
    </tr>
    <tr>
      <td><code>ltrace programa</code></td>
      <td>Rastreia chamadas a bibliotecas dinâmicas (ex: <code>libc</code>).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ltrace programa">📋</button></td>
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














</section>







