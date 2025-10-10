---
layout: manual-seo
title: "Rede e Internet — Comandos Linux"
description: "Guia técnico com comandos essenciais de Rede e Internet. Copie, cole e use direto no terminal. Organizado por rede e internet."
permalink: /rede-e-internet/
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
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>ip a</code></td>
      <td data-label="Descrição">Mostra IPs, interfaces e estado (substitui <code>ifconfig</code>).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ip a">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ip route</code></td>
      <td data-label="Descrição">Mostra a rota padrão e tabelas de roteamento.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ip route">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ping -c 4 google.com</code></td>
      <td data-label="Descrição">Envia 4 pacotes ICMP para testar conectividade.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ping -c 4 google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>curl ifconfig.me</code></td>
      <td data-label="Descrição">Mostra seu IP público IPv4 (requer internet)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="curl ifconfig.me">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>wget https://exemplo.com/arquivo.zip</code></td>
      <td data-label="Descrição">Baixa arquivo para o diretório atual.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="wget https://exemplo.com/arquivo.zip">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dig google.com</code></td>
      <td data-label="Descrição">Consulta DNS detalhada (registros A, MX, TTL, etc.)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dig google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nslookup google.com</code></td>
      <td data-label="Descrição">Consulta DNS simples (obsoleto; prefira <code>dig</code>)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nslookup google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>netstat -tulnp</code></td>
      <td data-label="Descrição">Lista portas abertas com PID e nome do processo (requer <code>net-tools</code>)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="netstat -tulnp">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ss -tulnp</code></td>
      <td data-label="Descrição">Alternativa moderna ao <code>netstat</code> (mais rápida; parte do <code>iproute2</code>)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ss -tulnp">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nmap -p 1-1000 192.168.1.1</code></td>
      <td data-label="Descrição">Escaneia as portas 1 a 1000 no host (requer <code>nmap</code> instalado)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nmap -p 1-1000 192.168.1.1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>traceroute google.com</code></td>
      <td data-label="Descrição">Mostra a rota de rede até o destino (requer <code>traceroute</code>)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="traceroute google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mtr google.com</code></td>
      <td data-label="Descrição">Combina <code>ping</code> + <code>traceroute</code> em tempo real (requer <code>mtr</code>)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="mtr google.com">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>iwlist wlan0 scan</code></td>
      <td data-label="Descrição">Lista redes Wi-Fi próximas (requer interface <code>wlan0</code> e driver compatível)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="iwlist wlan0 scan">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nmcli device wifi list</code></td>
      <td data-label="Descrição">Lista redes Wi-Fi (requer NetworkManager)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nmcli device wifi list">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nmcli device wifi connect "Casa" password "1234"</code></td>
      <td data-label="Descrição">Conecta à rede Wi-Fi com senha (NetworkManager).</td>
      <td data-label="Ação"><button class="copy-btn" data-command='nmcli device wifi connect "Casa" password "1234"'>📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dhclient -r && sudo dhclient</code></td>
      <td data-label="Descrição">Libera e renova o IP via DHCP.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dhclient -r && sudo dhclient">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ssh user@192.168.1.10</code></td>
      <td data-label="Descrição">Conecta via SSH (requer servidor SSH ativo)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ssh user@192.168.1.10">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>scp arquivo.txt user@host:/home/</code></td>
      <td data-label="Descrição">Copia arquivo via SSH (seguro, com criptografia).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="scp arquivo.txt user@host:/home/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rsync -avz pasta/ user@host:/backup/</code></td>
      <td data-label="Descrição">Sincroniza pastas com eficiência (só transfere o que mudou)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rsync -avz pasta/ user@host:/backup/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>arp -a</code></td>
      <td data-label="Descrição">Mostra tabela ARP (mapeamento IP ↔ MAC na rede local)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="arp -a">📋</button></td>
    </tr>
  </tbody>
</table>









</section>
