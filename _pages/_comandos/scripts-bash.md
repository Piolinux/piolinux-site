---
layout: manual-seo
title: "📜 Scripts Bash — Comandos Linux"
description: "Guia técnico com comandos essenciais de Scripts Bash. Copie, cole e use direto no terminal. Organizado por scripts bash."
permalink: /scripts-bash-comandos/
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
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>#!/bin/bash</code></td>
      <td data-label="Descrição">Shebang padrão.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="#!/bin/bash">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>echo "Olá, $USER"</code></td>
      <td data-label="Descrição">Imprime variável.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="echo &quot;Olá, $USER&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>read nome</code></td>
      <td data-label="Descrição">Lê entrada do usuário.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="read nome">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>if [ "$valor" = "ok" ]; then</code></td>
      <td data-label="Descrição">Estrutura if.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="if [ &quot;$valor&quot; = &quot;ok&quot; ]; then">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>for i in {1..5}; do</code></td>
      <td data-label="Descrição">Loop for.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="for i in {1..5}; do">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>while [ $x -lt 10 ]; do</code></td>
      <td data-label="Descrição">Loop while.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="while [ $x -lt 10 ]; do">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>case $op in</code></td>
      <td data-label="Descrição">Estrutura case</td>
      <td data-label="Ação"><button class="copy-btn" data-command="case $op in">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>function nome() {}</code></td>
      <td data-label="Descrição">Define função.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="function nome() {}">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>source script.sh</code></td>
      <td data-label="Descrição">Carrega script no shell atual.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="source script.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>set -e</code></td>
      <td data-label="Descrição">Interrompe script em erro.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="set -e">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>set -x</code></td>
      <td data-label="Descrição">Exibe comandos antes de executar.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="set -x">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>trap 'echo "Saindo..."' EXIT</code></td>
      <td data-label="Descrição">Realiza a execução ao proceder à saída.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="trap &#39;echo &quot;Saindo...&quot;&#39; EXIT">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>$0, $1, $2</code></td>
      <td data-label="Descrição">Nome do script e argumentos</td>
      <td data-label="Ação"><button class="copy-btn" data-command="$0, $1, $2">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>$?</code></td>
      <td data-label="Descrição">Código de saída do último comando.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="$?">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>$$</code></td>
      <td data-label="Descrição">PID do script.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="$$">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>$(comando)</code></td>
      <td data-label="Descrição">Substituição de comando.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="$(comando)">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>[[ -f arquivo.txt ]]</code></td>
      <td data-label="Descrição">Testa se arquivo existe</td>
      <td data-label="Ação"><button class="copy-btn" data-command="[[ -f arquivo.txt ]]">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chmod +x script.sh</code></td>
      <td data-label="Descrição">Torna script executável.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chmod +x script.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>./script.sh arg1 arg2</code></td>
      <td data-label="Descrição">Execute o script utilizando os parâmetros necessários.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="./script.sh arg1 arg2">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>getopts</code></td>
      <td data-label="Descrição">Executa alternativas através de comandos no terminal.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="getopts">📋</button></td>
    </tr>
  </tbody>
</table>
</div>

 





</section>


