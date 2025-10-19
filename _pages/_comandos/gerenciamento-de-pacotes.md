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

<h3> Arch Linux (Pacman + AUR)</h3>

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

<h3>Fedora (DNF) </h3>

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
      <td data-label="Comando"><code>sudo dnf update</code></td>
      <td data-label="Descrição">Atualiza todos os pacotes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf update">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf upgrade</code></td>
      <td data-label="Descrição">Sinônimo de update.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf upgrade">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf install httpd</code></td>
      <td data-label="Descrição">Instala pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf install httpd">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf remove httpd</code></td>
      <td data-label="Descrição">Remove pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf remove httpd">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dnf search nginx</code></td>
      <td data-label="Descrição">Procura pacotes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dnf search nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dnf info httpd</code></td>
      <td data-label="Descrição">Mostra informações.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dnf info httpd">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dnf list installed</code></td>
      <td data-label="Descrição">Lista pacotes instalados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dnf list installed">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dnf list updates</code></td>
      <td data-label="Descrição">Lista atualizações.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dnf list updates">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf autoremove</code></td>
      <td data-label="Descrição">Remove pacotes órfãos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf autoremove">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf clean all</code></td>
      <td data-label="Descrição">Limpa cache.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf clean all">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dnf provides /bin/cp</code></td>
      <td data-label="Descrição">Descobre pacote de um arquivo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dnf provides /bin/cp">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf reinstall vim</code></td>
      <td data-label="Descrição">Reinstala pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf reinstall vim">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf downgrade firefox</code></td>
      <td data-label="Descrição">Reverte versão.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf downgrade firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf module list</code></td>
      <td data-label="Descrição">Mostra módulos disponíveis.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf module list">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf swap nano vim</code></td>
      <td data-label="Descrição">Substitui pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf swap nano vim">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf history</code></td>
      <td data-label="Descrição">Histórico de transações.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf history">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo dnf history undo 5</code></td>
      <td data-label="Descrição">Desfaz transação ID 5</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo dnf history undo 5">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rpm -ivh package.rpm</code></td>
      <td data-label="Descrição">Instala .rpm</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rpm -ivh package.rpm">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rpm -e package</code></td>
      <td data-label="Descrição">Remove .rpm</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rpm -e package">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rpm -qa \| grep docker</code></td>
      <td data-label="Descrição">Procura pacotes RPM instalados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rpm -qa \| grep docker">📋</button></td>
    </tr>
  </tbody>
</table>
</div>

<h3> openSUSE (zypper) </h3>

<div class="table-container">
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos</th>
      <th>Descrições.</th>
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>sudo zypper refresh</code></td>
      <td data-label="Descrição">Atualiza repositórios.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper refresh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper update</code></td>
      <td data-label="Descrição">Atualiza pacotes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper update">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper install nginx</code></td>
      <td data-label="Descrição">Instala pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper install nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper remove nginx</code></td>
      <td data-label="Descrição">Remove pacote.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper remove nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper search firefox</code></td>
      <td data-label="Descrição">Procura pacotes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper search firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper info nginx</code></td>
      <td data-label="Descrição">Mostra detalhes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper info nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper list-updates</code></td>
      <td data-label="Descrição">Lista atualizações.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper list-updates">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper list-installed</code></td>
      <td data-label="Descrição">Lista pacotes instalados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper list-installed">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper dup</code></td>
      <td data-label="Descrição">Atualização de distribuição.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper dup">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper lr</code></td>
      <td data-label="Descrição">Lista repositórios.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper lr">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper addrepo https://download.docker.com/linux/opensuse docker</code></td>
      <td data-label="Descrição">Adiciona repositório.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper addrepo https://download.docker.com/linux/opensuse docker">📋</button></td>
    </tr>
    <tr>
  <td data-label="Comando"><code>sudo zypper remove docker</code></td>
  <td data-label="Descrição">Remove o programa docker.</td>
  <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper remove docker">📋</button></td>
</tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper modifyrepo -p 90 docker</code></td>
      <td data-label="Descrição">Define prioridade.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper modifyrepo -p 90 docker">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper clean</code></td>
      <td data-label="Descrição">Limpa cache.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper clean">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rpm -q docker</code></td>
      <td data-label="Descrição">Verifica se pacote está instalado.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rpm -q docker">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rpm -V docker</code></td>
      <td data-label="Descrição">Confirme se o pacote está intacto.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rpm -V docker">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper se -s firefox</code></td>
      <td data-label="Descrição">Procura versões disponíveis.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper se -s firefox">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper patch</code></td>
      <td data-label="Descrição">Aplica patches de segurança.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper patch">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>zypper ps</code></td>
      <td data-label="Descrição">Processos que precisam de reinício.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="zypper ps">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo zypper install --download-only docker</code></td>
      <td data-label="Descrição">Baixa sem instalar.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo zypper install --download-only docker">📋</button></td>
    </tr>
  </tbody>
</table>
</div>









</section>
 




