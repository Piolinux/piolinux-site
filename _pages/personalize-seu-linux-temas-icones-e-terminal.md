---
layout: default
title: "Personalize Seu Linux: Temas, Ícones e Terminal (Guia 2025)"
description: "Aprenda a personalizar seu Linux com temas, ícones, extensões e atalhos. Deixe seu sistema com a sua cara — como um terminal com Oh My Zsh."
date: 2025-09-26
author: "PioLinux"
categories: [linux, personalizacao, iniciante]
tags: [personalizacao, linux, temas, icones, atalhos, ohmyzsh, iterm2]
permalink: /personalizar-linux-iniciantes/
---


{% include toc.html %}



<section class="post-content">

<p>Personalização técnica de ambientes gráficos: temas, ícones, extensões e configurações — sem efeitos visuais desnecessários.</p>

  <h3 id="temas-icone">Temas e Ícones</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ação</th>
      <th>Comando / Caminho</th>
      <th>Fontes Confiáveis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Instalar GNOME Tweaks</td>
      <td data-label="Comando / Caminho">
        <code>sudo apt install gnome-tweaks</code>
        <button class="copy-btn" data-command="sudo apt install gnome-tweaks">📋 Copiar</button>
      </td>
      <td data-label="Fontes Confiáveis">—</td>
    </tr>
    <tr>
      <td data-label="Ação">Aplicar tema de usuário</td>
      <td data-label="Comando / Caminho">
        <code>~/.themes/</code> (temas)<br>
        <code>~/.icons/</code> (ícones)
      </td>
      <td data-label="Fontes Confiáveis">
        <a href="https://www.gnome-look.org/" target="_blank">gnome-look.org</a><br>
        <a href="https://pling.com/" target="_blank">pling.com</a>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Habilitar temas personalizados</td>
      <td data-label="Comando / Caminho">
        Instale a extensão <strong>User Themes</strong> via <code>extensions.gnome.org</code>
      </td>
      <td data-label="Fontes Confiáveis">
        <a href="https://extensions.gnome.org/extension/19/user-themes/" target="_blank">User Themes</a>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="extensoes">Extensões Úteis do GNOME Shell</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Extensão</th>
      <th>Função</th>
      <th>Instalação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Extensão">Dash to Dock</td>
      <td data-label="Função">Dock personalizável (posição, transparência, comportamento)</td>
      <td data-label="Instalação">
        <a href="https://extensions.gnome.org/extension/307/dash-to-dock/" target="_blank">extensions.gnome.org</a>
      </td>
    </tr>
    <tr>
      <td data-label="Extensão">User Themes</td>
      <td data-label="Função">Permite aplicar temas baixados</td>
      <td data-label="Instalação">
        <a href="https://extensions.gnome.org/extension/19/user-themes/" target="_blank">extensions.gnome.org</a>
      </td>
    </tr>
    <tr>
      <td data-label="Extensão">Vitals</td>
      <td data-label="Função">Mostra CPU, RAM, disco e rede na barra superior</td>
      <td data-label="Instalação">
        <a href="https://extensions.gnome.org/extension/1460/vitals/" target="_blank">extensions.gnome.org</a>
      </td>
    </tr>
    <tr>
      <td data-label="Extensão">Blur My Shell</td>
      <td data-label="Função">Adiciona efeito de desfoque (use com moderação)</td>
      <td data-label="Instalação">
        <a href="https://extensions.gnome.org/extension/3193/blur-my-shell/" target="_blank">extensions.gnome.org</a>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="atalhos">Atalhos de Teclado Essenciais</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Atalho</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Atalho"><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd></td>
      <td data-label="Ação">Abrir terminal</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Print</kbd></td>
      <td data-label="Ação">Capturar tela inteira</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Alt</kbd> + <kbd>Tab</kbd></td>
      <td data-label="Ação">Alternar entre janelas</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Super</kbd> + <kbd>D</kbd></td>
      <td data-label="Ação">Mostrar área de trabalho</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Super</kbd> + <kbd>A</kbd></td>
      <td data-label="Ação">Abrir visão de aplicativos</td>
    </tr>
  </tbody>
</table>

<h3 id="papeis-parede">Papéis de Parede</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Site</th>
      <th>Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Site"><a href="https://unsplash.com/" target="_blank">unsplash.com</a></td>
      <td data-label="Tipo">Fotos de alta resolução, livres para uso</td>
    </tr>
    <tr>
      <td data-label="Site"><a href="https://wallhaven.cc/" target="_blank">wallhaven.cc</a></td>
      <td data-label="Tipo">Wallpapers técnicos, artísticos e minimalistas</td>
    </tr>
  </tbody>
</table>

<h3 id="cursores">Temas de Cursor</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tema</th>
      <th>Instalação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tema">Bibata</td>
      <td data-label="Instalação">
        <code>sudo apt install bibata-cursor-theme</code>
        <button class="copy-btn" data-command="sudo apt install bibata-cursor-theme">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tema">Capitaine Cursors</td>
      <td data-label="Instalação">
        Baixar em <a href="https://github.com/keeferrourke/capitaine-cursors" target="_blank">GitHub</a> e colocar em <code>~/.icons/</code>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="backup-config">Backup de Configurações</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramenta</th>
      <th>Comando</th>
      <th>Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta">dconf</td>
      <td data-label="Comando">
        <code>dconf dump / > ~/.config/gnome-backup.dconf</code>
        <button class="copy-btn" data-command="dconf dump / > ~/.config/gnome-backup.dconf">📋 Copiar</button>
      </td>
      <td data-label="Observação">Backup das configurações do GNOME</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Restaurar</td>
      <td data-label="Comando">
        <code>dconf load / < ~/.config/gnome-backup.dconf</code>
        <button class="copy-btn" data-command="dconf load / < ~/.config/gnome-backup.dconf">📋 Copiar</button>
      </td>
      <td data-label="Observação">Restaura configurações após falha</td>
    </tr>
  </tbody>
</table>

<h3 id="aviso-seguranca">Avisos Técnicos (Não são "dicas")</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Risco</th>
      <th>Solução</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Risco">Remover meta-pacotes gráficos (ex: <code>xfce4</code>)</td>
      <td data-label="Solução">
        Sempre anote os pacotes removidos:<br>
        <code>apt remove xfce4 2>&1 | tee remocao.log</code>
      </td>
    </tr>
    <tr>
      <td data-label="Risco">Extensões que quebram o GNOME Shell</td>
      <td data-label="Solução">
        Reinicie o shell com <kbd>Alt</kbd> + <kbd>F2</kbd>, digite <code>r</code> e pressione <kbd>Enter</kbd>
      </td>
    </tr>
    <tr>
      <td data-label="Risco">Temas incompatíveis com versão do GNOME</td>
      <td data-label="Solução">
        Volte ao tema padrão via GNOME Tweaks ou remova a pasta em <code>~/.themes/</code>
      </td>
    </tr>
  </tbody>
</table>

</section>


<script>
document.addEventListener('click', function(e) {
  if (e.target.matches('.copy-btn')) {
    const cmd = e.target.dataset.command; // ← aqui estava "cmd", agora é "command"
    if (cmd) {
      navigator.clipboard.writeText(cmd).then(() => {
        const original = e.target.textContent;
        e.target.textContent = '✓ Copiado!';
        setTimeout(() => e.target.textContent = original, 1500);
      }).catch(err => {
        console.warn('Falha ao copiar:', err);
      });
    }
  }
});
</script>
