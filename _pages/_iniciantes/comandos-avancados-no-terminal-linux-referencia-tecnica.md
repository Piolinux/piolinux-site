---
layout: manual-seo
title: Comandos Avançados no Terminal Linux – Referência Técnica
description: 'Tabelas com find, grep, rsync, chmod, htop, lsof, scripts Bash e automação — sem linguagem informal, só comandos reais.'
permalink: /comandos-avancados-terminal/
tags: [terminal, comandos, linux, awk, sed, find, xargs, produtividade]
---



{% include toc.html %}



<section class="post-content">

   <table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos Avançados.</th>
      <th>O que fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>find</code></td>
      <td data-label="Exemplo Avançado">
        <code>find /var/log -name "*.log" -mtime +30 -exec gzip {} \;</code>
        <button class="copy-btn" data-command="find /var/log -name &quot;*.log&quot; -mtime +30 -exec gzip {} \;">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Compacta logs mais antigos que 30 dias.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>grep</code></td>
      <td data-label="Exemplo Avançado">
        <code>grep -E 'error|fail' /var/log/syslog | tail -n 20</code>
        <button class="copy-btn" data-command="grep -E 'error|fail' /var/log/syslog | tail -n 20">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra últimas 20 linhas com "error" ou "fail"</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rsync</code></td>
      <td data-label="Exemplo Avançado">
        <code>rsync -avz -e ssh /home/user/ user@backup:/backup/</code>
        <button class="copy-btn" data-command="rsync -avz -e ssh /home/user/ user@backup:/backup/">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Conecta-se a um servidor remoto usando SSH para realizar a sincronização.  Aviso: Teste com --dry-run antes em ambientes críticos.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>awk</code></td>
      <td data-label="Exemplo Avançado">
        <code>df -h | awk '$5+0 > 80 {print $1, $5}'</code>
        <button class="copy-btn" data-command="df -h | awk '$5+0 > 80 {print $1, $5}'">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Lista partições com uso > 80%.</td>
    </tr>
  </tbody>
</table>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>Observações Técnicas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>chmod</code></td>
      <td data-label="Exemplo">
        <code>chmod 600 ~/.ssh/id_rsa</code>
        <button class="copy-btn" data-command="chmod 600 ~/.ssh/id_rsa">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Permissões seguras para chave SSH.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chmod</code> (recursivo)</td>
      <td data-label="Exemplo">
        <code>chmod -R 755 /var/www/html</code>
        <button class="copy-btn" data-command="chmod -R 755 /var/www/html">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Define permissões para site web.(755 pastas, 644 arquivos) Aviso:
"Use com cuidado: aplica 755 a arquivos também. Prefira find para controle fino." 

</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chown</code></td>
      <td data-label="Exemplo">
        <code>sudo chown -R www-data:www-data /var/www</code>
        <button class="copy-btn" data-command="sudo chown -R www-data:www-data /var/www">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Define dono para servidor web.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>umask</code></td>
      <td data-label="Exemplo">
        <code>umask 022</code> (padrão) ou <code>umask 077</code> (privado)
      </td>
      <td data-label="Observação Técnica">Define permissões padrão para novos arquivos.</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>Funções.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>htop</code></td>
      <td data-label="Exemplo">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
      <td data-label="Função">Monitoramento interativo com árvore de processos.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ps</code></td>
      <td data-label="Exemplo">
        <code>ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head</code>
        <button class="copy-btn" data-command="ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head">📋 Copiar</button>
      </td>
      <td data-label="Função">Lista processos por uso de memória.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lsof</code></td>
      <td data-label="Exemplo">
        <code>lsof -i :80</code>
        <button class="copy-btn" data-command="lsof -i :80">📋 Copiar</button>
      </td>
      <td data-label="Função">Mostra processo usando a porta 80.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>iotop</code></td>
      <td data-label="Exemplo">
        <code>sudo iotop</code>
        <button class="copy-btn" data-command="sudo iotop">📋 Copiar</button>
      </td>
      <td data-label="Função">Monitora uso de disco em tempo real.</td>
    </tr>
  </tbody>
</table>





   </section>
 
