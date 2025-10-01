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
      <td data-label="Comando"><code>tar -cvf arq.tar pasta/</code></td>
      <td data-label="Descrição">Cria .tar (use caminho relativo).</td>
      <td data-label="Aviso Técnico">Nunca execute dentro de <code>pasta/</code>. Use <code>-C</code> para evitar recursão.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tar -cvf arq.tar pasta/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tar -xvf arq.tar</code></td>
      <td data-label="Descrição">Extrai .tar no diretório atual.</td>
      <td data-label="Aviso Técnico">Se o tar foi criado com caminho absoluto (<code>/pasta/</code>), extrai em <code>/pasta/</code> — cuidado com root!</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tar -xvf arq.tar">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tar -czvf arq.tar.gz pasta/</code></td>
      <td data-label="Descrição">Cria .tar.gz (gzip).</td>
      <td data-label="Aviso Técnico">Mesmo risco de caminho absoluto. Prefira: <code>tar -czvf arq.tar.gz -C /origem .</code></td>
      <td data-label="Ação"><button class="copy-btn" data-command="tar -czvf arq.tar.gz pasta/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>gzip arquivo.txt</code></td>
      <td data-label="Descrição">Comprime em .gz (apaga original).</td>
      <td data-label="Aviso Técnico">Use <code>gzip -k</code> para manter o original.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="gzip arquivo.txt">📋</button></td>
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
    <tr>
      <td data-label="Comando"><code>tar -xvf arq.tar --directory=/destino</code></td>
      <td data-label="Descrição">Extrai em diretório específico.</td>
      <td data-label="Aviso Técnico">Diretório <code>/destino</code> deve existir.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tar -xvf arq.tar --directory=/destino">📋</button></td>
    </tr>
  </tbody>
</table>
</div>


<div class="dica-final">
  💡 <strong>Dica do Piolinux:</strong> Para economizar espaço e tornar 
  a gestão dos seus arquivos mais prática, experimente utilizar os 
  comandos <code> tar -czvf </code> para compactar os seus arquivos e <code>tar 
  -xzvf</code> para descompactá-los. O detalhe que diferencia esses comandos é o parâmetro -z, que é responsável por executar a compactação no formato gzip.
</div>
<div class="aviso-final">
  ⚠️ <strong>Aviso:</strong> Importante salientar que a extração de arquivos tar provenientes de fontes não confiáveis pode executar scripts maliciosos; portanto, recomenda‑se verificar a origem dos arquivos antes de proceder à descompactação.</div>




</section>




