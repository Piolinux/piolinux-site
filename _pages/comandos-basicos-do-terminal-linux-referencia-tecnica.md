---
layout: default
title: "Comandos Básicos do Terminal Linux – Referência Técnica"
description: "Tabela objetiva com navegação, arquivos, ajuda e sistema — comandos reais, exemplos úteis e alternativas seguras. Sem fluff."
permalink: /comandos-basicos-terminal/
categories: [linux, terminal, produtividade]
tags: [terminal, comandos, linux, awk, sed, find, xargs, produtividade]
---


{% include toc.html %}




<section class="post-content">
    
    
    <table class="evergreen-table">
  <thead>
    <tr>
      <th>Categoria</th>
      <th>Comando</th>
      <th>Exemplo Útil</th>
      <th>O que faz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Categoria">Navegação.</td>
      <td data-label="Comando"><code>pwd</code></td>
      <td data-label="Exemplo Útil"><code>pwd</code></td>
      <td data-label="O que faz">Mostra o diretório atual.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Navegação.</td>
      <td data-label="Comando"><code>cd</code></td>
      <td data-label="Exemplo Útil">
        <code>cd ~/Documentos</code>
        <button class="copy-btn" data-command="cd ~/Documentos">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Entra na pasta Documentos do usuário.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Navegação</td>
      <td data-label="Comando"><code>cd ..</code></td>
      <td data-label="Exemplo Útil">
        <code>cd ..</code>
        <button class="copy-btn" data-command="cd ..">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Volta um nível no diretório.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Listagem.</td>
      <td data-label="Comando"><code>ls -lh</code></td>
      <td data-label="Exemplo Útil">
        <code>ls -lh /etc</code>
        <button class="copy-btn" data-command="ls -lh /etc">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Lista arquivos com permissões, tamanho legível (KB/MB)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Listagem.</td>
      <td data-label="Comando"><code>ls -la</code></td>
      <td data-label="Exemplo Útil">
        <code>ls -la ~/.config</code>
        <button class="copy-btn" data-command="ls -la ~/.config">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra arquivos ocultos (começam com <code>.</code>)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>touch</code></td>
      <td data-label="Exemplo Útil">
        <code>touch script.sh</code>
        <button class="copy-btn" data-command="touch script.sh">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Cria arquivo vazio ou atualiza timestamp.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>mkdir -p</code></td>
      <td data-label="Exemplo Útil">
        <code>mkdir -p Projetos/2025/web</code>
        <button class="copy-btn" data-command="mkdir -p Projetos/2025/web">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Cria diretórios aninhados.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>cp -r</code></td>
      <td data-label="Exemplo Útil">
        <code>cp -r Pasta/ Backup/</code>
        <button class="copy-btn" data-command="cp -r Pasta/ Backup/">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Copia diretório recursivamente.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>mv</code></td>
      <td data-label="Exemplo Útil">
        <code>mv antigo.txt novo.txt</code>
        <button class="copy-btn" data-command="mv antigo.txt novo.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Renomeia ou move arquivo.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>rm -i</code></td>
      <td data-label="Exemplo Útil">
        <code>rm -i arquivo.txt</code>
        <button class="copy-btn" data-command="rm -i arquivo.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Remove com confirmação (seguro)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Ajuda.</td>
      <td data-label="Comando"><code>man</code></td>
      <td data-label="Exemplo Útil">
        <code>man grep</code>
        <button class="copy-btn" data-command="man grep">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra manual completo (pressione <kbd>q</kbd> para sair)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Ajuda.</td>
      <td data-label="Comando"><code>--help</code></td>
      <td data-label="Exemplo Útil">
        <code>ls --help</code>
        <button class="copy-btn" data-command="ls --help">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra opções rápidas do comando.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Sistema</td>
      <td data-label="Comando"><code>uname -a</code></td>
      <td data-label="Exemplo Útil">
        <code>uname -a</code>
        <button class="copy-btn" data-command="uname -a">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra versão do kernel e arquitetura.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Sistema.</td>
      <td data-label="Comando"><code>htop</code></td>
      <td data-label="Exemplo Útil">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Monitora processos em tempo real. (instale com <code>sudo apt install htop</code>)</td>
    </tr>
  </tbody>
</table>

<h3 id="avisos">Avisos Técnicos (não são "dicas")</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comando Perigoso</th>
      <th>Alternativa Segura</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando Perigoso"><code>rm -rf /</code></td>
      <td data-label="Alternativa Segura">Nunca execute. Use <code>rm -i</code> para confirmação.</td>
    </tr>
    <tr>
      <td data-label="Comando Perigoso"><code>rm -rf *</code></td>
      <td data-label="Alternativa Segura">Verifique o diretório com <code>pwd</code> antes de remover.</td>
    </tr>
    <tr>
      <td data-label="Comando Perigoso"><code>chmod 777</code></td>
      <td data-label="Alternativa Segura">Use permissões mínimas: <code>600</code> (arquivos), <code>700</code> (pastas).</td>
    </tr>
  </tbody>
</table>
    
     </section>




