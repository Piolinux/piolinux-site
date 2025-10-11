---
layout: manual-seo
title: "Ferramentas para Duplicatas e Captura de Tela – Referência Técnica"
description: "Tabela com DupeGuru, fdupes, Flameshot e GIMP: instalação correta, propósito real e alternativas ativas — sem alarmismo ou comandos falsos."
permalink: /referencias/ferramentas-duplicatas-captura-tela/
categories: [linux, ferramentas, produtividade]
tags: [dupeguru, shutter, ferramentas, linux, produtividade]
---

{% include toc.html %}


<section class="post-content">




       <table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramentas.</th>
      <th>Propósito Real.</th>
      <th>Instalação. (Debian/Ubuntu)</th>
      <th>Observação Técnica.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta.">DupeGuru</td>
      <td data-label="Propósito Real.">Encontrar arquivos duplicados por conteúdo (não nome), com suporte a música (metadados) e imagens (hash visual).</td>
      <td data-label="Instalação. (Debian/Ubuntu)">
        Baixar .deb em <a href="https://dupeguru.voltaicideas.net/" target="_blank">dupeguru.voltaicideas.net</a><br>
        <code>sudo dpkg -i dupeguru_*.deb && sudo apt --fix-broken install</code>
        <button class="copy-btn" data-command="sudo dpkg -i dupeguru_*.deb && sudo apt --fix-broken install">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Não está nos repositórios oficiais. Funciona em Python 3. Requer <code>python3-pyqt5</code>.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">fdupes</td>
      <td data-label="Propósito Real">Ferramenta de terminal para encontrar duplicatas por hash. Leve, rápida, scriptável.</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>sudo apt install fdupes</code>
        <button class="copy-btn" data-command="sudo apt install fdupes">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Use com cuidado: <code>fdupes -r -d /pasta</code> remove interativamente. Sempre teste com <code>-n</code> primeiro.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Flameshot</td>
      <td data-label="Propósito Real">Captura de tela com anotações (balões, setas, texto) — substituto moderno do Shutter.</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>sudo apt install flameshot</code>
        <button class="copy-btn" data-command="sudo apt install flameshot">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Flameshot é ativo, leve e integrado com atalhos de teclado.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">GIMP</td>
      <td data-label="Propósito Real">Edição avançada de imagens (não captura de tela).</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>sudo apt install gimp</code>
        <button class="copy-btn" data-command="sudo apt install gimp">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Use para edição profunda. Não para anotações rápidas em screenshots.</td>
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
      <td data-label="Fato">Nenhum programa apaga arquivos do sistema por acidente</td>
      <td data-label="Explicação">Arquivos duplicados são de usuário (músicas, fotos). Apagar um não quebra o sistema.</td>
    </tr>
    <tr>
      <td data-label="Fato">Sempre faça backup antes de remover em massa</td>
      <td data-label="Explicação">Use <code>rsync</code> ou <code>tar</code> para copiar a pasta antes de usar <code>fdupes -d</code>.</td>
    </tr>
   </tbody>
</table>
    </section>



 

