---
layout: default
title: "Linux para Iniciantes: Comandos e Configurações Reais"
description: "Tabelas práticas com comandos, distros, segurança, instalação de programas e estrutura de arquivos — sem textos genéricos, só o essencial."
permalink: /linux-para-iniciantes/
categories: [linux, terminal, iniciante]
tags: [comandos, linux, terminal, bash, tutorial, iniciante]
---


<section>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Distribuição</th>
      <th>Base</th>
      <th>Ponto Forte</th>
      <th>Comando de Atualização</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Distribuição">Ubuntu</td>
      <td data-label="Base">Debian</td>
      <td data-label="Ponto Forte">Suporte amplo, drivers prontos.</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Linux Mint</td>
      <td data-label="Base">Ubuntu</td>
      <td data-label="Ponto Forte">Interface familiar (Cinnamon), estável.</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Zorin OS</td>
      <td data-label="Base">Ubuntu</td>
      <td data-label="Ponto Forte">Layout similar ao Windows.</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Debian Stable</td>
      <td data-label="Base">Própria</td>
      <td data-label="Ponto Forte">Estabilidade extrema, sem systemd (opcional).</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt full-upgrade</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comando</th>
      <th>Exemplo</th>
      <th>Função</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>ls -lh</code></td>
      <td data-label="Exemplo"><code>ls -lh ~/Documentos</code></td>
      <td data-label="Função">Lista arquivos com permissões e tamanhos legíveis.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd</code></td>
      <td data-label="Exemplo"><code>cd /etc</code></td>
      <td data-label="Função">Altera para o diretório /etc</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pwd</code></td>
      <td data-label="Exemplo"><code>pwd</code></td>
      <td data-label="Função">Mostra caminho do diretório atual.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>man</code></td>
      <td data-label="Exemplo"><code>man grep</code></td>
      <td data-label="Função">Mostra manual do comando.(pressione <kbd>q</kbd> para sair)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>clear</code></td>
      <td data-label="Exemplo"><code>clear</code></td>
      <td data-label="Função">Limpa o terminal. (<kbd>Ctrl</kbd>+<kbd>L</kbd> faz o mesmo)</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Formato</th>
      <th>Comando (Ubuntu/Debian)</th>
      <th>Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Formato">APT (repositório oficial)</td>
      <td data-label="Comando">
        <code>sudo apt install vlc</code>
        <button class="copy-btn" data-command="sudo apt install vlc">📋 Copiar</button>
      </td>
      <td data-label="Observação">Mais seguro e integrado.</td>
    </tr>
    <tr>
      <td data-label="Formato">Flatpak</td>
      <td data-label="Comando">
        <code>flatpak install flathub org.gimp.GIMP</code>
        <button class="copy-btn" data-command="flatpak install flathub org.gimp.GIMP">📋 Copiar</button>
      </td>
      <td data-label="Observação">Isolado, atualizações independentes.</td>
    </tr>
    <tr>
      <td data-label="Formato">AppImage</td>
      <td data-label="Comando">
        <code>chmod +x app.AppImage && ./app.AppImage</code>
        <button class="copy-btn" data-command="chmod +x app.AppImage && ./app.AppImage">📋 Copiar</button>
      </td>
      <td data-label="Observação">Portátil, não instala no sistema.</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Diretório</th>
      <th>Conteúdo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Diretório"><code>/home</code></td>
      <td data-label="Conteúdo">Arquivos pessoais dos usuários.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/etc</code></td>
      <td data-label="Conteúdo">Arquivos de configuração do sistema.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/bin</code> e <code>/usr/bin</code></td>
      <td data-label="Conteúdo">Comandos essenciais e programas.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/var/log</code></td>
      <td data-label="Conteúdo">Logs do sistema.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/tmp</code></td>
      <td data-label="Conteúdo">Arquivos temporários. (apagados no reboot)</td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Prática</th>
      <th>Comando / Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Prática">Manter sistema atualizado.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt update && sudo apt upgrade -y</code>
      </td>
    </tr>
    <tr>
      <td data-label="Prática">Habilitar firewall.</td>
      <td data-label="Comando / Ação">
        <code>sudo ufw enable</code>
        <button class="copy-btn" data-command="sudo ufw enable">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Prática">Evitar <code>sudo</code> desnecessário</td>
      <td data-label="Comando / Ação">Só use quando realmente necessário.</td>
    </tr>
    <tr>
      <td data-label="Prática">Não instalar pacotes de fontes não confiáveis</td>
      <td data-label="Comando / Ação">Prefira repositórios oficiais ou Flatpak.</td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Proprietário</th>
      <th>Alternativa Livre</th>
      <th>Instalação (Ubuntu)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Proprietário">Microsoft Office</td>
      <td data-label="Alternativa Livre">LibreOffice</td>
      <td data-label="Instalação">
        <code>sudo apt install libreoffice</code>
        <button class="copy-btn" data-command="sudo apt install libreoffice">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Proprietário">Adobe Photoshop</td>
      <td data-label="Alternativa Livre">GIMP</td>
      <td data-label="Instalação">
        <code>sudo apt install gimp</code>
        <button class="copy-btn" data-command="sudo apt install gimp">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Proprietário">CorelDRAW</td>
      <td data-label="Alternativa Livre">Inkscape</td>
      <td data-label="Instalação">
        <code>sudo apt install inkscape</code>
        <button class="copy-btn" data-command="sudo apt install inkscape">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Proprietário">Windows Media Player</td>
      <td data-label="Alternativa Livre">VLC</td>
      <td data-label="Instalação">
        <code>sudo apt install vlc</code>
        <button class="copy-btn" data-command="sudo apt install vlc">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Plataforma</th>
      <th>Link</th>
      <th>Foco</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Plataforma">Ask Ubuntu.</td>
      <td data-label="Link"><a href="https://askubuntu.com/" target="_blank">askubuntu.com</a></td>
      <td data-label="Foco">Ubuntu e derivados.</td>
    </tr>
    <tr>
      <td data-label="Plataforma">Reddit r/linux4noobs.</td>
      <td data-label="Link"><a href="https://www.reddit.com/r/linux4noobs/" target="_blank">reddit.com/r/linux4noobs</a></td>
      <td data-label="Foco">Iniciantes, perguntas reais.</td>
    </tr>
    <tr>
      <td data-label="Plataforma">Documentação oficial.</td>
      <td data-label="Link">ex: <a href="https://linuxmint.com/documentation.php" target="_blank">linuxmint.com/docs</a></td>
      <td data-label="Foco">Guia autoritativo da distro.</td>
    </tr>
  </tbody>
</table>


</section>


