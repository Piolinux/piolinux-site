---
layout: manual-seo
title: "Aplicativos Gráficos Seguros para Compactação e Extração no Linux"
description: "PeaZip, File Roller, Ark, Xarchiver — interfaces seguras para compactar e extrair arquivos sem risco de comandos manuais perigosos."
tags: [peazip, file-roller, ark, xarchiver, compactação, extração, linux, resgate]
permalink: /aplicativos-graficos-compactacao-linux/
---


<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Aplicativos.</th>
      <th>Método de Instalação.</th>
      <th>Compativel/Descrição</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Aplicativo">PeaZip (recomendado)</td>
      <td data-label="Método">Pacote <code>.deb</code> oficial</td>
      <td data-label="Descrição">Debian, Ubuntu, Linux Mint, Devuan.</td>
      <td data-label="Ação">
        <a href="https://peazip.github.io/peazip-linux.html" target="_blank" rel="noopener">Baixar .deb</a>
      </td>
    </tr>
   <tr>
      <td data-label="Aplicativo">PeaZip.</td>
      <td data-label="Método">Flatpak</td>
      <td data-label="Descrição"><a href="https://flathub.org/en/setup/Debian" target="_blank" rel="noopener noreferrer">Flatpak setup Debian.</a></td>
      <td data-label="Ação"><a href="https://flathub.org/en/apps/io.github.peazip.PeaZip" target="_blank" rel="noopener noreferrer">Instalação.</a></td>
    </tr>
    
   <tr>
     <td data-label="Aplicativo">Engrampa.</td>
      <td data-label="Método"><code>apt install engrampa</code></td>
      <td data-label="Descrição">Gerenciador de arquivos compactados do ambiente MATE. Suporta ZIP, TAR, GZ, BZ2, XZ, 7z.</td>
      <td data-label="Ação">
      <button class="copy-btn" data-command="apt install engrampa">📋 Copiar</button>
      </td>
    </tr>


<tr>
     <td data-label="Aplicativo">Zipper.app.</td>
      <td data-label="Método"><code>apt install engrampa</code></td>
      <td data-label="Descrição">Aplicativo gráfico leve (gtk) para criar/expandir arquivos ZIP. Comum em distros minimalistas (ex: antiX com XFCE).</td>
      <td data-label="Ação">
      <button class="copy-btn" data-command="apt install zipper.app">📋 Copiar</button>
      </td>
    </tr>


<tr>
  <td data-label="Aplicativo">LXQt Archiver</td>
  <td data-label="Método"><code>apt install lxqt-archiver lxqt-archiver-l10n</code></td>
  <td data-label="Descrição">Gerenciador de arquivos compactados do ambiente LXQt. Suporta ZIP, TAR, GZ, BZ2, XZ, 7z.</td>
  <td data-label="Ação">
    <button class="copy-btn" data-command="apt install lxqt-archiver lxqt-archiver-l10n">📋 Copiar</button>
  </td>
</tr>

<tr>
  <td data-label="Aplicativo">File Roller</td>
  <td data-label="Método"><code>apt install file-roller</code></td>
  <td data-label="Descrição">Gerenciador de arquivos compactados do ambiente GNOME. Suporte nativo a formatos comuns.</td>
  <td data-label="Ação">
    <button class="copy-btn" data-command="apt install file-roller">📋 Copiar</button>
  </td>
</tr>

<tr>
  <td data-label="Aplicativo">Ark</td>
  <td data-label="Método"><code>apt install ark</code></td>
  <td data-label="Descrição">Gerenciador de arquivos compactados do ambiente KDE (Plasma). Integrado ao Dolphin.</td>
  <td data-label="Ação">
    <button class="copy-btn" data-command="apt install ark">📋 Copiar</button>
  </td>
</tr>
   
    
  </tbody>
</table>

<h3>Dependências para instalação manual (Debian/Devuan)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Distribuição.</th>
      <th>Pacotes Necessários.</th>
      <th>Comando.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Distribuição">Debian, Ubuntu, Linux Mint, Devuan.</td>
      <td data-label="Pacotes">
        <code>libqt6core6 libqt6gui6 libqt6widgets6 libqt6printsupport6</code>
      </td>
      <td data-label="Comando">
        <button class="copy-btn" data-command="sudo apt install libqt6core6 libqt6gui6 libqt6widgets6 libqt6printsupport6">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3>Interface e Temas</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Interface.</th>
      <th>Método.</th>
      <th>Dependências.</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Interface">Qt6 (padrão)</td>
      <td data-label="Método"><code>.deb</code> / AppImage</td>
      <td data-label="Dependências">
        <code>libqt6core6 libqt6gui6 libqt6widgets6 libqt6printsupport6</code>
      </td>
      <td data-label="Observações">Versão oficial. Requer Qt6 completo.</td>
    </tr>
    <tr>
      <td data-label="Interface">GTK2 (tema alternativo)</td>
      <td data-label="Método">Qt6 + variável de ambiente</td>
      <td data-label="Dependências">
        <code>libgtk-3-0</code> ou <code>libgtk2.0-0</code> + Qt6
      </td>
      <td data-label="Observações">
        Execute com:<br>
        <code>QT_QPA_PLATFORMTHEME=gtk2 ./peazip</code><br>
        A interface usa Qt6, mas o tema é GTK2.
      </td>
    </tr>
    <tr>
      <td data-label="Interface">GTK (Flatpak)</td>
      <td data-label="Método">Flatpak</td>
      <td data-label="Dependências">Nenhuma (runtime incluso)</td>
      <td data-label="Observações">
        Usa runtime Freedesktop (GTK). Sem Qt6 visível.<br>
        <code>flatpak install flathub io.github.peazip.PeaZip</code>
      </td>
    </tr>
  </tbody>
</table>

</section>







