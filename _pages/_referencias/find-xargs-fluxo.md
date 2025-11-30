---
title: "Fluxo Seguro: find + xargs com -print0 / -0"
description: "Diagrama técnico mostrando o uso correto de find -print0 e xargs -0 para evitar falhas com nomes de arquivo contendo espaços, quebras de linha ou caracteres especiais."
layout: manual-seo
permalink: /referencias/find-xargs-fluxo/
tags: [find-xargs-fluxo,]
---

<section>

<figure>
  <img src="/assets/imagens/find-xargs-fluxo.svg" alt="Fluxo: find -print0 → xargs -0" loading="lazy">
  <figcaption>Use sempre <code>find ... -print0 | xargs -0 ...</code> para evitar falhas com nomes de arquivo complexos. A forma sem <code>-0</code> quebra em arquivos com espaço.</figcaption>
</figure>


<a href="/assets/imagens/find-xargs-fluxo.svg" 
   download="find-xargs-fluxo.svg"
   class="btn-download">
  ⤓ Baixar SVG
</a>

</section>



<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Utilização.</th>
      <th>Comandos Corretos.</th>
      <th>O que Fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Uso">Seguro com <code>trash</code></td>
      <td data-label="Comando Correto"><code>find . -name "*.tmp" -print0 | xargs -0 trash</code></td>
      <td data-label="O que Faz">Move arquivos <code>.tmp</code> para a lixeira (<code>~/.local/share/Trash</code>). Recuperável com <code>trash-list</code> e <code>trash-restore</code>.</td>
    </tr>
    <tr>
      <td data-label="Uso">Listar lixeira</td>
      <td data-label="Comando Correto"><code>trash-list</code></td>
      <td data-label="O que Faz">Mostra todos os arquivos atualmente na lixeira, com caminho original e data de exclusão.</td>
    </tr>
    <tr>
      <td data-label="Uso">Perigoso (sem <code>-print0</code>)</td>
      <td data-label="Comando Correto"><code>find . -name "*.tmp" | xargs rm.</code></td>
      <td data-label="O que Faz">Falha com nomes contendo espaço (ex: <code>relatório 2025.tmp</code> - apaga só <code>relatório.</code>).</td>
    </tr>
    <tr>
      <td data-label="Uso">Inválido (só <code>xargs -0</code>)</td>
      <td data-label="Comando Correto"><code>xargs -0 rm.</code></td>
      <td data-label="O que Faz"><strong>Não funciona sozinho.</strong> — espera entrada com null bytes. Sempre use com <code>find -print0.</code>.</td>
    </tr>
  </tbody>
</table>

<blockquote>
  <strong>Atenção:</strong> O <code>.</code> no comando significa <strong>diretório atual</strong> - não o diretório do usuário (<code>/home/user</code>) nem a raiz (<code>/</code>).  
  Para operar em outro local, substitua <code>.</code> pelo caminho 
  desejado (exemplos: <code>/tmp</code>, <code>/var/cache</code>).
</blockquote>


</section>
