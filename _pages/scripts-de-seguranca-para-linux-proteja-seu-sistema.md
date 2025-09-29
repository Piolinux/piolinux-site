---
layout: default
title: "Scripts de Segurança para Linux: Proteja seu Sistema"
description: "Coleção prática de scripts para segurança no Linux: firewall, bloqueio de IP, detecção de rootkits, SSH seguro, fail2ban, nmap."
date: 2025-09-07
author: "PioLinux"
categories: [linux, segurança, scripts]
tags: [segurança, bash, firewall, fail2ban, ssh, nmap, rootkit, monitoramento]
permalink: /scripts-seguranca-linux/
---



{% include toc.html %}



<section>
<h2>🐧 Segurança no Linux: Comandos que Salvam a Sua Vida.</h2>




<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>Comando</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Firewall básico com UFW.</td>
      <td data-label="Comando"><code>sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="sudo ufw default deny incoming%0Asudo ufw default allow outgoing%0Asudo ufw allow ssh%0Asudo ufw enable">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Bloqueio de IPs maliciosos.</td>
      <td data-label="Comando"><code>sudo ufw deny from 192.168.0.123</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="sudo ufw deny from 192.168.0.123">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Script de escaneamento com Nmap.</td>
      <td data-label="Comando"><code>#!/bin/bash
read -p "Digite o IP ou host: " target
nmap -A -T4 $target</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Aread -p &quot;Digite o IP ou host: &quot; target%0Anmap -A -T4 $target">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Verificação de rootkits com chkrootkit.</td>
      <td data-label="Comando"><code>sudo apt install chkrootkit
sudo chkrootkit</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="sudo apt install chkrootkit%0Asudo chkrootkit">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Conexão SSH automatizada.</td>
      <td data-label="Comando"><code>sshpass -p 'senha' ssh usuario@ip -p 22</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="sshpass -p 'senha' ssh usuario@ip -p 22">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Gerador de senhas fortes (Shell).</td>
      <td data-label="Comando"><code>openssl rand -hex 16
openssl rand -hex 64</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="openssl rand -hex 16%0Aopenssl rand -hex 64">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Verificador de integridade de arquivos.</td>
      <td data-label="Comando"><code>sha256sum arquivo.txt > hash.txt
sha256sum -c hash.txt</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="sha256sum arquivo.txt > hash.txt%0Asha256sum -c hash.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Configuração de fail2ban.</td>
      <td data-label="Comando"><code>sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="sudo apt install fail2ban%0Asudo systemctl enable fail2ban%0Asudo systemctl start fail2ban">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Monitoramento de tráfego com iftop.</td>
      <td data-label="Comando"><code>sudo apt install iftop
sudo iftop -i eth0</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="sudo apt install iftop%0Asudo iftop -i eth0">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Dica final (opcional, mas recomendada) -->
<div class="dica-final">
  💡 <strong>Dicas do Piolinux:</strong>  Faça os teste dos comandos de segurança em ambientes isolados, antes de usar em produção.Um erro com <code>ufw</code> ou <code>dd</code> pode te deixar sem acesso. 
</div>


</section>




