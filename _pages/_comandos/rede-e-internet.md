---
layout: default
title: "🌐 Rede e Internet — Comandos Linux"
description: "Guia técnico com comandos essenciais de Rede e Internet. Copie, cole e use direto no terminal. Organizado por rede e internet."
permalink: /rede-e-internet/
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
      <td data-label="Comando"><code>ip a</code></td>
      <td data-label="Descrição">Mostra IPs e interfaces</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ip a">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ip route</code></td>
      <td data-label="Descrição">Mostra rota padrão</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ip route">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ping -c 4 google.com</code></td>
      <td data-label="Descrição">Ping com 4 pacotes</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ping -c 4 google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>curl ifconfig.me</code></td>
      <td data-label="Descrição">Mostra IP público</td>
      <td data-label="Ação"><button class="copy-btn" data-command="curl ifconfig.me">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>wget https://exemplo.com/arquivo.zip</code></td>
      <td data-label="Descrição">Baixa arquivo</td>
      <td data-label="Ação"><button class="copy-btn" data-command="wget https://exemplo.com/arquivo.zip">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dig google.com</code></td>
      <td data-label="Descrição">Consulta DNS detalhada</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dig google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nslookup google.com</code></td>
      <td data-label="Descrição">Consulta DNS simples</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nslookup google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>netstat -tulnp</code></td>
      <td data-label="Descrição">Portas abertas + processos</td>
      <td data-label="Ação"><button class="copy-btn" data-command="netstat -tulnp">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ss -tulnp</code></td>
      <td data-label="Descrição">Alternativa moderna ao netstat</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ss -tulnp">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nmap -p 1-1000 192.168.1.1</code></td>
      <td data-label="Descrição">Escaneia portas</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nmap -p 1-1000 192.168.1.1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>traceroute google.com</code></td>
      <td data-label="Descrição">Rota de rede</td>
      <td data-label="Ação"><button class="copy-btn" data-command="traceroute google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mtr google.com</code></td>
      <td data-label="Descrição">Ping + traceroute em tempo real</td>
      <td data-label="Ação"><button class="copy-btn" data-command="mtr google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>iwlist wlan0 scan</code></td>
      <td data-label="Descrição">Redes Wi-Fi próximas</td>
      <td data-label="Ação"><button class="copy-btn" data-command="iwlist wlan0 scan">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nmcli device wifi list</code></td>
      <td data-label="Descrição">Lista redes Wi-Fi</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nmcli device wifi list">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nmcli device wifi connect "Casa" password "1234"</code></td>
      <td data-label="Descrição">Conecta à Wi-Fi</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nmcli device wifi connect &quot;Casa&quot; password &quot;1234&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dhclient -r && sudo dhclient</code></td>
      <td data-label="Descrição">Renova IP via DHCP</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dhclient -r && sudo dhclient">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ssh user@192.168.1.10</code></td>
      <td data-label="Descrição">Conecta via SSH</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ssh user@192.168.1.10">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>scp arquivo.txt user@host:/home/</code></td>
      <td data-label="Descrição">Copia via SSH</td>
      <td data-label="Ação"><button class="copy-btn" data-command="scp arquivo.txt user@host:/home/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rsync -avz pasta/ user@host:/backup/</code></td>
      <td data-label="Descrição">Sincroniza com eficiência</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rsync -avz pasta/ user@host:/backup/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>arp -a</code></td>
      <td data-label="Descrição">Tabela ARP (IP ↔ MAC)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="arp -a">📋</button></td>
    </tr>
  </tbody>
</table>
</div>












</section>
