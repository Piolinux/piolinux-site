---
layout: default
title: "Usuários e Permissões — Comandos Linux"
description: "Guia técnico com comandos essenciais de Usuários e Permissões. Copie, cole e use direto no terminal. Organizado por usuários e permissões."
permalink: /usuarios-e-permissoes/
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
      <td data-label="Comando"><code>sudo useradd -m novo</code></td>
      <td data-label="Descrição">Cria usuário com home.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo useradd -m novo">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo passwd novo</code></td>
      <td data-label="Descrição">Define senha.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo passwd novo">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo usermod -aG sudo novo</code></td>
      <td data-label="Descrição">Adiciona ao grupo sudo (Debian).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo usermod -aG sudo novo">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo usermod -aG wheel novo</code></td>
      <td data-label="Descrição">Adiciona ao grupo wheel (Arch/Fedora).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo usermod -aG wheel novo">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo userdel -r usuario</code></td>
      <td data-label="Descrição">Remove usuário + home.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo userdel -r usuario">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>groups usuario</code></td>
      <td data-label="Descrição">Mostra grupos do usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="groups usuario">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo groupadd devs</code></td>
      <td data-label="Descrição">Cria grupo</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo groupadd devs">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo gpasswd -a usuario devs</code></td>
      <td data-label="Descrição">Adiciona usuário a grupo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo gpasswd -a usuario devs">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>su - usuario</code></td>
      <td data-label="Descrição">Troca de usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="su - usuario">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo -u usuario comando</code></td>
      <td data-label="Descrição">Executa como outro usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo -u usuario comando">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>visudo</code></td>
      <td data-label="Descrição">Edita sudoers com segurança.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="visudo">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo -l</code></td>
      <td data-label="Descrição">Lista permissões do sudo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo -l">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lastb</code></td>
      <td data-label="Descrição">Tentativas de login falhas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lastb">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chage -l usuario</code></td>
      <td data-label="Descrição">Mostra política de senha.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chage -l usuario">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo chage -M 90 usuario</code></td>
      <td data-label="Descrição">Expira senha em 90 dias.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo chage -M 90 usuario">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pwck</code></td>
      <td data-label="Descrição">Verifica consistência de senhas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pwck">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>grpck</code></td>
      <td data-label="Descrição">Verifica grupos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grpck">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>id -u usuario</code></td>
      <td data-label="Descrição">Mostra UID.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="id -u usuario">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>newgrp docker</code></td>
      <td data-label="Descrição">Muda grupo primário temporariamente.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="newgrp docker">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>umask</code></td>
      <td data-label="Descrição">Mostra máscara de permissões.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="umask">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chmod 600 arquivo</code></td>
      <td data-label="Descrição">Apenas dono lê e escreve.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chmod 600 arquivo">📋</button></td>
    </tr>
  </tbody>
</table>
</div>






</section>


