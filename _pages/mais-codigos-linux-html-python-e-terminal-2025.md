---
layout: default
title: "Códigos Técnicos Reais – Bash, Python, Terminal"
description: "Scripts seguros e eficientes para backup, números primos e comandos Linux — sem erros de iniciante, só referência técnica."
permalink: /codigos-tecnicos-reais/
categories: [codigo, script, desenvolvimento]
tags: [codigos, linux, python, html, bash, ohmyzsh, iterm2, windows-terminal]
---

{% include toc.html %}

<section>

<h3>Backup com verificação de diretório</h3>
<pre><code>#!/bin/bash
DATA=$(date +%Y-%m-%d)
BACKUP_DIR="$HOME/backup"  # Usa diretório do usuário
DEST="$BACKUP_DIR/home-$DATA.tar.gz"

# Cria diretório se não existir
mkdir -p "$BACKUP_DIR"

# Verifica se o diretório home existe
if [ ! -d "$HOME" ]; then
  echo "Erro: \$HOME não encontrado."
  exit 1
fi

# Cria backup
tar -czf "$DEST" "$HOME" && echo "Backup salvo em: $DEST"</code></pre>

<h3>Número primo (otimizado)</h3>
<pre><code>import math

num = int(input("Digite um número: "))
if num > 1:
    for i in range(2, int(math.isqrt(num)) + 1):
        if num % i == 0:
            print(f"{num} não é primo")
            break
    else:
        print(f"{num} é primo")
else:
    print("Digite um número maior que 1")</code></pre>
    
    
    <h3>Instalar Oh My Zsh (sem erro)</h3>
<pre><code>sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"</code></pre>

<h3>Atualizar sistema (Debian/Ubuntu)</h3>
<pre><code>sudo apt update && sudo apt full-upgrade -y</code></pre>
    
    


</section>




