---
layout: default
title: "Terminal Linux – Referência Técnica Completa"
description: "Tabelas práticas com atalhos, pacotes, rede, automação e monitoramento — sem metáforas, só comandos reais e copiáveis."
permalink: /terminal-linux-referencia-completa/
categories: [linux, dicas, terminal]
tags: [dicas, linux, terminal, bash, zsh, ohmyzsh, iterm2, produtividade]
---

{% include toc.html %}


<section>

<h3 id="atalhos">Atalhos e Produtividade.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas</th>
      <th>Comandos / Atalhos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Autocompletar caminho ou comando.</td>
      <td data-label="Comando / Atalho"><kbd>Tab</kbd></td>
    </tr>
    <tr>
      <td data-label="Tarefa">Buscar no histórico de comandos.</td>
      <td data-label="Comando / Atalho"><kbd>Ctrl</kbd> + <kbd>R</kbd> → digite parte do comando</td>
    </tr>
    <tr>
      <td data-label="Tarefa">Limpar tela</td>
      <td data-label="Comando / Atalho">
        <code>clear</code> ou <kbd>Ctrl</kbd> + <kbd>L</kbd>
        <button class="copy-btn" data-command="clear">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Criar alias permanente</td>
      <td data-label="Comando / Atalho">
        <code>echo "alias gs='git status'" >> ~/.bashrc && source ~/.bashrc</code>
        <button class="copy-btn" data-command="echo &quot;alias gs='git status'&quot; >> ~/.bashrc && source ~/.bashrc">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="pacotes">Gerenciamento de Pacotes</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ações.</th>
      <th>Comandos.(Debian/Ubuntu)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Atualizar sistema.</td>
      <td data-label="Comando">
        <code>sudo apt update && sudo apt full-upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Instalar pacote.</td>
      <td data-label="Comando">
        <code>sudo apt install vim git htop</code>
        <button class="copy-btn" data-command="sudo apt install vim git htop">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Limpar dependências órfãs.</td>
      <td data-label="Comando">
        <code>sudo apt autoremove</code>
        <button class="copy-btn" data-command="sudo apt autoremove">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Instalar Flatpak.</td>
      <td data-label="Comando">
        <code>sudo apt install flatpak && flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo</code>
        <button class="copy-btn" data-command="sudo apt install flatpak && flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="rede">Redes.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Mostrar IPs locais.</td>
      <td data-label="Comando">
        <code>ip a</code>
        <button class="copy-btn" data-command="ip a">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver IP público.</td>
      <td data-label="Comando">
        <code>curl ifconfig.me</code>
        <button class="copy-btn" data-command="curl ifconfig.me">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Testar conectividade.</td>
      <td data-label="Comando">
        <code>ping -c 4 google.com</code>
        <button class="copy-btn" data-command="ping -c 4 google.com">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver portas abertas.</td>
      <td data-label="Comando">
        <code>ss -tulpn</code>
        <button class="copy-btn" data-command="ss -tulpn">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="automacao">Automação</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Agendar backup diário.</td>
      <td data-label="Comando">
        <code>crontab -e</code> → adicionar: <code>0 2 * * * rsync -av /home/user/ /backup/</code>
        <button class="copy-btn" data-command="0 2 * * * rsync -av /home/user/ /backup/">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Sincronizar pastas.</td>
      <td data-label="Comando">
        <code>rsync -av /origem/ /destino/</code>
        <button class="copy-btn" data-command="rsync -av /origem/ /destino/">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Compactar diretório.</td>
      <td data-label="Comando">
        <code>tar -czvf backup.tar.gz pasta/</code>
        <button class="copy-btn" data-command="tar -czvf backup.tar.gz pasta/">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="sistema">Sistema e Monitoramento.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Ver uso de disco.</td>
      <td data-label="Comando">
        <code>df -h</code>
        <button class="copy-btn" data-command="df -h">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Monitorar processos.</td>
      <td data-label="Comando">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Encontrar arquivos.</td>
      <td data-label="Comando">
        <code>find /home -name "*.txt"</code>
        <button class="copy-btn" data-command="find /home -name &quot;*.txt&quot;">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver permissões.</td>
      <td data-label="Comando">
        <code>ls -l arquivo</code>
        <button class="copy-btn" data-command="ls -l arquivo">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Mudar permissões.</td>
      <td data-label="Comando">
        <code>chmod 600 ~/.ssh/id_rsa</code>
        <button class="copy-btn" data-command="chmod 600 ~/.ssh/id_rsa">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Práticas.</th>
      <th>Comandos / Ações.</th>
      <th>Observações Técnicas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Prática">Atualização do sistema.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt update && sudo apt full-upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade -y">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Execute semanalmente. Em servidores, use <code>unattended-upgrades</code> para atualizações automáticas de segurança.</td>
    </tr>
    <tr>
      <td data-label="Prática">Firewall (UFW)</td>
      <td data-label="Comando / Ação">
        <code>sudo ufw default deny incoming && sudo ufw enable</code>
        <button class="copy-btn" data-command="sudo ufw default deny incoming && sudo ufw enable">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Bloqueia todas as conexões de entrada por padrão. Permita só o necessário: <code>sudo ufw allow 22</code> (SSH).</td>
    </tr>
    <tr>
      <td data-label="Prática">Gerenciador de senhas.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt install keepassxc</code> ou use <a href="https://bitwarden.com/" target="_blank">Bitwarden</a>
        <button class="copy-btn" data-command="sudo apt install keepassxc">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Nunca reutilize senhas. Utilize senhas originais de 12+ caracteres com gerador embutido.</td>
    </tr>
    <tr>
      <td data-label="Prática">Monitoramento de logs.</td>
      <td data-label="Comando / Ação">
        <code>sudo tail -f /var/log/auth.log</code> (autenticação)<br>
        <code>sudo journalctl -u ssh --since "1 hour ago"</code> (systemd)
        <button class="copy-btn" data-command="sudo tail -f /var/log/auth.log">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Logs críticos: <code>/var/log/auth.log</code> (login), <code>/var/log/syslog</code> (sistema). Em sistemas sem systemd, use <code>/var/log/messages</code>.</td>
    </tr>
    <tr>
      <td data-label="Prática">Verificação de processos suspeitos.</td>
      <td data-label="Comando / Ação">
        <code>ps aux --sort=-%cpu | head -n 10</code>
        <button class="copy-btn" data-command="ps aux --sort=-%cpu | head -n 10">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Lista os 10 processos que mais consomem CPU. Útil para detectar mineração ou malware.</td>
    </tr>
  </tbody>
</table>






</section>

