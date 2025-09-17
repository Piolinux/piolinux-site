---
layout: default
title: "Copie e Use: Códigos Linux, Python, HTML + Terminal (2025)"
description: "Coleção prática de códigos úteis: scripts Bash, snippets HTML, exemplos em Python, configurações de Oh My Zsh, iTerm2 e Windows Terminal."
date: 2025-09-24
author: "PioLinux"
categories: [codigo, script, desenvolvimento]
tags: [codigos, linux, python, html, bash, ohmyzsh, iterm2, windows-terminal]
permalink: /mais-codigos-linux-html-python/
---

{% include toc.html %}



<script>
        function copyCode(id) {
            const element = document.getElementById(id);
            const textToCopy = element.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert("Código copiado!");
            }).catch(err => {
                console.error('Erro ao copiar o código: ', err);
            });
        }
    </script>



<section class="post-content">

    <h2>Códigos para Aprender e Compartilhar</h2>

    <section class="code-block">
        <h3>📁 Script para Backup</h3>
        <pre id="code1">#!/bin/bash
# Define a data atual
DATA=$(date +%Y-%m-%d)
# Cria um backup do diretório home do usuário
# Substitua 'usuário' pelo seu nome de usuário
tar -czf /backup/home-$DATA.tar.gz /home/usuário</pre>
        <button onclick="copyCode('code1')">Copiar</button>
    </section>

    <section class="code-block">
        <h3>🧠 Python: Verificar se número é primo</h3>
        <pre id="code2">num = int(input("Digite um número: "))
if num > 1:
    for i in range(2, num):
        if (num % i) == 0:
            print(f"{num} não é primo")
            break
    else:
        print(f"{num} é primo")
else:
    print("Digite um número maior que 1")</pre>
        <button onclick="copyCode('code2')">Copiar</button>
    </section>

   

    <h2>💻 Códigos Úteis para Copiar e Usar</h2>

    <h3>🐧 Linux & Terminal</h3>

     <section class="code-block">
    
    <p><strong>Instalar Oh My Zsh (oficial)</strong></p>
    <pre><code>sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"</code></pre>
</section>

 <section class="code-block">

    <p><strong>Atualizar sistema (Debian/Ubuntu)</strong></p>
    <pre><code>sudo apt update &amp;&amp; sudo apt upgrade -y</code></pre>
</section>


   
   

    <h3>🐍 Python</h3>

 <section class="code-block">
    
    <p><strong>Renomear arquivos em massa</strong></p>
    <pre><code>import os
for i, arquivo in enumerate(os.listdir(".")):
    novo = f"arquivo_{i}.txt"
    os.rename(arquivo, novo)</code></pre>

    </section>

    <h3>🔧 iTerm2 / Windows Terminal</h3>
    <p><strong>Dica pro:</strong> Assim como o <a href="https://iterm2.com">iTerm2</a> moderniza o terminal no macOS, ou o <a href="https://aka.ms/terminal">Windows Terminal</a> traz novidade ao CMD, esses códigos vão acelerar seu fluxo de trabalho. Use, modifique e compartilhe.</p>

    <h3>✅ Conclusão</h3>
    <p>Assim como o <a href="https://ohmyz.sh">Oh My Zsh</a> transforma seu terminal, ou o <a href="https://iterm2.com">iTerm2</a> moderniza sua experiência no macOS, dominar c
