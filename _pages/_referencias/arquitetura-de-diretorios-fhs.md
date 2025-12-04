---
layout: manual-seo
title: 'Arquitetura de Diretórios FHS'
description: "Tabela técnica da Filesystem Hierarchy Standard (FHS). Documentação real do propósito de cada diretório em sistemas Linux."
tags: [bin, etc, dev, root, usr, arquitetura de diretorio]
permalink: /referencias/fhs/
---





<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Diretório</th>
      <th>Propósito</th>
      <th>Conteúdo típico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Diretório"><code>/</code></td>
      <td data-label="Propósito">Raiz do sistema de arquivos.</td>
      <td data-label="Conteúdo típico">Todos os outros diretórios estão aqui.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/bin</code></td>
      <td data-label="Propósito">Comandos essenciais para todos os usuários.</td>
      <td data-label="Conteúdo típico">ls, cp, bash, cat, grep</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/sbin</code></td>
      <td data-label="Propósito">Comandos essenciais para o administrador do sistema.</td>
      <td data-label="Conteúdo típico">fdisk, iptables, ifconfig, init</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/etc</code></td>
      <td data-label="Propósito">Arquivos de configuração do sistema.</td>
      <td data-label="Conteúdo típico">fstab, passwd, network/interfaces</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/home</code></td>
      <td data-label="Propósito">Diretórios pessoais dos usuários.</td>
      <td data-label="Conteúdo típico">/home/user, /home/alice</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/root</code></td>
      <td data-label="Propósito">Diretório pessoal do superusuário (root).</td>
      <td data-label="Conteúdo típico">/root/.bashrc</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/usr</code></td>
      <td data-label="Propósito">Software e arquivos de usuário (não essenciais para o boot).</td>
      <td data-label="Conteúdo típico">/usr/bin, /usr/lib, /usr/share</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/usr/bin</code></td>
      <td data-label="Propósito">Comandos essenciais para usuários.</td>
      <td data-label="Conteúdo típico">git, python3, firefox</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/usr/sbin</code></td>
      <td data-label="Propósito">Comandos essenciais para administração.</td>
      <td data-label="Conteúdo típico">useradd, apache2, sshd</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/var</code></td>
      <td data-label="Propósito">Dados variáveis: logs, spool, caches.</td>
      <td data-label="Conteúdo típico">/var/log, /var/mail, /var/cache</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/tmp</code></td>
      <td data-label="Propósito">Arquivos temporários (apagados no reboot).</td>
      <td data-label="Conteúdo típico">arquivos de sessão, downloads parciais</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/boot</code></td>
      <td data-label="Propósito">Arquivos estáticos do bootloader e kernel.</td>
      <td data-label="Conteúdo típico">vmlinuz, initrd.img, grub/</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/dev</code></td>
      <td data-label="Propósito">Arquivos de dispositivo (criados pelo kernel ou udev).</td>
      <td data-label="Conteúdo típico">sda, tty, null, random</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/proc</code></td>
      <td data-label="Propósito">Interface virtual ao kernel (não é armazenamento real).</td>
      <td data-label="Conteúdo típico">cpuinfo, meminfo, mounts</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/sys</code></td>
      <td data-label="Propósito">Interface moderna ao kernel para configuração de hardware.</td>
      <td data-label="Conteúdo típico">class/, devices/, kernel/</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/opt</code></td>
      <td data-label="Propósito">Pacotes de software opcionais (geralmente comerciais ou externos).</td>
      <td data-label="Conteúdo típico">/opt/google/chrome, /opt/zoom</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/srv</code></td>
      <td data-label="Propósito">Dados servidos por este sistema.</td>
      <td data-label="Conteúdo típico">/srv/www (HTTP), /srv/ftp</td>
    </tr>
  </tbody>
</table>
<p>Fonte: FHS 3.0 + observação direta do sistema. Funciona em Devuan, Debian, Slackware, Arch e outros.</p>


</section>
