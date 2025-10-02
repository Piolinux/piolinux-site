---
layout: default
title: Gerador de Arquivos .txt Offline — HTML + JS Puro
description: "Crie e baixe arquivos .txt offline — sem cadastro, sem nuvem, só HTML+JS. Ideal para anotações, lembretes e configurações."
date: 2025-09-12
author: "PioLinux"
categories: [ferramentas, produtividade, utilidades]
tags: [txt, anotações, lembretes, offline, html, javascript, download, ferramenta-evergreen]
permalink: /gerador-txt-offline-anotacoes-lembretes/
---



<section>





<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramenta</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta"><a href="/utilitarios/gerador-txt.html">Gerador de TXT</a></td>
      <td data-label="Descrição">100% offline. Sem rastreamento. Código aberto.</td>
    </tr>
  </tbody>
</table>


 <textarea id="content" placeholder="Digite seu texto aqui..." rows="15" cols="30"></textarea>
<br>
<button onclick="downloadTxt()">Baixar .txt</button>

  <script>
    function downloadTxt() {
      const text = document.getElementById('content').value;
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'anotacao.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  </script>
</section>
