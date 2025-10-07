---
layout: default
title: "Aplicativos Gráficos Seguros para Compactação e Extração no Linux"
description: "PeaZip, File Roller, Ark, Xarchiver — interfaces seguras para compactar e extrair arquivos sem risco de comandos manuais perigosos."
author: "Piolinux"
categories: [linux, resgate, utilitários, terminal, segurança]
tags: [peazip, file-roller, ark, xarchiver, compactação, extração, linux, resgate]
permalink: /aplicativos-graficos-compactacao-linux/
---




<section>





<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Aplicativos.</th>
        <th>Métodos de Instalação.</th>
        <th>Compatível com.</th>
        <th>Ação.</th>
      </tr>
    </thead>
    <tbody>
<tr>
  <td data-label="Aplicativo">PeaZip (Qt6)</td>
  <td data-label="Método">AppImage / .deb</td>
  <td data-label="Requisitos">Qt6: libqt6core6, libqt6gui6, libqt6widgets6</td>
  <td data-label="Link"><a href="https://peazip.github.io/">peazip.github.io</a></td>
</tr>

      
      <tr>
        <td data-label="Aplicativo">PeaZip (recomendado)</td>
        <td data-label="Método de Instalação">Pacote .deb oficial.</td>
        <td data-label="Compatível com">Ubuntu, Debian, Linux Mint, Kali.</td>
        <td data-label="Ação">
          <button class="copy-btn" data-command="wget https://github.com/peazip/PeaZip/releases/download/10.6.1/peazip_10.6.1.LINUX.Qt6-1_amd64.deb && sudo dpkg -i peazip_10.6.1.LINUX.Qt6-1_amd64.deb && sudo apt install -f">📋</button>
        </td>
      </tr>
      <tr>
        <td data-label="Aplicativo">PeaZip.</td>
        <td data-label="Método de Instalação">Pacote .rpm oficial.</td>
        <td data-label="Compatível com">Fedora, CentOS, RHEL, openSUSE.</td>
        <td data-label="Ação">
          <button class="copy-btn" data-command="wget https://github.com/peazip/PeaZip/releases/download/10.6.1/peazip-10.6.1.LINUX.Qt6-64bit.rpm && sudo dnf install ./peazip-10.6.1.LINUX.Qt6-64bit.rpm">📋</button>
        </td>
      </tr>
      <tr>
        <td data-label="Aplicativo">PeaZip.</td>
        <td data-label="Método de Instalação">Flatpak (universal)</td>
        <td data-label="Compatível com">Qualquer distro com Flatpak.</td>
        <td data-label="Ação">
          <button class="copy-btn" data-command="flatpak install flathub io.github.peazip.PeaZip">📋</button>
        </td>
      </tr>
      <tr>
        <td data-label="Aplicativo">File Roller</td>
        <td data-label="Método de Instalação">Pré-instalado</td>
        <td data-label="Compatível com">Ubuntu, GNOME</td>
        <td data-label="Ação">Já disponível</td>
      </tr>
      <tr>
        <td data-label="Aplicativo">Ark</td>
        <td data-label="Método de Instalação">Pré-instalado</td>
        <td data-label="Compatível com">KDE Plasma</td>
        <td data-label="Ação">Já disponível</td>
      </tr>
    </tbody>
  </table>
</div>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Distribuição.</th>
      <th>Pacotes Necessários.</th>
      <th>Comando de Instalação das Dependências.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Distribuição">Debian, Ubuntu, Linux Mint, Kali.</td>
      <td data-label="Pacotes Necessários">
        <code>libqt6core6 libqt6gui6 libqt6widgets6 libqt6printsupport6</code>
      </td>
      <td data-label="Comando de Instalação das Dependências">
        <code>sudo apt install libqt6core6 libqt6gui6 libqt6widgets6 libqt6printsupport6</code>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Fedora, RHEL 9+, CentOS Stream.</td>
      <td data-label="Pacotes Necessários">
        <code>qt6-qtbase-core qt6-qtbase-gui qt6-qtbase-widgets qt6-qtbase-printsupport</code>
      </td>
      <td data-label="Comando de Instalação das Dependências">
        <code>sudo dnf install qt6-qtbase-core qt6-qtbase-gui qt6-qtbase-widgets qt6-qtbase-printsupport</code>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">openSUSE Tumbleweed / Leap.</td>
      <td data-label="Pacotes Necessários">
        <code>libQt6Core6 libQt6Gui6 libQt6Widgets6 libQt6PrintSupport6</code>
      </td>
      <td data-label="Comando de Instalação das Dependências">
        <code>sudo zypper install libQt6Core6 libQt6Gui6 libQt6Widgets6 libQt6PrintSupport6</code>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Qualquer distro (via Flatpak)</td>
      <td data-label="Pacotes Necessários">
        Runtime Freedesktop + extensão Qt6 (todas as dependências incluídas)
      </td>
      <td data-label="Comando de Instalação das Dependências">
        <code>flatpak install flathub io.github.peazip.PeaZip</code><br>
        <code>flatpak run io.github.peazip.PeaZip</code>
      </td>
    </tr>
  </tbody>
</table>



</section>




