---
layout: default
title: "✂️ Edição de Texto e Filtros — Comandos Linux"
description: "Guia técnico com comandos essenciais de Edição de Texto e Filtros. Copie, cole e use direto no terminal. Organizado por edição de texto e filtros."
permalink: /edicao-de-texto-e-filtros/
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
      <th>Avisos Técnicos.</th>
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>grep "error" /var/log/syslog</code></td>
      <td data-label="Descrição">Procura "error" em logs reais.</td>
      <td data-label="Aviso Técnico">Logs usam inglês. Substitua <code>"erro"</code> por <code>"error"</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grep &quot;error&quot; /var/log/syslog">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>grep -i "error" log.txt</code></td>
      <td data-label="Descrição">Ignora maiúsculas/minúsculas.</td>
      <td data-label="Aviso Técnico">Útil para logs com <code>Error</code>, <code>ERROR</code>, etc.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grep -i &quot;error&quot; log.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>grep -v "ok" log.txt</code></td>
      <td data-label="Descrição">Mostra linhas SEM "ok"</td>
      <td data-label="Aviso Técnico">Inverte a lógica: só mostra o que **não corresponde**.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grep -v &quot;ok&quot; log.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>uniq arquivo.txt</code></td>
      <td data-label="Descrição">Remove duplicatas consecutivas.</td>
      <td data-label="Aviso Técnico">Use <code>sort arquivo.txt | uniq</code> para remover **todas** as duplicatas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sort arquivo.txt | uniq">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tail -n 20 arquivo.txt</code></td>
      <td data-label="Descrição">Mostra as últimas 20 linhas.</td>
      <td data-label="Aviso Técnico">Se o arquivo tem menos de 20 linhas, mostra **todas**.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tail -n 20 arquivo.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tail -f /var/log/syslog</code></td>
      <td data-label="Descrição">Monitora logs em tempo real.</td>
      <td data-label="Aviso Técnico">Pressione <kbd>Ctrl.</kbd>+<kbd>C</kbd> para sair.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tail -f /var/log/syslog">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>awk '/error/ {print}' /var/log/syslog</code></td>
      <td data-label="Descrição">Filtra linhas com "error".</td>
      <td data-label="Aviso Técnico">Totalmente eficiente superando o comando<code>grep</code> em scripts complexos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="awk &#39;/error/ {print}&#39; /var/log/syslog">📋</button></td>
    </tr>
  </tbody>
</table>
</div>





</section>

