---
layout: manual-seo
title: "Ferramentas Essenciais: PDF, Captura e Documentação no Linux"
description: "Tabela técnica com Evince, Zathura, Flameshot e man pages — comandos reais, alternativas ativas e avisos sobre ferramentas obsoletas."
permalink: /ferramentas-essenciais-linux/
date: 2025-08-12
author: "PioLinux"
categories: [linux, produtividade, ferramentas]
tags: [produtividade, ferramentas, linux, terminal, geany, automação]
---



{% include toc.html %}


<section class="post-content">
     
  
            
           <table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramentas.</th>
      <th>Propósito Real.</th>
      <th>Instalações. (Debian/Ubuntu)</th>
      <th>Observações Técnica.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta">Evince</td>
      <td data-label="Propósito Real">Leitor de PDF padrão do GNOME. Suporta anotações, bookmarks, e arquivos protegidos.</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>sudo apt install evince</code>
        <button class="copy-btn" data-command="sudo apt install evince">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Leve, integrado ao sistema. Não tem edição avançada — é um visualizador, não um editor.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Zathura</td>
      <td data-label="Propósito Real">Leitor minimalista baseado em Vim (atalhos com teclado). Ideal para usar terminal.</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>sudo apt install zathura zathura-pdf-poppler</code>
        <button class="copy-btn" data-command="sudo apt install zathura zathura-pdf-poppler">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Sem GUI tradicional. Navegação com <kbd>j</kbd>/<kbd>k</kbd>, busca com <kbd>/</kbd>.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Flameshot</td>
      <td data-label="Propósito Real">Captura de tela com anotações (setas, texto, balões). Substituto moderno do Ksnip.</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>sudo apt install flameshot</code>
        <button class="copy-btn" data-command="sudo apt install flameshot">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Ksnip não está nos repositórios oficiais. Flameshot é ativo, leve e integrado a atalhos.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Documentação (man pages)</td>
      <td data-label="Propósito Real">Documentação oficial de comandos e arquivos do sistema.</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>man ls</code> (já incluso)<br>
        <code>sudo apt install man-db manpages</code>
        <button class="copy-btn" data-command="sudo apt install man-db manpages">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Use <kbd>/</kbd> para buscar dentro do <code>man</code>. Seções: 1 (comandos), 5 (arquivos), 8 (admin).</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Documentação online</td>
      <td data-label="Propósito Real">Guias completos e atualizados.</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        —
      </td>
      <td data-label="Observação Técnica"><a href="https://man7.org/linux/man-pages/" target="_blank">man7.org</a>, <a href="https://wiki.archlinux.org/" target="_blank">Arch Wiki</a> (útil mesmo em outras distros).</td>
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
      <td data-label="Fato">Pix não é um editor de imagens.</td>
      <td data-label="Explicação">É o visualizador do MATE. Não tem plugins, não edita — só exibe.</td>
    </tr>
    <tr>
      <td data-label="Fato">Ksnip não está no APT.</td>
      <td data-label="Explicação">Use <code>flatpak install flathub org.ksnip.ksnip</code> se precisar. Mas Flameshot é mais simples e disponível no APT.</td>
    </tr>
    <tr>
      <td data-label="Fato">gman está obsoleto.</td>
      <td data-label="Explicação">Não perca tempo. Leia man pages no terminal ou use <code>yelp</code> (GNOME) para interface gráfica.</td>
    </tr>
  </tbody>
</table>

</section>
 

