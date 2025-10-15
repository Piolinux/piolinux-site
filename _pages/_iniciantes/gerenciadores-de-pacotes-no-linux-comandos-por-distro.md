---
layout: manual-seo
title: "Gerenciadores de Pacotes no Linux – Comandos por Distro"
description: "Tabela técnica com APT, DNF, Pacman e Zypper: comandos de instalação, remoção e atualização por distribuição — sem fluff, só referência."
permalink: /gerenciadores-pacotes-linux/
tags: [pacotes, linux, apt, dnf, pacman, zypper, instalacao]
---

{% include toc.html %}




<section>
    <table class="evergreen-table">
   
    
  <thead>
    <tr>
      <th>Gerenciadores.</th>
      <th>Distribuições</th>
      <th>Comando: Atualizações.</th>
      <th>Comando: Instalações.</th>
      <th>Comando: Remoção.</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Gerenciador">APT</td>
      <td data-label="Distribuições">Debian, Ubuntu, Mint, Pop!_OS.</td>
      <td data-label="Comando: Atualizar">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
      <td data-label="Comando: Instalar">
        <code>sudo apt install firefox</code>
        <button class="copy-btn" data-command="sudo apt install firefox">📋 Copiar</button>
      </td>
      <td data-label="Comando: Remover">
        <code>sudo apt remove firefox</code>
        <button class="copy-btn" data-command="sudo apt remove firefox">📋 Copiar</button>
      </td>
      <td data-label="Observações">Usa pacotes <code>.deb</code>. Estável, mas versões mais antigas.</td>
    </tr>
    <tr>
      <td data-label="Gerenciador">DNF</td>
      <td data-label="Distribuições">Fedora, RHEL, CentOS Stream</td>
      <td data-label="Comando: Atualizar">
        <code>sudo dnf upgrade --refresh</code>
        <button class="copy-btn" data-command="sudo dnf upgrade --refresh">📋 Copiar</button>
      </td>
      <td data-label="Comando: Instalar">
        <code>sudo dnf install firefox</code>
        <button class="copy-btn" data-command="sudo dnf install firefox">📋 Copiar</button>
      </td>
      <td data-label="Comando: Remover">
        <code>sudo dnf remove firefox</code>
        <button class="copy-btn" data-command="sudo dnf remove firefox">📋 Copiar</button>
      </td>
      <td data-label="Observações">Sucessor do YUM. Resolve dependências com precisão.</td>
    </tr>
    <tr>
      <td data-label="Gerenciador">Pacman</td>
      <td data-label="Distribuições">Arch Linux, Manjaro, EndeavourOS.</td>
      <td data-label="Comando: Atualizar">
        <code>sudo pacman -Syu</code>
        <button class="copy-btn" data-command="sudo pacman -Syu">📋 Copiar</button>
      </td>
      <td data-label="Comando: Instalar">
        <code>sudo pacman -S firefox</code>
        <button class="copy-btn" data-command="sudo pacman -S firefox">📋 Copiar</button>
      </td>
      <td data-label="Comando: Remover">
        <code>sudo pacman -R firefox</code>
        <button class="copy-btn" data-command="sudo pacman -R firefox">📋 Copiar</button>
      </td>
      <td data-label="Observações">Sistema rolling release. Atualizações frequentes, mas exigem atenção.</td>
    </tr>
    <tr>
      <td data-label="Gerenciador">Zypper</td>
      <td data-label="Distribuições">openSUSE Tumbleweed / Leap.</td>
      <td data-label="Comando: Atualizar">
        <code>sudo zypper update</code>
        <button class="copy-btn" data-command="sudo zypper update">📋 Copiar</button>
      </td>
      <td data-label="Comando: Instalar">
        <code>sudo zypper install firefox</code>
        <button class="copy-btn" data-command="sudo zypper install firefox">📋 Copiar</button>
      </td>
      <td data-label="Comando: Remover">
        <code>sudo zypper remove firefox</code>
        <button class="copy-btn" data-command="sudo zypper remove firefox">📋 Copiar</button>
      </td>
      <td data-label="Observações">Estável (Leap) ou rolling (Tumbleweed). Excelente para servidores.</td>
    </tr>
  </tbody>
</table>

<h3 id="regras">Regras Técnicas (não são "dicas")</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Regras.</th>
      <th>Explicações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Regra">Não misture gerenciadores.</td>
      <td data-label="Explicação">Nunca instale <code>.deb</code> no Arch ou use <code>pacman</code> no Ubuntu. Quebra dependências.</td>
    </tr>
    <tr>
      <td data-label="Regra">Prefira repositórios oficiais.</td>
      <td data-label="Explicação">Evite pacotes de terceiros não verificados. Use AUR (Arch) ou Flatpak como exceção controlada.</td>
    </tr>
    <tr>
      <td data-label="Regra">Atualize antes de instalar.</td>
      <td data-label="Explicação">Sempre rode o comando de atualização antes de instalar novos pacotes.</td>
    </tr>
  </tbody>
</table>
 </section>


