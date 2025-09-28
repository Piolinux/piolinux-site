---
layout: default
title: "DOSBox e Double Commander – Referência Técnica"
description: "Tabela com comandos corretos de instalação, uso real e avisos técnicos — sem nostalgia, só utilidade prática."
permalink: /dosbox-double-commander/
date: 2025-08-12
author: "PioLinux"
categories: [linux, retro, ferramentas]
tags: [dosbox, double-commander, emulação, gerenciador-de-arquivos, nostalgia]
---


{% include toc.html %}


<section class="post-content">
           
       <p>Comandos verificados para instalar e usar DOSBox (emulador MS-DOS) e Double Commander (gerenciador de arquivos em painel duplo) — sem recomendações obsoletas ou práticas inseguras como executar GUI como root.</p>

    <table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramentas.</th>
      <th>Propósito Real.</th>
      <th>Comandos de Instalação.</th>
      <th>Observação Técnica.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta">DOSBox</td>
      <td data-label="Propósito Real">Emulador de ambiente MS-DOS para rodar jogos e programas antigos.</td>
      <td data-label="Comando de Instalação">
        <code>sudo apt install dosbox</code>
        <button class="copy-btn" data-command="sudo apt install dosbox">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Dentro do DOSBox, use <code>mount c ~/Jogos</code> e <code>c:</code> para acessar. Não é case-sensitive.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Double Commander (GTK)</td>
      <td data-label="Propósito Real">Gerenciador de arquivos com painel duplo, inspirado no Total Commander.</td>
      <td data-label="Comando de Instalação">
        <code>sudo apt install doublecmd-gtk</code>
        <button class="copy-btn" data-command="sudo apt install doublecmd-gtk">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Não execute como root. Para arquivos do sistema, use <code>sudo</code> no terminal ou monte com permissões corretas.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Double Commander (Qt)</td>
      <td data-label="Propósito Real">Mesmo que GTK, mas com interface Qt (melhor integração no KDE).</td>
      <td data-label="Comando de Instalação">
        <code>sudo apt install doublecmd-qt</code>
        <button class="copy-btn" data-command="sudo apt install doublecmd-qt">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Prefira esta versão se usar KDE Plasma.</td>
    </tr>
  </tbody>
</table>

<h3 id="avisos">Avisos Técnicos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Fato</th>
      <th>Explicação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">DOSBox não é case-sensitive</td>
      <td data-label="Explicação">Emula o MS-DOS, que trata <code>ARQUIVO.TXT</code> e <code>arquivo.txt</code> como o mesmo arquivo.</td>
    </tr>
    <tr>
      <td data-label="Fato">Não use GUI como root</td>
      <td data-label="Explicação"><code>gksudo</code> está obsoleto. Use <code>pkexec doublecmd</code> apenas se necessário, mas evite.</td>
    </tr>
    <tr>
      <td data-label="Fato">Montagem é feita dentro do DOSBox</td>
      <td data-label="Explicação">O comando <code>mount</code> só funciona no prompt do DOSBox, não no terminal do Linux.</td>
    </tr>
  </tbody>
</table>
        </section>
 


  <script>
document.addEventListener('click', function(e) {
  if (e.target.matches('.copy-btn')) {
    const cmd = e.target.dataset.command; // ← aqui estava "cmd", agora é "command"
    if (cmd) {
      navigator.clipboard.writeText(cmd).then(() => {
        const original = e.target.textContent;
        e.target.textContent = '✓ Copiado!';
        setTimeout(() => e.target.textContent = original, 1500);
      }).catch(err => {
        console.warn('Falha ao copiar:', err);
      });
    }
  }
});
</script>

