---
layout: default
title: "📦 Compactação e Arquivamento — Comandos Linux"
description: "Guia técnico com comandos essenciais de Compactação e Arquivamento. Copie, cole e use direto no terminal. Organizado por compactação e arquivamento."
permalink: /compactacao-e-arquivamento/
---


<section>



<h2>🖥 Comandos Gerais.</h2>

<input type="text" oninput="filtrarLinhas(this.value)" placeholder="Filtrar comandos...">
<script>
function filtrarLinhas(termo) {
  const linhas = document.querySelectorAll('tbody tr');
  linhas.forEach(linha => {
    linha.style.display = linha.textContent.toLowerCase().includes(termo.toLowerCase()) ? '' : 'none';
  });
}
</script>


<div class="table-container">
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Descrições.</th>
      <th>Aviso Técnicos.</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  <td data-label="Ferramenta">PeaZip</td>
  <td data-label="Propósito">Compactar ou extrair arquivos com interface gráfica segura.</td>
  <td data-label="Aviso Técnico">Disponível para Linux, Windows e macOS. Evita riscos de comandos manuais com caminhos absolutos.</td>
</tr>
    <tr>
  <td data-label="Ferramenta">Interface gráfica (PeaZip, File Roller, Ark)</td>
  <td data-label="Propósito">Compactação segura sem risco de sobrescrita acidental.</td>
  <td data-label="Aviso Técnico">Prefira GUIs em emergência. Comandos como <code>tar</code> exigem cuidado com caminhos absolutos.</td>
</tr>
    </tr>
    <tr>
      <td data-label="Comando"><code>7z a arq.7z pasta/</code></td>
      <td data-label="Descrição">Cria .7z</td>
      <td data-label="Aviso Técnico">Requer <code>sudo apt install p7zip-full</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="7z a arq.7z pasta/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tar -I zstd -cvf arq.tar.zst pasta/</code></td>
      <td data-label="Descrição">Compactação Zstandard (rápida)</td>
      <td data-label="Aviso Técnico">Requer <code>sudo apt install zstd</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tar -I zstd -cvf arq.tar.zst pasta/">📋</button></td>
    </tr>
   </tbody>
</table>
</div>






</section>




