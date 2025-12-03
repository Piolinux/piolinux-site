---
layout: manual-seo
title: Scripts Bash Básicos por Categoria - Copie, Cole e Use.
description: "Coleção de scripts Bash reais, testados e formatados corretamente: automação, backup, segurança, administração. 100% offline, sem erros de cópia."
permalink: /scripts-bash/
tags: [segurança, bash, firewall, fail2ban, ssh, nmap, rootkit, monitoramento]
---


<section class="post-content">








<style>
.evergreen-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
.evergreen-table th,
.evergreen-table td {
  padding: 12px 15px;
  border: 1px solid #444;
  text-align: left;
  vertical-align: top;
}
.evergreen-table th {
  background: #008000;
  color: white;
  font-weight: 600;
}
.evergreen-table code {
  display: block;
  white-space: pre;
  font-family: monospace;
  background: #222;
  padding: 10px;
  border-radius: 4px;
  font-size: 0.95em;
  line-height: 1.4;
  overflow-x: auto;
}
.copy-btn {
  background: none;
  border: none;
  color: #8bc34a;
  cursor: pointer;
  font-size: 1.1em;
  padding: 0;
}
.copy-btn:hover {
  color: #ffeb3b;
}
</style>

<!-- Categoria: Fundamentos -->
<h3> Fundamentos de Script Bash.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>script</th>
      <th>copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Olá Mundo (primeiro script)</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Olá, piolinux! Este é meu primeiro script Bash."</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
echo &quot;Olá, piolinux! Este é meu primeiro script Bash.&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Automação -->
<h3> Automação de Tarefas.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>script</th>
      <th>copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Atualizar sistema (Debian/Devuan)</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Atualizando listas de pacotes..."
sudo apt update
echo "Realizando upgrade..."
sudo apt upgrade -y
echo "Limpando sistema..."
sudo apt autoremove -y
sudo apt clean
echo "Sistema atualizado!"</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
echo &quot;Atualizando listas de pacotes...&quot;
sudo apt update
echo &quot;Realizando upgrade...&quot;
sudo apt upgrade -y
echo &quot;Limpando sistema...&quot;
sudo apt autoremove -y
sudo apt clean
echo &quot;Sistema atualizado!&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Backup de pastas pessoais</td>
      <td data-label="Script"><code>#!/bin/bash
data=$(date +%Y-%m-%d_%H-%M-%S)
dir_backup="$HOME/backups"
pastas=("$HOME/Documentos" "$HOME/Imagens")
arquivo="backup_$data.tar.gz"

mkdir -p "$dir_backup"
tar -czf "$dir_backup/$arquivo" "${pastas[@]}"
echo "Backup salvo em: $dir_backup/$arquivo"</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
data=$(date +%Y-%m-%d_%H-%M-%S)
dir_backup=&quot;$HOME/backups&quot;
pastas=(&quot;$HOME/Documentos&quot; &quot;$HOME/Imagens&quot;)
arquivo=&quot;backup_$data.tar.gz&quot;

mkdir -p &quot;$dir_backup&quot;
tar -czf &quot;$dir_backup/$arquivo&quot; &quot;${pastas[@]}&quot;
echo &quot;Backup salvo em: $dir_backup/$arquivo&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Administração -->
<h3> Administração de Sistema.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>script</th>
      <th>copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Alerta de disco cheio</td>
      <td data-label="Script"><code>#!/bin/bash
uso=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
if [ "$uso" -gt 80 ]; then
  echo "⚠️ Disco acima de 80% ($uso%)"
fi</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
uso=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
if [ $uso -gt 80 ]; then
  echo &quot;⚠️ Disco acima de 80% ($uso%)&quot;
fi">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Criar usuários em lote.</td>
      <td data-label="Script"><code>#!/bin/bash
while read -r user; do
  [ -n "$user" ] && sudo useradd -m "$user"
done < lista_usuarios.txt
echo "Usuários criados."</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
while read -r user; do
  [ -n &quot;$user&quot; ] && sudo useradd -m &quot;$user&quot;
done < lista_usuarios.txt
echo &quot;Usuários criados.&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Segurança -->
<h3> Segurança e Monitoramento: Pra ficar tranquilo e de olho em tudo!</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>script</th>
      <th>copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Listar portas abertas</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Portas abertas:"
ss -tuln</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
echo &quot;Portas abertas:&quot;
ss -tuln">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Monitorar logins SSH falhos</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Últimas tentativas falhas:"
grep "Failed password" /var/log/auth.log | tail -5 | awk '{print $11}' | sort | uniq -c</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
echo &quot;Últimas tentativas falhas:&quot;
grep &quot;Failed password&quot; /var/log/auth.log | tail -5 | awk '{print $11}' | sort | uniq -c">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Desenvolvimento -->
<h3> Desenvolvimento Web para facilitar acesso atráves do navegador.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>script</th>
      <th>copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Servidor HTTP local</td>
      <td data-label="Script"><code>#!/bin/bash
python3 -m http.server 8000</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
python3 -m http.server 8000">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Deploy com rsync</td>
      <td data-label="Script"><code>#!/bin/bash
rsync -avz --delete ./public/ user@host:/var/www/html/
echo "Deploy concluído."</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
rsync -avz --delete ./public/ user@host:/var/www/html/
echo &quot;Deploy concluído.&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Utilitários -->
<h3> Calculadora para facilitar a vida.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>script</th>
      <th>copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Calculadora no terminal.</td>
      <td data-label="Script"><code>#!/bin/bash
if [ -z "$1" ]; then
  echo "Uso: ./calc.sh '2 + 3 * 4'"
  exit 1
fi
echo "scale=2; $1" | bc -l</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="#!/bin/bash
if [ -z &quot;$1&quot; ]; then
  echo &quot;Uso: ./calc.sh '2 + 3 * 4'&quot;
  exit 1
fi
echo &quot;scale=2; $1&quot; | bc -l">📋</button></td>
    </tr>
  </tbody>
</table>











