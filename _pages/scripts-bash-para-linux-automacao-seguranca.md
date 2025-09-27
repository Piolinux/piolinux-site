---
layout: default
title: Scripts Bash Básicos por Categoria — Copie, Cole e Use
description: "Coleção de scripts Bash reais, testados e formatados corretamente: automação, backup, segurança, administração. 100% offline, sem erros de cópia."
permalink: /scripts-bash/
---

{% include toc.html %}




<section class="post-content">




<h2>🐧 Scripts Bash Básicos — Organizados por Categoria</h2>

<p>Scripts essenciais para automação, administração e produtividade.  
<strong>Copie, cole e use</strong> — testados em Devuan, Debian e sistemas sem systemd.  
Cada script está formatado <strong>exatamente como deve ser salvo</strong> — sem colar em uma linha só.</p>

<p>Saca só, o Bash é tipo o idioma oficial nos terminais Linux. Com 
ele, dá pra deixar tudo automático, sabe? Tipo, organizar arquivos, dar 
um tapa no sistema, fazer cópia de segurança e um monte de outras 
paradas. aprender bash não exige ser um expert — basta curiosidade e 
prática. abaixo, veja exemplos úteis de scripts para o dia a dia.</p> 




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
<h3>Fundamentos de Script Bash:</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Serventia</th>
      <th>Script</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Olá Mundo (primeiro script)</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Olá, piolinux! Este é meu primeiro script Bash."</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Aecho &quot;Olá, piolinux! Este é meu primeiro script Bash.&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Automação -->
<h3>Automação de Tarefas:</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Serventia</th>
      <th>Script</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Atualizar sistema (Debian/Devuan):</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Atualizando listas de pacotes..."
sudo apt update
echo "Realizando upgrade..."
sudo apt upgrade -y
echo "Limpando sistema..."
sudo apt autoremove -y
sudo apt clean
echo "Sistema atualizado!"</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Aecho &quot;Atualizando listas de pacotes...&quot;%0Asudo apt update%0Aecho &quot;Realizando upgrade...&quot;%0Asudo apt upgrade -y%0Aecho &quot;Limpando sistema...&quot;%0Asudo apt autoremove -y%0Asudo apt clean%0Aecho &quot;Sistema atualizado!&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Backup de pastas pessoais:</td>
      <td data-label="Script"><code>#!/bin/bash
data=$(date +%Y-%m-%d_%H-%M-%S)
dir_backup="$HOME/backups"
pastas=("$HOME/Documentos" "$HOME/Imagens")
arquivo="backup_$data.tar.gz"

mkdir -p "$dir_backup"
tar -czf "$dir_backup/$arquivo" "${pastas[@]}"
echo "Backup salvo em: $dir_backup/$arquivo"</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Adata=$(date +%Y-%m-%d_%H-%M-%S)%0Adir_backup=&quot;$HOME/backups&quot;%0Apastas=(&quot;$HOME/Documentos&quot; &quot;$HOME/Imagens&quot;)%0Aarquivo=&quot;backup_$data.tar.gz&quot;%0A%0Amkdir -p &quot;$dir_backup&quot;%0Atar -czf &quot;$dir_backup/$arquivo&quot; &quot;${pastas[@]}&quot;%0Aecho &quot;Backup salvo em: $dir_backup/$arquivo&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Administração -->
<h3>Administração de Sistema:</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Serventia</th>
      <th>Script</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Alerta de disco cheio:</td>
      <td data-label="Script"><code>#!/bin/bash
uso=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
if [ $uso -gt 80 ]; then
  echo "⚠️ Disco acima de 80% ($uso%)"
fi</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Auso=$(df / | awk 'NR==2 {print $5}' | tr -d '%')%0Aif [ $uso -gt 80 ]; then%0A  echo &quot;⚠️ Disco acima de 80% ($uso%)&quot;%0Afi">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Criar usuários em lote:</td>
      <td data-label="Script"><code>#!/bin/bash
while read user; do
  [ -n "$user" ] && sudo useradd -m "$user"
done < lista_usuarios.txt
echo "Usuários criados."</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Awhile read user; do%0A  [ -n &quot;$user&quot; ] && sudo useradd -m &quot;$user&quot;%0Adone < lista_usuarios.txt%0Aecho &quot;Usuários criados.&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Segurança -->
<h3>Segurança e Monitoramento:</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Serventia</th>
      <th>Script</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Listar portas abertas:</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Portas abertas:"
ss -tuln</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Aecho &quot;Portas abertas:&quot;%0Ass -tuln">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Monitorar logins SSH falhos:</td>
      <td data-label="Script"><code>#!/bin/bash
echo "Últimas tentativas falhas:"
grep "Failed password" /var/log/auth.log | tail -5 | awk '{print $11}' | sort | uniq -c</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Aecho &quot;Últimas tentativas falhas:&quot;%0Agrep &quot;Failed password&quot; /var/log/auth.log | tail -5 | awk '{print $11}' | sort | uniq -c">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Desenvolvimento -->
<h3>Desenvolvimento Web:</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Serventia</th>
      <th>Script</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Servidor HTTP local:</td>
      <td data-label="Script"><code>#!/bin/bash
python3 -m http.server 8000</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Apython3 -m http.server 8000">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Deploy com rsync:</td>
      <td data-label="Script"><code>#!/bin/bash
rsync -avz --delete ./public/ user@host:/var/www/html/
echo "Deploy concluído."</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Arsync -avz --delete ./public/ user@host:/var/www/html/%0Aecho &quot;Deploy concluído.&quot;">📋</button></td>
    </tr>
  </tbody>
</table>

<!-- Categoria: Utilitários -->
<h3>Utilitários e Truques:</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Serventia</th>
      <th>Script</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Calculadora no terminal:</td>
      <td data-label="Script"><code>#!/bin/bash
if [ -z "$1" ]; then
  echo "Uso: ./calc.sh '2 + 3 * 4'"
  exit 1
fi
echo "scale=2; $1" | bc -l</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-cmd="#!/bin/bash%0Aif [ -z &quot;$1&quot; ]; then%0A  echo &quot;Uso: ./calc.sh '2 + 3 * 4'&quot;%0A  exit 1%0Afi%0Aecho &quot;scale=2; $1&quot; | bc -l">📋</button></td>
    </tr>
  </tbody>
</table>

<script>
document.addEventListener('click', function(e) {
  if (e.target.matches('.copy-btn')) {
    const cmd = e.target.dataset.cmd;
    if (cmd) {
      const formatted = cmd
        .replace(/%0A/g, '\n')
        .replace(/%22/g, '"')
        .replace(/%26/g, '&');
      navigator.clipboard.writeText(formatted).then(() => {
        const original = e.target.textContent;
        e.target.textContent = '✓';
        setTimeout(() => e.target.textContent = original, 1200);
      });
    }
  }
});
</script>

</section>










 
