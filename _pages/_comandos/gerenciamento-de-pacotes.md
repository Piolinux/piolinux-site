---
layout: manual-seo
title: "Gerenciamento de Pacotes — Comandos Linux"
description: "Guia técnico com comandos essenciais de Gerenciamento de Pacotes. Copie, cole e use direto no terminal. Organizado por gerenciamento de pacotes."
permalink: /gerenciamento-de-pacotes/
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

<h3> Debian/Ubuntu/</h3>

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
      <td data-label="Comando"><code>sudo apt update</code></td>
      <td data-label="Descrição">Atualiza lista de pacotes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt update">📋</button></td>
    </tr>
     <tr>
  <td data-label="Comando"><code>sudo apt upgrade</code></td>
  <td data-label="Descrição">Atualiza pacotes instalados.</td>
  <td data-label="Ação"><button class="copy-btn" data-command="sudo apt upgrade">📋</button></td>
</tr>
    <tr>
  <td data-label="Comando"><code>sudo apt full-upgrade</code></td>
  <td data-label="Descrição">Atualiza com possíveis remoções de pacotes. ⚠️ Pode quebrar dependências.</td>
  <td data-label="Ação"><button class="copy-btn" data-command="sudo apt full- upgrade">📋</button></td>
</tr>
<tr>
  <td data-label="Comando"><code>sudo apt autoremove</code></td>
  <td data-label="Descrição">Remove pacotes órfãos. ⚠️ Confirme se não remove algo necessário.</td>
 <td data-label="Ação"><button class="copy-btn" data-command="sudo apt autoremove">📋</button></td>
</tr>
    <tr>
      <td data-label="Comando"><code>sudo apt install curl</code></td>
      <td data-label="Descrição">Instala um pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt install curl">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo apt remove firefox</code></td>
      <td data-label="Descrição">Remove pacote (mantém configs).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt remove firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo apt purge firefox</code></td>
      <td data-label="Descrição">Remove pacote + configs.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt purge firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo apt autoremove</code></td>
      <td data-label="Descrição">Remove pacotes órfãos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt autoremove">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>apt search nginx</code></td>
      <td data-label="Descrição">Procura pacotes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="apt search nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>apt show nginx</code></td>
      <td data-label="Descrição">Mostra detalhes do pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="apt show nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>apt list --upgradable</code></td>
      <td data-label="Descrição">Lista atualizações disponíveis.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="apt list --upgradable">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>apt list --installed</code></td>
      <td data-label="Descrição">Lista pacotes instalados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="apt list --installed">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo apt clean</code></td>
      <td data-label="Descrição">Limpa cache de pacotes .deb</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt clean">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo apt autoclean</code></td>
      <td data-label="Descrição">Limpa cache antigo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt autoclean">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>apt-cache policy firefox</code></td>
      <td data-label="Descrição">Mostra versão e repositório.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="apt-cache policy firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dpkg -i package.deb</code></td>
      <td data-label="Descrição">Instala arquivo .deb</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dpkg -i package.deb">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dpkg -r nginx</code></td>
      <td data-label="Descrição">Remove pacote sem APT</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dpkg -r nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dpkg -L nginx</code></td>
      <td data-label="Descrição">Lista arquivos do pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dpkg -L nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dpkg -S /etc/nginx/nginx.conf</code></td>
      <td data-label="Descrição">Descobre qual pacote possui o arquivo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dpkg -S /etc/nginx/nginx.conf">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>apt-get source nginx</code></td>
      <td data-label="Descrição">Baixa código-fonte.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="apt-get source nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo apt edit-sources</code></td>
      <td data-label="Descrição">Edita arquivo sources.list.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt edit-sources">📋</button></td>
    </tr>
  </tbody>
</table>
</div>

<h3> Artix Linux (Pacman + AUR)</h3>

<div class="table-container">
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
      <td data-label="Comando"><code>sudo pacman -Sy</code></td>
      <td data-label="Descrição">Sincroniza repositórios.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo pacman -Sy">📋</button></td>
    </tr>
  <tr>
  <td data-label="Comando"><code>sudo pacman -Syu</code></td>
  <td data-label="Descrição">Atualiza todo o sistema. ⚠️ Faça só em ambiente estável. Leia <code>/usr/share/libalpm/hooks/</code> após atualizar.</td>
  <td data-label="Ação"><button class="copy-btn" data-command="sudo pacman -Syu">📋</button></td>
   </tr>

    
    <tr>
      <td data-label="Comando"><code>sudo pacman -S vim</code></td>
      <td data-label="Descrição">Instala pacote oficial.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo pacman -S vim">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo pacman -R vim</code></td>
      <td data-label="Descrição">Remove pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo pacman -R vim">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo pacman -Rns vim</code></td>
      <td data-label="Descrição">Remove + deps + configs</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo pacman -Rns vim">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pacman -Q</code></td>
      <td data-label="Descrição">Lista pacotes instalados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pacman -Q">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pacman -Qs docker</code></td>
      <td data-label="Descrição">Procura pacotes instalados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pacman -Qs docker">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pacman -Ss firefox</code></td>
      <td data-label="Descrição">Procura em repositórios.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pacman -Ss firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pacman -Qi firefox</code></td>
      <td data-label="Descrição">Informações detalhadas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pacman -Qi firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pacman -Ql firefox</code></td>
      <td data-label="Descrição">Lista arquivos do pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pacman -Ql firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pacman -Fy</code></td>
      <td data-label="Descrição">Atualiza banco de arquivos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pacman -Fy">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pacman -F /bin/ls</code></td>
      <td data-label="Descrição">Descobre pacote que fornece arquivo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pacman -F /bin/ls">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>yay -S google-chrome</code></td>
      <td data-label="Descrição">Instala do AUR com yay.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="yay -S google-chrome">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>yay -Syu</code></td>
      <td data-label="Descrição">Atualiza sistema + AUR</td>
      <td data-label="Ação"><button class="copy-btn" data-command="yay -Syu">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>yay -Yc</code></td>
      <td data-label="Descrição">Limpa pacotes órfãos do AUR</td>
      <td data-label="Ação"><button class="copy-btn" data-command="yay -Yc">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>makepkg -si</code></td>
      <td data-label="Descrição">Compila e instala PKGBUILD</td>
      <td data-label="Ação"><button class="copy-btn" data-command="makepkg -si">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>expac -S "%-20n %v" \| sort</code></td>
      <td data-label="Descrição">Lista pacotes ordenados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="expac -S &quot;%-20n %v&quot; \| sort">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo pacman -U package.pkg.tar.zst</code></td>
      <td data-label="Descrição">Instala pacote local.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo pacman -U package.pkg.tar.zst">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>paccache -r</code></td>
      <td data-label="Descrição">Limpa versões antigas do cache.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="paccache -r">📋</button></td>
    </tr>
     </tbody>
</table>
</div>













</section>
 




