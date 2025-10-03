---
layout: default
title: "🔐 Segurança e Firewall — Comandos Linux"
description: "Guia técnico com comandos essenciais de Segurança e Firewall. Copie, cole e use direto no terminal. Organizado por segurança e firewall."
permalink: /seguranca-e-firewall/
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
      <td data-label="Comando"><code>sudo ufw enable</code></td>
      <td data-label="Descrição">Ativa firewall UFW (Ubuntu).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo ufw enable">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo ufw allow 22</code></td>
      <td data-label="Descrição">Permite porta 22 (SSH).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo ufw allow 22">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo ufw allow from 192.168.1.0/24</code></td>
      <td data-label="Descrição">Permite rede local.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo ufw allow from 192.168.1.0/24">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo ufw deny 80</code></td>
      <td data-label="Descrição">Bloqueia porta 80.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo ufw deny 80">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo ufw status</code></td>
      <td data-label="Descrição">Mostra regras ativas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo ufw status">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo iptables -L</code></td>
      <td data-label="Descrição">Lista regras do iptables.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo iptables -L">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT</code></td>
      <td data-label="Descrição">Permite SSH via iptables.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo iptables-save > firewall.rules</code></td>
      <td data-label="Descrição">Salva regras.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo iptables-save > firewall.rules">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo iptables-restore < firewall.rules</code></td>
      <td data-label="Descrição">Restaura regras.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo iptables-restore < firewall.rules">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>fail2ban-client status sshd</code></td>
      <td data-label="Descrição">Verifica proteção SSH.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="fail2ban-client status sshd">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>fail2ban-client status</code></td>
      <td data-label="Descrição">Lista todos os jails ativos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="fail2ban-client status">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>auditctl -w /etc/passwd -p wa</code></td>
      <td data-label="Descrição">Monitora acesso ao passwd.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="auditctl -w /etc/passwd -p wa">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>aureport --file</code></td>
      <td data-label="Descrição">Relatório de auditoria.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="aureport --file">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chkrootkit</code></td>
      <td data-label="Descrição">Verifica rootkits.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chkrootkit">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lynis audit system</code></td>
      <td data-label="Descrição">Análise de segurança completa.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lynis audit system">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>gpg -c arquivo.txt</code></td>
      <td data-label="Descrição">Criptografa com senha.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="gpg -c arquivo.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>gpg arquivo.txt.gpg</code></td>
      <td data-label="Descrição">Descriptografa.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="gpg arquivo.txt.gpg">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>openssl rand -base64 32</code></td>
      <td data-label="Descrição">Gera senha segura.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="openssl rand -base64 32">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ssh-keygen -t ed25519</code></td>
      <td data-label="Descrição">Gera chave SSH moderna.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ssh-keygen -t ed25519">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chmod 600 ~/.ssh/id_ed25519</code></td>
      <td data-label="Descrição">Protege chave privada.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chmod 600 ~/.ssh/id_ed25519">📋</button></td>
    </tr>
  </tbody>
</table>
</div>
 





</section>
