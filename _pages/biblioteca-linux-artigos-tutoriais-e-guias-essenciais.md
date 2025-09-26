---
layout: default
title: Comandos Linux por Categoria — Guia Técnico Completo
description: "Domine o terminal com comandos organizados em 18 categorias: pacotes, rede, Docker, Git, segurança, processos, logs e muito mais. Ideal para consulta rápida."
author: "PioLinux"
categories: [linux, comandos, terminal, referência]
tags: [comandos, linux, terminal, sysadmin, docker, git, rede, segurança, bash, guia]
permalink: /biblioteca-linux/
---



<section class="post-content">


<div style="
    max-width: 960px;
    margin: 0 auto;
    padding: 30px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.7;
    color: #fffeff;
    
    width: 100%;
  ">
<h2 style="text-align: center; margin-bottom: 10px; color: #fffeff;">🐧 Biblioteca de 500 Comandos Linux</h2>
<p style="text-align: center; font-size: 1.1em; color: #fffeff;">
<strong>Debian, Ubuntu, Arch Linux, Fedora, openSUSE</strong><br/>
      Organizado por categorias — Básico ao Avançado
    </p>
<!-- Caixa de busca -->
<div style="margin: 30px 0; text-align: center;">
  <input 
    id="searchInput" 
    type="text"
    placeholder="🔍 Digite um comando, distro ou tema (ex: apt, firewall, docker)..."
    style="padding: 12px; width: 80%; max-width: 500px; border: 2px solid #ddd; border-radius: 8px; font-size: 1em; outline: none; transition: border 0.3s;"
  />
</div>



<!-- Índice Rápido -->
<h2 style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 40px; color: #fffeff;">📌 Índice Rápido</h2>
<ul style="columns: 2; column-gap: 40px; margin-left: 0; padding-left: 20px; list-style: none;">
<li><a href="#pacotes">1. Gerenciamento de Pacotes</a></li>
<li><a href="#sistema">2. Gerenciamento de Sistema</a></li>
<li><a href="#arquivos">3. Arquivos e Diretórios</a></li>
<li><a href="#rede">4. Rede e Internet</a></li>
<li><a href="#usuarios">5. Usuários e Permissões</a></li>
<li><a href="#processos">6. Processos e Monitoramento</a></li>
<li><a href="#compactacao">7. Compactação e Arquivamento</a></li>
<li><a href="#texto">8. Edição de Texto e Filtros</a></li>
<li><a href="#cron">9. Tarefas Agendadas</a></li>
<li><a href="#seguranca">10. Segurança e Firewall</a></li>
<li><a href="#docker">11. Docker e Containerização</a></li>
<li><a href="#git">12. Git e Controle de Versão</a></li>
<li><a href="#systemd">13. Sistemas de Inicialização</a></li>
<li><a href="#logs">14. Logs e Diagnóstico</a></li>
<li><a href="#virtualizacao">15. Virtualização (QEMU, KVM)</a></li>
<li><a href="#bash">16. Scripts Bash</a></li>
<li><a href="#recuperacao">17. Recuperação e Manutenção</a></li>
<li><a href="#avancados">18. Comandos Avançados e Dicas</a></li>
</ul>





<!-- 1. Gerenciamento de Pacotes -->
<h2 id="pacotes" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🔧 1. Gerenciamento de Pacotes</h2>
<h3 style="color: #d35400; margin-top: 20px; font-size: 1.3em;">📦 Debian/Ubuntu (APT)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt update</code></td>
      <td data-label="Descrição">Atualiza lista de pacotes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt upgrade</code></td>
      <td data-label="Descrição">Atualiza pacotes instalados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt full-upgrade</code></td>
      <td data-label="Descrição">Atualiza com possíveis remoções</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt install curl</code></td>
      <td data-label="Descrição">Instala um pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt remove firefox</code></td>
      <td data-label="Descrição">Remove pacote (mantém configs)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt purge firefox</code></td>
      <td data-label="Descrição">Remove pacote + configs</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt autoremove</code></td>
      <td data-label="Descrição">Remove pacotes órfãos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>apt search nginx</code></td>
      <td data-label="Descrição">Procura pacotes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>apt show nginx</code></td>
      <td data-label="Descrição">Mostra detalhes do pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>apt list --upgradable</code></td>
      <td data-label="Descrição">Lista atualizações disponíveis</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>apt list --installed</code></td>
      <td data-label="Descrição">Lista pacotes instalados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt clean</code></td>
      <td data-label="Descrição">Limpa cache de pacotes .deb</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt autoclean</code></td>
      <td data-label="Descrição">Limpa cache antigo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>apt-cache policy firefox</code></td>
      <td data-label="Descrição">Mostra versão e repositório</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dpkg -i package.deb</code></td>
      <td data-label="Descrição">Instala arquivo .deb</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dpkg -r nginx</code></td>
      <td data-label="Descrição">Remove pacote sem APT</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dpkg -L nginx</code></td>
      <td data-label="Descrição">Lista arquivos do pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dpkg -S /etc/nginx/nginx.conf</code></td>
      <td data-label="Descrição">Descobre qual pacote possui o arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>apt-get source nginx</code></td>
      <td data-label="Descrição">Baixa código-fonte</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo apt edit-sources</code></td>
      <td data-label="Descrição">Edita arquivo sources.list</td>
    </tr>
  </tbody>
</table>
<h3 style="color: #27ae60; margin-top: 20px; font-size: 1.3em;">🏹 Arch Linux (Pacman + AUR)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>sudo pacman -Sy</code></td>
      <td data-label="Descrição">Sincroniza repositórios</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo pacman -Syu</code></td>
      <td data-label="Descrição">Atualiza sistema completo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo pacman -S vim</code></td>
      <td data-label="Descrição">Instala pacote oficial</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo pacman -R vim</code></td>
      <td data-label="Descrição">Remove pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo pacman -Rns vim</code></td>
      <td data-label="Descrição">Remove + deps + configs</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pacman -Q</code></td>
      <td data-label="Descrição">Lista pacotes instalados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pacman -Qs docker</code></td>
      <td data-label="Descrição">Procura pacotes instalados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pacman -Ss firefox</code></td>
      <td data-label="Descrição">Procura em repositórios</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pacman -Qi firefox</code></td>
      <td data-label="Descrição">Informações detalhadas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pacman -Ql firefox</code></td>
      <td data-label="Descrição">Lista arquivos do pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pacman -Fy</code></td>
      <td data-label="Descrição">Atualiza banco de arquivos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pacman -F /bin/ls</code></td>
      <td data-label="Descrição">Descobre pacote que fornece arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>yay -S google-chrome</code></td>
      <td data-label="Descrição">Instala do AUR com yay</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>yay -Syu</code></td>
      <td data-label="Descrição">Atualiza sistema + AUR</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>yay -Yc</code></td>
      <td data-label="Descrição">Limpa pacotes órfãos do AUR</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>makepkg -si</code></td>
      <td data-label="Descrição">Compila e instala PKGBUILD</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>expac -S "%-20n %v" | sort</code></td>
      <td data-label="Descrição">Lista pacotes ordenados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo pacman -U package.pkg.tar.zst</code></td>
      <td data-label="Descrição">Instala pacote local</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>paccache -r</code></td>
      <td data-label="Descrição">Limpa versões antigas do cache</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo reflector --country Brazil -l 10 --save /etc/pacman.d/mirrorlist</code></td>
      <td data-label="Descrição">Atualiza mirrorlist</td>
    </tr>
  </tbody>
</table>
<h3 style="color: #e74c3c; margin-top: 20px; font-size: 1.3em;">🔥 Fedora (DNF)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf update</code></td>
      <td data-label="Descrição">Atualiza todos os pacotes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf upgrade</code></td>
      <td data-label="Descrição">Sinônimo de update</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf install httpd</code></td>
      <td data-label="Descrição">Instala pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf remove httpd</code></td>
      <td data-label="Descrição">Remove pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dnf search nginx</code></td>
      <td data-label="Descrição">Procura pacotes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dnf info httpd</code></td>
      <td data-label="Descrição">Mostra informações</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dnf list installed</code></td>
      <td data-label="Descrição">Lista pacotes instalados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dnf list updates</code></td>
      <td data-label="Descrição">Lista atualizações</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf autoremove</code></td>
      <td data-label="Descrição">Remove pacotes órfãos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf clean all</code></td>
      <td data-label="Descrição">Limpa cache</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dnf provides /bin/cp</code></td>
      <td data-label="Descrição">Descobre pacote de um arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf reinstall vim</code></td>
      <td data-label="Descrição">Reinstala pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf downgrade firefox</code></td>
      <td data-label="Descrição">Reverte versão</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf module list</code></td>
      <td data-label="Descrição">Mostra módulos disponíveis</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf swap nano vim</code></td>
      <td data-label="Descrição">Substitui pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf history</code></td>
      <td data-label="Descrição">Histórico de transações</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dnf history undo 5</code></td>
      <td data-label="Descrição">Desfaz transação ID 5</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rpm -ivh package.rpm</code></td>
      <td data-label="Descrição">Instala .rpm</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rpm -e package</code></td>
      <td data-label="Descrição">Remove .rpm</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rpm -qa | grep docker</code></td>
      <td data-label="Descrição">Procura pacotes RPM instalados</td>
    </tr>
  </tbody>
</table>
<h3 style="color: #f39c12; margin-top: 20px; font-size: 1.3em;">🟠 openSUSE (zypper)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper refresh</code></td>
      <td data-label="Descrição">Atualiza repositórios</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper update</code></td>
      <td data-label="Descrição">Atualiza pacotes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper install nginx</code></td>
      <td data-label="Descrição">Instala pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper remove nginx</code></td>
      <td data-label="Descrição">Remove pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper search firefox</code></td>
      <td data-label="Descrição">Procura pacotes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper info nginx</code></td>
      <td data-label="Descrição">Mostra detalhes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper list-updates</code></td>
      <td data-label="Descrição">Lista atualizações</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper list-installed</code></td>
      <td data-label="Descrição">Lista pacotes instalados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper dup</code></td>
      <td data-label="Descrição">Atualização de distribuição</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper lr</code></td>
      <td data-label="Descrição">Lista repositórios</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper addrepo https://download.docker.com/linux/opensuse   docker</code></td>
      <td data-label="Descrição">Adiciona repositório</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper removerepo docker</code></td>
      <td data-label="Descrição">Remove repositório</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper modifyrepo -p 90 docker</code></td>
      <td data-label="Descrição">Define prioridade</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper clean</code></td>
      <td data-label="Descrição">Limpa cache</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rpm -q docker</code></td>
      <td data-label="Descrição">Verifica se pacote está instalado</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rpm -V docker</code></td>
      <td data-label="Descrição">Verifica integridade do pacote</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper se -s firefox</code></td>
      <td data-label="Descrição">Procura versões disponíveis</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper patch</code></td>
      <td data-label="Descrição">Aplica patches de segurança</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zypper ps</code></td>
      <td data-label="Descrição">Processos que precisam de reinício</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo zypper install --download-only docker</code></td>
      <td data-label="Descrição">Baixa sem instalar</td>
    </tr>
  </tbody>
</table>
<!-- 2. Sistema -->
<h2 id="sistema" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🖥️ 2. Gerenciamento de Sistema</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>uname -a</code></td>
      <td data-label="Descrição">Informações do kernel</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>hostnamectl</code></td>
      <td data-label="Descrição">Status do hostname</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>hostnamectl set-hostname servidor</code></td>
      <td data-label="Descrição">Muda nome da máquina</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>timedatectl</code></td>
      <td data-label="Descrição">Data, hora e fuso</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>timedatectl set-timezone America/Sao_Paulo</code></td>
      <td data-label="Descrição">Define fuso horário</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>timedatectl set-ntp true</code></td>
      <td data-label="Descrição">Ativa sincronização NTP</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl reboot</code></td>
      <td data-label="Descrição">Reinicia o sistema</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl poweroff</code></td>
      <td data-label="Descrição">Desliga o sistema</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl suspend</code></td>
      <td data-label="Descrição">Suspensão</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl hibernate</code></td>
      <td data-label="Descrição">Hibernação</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>uptime</code></td>
      <td data-label="Descrição">Tempo de atividade</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>whoami</code></td>
      <td data-label="Descrição">Usuário atual</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>id</code></td>
      <td data-label="Descrição">ID e grupos do usuário</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>last</code></td>
      <td data-label="Descrição">Últimos logins</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>history</code></td>
      <td data-label="Descrição">Histórico de comandos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo shutdown -h now</code></td>
      <td data-label="Descrição">Desliga agora</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo shutdown -r +10</code></td>
      <td data-label="Descrição">Reinicia em 10 minutos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>df -h</code></td>
      <td data-label="Descrição">Espaço em disco (legível)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>df -i</code></td>
      <td data-label="Descrição">Uso de inodes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>du -sh /home</code></td>
      <td data-label="Descrição">Tamanho do diretório</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>free -h</code></td>
      <td data-label="Descrição">Uso de memória RAM e swap</td>
    </tr>
  </tbody>
</table>
<!-- 3. Arquivos -->
<h2 id="arquivos" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">📁 3. Arquivos e Diretórios</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>ls -la</code></td>
      <td data-label="Descrição">Lista arquivos ocultos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>cd ~</code></td>
      <td data-label="Descrição">Vai para o diretório home</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>cd -</code></td>
      <td data-label="Descrição">Volta ao diretório anterior</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pwd</code></td>
      <td data-label="Descrição">Mostra caminho atual</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>mkdir -p projetos/web/app</code></td>
      <td data-label="Descrição">Cria diretórios aninhados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>cp -r pasta/ nova/</code></td>
      <td data-label="Descrição">Copia diretório recursivamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>mv antigo.txt novo.txt</code></td>
      <td data-label="Descrição">Move ou renomeia</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rm -rf pasta/</code></td>
      <td data-label="Descrição">Remove diretório e conteúdo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>touch arquivo.log</code></td>
      <td data-label="Descrição">Cria arquivo vazio</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ln -s /caminho/real link</code></td>
      <td data-label="Descrição">Cria link simbólico</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>find /home -name "*.log"</code></td>
      <td data-label="Descrição">Procura por nome</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>find /var -size +100M</code></td>
      <td data-label="Descrição">Arquivos maiores que 100MB</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>locate arquivo.conf</code></td>
      <td data-label="Descrição">Busca rápida (requer updatedb)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>grep "erro" log.txt</code></td>
      <td data-label="Descrição">Procura texto em arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>grep -r "senha" /etc/</code></td>
      <td data-label="Descrição">Procura recursivamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chmod 755 script.sh</code></td>
      <td data-label="Descrição">Permissões: dono=rwx, grupo=outros=rx</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chmod +x script.sh</code></td>
      <td data-label="Descrição">Torna executável</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chown user:group arquivo.txt</code></td>
      <td data-label="Descrição">Muda dono e grupo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chgrp devs arquivo.txt</code></td>
      <td data-label="Descrição">Muda grupo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>stat arquivo.txt</code></td>
      <td data-label="Descrição">Mostra metadados (acesso, modificação)</td>
    </tr>
  </tbody>
</table>
<!-- 4. Rede -->
<h2 id="rede" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🌐 4. Rede e Internet</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>ip a</code></td>
      <td data-label="Descrição">Mostra IPs e interfaces</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ip route</code></td>
      <td data-label="Descrição">Mostra rota padrão</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ping -c 4 google.com</code></td>
      <td data-label="Descrição">Ping com 4 pacotes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>curl ifconfig.me</code></td>
      <td data-label="Descrição">Mostra IP público</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>wget https://exemplo.com/arquivo.zip</code></td>
      <td data-label="Descrição">Baixa arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dig google.com</code></td>
      <td data-label="Descrição">Consulta DNS detalhada</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>nslookup google.com</code></td>
      <td data-label="Descrição">Consulta DNS simples</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>netstat -tulnp</code></td>
      <td data-label="Descrição">Portas abertas + processos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ss -tulnp</code></td>
      <td data-label="Descrição">Alternativa moderna ao netstat</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>nmap -p 1-1000 192.168.1.1</code></td>
      <td data-label="Descrição">Escaneia portas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>traceroute google.com</code></td>
      <td data-label="Descrição">Rota de rede</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>mtr google.com</code></td>
      <td data-label="Descrição">Ping + traceroute em tempo real</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>iwlist wlan0 scan</code></td>
      <td data-label="Descrição">Redes Wi-Fi próximas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>nmcli device wifi list</code></td>
      <td data-label="Descrição">Lista redes Wi-Fi</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>nmcli device wifi connect "Casa" password "1234"</code></td>
      <td data-label="Descrição">Conecta à Wi-Fi</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo dhclient -r &amp;&amp; sudo dhclient</code></td>
      <td data-label="Descrição">Renova IP via DHCP</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ssh user@192.168.1.10</code></td>
      <td data-label="Descrição">Conecta via SSH</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>scp arquivo.txt user@host:/home/</code></td>
      <td data-label="Descrição">Copia via SSH</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rsync -avz pasta/ user@host:/backup/</code></td>
      <td data-label="Descrição">Sincroniza com eficiência</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>arp -a</code></td>
      <td data-label="Descrição">Tabela ARP (IP ↔ MAC)</td>
    </tr>
  </tbody>
</table>
<!-- 5. Usuários -->
<h2 id="usuarios" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🔐 5. Usuários e Permissões</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>sudo useradd -m novo</code></td>
      <td data-label="Descrição">Cria usuário com home</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo passwd novo</code></td>
      <td data-label="Descrição">Define senha</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo usermod -aG sudo novo</code></td>
      <td data-label="Descrição">Adiciona ao grupo sudo (Debian)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo usermod -aG wheel novo</code></td>
      <td data-label="Descrição">Adiciona ao grupo wheel (Arch/Fedora)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo userdel -r usuario</code></td>
      <td data-label="Descrição">Remove usuário + home</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>groups usuario</code></td>
      <td data-label="Descrição">Mostra grupos do usuário</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo groupadd devs</code></td>
      <td data-label="Descrição">Cria grupo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo gpasswd -a usuario devs</code></td>
      <td data-label="Descrição">Adiciona usuário a grupo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>su - usuario</code></td>
      <td data-label="Descrição">Troca de usuário</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo -u usuario comando</code></td>
      <td data-label="Descrição">Executa como outro usuário</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>visudo</code></td>
      <td data-label="Descrição">Edita sudoers com segurança</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo -l</code></td>
      <td data-label="Descrição">Lista permissões do sudo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lastb</code></td>
      <td data-label="Descrição">Tentativas de login falhas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chage -l usuario</code></td>
      <td data-label="Descrição">Mostra política de senha</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo chage -M 90 usuario</code></td>
      <td data-label="Descrição">Expira senha em 90 dias</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pwck</code></td>
      <td data-label="Descrição">Verifica consistência de senhas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>grpck</code></td>
      <td data-label="Descrição">Verifica grupos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>id -u usuario</code></td>
      <td data-label="Descrição">Mostra UID</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>newgrp docker</code></td>
      <td data-label="Descrição">Muda grupo primário temporariamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>umask</code></td>
      <td data-label="Descrição">Mostra máscara de permissões</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chmod 600 arquivo</code></td>
      <td data-label="Descrição">Apenas dono lê e escreve</td>
    </tr>
  </tbody>
</table>
<!-- 6. Processos -->
<h2 id="processos" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">📊 6. Monitoramento e Processos</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>ps aux</code></td>
      <td data-label="Descrição">Lista todos os processos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ps aux | grep nginx</code></td>
      <td data-label="Descrição">Filtra processos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>top</code></td>
      <td data-label="Descrição">Monitoramento em tempo real</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>htop</code></td>
      <td data-label="Descrição">Versão melhorada (instale com apt install htop)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>kill 1234</code></td>
      <td data-label="Descrição">Mata processo por PID</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>killall firefox</code></td>
      <td data-label="Descrição">Mata todos os processos chamados firefox</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>pkill sshd</code></td>
      <td data-label="Descrição">Mata por nome</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>bg</code></td>
      <td data-label="Descrição">Retoma processo em background</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>fg</code></td>
      <td data-label="Descrição">Traz para foreground</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>jobs</code></td>
      <td data-label="Descrição">Lista jobs em background</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>nohup comando &amp;</code></td>
      <td data-label="Descrição">Executa mesmo após sair</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>nice -n 10 comando</code></td>
      <td data-label="Descrição">Executa com baixa prioridade</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>renice -5 1234</code></td>
      <td data-label="Descrição">Altera prioridade de processo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lsof +D /home</code></td>
      <td data-label="Descrição">Arquivos abertos no diretório</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lsof -i :80</code></td>
      <td data-label="Descrição">Processos usando porta 80</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>vmstat 1</code></td>
      <td data-label="Descrição">Estatísticas de CPU, memória, I/O</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>iostat -x 1</code></td>
      <td data-label="Descrição">Uso de disco detalhado</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sar -u 1 5</code></td>
      <td data-label="Descrição">Uso de CPU (requer sysstat)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dmesg | tail</code></td>
      <td data-label="Descrição">Últimas mensagens do kernel</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl -u nginx</code></td>
      <td data-label="Descrição">Logs do serviço nginx</td>
    </tr>
  </tbody>
</table>
<!-- 7. Compactação e Arquivamento -->
<h2 id="compactacao" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff0;">📦 7. Compactação e Arquivamento</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>tar -cvf arq.tar /pasta/</code></td>
      <td data-label="Descrição">Cria arquivo .tar</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -xvf arq.tar</code></td>
      <td data-label="Descrição">Extrai .tar</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -czvf arq.tar.gz /pasta/</code></td>
      <td data-label="Descrição">Cria .tar.gz (gzip)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -xzvf arq.tar.gz</code></td>
      <td data-label="Descrição">Extrai .tar.gz</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -cjvf arq.tar.bz2 /pasta/</code></td>
      <td data-label="Descrição">Cria .tar.bz2 (bzip2)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -xjvf arq.tar.bz2</code></td>
      <td data-label="Descrição">Extrai .tar.bz2</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>gzip arquivo.txt</code></td>
      <td data-label="Descrição">Comprime em .gz</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>gunzip arquivo.txt.gz</code></td>
      <td data-label="Descrição">Descomprime .gz</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zip -r arq.zip pasta/</code></td>
      <td data-label="Descrição">Cria .zip</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>unzip arq.zip</code></td>
      <td data-label="Descrição">Extrai .zip</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>7z a arq.7z pasta/</code></td>
      <td data-label="Descrição">Cria .7z</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>7z x arq.7z</code></td>
      <td data-label="Descrição">Extrai .7z</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -tzf backup.tar.gz</code></td>
      <td data-label="Descrição">Lista conteúdo sem extrair</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar --exclude='*.log' -czf semlogs.tar.gz /pasta/</code></td>
      <td data-label="Descrição">Exclui arquivos ao compactar</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>zip -r -9 arq.zip pasta/</code></td>
      <td data-label="Descrição">Compactação máxima</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>bzip2 arquivo.txt</code></td>
      <td data-label="Descrição">Comprime com bzip2</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>bunzip2 arquivo.txt.bz2</code></td>
      <td data-label="Descrição">Descomprime bzip2</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -I zstd -cvf arq.tar.zst pasta/</code></td>
      <td data-label="Descrição">Usa Zstandard (muito rápido)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>7z l arq.7z</code></td>
      <td data-label="Descrição">Lista arquivos dentro do .7z</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tar -xvf arq.tar --directory=/destino</code></td>
      <td data-label="Descrição">Extrai em diretório específico</td>
    </tr>
  </tbody>
</table>
<!-- 8. Edição de Texto e Filtros -->
<h2 id="texto" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">✂️ 8. Edição de Texto e Filtros</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>grep "erro" log.txt</code></td>
      <td data-label="Descrição">Procura padrão em arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>grep -i "ERRO" log.txt</code></td>
      <td data-label="Descrição">Ignora maiúsculas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>grep -v "ok" log.txt</code></td>
      <td data-label="Descrição">Mostra linhas que NÃO contêm "ok"</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>grep -n "fail" log.txt</code></td>
      <td data-label="Descrição">Mostra número da linha</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sed 's/antigo/novo/g' arquivo.txt</code></td>
      <td data-label="Descrição">Substitui texto (stdout)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sed -i 's/antigo/novo/g' arquivo.txt</code></td>
      <td data-label="Descrição">Substitui e salva no arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>awk '{print $1}' arquivo.txt</code></td>
      <td data-label="Descrição">Imprime primeira coluna</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>awk '/erro/ {print $0}' log.txt</code></td>
      <td data-label="Descrição">Filtra e imprime linhas com "erro"</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>cut -d':' -f1 /etc/passwd</code></td>
      <td data-label="Descrição">Extrai campos por delimitador</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sort lista.txt</code></td>
      <td data-label="Descrição">Ordena alfabeticamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sort -n numeros.txt</code></td>
      <td data-label="Descrição">Ordena numericamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sort -r lista.txt</code></td>
      <td data-label="Descrição">Ordena em ordem reversa</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>uniq duplicados.txt</code></td>
      <td data-label="Descrição">Remove linhas duplicadas consecutivas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>uniq -c duplicados.txt</code></td>
      <td data-label="Descrição">Conta ocorrências</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>wc -l arquivo.txt</code></td>
      <td data-label="Descrição">Conta linhas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>wc -w arquivo.txt</code></td>
      <td data-label="Descrição">Conta palavras</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>wc -c arquivo.txt</code></td>
      <td data-label="Descrição">Conta bytes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>head -n 10 arquivo.txt</code></td>
      <td data-label="Descrição">Mostra 10 primeiras linhas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tail -n 20 arquivo.txt</code></td>
      <td data-label="Descrição">Mostra 10 últimas linhas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tail -f /var/log/syslog</code></td>
      <td data-label="Descrição">Monitora arquivo em tempo real</td>
    </tr>
  </tbody>
</table>
<!-- 9. Tarefas Agendadas -->
<h2 id="cron" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">⏰ 9. Tarefas Agendadas</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>crontab -e</code></td>
      <td data-label="Descrição">Edita tarefas agendadas do usuário</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>crontab -l</code></td>
      <td data-label="Descrição">Lista tarefas agendadas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>crontab -r</code></td>
      <td data-label="Descrição">Remove todas as tarefas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo crontab -e</code></td>
      <td data-label="Descrição">Edita tarefas do root</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>* * * * * /script.sh</code></td>
      <td data-label="Descrição">Executa a cada minuto</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>0 2 * * * /backup.sh</code></td>
      <td data-label="Descrição">Às 2h todos os dias</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>0 3 * * 0 /limpeza.sh</code></td>
      <td data-label="Descrição">Todo domingo às 3h</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>0 0 1 * * /relatorio.sh</code></td>
      <td data-label="Descrição">No 1º dia de cada mês</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>*/10 * * * * /ping.sh</code></td>
      <td data-label="Descrição">A cada 10 minutos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>@reboot /iniciar.sh</code></td>
      <td data-label="Descrição">Executa no boot</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>@daily /rotina.sh</code></td>
      <td data-label="Descrição">Uma vez por dia</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>@hourly /verifica.sh</code></td>
      <td data-label="Descrição">Uma vez por hora</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl list-timers</code></td>
      <td data-label="Descrição">Mostra timers do systemd</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemd-run --on-boot script.sh</code></td>
      <td data-label="Descrição">Agenda execução no próximo boot</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>at now + 5 minutes</code></td>
      <td data-label="Descrição">Agenda uma vez (digite comando depois)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>atq</code></td>
      <td data-label="Descrição">Lista tarefas agendadas com at</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>atrm 3</code></td>
      <td data-label="Descrição">Remove tarefa com ID 3</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>echo "/backup.sh" | at 03:00</code></td>
      <td data-label="Descrição">Agenda script para 3h</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>batch</code></td>
      <td data-label="Descrição">Executa quando carga do sistema está baixa</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl enable mytimer.timer</code></td>
      <td data-label="Descrição">Habilita timer do systemd</td>
    </tr>
  </tbody>
</table>
<!-- 10. Segurança e Firewall -->
<h2 id="seguranca" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🔐 10. Segurança e Firewall</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>sudo ufw enable</code></td>
      <td data-label="Descrição">Ativa firewall UFW (Ubuntu)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo ufw allow 22</code></td>
      <td data-label="Descrição">Permite porta 22 (SSH)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo ufw allow from 192.168.1.0/24</code></td>
      <td data-label="Descrição">Permite rede local</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo ufw deny 80</code></td>
      <td data-label="Descrição">Bloqueia porta 80</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo ufw status</code></td>
      <td data-label="Descrição">Mostra regras ativas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo iptables -L</code></td>
      <td data-label="Descrição">Lista regras do iptables</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT</code></td>
      <td data-label="Descrição">Permite SSH via iptables</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo iptables-save &gt; firewall.rules</code></td>
      <td data-label="Descrição">Salva regras</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo iptables-restore &lt; firewall.rules</code></td>
      <td data-label="Descrição">Restaura regras</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>fail2ban-client status sshd</code></td>
      <td data-label="Descrição">Verifica proteção SSH</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>fail2ban-client status</code></td>
      <td data-label="Descrição">Lista todos os jails ativos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>auditctl -w /etc/passwd -p wa</code></td>
      <td data-label="Descrição">Monitora acesso ao passwd</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>aureport --file</code></td>
      <td data-label="Descrição">Relatório de auditoria</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chkrootkit</code></td>
      <td data-label="Descrição">Verifica rootkits</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lynis audit system</code></td>
      <td data-label="Descrição">Análise de segurança completa</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>gpg -c arquivo.txt</code></td>
      <td data-label="Descrição">Criptografa com senha</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>gpg arquivo.txt.gpg</code></td>
      <td data-label="Descrição">Descriptografa</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>openssl rand -base64 32</code></td>
      <td data-label="Descrição">Gera senha segura</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ssh-keygen -t ed25519</code></td>
      <td data-label="Descrição">Gera chave SSH moderna</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chmod 600 ~/.ssh/id_ed25519</code></td>
      <td data-label="Descrição">Protege chave privada</td>
    </tr>
  </tbody>
</table>
<!-- 11. Docker e Containerização -->
<h2 id="docker" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🐋 11. Docker e Containerização</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>docker run hello-world</code></td>
      <td data-label="Descrição">Testa instalação</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker run -d -p 80:80 nginx</code></td>
      <td data-label="Descrição">Inicia container em background</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker ps</code></td>
      <td data-label="Descrição">Lista containers ativos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker ps -a</code></td>
      <td data-label="Descrição">Lista todos os containers</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker images</code></td>
      <td data-label="Descrição">Lista imagens</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker pull ubuntu:22.04</code></td>
      <td data-label="Descrição">Baixa imagem</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker exec -it container bash</code></td>
      <td data-label="Descrição">Entra no container</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker stop container</code></td>
      <td data-label="Descrição">Para container</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker start container</code></td>
      <td data-label="Descrição">Reinicia container</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker rm container</code></td>
      <td data-label="Descrição">Remove container</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker rmi imagem</code></td>
      <td data-label="Descrição">Remove imagem</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker logs container</code></td>
      <td data-label="Descrição">Mostra logs</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker build -t minha-app .</code></td>
      <td data-label="Descrição">Constrói imagem com Dockerfile</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker volume create dados</code></td>
      <td data-label="Descrição">Cria volume</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker network ls</code></td>
      <td data-label="Descrição">Lista redes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker-compose up -d</code></td>
      <td data-label="Descrição">Inicia serviços com docker-compose</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker system prune</code></td>
      <td data-label="Descrição">Limpa recursos não usados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker inspect container</code></td>
      <td data-label="Descrição">Detalhes do container</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker run --rm alpine echo "teste"</code></td>
      <td data-label="Descrição">Executa e remove automaticamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>docker tag imagem user/repo:v1</code></td>
      <td data-label="Descrição">Renomeia para push</td>
    </tr>
  </tbody>
</table>
<!-- 12. Git e Controle de Versão -->
<h2 id="git" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">💾 12. Git e Controle de Versão</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>git init</code></td>
      <td data-label="Descrição">Inicia repositório</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git clone https://github.com/user/repo.git</code></td>
      <td data-label="Descrição">Clona repositório</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git status</code></td>
      <td data-label="Descrição">Mostra estado dos arquivos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git add .</code></td>
      <td data-label="Descrição">Adiciona todos os arquivos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git add arquivo.txt</code></td>
      <td data-label="Descrição">Adiciona um arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git commit -m "mensagem"</code></td>
      <td data-label="Descrição">Faz commit</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git commit --amend</code></td>
      <td data-label="Descrição">Edita último commit</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git push origin main</code></td>
      <td data-label="Descrição">Envia para remoto</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git pull origin main</code></td>
      <td data-label="Descrição">Puxa atualizações</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git log --oneline</code></td>
      <td data-label="Descrição">Histórico compacto</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git diff</code></td>
      <td data-label="Descrição">Mostra mudanças não adicionadas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git diff --staged</code></td>
      <td data-label="Descrição">Mostra mudanças prontas para commit</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git checkout -b nova-branch</code></td>
      <td data-label="Descrição">Cria e muda para nova branch</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git checkout main</code></td>
      <td data-label="Descrição">Muda para branch main</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git merge nova-branch</code></td>
      <td data-label="Descrição">Faz merge</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git branch -d nova-branch</code></td>
      <td data-label="Descrição">Remove branch local</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git remote -v</code></td>
      <td data-label="Descrição">Mostra repositórios remotos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git reset --hard HEAD~1</code></td>
      <td data-label="Descrição">Desfaz último commit (cuidado!)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git stash</code></td>
      <td data-label="Descrição">Guarda mudanças temporariamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>git stash pop</code></td>
      <td data-label="Descrição">Recupera mudanças guardadas</td>
    </tr>
  </tbody>
</table>
<!-- 13. Sistemas de Inicialização -->
<h2 id="systemd" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">⚡ 13. Sistemas de Inicialização</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl start nginx</code></td>
      <td data-label="Descrição">Inicia serviço</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl stop nginx</code></td>
      <td data-label="Descrição">Para serviço</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl restart nginx</code></td>
      <td data-label="Descrição">Reinicia serviço</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl reload nginx</code></td>
      <td data-label="Descrição">Recarrega configuração</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl enable nginx</code></td>
      <td data-label="Descrição">Habilita no boot</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl disable nginx</code></td>
      <td data-label="Descrição">Desabilita no boot</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl status nginx</code></td>
      <td data-label="Descrição">Mostra status do serviço</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl is-active nginx</code></td>
      <td data-label="Descrição">Verifica se está ativo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl list-units --type=service</code></td>
      <td data-label="Descrição">Lista serviços ativos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl list-unit-files --type=service</code></td>
      <td data-label="Descrição">Lista todos os serviços</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl -u nginx</code></td>
      <td data-label="Descrição">Logs do serviço nginx</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl --since "2 hours ago"</code></td>
      <td data-label="Descrição">Logs das últimas 2h</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl -f</code></td>
      <td data-label="Descrição">Monitora logs em tempo real</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>hostnamectl set-boot-verbose true</code></td>
      <td data-label="Descrição">Habilita boot verboso</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemd-analyze</code></td>
      <td data-label="Descrição">Tempo de inicialização</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemd-analyze blame</code></td>
      <td data-label="Descrição">Mostra serviços que mais demoraram</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl mask service</code></td>
      <td data-label="Descrição">Impede que o serviço seja iniciado</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>systemctl unmask service</code></td>
      <td data-label="Descrição">Desfaz mask</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>init 3</code></td>
      <td data-label="Descrição">Muda para modo multiuser (SysV)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>telinit 6</code></td>
      <td data-label="Descrição">Reinicia (SysV)</td>
    </tr>
  </tbody>
</table>
<!-- 14. Logs e Diagnóstico -->
<h2 id="logs" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">📋 14. Logs e Diagnóstico</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl -xe</code></td>
      <td data-label="Descrição">Logs detalhados com contexto</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl --boot</code></td>
      <td data-label="Descrição">Logs do boot atual</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl --boot=-1</code></td>
      <td data-label="Descrição">Logs do boot anterior</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tail /var/log/syslog</code></td>
      <td data-label="Descrição">Logs do sistema (Debian/Ubuntu)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tail /var/log/messages</code></td>
      <td data-label="Descrição">Logs do sistema (Fedora/RHEL)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dmesg</code></td>
      <td data-label="Descrição">Mensagens do kernel</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lshw</code></td>
      <td data-label="Descrição">Informações detalhadas de hardware</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lscpu</code></td>
      <td data-label="Descrição">Informações da CPU</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lsblk</code></td>
      <td data-label="Descrição">Lista blocos (discos e partições)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lspci</code></td>
      <td data-label="Descrição">Lista dispositivos PCI</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lsusb</code></td>
      <td data-label="Descrição">Lista dispositivos USB</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dmidecode</code></td>
      <td data-label="Descrição">Informações da BIOS, memória, etc</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>smartctl -a /dev/sda</code></td>
      <td data-label="Descrição">Diagnóstico de disco (S.M.A.R.T.)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>badblocks -v /dev/sda</code></td>
      <td data-label="Descrição">Verifica blocos ruins</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>strace -p 1234</code></td>
      <td data-label="Descrição">Rastreia chamadas de sistema</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ltrace programa</code></td>
      <td data-label="Descrição">Rastreia chamadas a bibliotecas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>perf top</code></td>
      <td data-label="Descrição">Perfil de desempenho em tempo real</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tcpdump -i eth0</code></td>
      <td data-label="Descrição">Captura pacotes de rede</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>journalctl -u ssh --since "1 hour ago"</code></td>
      <td data-label="Descrição">Logs do SSH na última hora</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>logrotate -d /etc/logrotate.conf</code></td>
      <td data-label="Descrição">Testa configuração de rotação</td>
    </tr>
  </tbody>
</table>
<!-- 15. Virtualização (QEMU, KVM) -->
<h2 id="virtualizacao" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🖥️ 15. Virtualização (QEMU, KVM)</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>sudo virt-host-validate</code></td>
      <td data-label="Descrição">Verifica suporte a virtualização</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh list --all</code></td>
      <td data-label="Descrição">Lista máquinas virtuais</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh start vm1</code></td>
      <td data-label="Descrição">Inicia VM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh shutdown vm1</code></td>
      <td data-label="Descrição">Desliga VM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh destroy vm1</code></td>
      <td data-label="Descrição">Desliga forçadamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh define vm.xml</code></td>
      <td data-label="Descrição">Define VM a partir de XML</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virt-install --name=vm2 --ram=2048 --vcpus=2 --disk size=20 --cdrom=ubuntu.iso</code></td>
      <td data-label="Descrição">Cria nova VM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>qemu-img create -f qcow2 disco.qcow2 10G</code></td>
      <td data-label="Descrição">Cria disco virtual</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>qemu-system-x86_64 -hda disco.qcow2 -m 1024 -boot d</code></td>
      <td data-label="Descrição">Inicia QEMU manualmente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virt-manager</code></td>
      <td data-label="Descrição">Interface gráfica para KVM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>brctl show</code></td>
      <td data-label="Descrição">Mostra bridges de rede</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ip link add br0 type bridge</code></td>
      <td data-label="Descrição">Cria bridge de rede</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh edit vm1</code></td>
      <td data-label="Descrição">Edita configuração da VM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh snapshot-create vm1</code></td>
      <td data-label="Descrição">Cria snapshot</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virsh snapshot-list vm1</code></td>
      <td data-label="Descrição">Lista snapshots</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virt-clone --original=vm1 --name=vm2 --file=/var/lib/libvirt/images/vm2.qcow2</code></td>
      <td data-label="Descrição">Clona VM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>guestfish --rw -i -d vm1</code></td>
      <td data-label="Descrição">Edita disco da VM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virt-df vm1</code></td>
      <td data-label="Descrição">Mostra uso de disco da VM</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>virt-top</code></td>
      <td data-label="Descrição">Monitoramento de VMs (como top)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sudo modprobe kvm-intel</code></td>
      <td data-label="Descrição">Carrega módulo KVM (Intel)</td>
    </tr>
  </tbody>
</table>
<!-- 16. Scripts Bash -->
<h2 id="bash" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">📜 16. Scripts Bash</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>#!/bin/bash</code></td>
      <td data-label="Descrição">Shebang padrão</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>echo "Olá, $USER"</code></td>
      <td data-label="Descrição">Imprime variável</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>read nome</code></td>
      <td data-label="Descrição">Lê entrada do usuário</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>if [ "$valor" = "ok" ]; then</code></td>
      <td data-label="Descrição">Estrutura if</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>for i in {1..5}; do</code></td>
      <td data-label="Descrição">Loop for</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>while [ $x -lt 10 ]; do</code></td>
      <td data-label="Descrição">Loop while</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>case $op in</code></td>
      <td data-label="Descrição">Estrutura case</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>function nome() { }</code></td>
      <td data-label="Descrição">Define função</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>source script.sh</code></td>
      <td data-label="Descrição">Carrega script no shell atual</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>set -e</code></td>
      <td data-label="Descrição">Interrompe script em erro</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>set -x</code></td>
      <td data-label="Descrição">Exibe comandos antes de executar</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>trap 'echo "Saindo..."' EXIT</code></td>
      <td data-label="Descrição">Executa ao sair</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>$0, $1, $2</code></td>
      <td data-label="Descrição">Nome do script e argumentos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>$?</code></td>
      <td data-label="Descrição">Código de saída do último comando</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>$$</code></td>
      <td data-label="Descrição">PID do script</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>$(comando)</code></td>
      <td data-label="Descrição">Substituição de comando</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>[[ -f arquivo.txt ]]</code></td>
      <td data-label="Descrição">Testa se arquivo existe</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chmod +x script.sh</code></td>
      <td data-label="Descrição">Torna script executável</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>./script.sh arg1 arg2</code></td>
      <td data-label="Descrição">Executa script com argumentos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>getopts</code></td>
      <td data-label="Descrição">Processa opções de linha de comando</td>
    </tr>
  </tbody>
</table>
<!-- 17. Recuperação e Manutenção -->
<h2 id="recuperacao" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🔧 17. Recuperação e Manutenção</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>fsck /dev/sda1</code></td>
      <td data-label="Descrição">Verifica sistema de arquivos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>e2fsck -f /dev/sda2</code></td>
      <td data-label="Descrição">Força verificação em ext4</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>mount /dev/sda1 /mnt</code></td>
      <td data-label="Descrição">Monta partição</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>umount /mnt</code></td>
      <td data-label="Descrição">Desmonta</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dd if=/dev/sda of=backup.img</code></td>
      <td data-label="Descrição">Copia disco inteiro</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>dd if=backup.img of=/dev/sdb</code></td>
      <td data-label="Descrição">Restaura imagem</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>testdisk</code></td>
      <td data-label="Descrição">Recupera partições perdidas</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>photorec</code></td>
      <td data-label="Descrição">Recupera arquivos apagados</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>grub-install /dev/sda</code></td>
      <td data-label="Descrição">Reinstala GRUB</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>update-grub</code></td>
      <td data-label="Descrição">Atualiza configuração do GRUB</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>chroot /mnt</code></td>
      <td data-label="Descrição">Muda raiz para recuperação</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>blkid</code></td>
      <td data-label="Descrição">Mostra UUIDs de partições</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>parted /dev/sda print</code></td>
      <td data-label="Descrição">Informações da tabela de partições</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>badblocks -v /dev/sda</code></td>
      <td data-label="Descrição">Verifica setores defeituosos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>sync</code></td>
      <td data-label="Descrição">Força escrita no disco</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>hdparm -I /dev/sda</code></td>
      <td data-label="Descrição">Informações do disco</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>lsof +L1</code></td>
      <td data-label="Descrição">Encontra arquivos excluídos mas ainda abertos</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>du -sh /tmp/* | sort -hr</code></td>
      <td data-label="Descrição">Top arquivos grandes em /tmp</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>wipe /dev/sda</code></td>
      <td data-label="Descrição">Apaga disco com segurança</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>logrotate --force /etc/logrotate.d/app</code></td>
      <td data-label="Descrição">Força rotação de logs</td>
    </tr>
  </tbody>
</table>
<!-- 18. Comandos Avançados e Dicas -->
<h2 id="avancados" style="border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 50px; color: #fffeff;">🚀 18. Comandos Avançados e Dicas</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Comando</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Comando"><code>!!</code></td>
      <td data-label="Descrição">Repete último comando</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>!$</code></td>
      <td data-label="Descrição">Último argumento do comando anterior</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>^antigo^novo^</code></td>
      <td data-label="Descrição">Corrige e repete comando</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>ctrl+r</code></td>
      <td data-label="Descrição">Busca no histórico (reverse-i-search)</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>alias ll='ls -la'</code></td>
      <td data-label="Descrição">Cria atalho</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>\command</code></td>
      <td data-label="Descrição">Ignora alias e executa comando original</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>watch -n 1 'df -h'</code></td>
      <td data-label="Descrição">Executa comando a cada 1s</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>timeout 5 comando</code></td>
      <td data-label="Descrição">Limita tempo de execução</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>nohup comando &amp;</code></td>
      <td data-label="Descrição">Executa mesmo após sair do terminal</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>tee arquivo.txt</code></td>
      <td data-label="Descrição">Mostra saída e salva em arquivo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>curl -s http://ipinfo.io/json | jq .ip</code></td>
      <td data-label="Descrição">Obtém IP público com formatação</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>parallel -j 4 ::: comando1 comando2 comando3</code></td>
      <td data-label="Descrição">Executa comandos em paralelo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>stdbuf -oL comando | grep --line-buffered "erro"</code></td>
      <td data-label="Descrição">Evita buffering em pipes</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>shopt -s autocd</code></td>
      <td data-label="Descrição">Permite ir para pasta digitando só o nome</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>bind -x '"\C-p": pwd'</code></td>
      <td data-label="Descrição">Atalho: Ctrl+P mostra caminho</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>cal -3</code></td>
      <td data-label="Descrição">Mostra mês atual + anterior e próximo</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>yes "y" | apt upgrade</code></td>
      <td data-label="Descrição">Responde "y" automaticamente</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>scp -r pasta/ user@host:/backup/</code></td>
      <td data-label="Descrição">Copia diretório via SSH</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>rsync -avz --progress pasta/ destino/</code></td>
      <td data-label="Descrição">Sincroniza com barra de progresso</td>
    </tr>
    <tr>
      <td data-label="
    
      Comando"><code>man hier</code></td>
      <td data-label="Descrição">Explica estrutura de diretórios do Linux</td>
    </tr>
  </tbody>
</table>
</div>
</section>
