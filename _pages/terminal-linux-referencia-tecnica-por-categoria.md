---
layout: default
title: "Terminal Linux – Referência Técnica por Categoria"
description: "Tabelas práticas com comandos reais para navegação, busca, sistema, rede, compactação e atalhos — sem fluff, só utilidade."
permalink: /terminal-linux-referencia/
categories: [linux, dicas, terminal]
tags: [dicas, linux, terminal, bash, zsh, ohmyzsh, iterm2, produtividade]
---


{% include toc.html %}




<section class="post-content">
  <h3 id="navegacao">Navegação e Arquivos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefa</th>
      <th>Comando</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Listar arquivos com detalhes</td>
      <td data-label="Comando">
        <code>ls -lh</code>
        <button class="copy-btn" data-command="ls -lh">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Mudar diretório</td>
      <td data-label="Comando">
        <code>cd ~/Documentos</code>
        <button class="copy-btn" data-command="cd ~/Documentos">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Mostrar diretório atual</td>
      <td data-label="Comando">
        <code>pwd</code>
        <button class="copy-btn" data-command="pwd">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Copiar diretório recursivamente</td>
      <td data-label="Comando">
        <code>cp -r origem/ destino/</code>
        <button class="copy-btn" data-command="cp -r origem/ destino/">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Remover com confirmação</td>
      <td data-label="Comando">
        <code>rm -i arquivo</code>
        <button class="copy-btn" data-command="rm -i arquivo">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Criar diretórios aninhados</td>
      <td data-label="Comando">
        <code>mkdir -p Projetos/2025/web</code>
        <button class="copy-btn" data-command="mkdir -p Projetos/2025/web">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="busca">Busca e Filtros</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefa</th>
      <th>Comando</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Procurar arquivo por nome</td>
      <td data-label="Comando">
        <code>find /home -name "contrato.pdf"</code>
        <button class="copy-btn" data-command="find /home -name &quot;contrato.pdf&quot;">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Buscar texto em arquivos</td>
      <td data-label="Comando">
        <code>grep -r "erro" /var/log/</code>
        <button class="copy-btn" data-command="grep -r &quot;erro&quot; /var/log/">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver fim de arquivo em tempo real</td>
      <td data-label="Comando">
        <code>tail -f /var/log/syslog</code>
        <button class="copy-btn" data-command="tail -f /var/log/syslog">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Localizar arquivo rapidamente</td>
      <td data-label="Comando">
        <code>locate contrato.pdf</code> (requer <code>sudo updatedb</code> primeiro)
        <button class="copy-btn" data-command="locate contrato.pdf">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="sistema">Sistema e Processos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefa</th>
      <th>Comando</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Uso de disco legível</td>
      <td data-label="Comando">
        <code>df -h</code>
        <button class="copy-btn" data-command="df -h">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Monitorar processos interativamente</td>
      <td data-label="Comando">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Matar processo por nome</td>
      <td data-label="Comando">
        <code>pkill firefox</code>
        <button class="copy-btn" data-command="pkill firefox">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Uso de memória</td>
      <td data-label="Comando">
        <code>free -h</code>
        <button class="copy-btn" data-command="free -h">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Reiniciar sistema</td>
      <td data-label="Comando">
        <code>sudo reboot</code>
        <button class="copy-btn" data-command="sudo reboot">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="rede">Rede</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefa</th>
      <th>Comando</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Mostrar IPs das interfaces</td>
      <td data-label="Comando">
        <code>ip a</code>
        <button class="copy-btn" data-command="ip a">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Testar conectividade</td>
      <td data-label="Comando">
        <code>ping -c 4 google.com</code>
        <button class="copy-btn" data-command="ping -c 4 google.com">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Conectar a servidor remoto</td>
      <td data-label="Comando">
        <code>ssh usuario@192.168.1.10</code>
        <button class="copy-btn" data-command="ssh usuario@192.168.1.10">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver portas abertas</td>
      <td data-label="Comando">
        <code>ss -tulpn</code>
        <button class="copy-btn" data-command="ss -tulpn">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="compactacao">Compactação</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefa</th>
      <th>Comando</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Compactar para .tar.gz</td>
      <td data-label="Comando">
        <code>tar -czvf backup.tar.gz pasta/</code>
        <button class="copy-btn" data-command="tar -czvf backup.tar.gz pasta/">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Descompactar .tar.gz</td>
      <td data-label="Comando">
        <code>tar -xzvf backup.tar.gz</code>
        <button class="copy-btn" data-command="tar -xzvf backup.tar.gz">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Compactar para .zip</td>
      <td data-label="Comando">
        <code>zip -r arquivo.zip pasta/</code>
        <button class="copy-btn" data-command="zip -r arquivo.zip pasta/">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="atalhos">Atalhos Úteis</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Atalho</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Atalho"><kbd>Tab</kbd></td>
      <td data-label="Ação">Auto-completar comando ou caminho</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Ctrl</kbd> + <kbd>C</kbd></td>
      <td data-label="Ação">Interromper processo em execução</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Ctrl</kbd> + <kbd>D</kbd></td>
      <td data-label="Ação">Fechar terminal (EOF)</td>
    </tr>
    <tr>
      <td data-label="Atalho"><code>!!</code></td>
      <td data-label="Ação">Repetir último comando: <code>sudo !!</code></td>
    </tr>
    <tr>
      <td data-label="Atalho"><code>|</code></td>
      <td data-label="Ação">Encadear comandos: <code>ls -l | grep .txt</code></td>
    </tr>
  </tbody>
</table>
  </section>
  
  
  
