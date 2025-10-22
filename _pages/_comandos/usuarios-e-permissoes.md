---
layout: manual-seo
title: "Usuários e Permissões — Comandos Linux"
description: "Guia técnico com comandos essenciais de Usuários e Permissões. Copie, cole e use direto no terminal. Organizado por usuários e permissões."
permalink: /usuarios-e-permissoes/
---



<section>



<h2> Comandos Gerais.</h2>

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
      <th>Comandos</th>
      <th>Descrições</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>sudo useradd -m novo</code></td>
      <td>Cria usuário com diretório home.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo useradd -m novo">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo passwd novo</code></td>
      <td>Define senha para o usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo passwd novo">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo usermod -aG sudo novo</code></td>
      <td>Adiciona ao grupo sudo (Debian, Ubuntu, Devuan, Mint).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo usermod -aG sudo novo">📋</button></td>
    </tr>
    <tr>
      <td><code>usermod -aG wheel novo</code></td>
      <td>Adiciona ao grupo wheel (Arch, Artix).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="usermod -aG wheel seu_usuario">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo userdel -r usuario</code></td>
      <td>Remove usuário e seu diretório home.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo userdel -r usuario">📋</button></td>
    </tr>
    <tr>
      <td><code>groups usuario</code></td>
      <td>Mostra grupos do usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="groups usuario">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo groupadd devs</code></td>
      <td>Cria novo grupo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo groupadd devs">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo gpasswd -a usuario devs</code></td>
      <td>Adiciona usuário a um grupo existente.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo gpasswd -a usuario devs">📋</button></td>
    </tr>
    <tr>
      <td><code>su - usuario</code></td>
      <td>Troca de usuário com novo ambiente.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="su - usuario">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo -u usuario comando</code></td>
      <td>Executa um comando como outro usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo -u usuario comando">📋</button></td>
    </tr>
    <tr>
      <td><code>visudo</code></td>
      <td>Edita o arquivo <code>/etc/sudoers</code> com verificação de sintaxe.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="visudo">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo -l</code></td>
      <td>Lista permissões de sudo do usuário atual.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo -l">📋</button></td>
    </tr>
    <tr>
      <td><code>lastb</code></td>
      <td>Mostra tentativas de login falhas (requer permissões de root).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lastb">📋</button></td>
    </tr>
    <tr>
      <td><code>chage -l usuario</code></td>
      <td>Mostra política de expiração de senha do usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chage -l usuario">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo chage -M 90 usuario</code></td>
      <td>Define expiração da senha em 90 dias.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo chage -M 90 usuario">📋</button></td>
    </tr>
    <tr>
      <td><code>pwck</code></td>
      <td>Verifica consistência dos arquivos <code>/etc/passwd</code> e <code>/etc/shadow</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pwck">📋</button></td>
    </tr>
    <tr>
      <td><code>cat /etc/group</code></td>
      <td>Lista todos os grupos do sistema.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="cat /etc/group">📋</button></td>
    </tr>
    <tr>
      <td><code>id -u usuario</code></td>
      <td>Mostra o UID (User ID) do usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="id -u usuario">📋</button></td>
    </tr>
    <tr>
      <td><code>newgrp docker</code></td>
      <td>Muda temporariamente o grupo primário (útil após adicionar usuário ao grupo docker).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="newgrp docker">📋</button></td>
    </tr>
    <tr>
      <td><code>umask</code></td>
      <td>Mostra a máscara de permissões padrão para novos arquivos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="umask">📋</button></td>
    </tr>
    <tr>
      <td><code>chmod 600 arquivo</code></td>
      <td>Permissões: apenas o dono pode ler e escrever (seguro para chaves SSH, senhas, etc.).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chmod 600 arquivo">📋</button></td>
    </tr>
  </tbody>
</table>






</section>




