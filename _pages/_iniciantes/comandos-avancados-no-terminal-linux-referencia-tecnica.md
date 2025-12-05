---
layout: manual-seo
title: Comandos Avançados no Terminal Linux – Referência Técnica
description: 'Tabelas com find, grep, rsync, chmod, htop, lsof, scripts Bash e automação — sem linguagem informal, só comandos reais.'
permalink: /comandos-avancados-terminal/
tags: [terminal, comandos, linux, awk, sed, find, xargs, produtividade]
---






<section class="post-content">

   <table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>Observações Técnicas.</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <!-- BUSCA E MANIPULAÇÃO -->
    <tr>
      <td><code>find</code></td>
      <td><code>find /var/log -name "*.log" -mtime +30 -exec gzip {} \;</code></td>
      <td>Compacta logs com mais de 30 dias. Use <code>-print</code> antes de <code>-exec</code> para testar.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="find /var/log -name &quot;*.log&quot; -mtime +30 -exec gzip {} \;">📋</button></td>
    </tr>
    <tr>
      <td><code>grep.</code></td>
      <td><code>grep -E 'error|fail' /var/log/syslog | tail -n 20</code></td>
      <td>Mostra últimas 20 linhas com "error" ou "fail". Para destaque <code>--color=auto</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grep -E 'error|fail' /var/log/syslog | tail -n 20">📋</button></td>
    </tr>
    <tr>
      <td><code>rsync.</code></td>
      <td><code>rsync -avz -e ssh /home/user/ user@backup:/backup/</code></td>
      <td>Sincroniza via SSH. Sempre teste com <code>--dry-run</code> em ambientes críticos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rsync -avz -e ssh /home/user/ user@backup:/backup/">📋</button></td>
    </tr>
    <tr>
      <td><code>awk.</code></td>
      <td><code>df -h | awk '$5+0 > 80 {print $1, $5}'</code></td>
      <td>Liste partições com uso > 80%. O <code>+0</code> converte string para número (evita falha com "%").</td>
      <td data-label="Ação"><button class="copy-btn" data-command="df -h | awk '$5+0 > 80 {print $1, $5}'">📋</button></td>
    </tr>

    <!-- PERMISSÕES -->
    <tr>
      <td><code>chmod</code></td>
      <td><code>chmod 600 ~/.ssh/id_rsa</code></td>
      <td>Permissões seguras para chave privada SSH (só dono: leitura/escrita).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chmod 600 ~/.ssh/id_rsa">📋</button></td>
    </tr>
    <tr>
      <td><code>chmod -R.</code></td>
      <td><code>find /var/www/html -type d -exec chmod 755 {} \; && find /var/www/html -type f -exec chmod 644 {} \;</code></td>
      <td>⚠️ <strong>Não use <code>chmod -R 755</code></strong> — aplica permissão de pasta a arquivos. Use <code>find</code> para separar diretórios (755) e arquivos (644).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="find /var/www/html -type d -exec chmod 755 {} \; && find /var/www/html -type f -exec chmod 644 {} \;">📋</button></td>
    </tr>
    <tr>
      <td><code>chown.</code></td>
      <td><code>sudo chown -R www-data:www-data /var/www</code></td>
      <td>Define proprietário para servidor web. Verifique se o serviço usa esse usuário/grupo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo chown -R www-data:www-data /var/www">📋</button></td>
    </tr>
    <tr>
      <td><code>umask.</code></td>
      <td><code>umask 022</code> (padrão) ou <code>umask 077</code> (privado)</td>
      <td>Define permissões padrão: <code>022</code> → arquivos 644/pastas 755; <code>077</code> → só dono tem acesso.</td>
      <td data-label="Ação">—</td>
    </tr>

    <!-- MONITORAMENTO -->
    <tr>
      <td><code>htop.</code></td>
      <td><code>htop</code></td>
      <td>Monitoramento interativo. Pressione <code>F5</code> para modo árvore.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="htop">📋</button></td>
    </tr>
    <tr>
      <td><code>ps.</code></td>
      <td><code>ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head</code></td>
      <td>Lista processos por uso de memória (decrescente).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head">📋</button></td>
    </tr>
    <tr>
      <td><code>lsof.</code></td>
      <td><code>lsof -i </code></td>
      <td>Mostra todos os processo ativos das portas TCP/UPD.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsof -i ">📋</button></td>
    </tr>
    <tr>
      <td><code>iotop.</code></td>
      <td><code>sudo iotop</code></td>
      <td>Monitora I/O de disco em tempo real (requer root).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo iotop">📋</button></td>
    </tr>
  </tbody>
</table>




   </section>
 

 
