---
layout: default
title: "🚀 Comandos Avançados e Dicas — Comandos Linux"
description: "Guia técnico com comandos essenciais de Comandos Avançados e Dicas. Copie, cole e use direto no terminal. Organizado por comandos avançados e dicas."
permalink: /comandos-avancados-e-dicas/
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
      <td data-label="Comando"><code>!!</code></td>
      <td data-label="Descrição">Repete último comando.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="!!">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>!$</code></td>
      <td data-label="Descrição">Último argumento do comando anterior.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="!$">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>^antigo^novo^</code></td>
      <td data-label="Descrição">Corrige e repete comando.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="^antigo^novo^">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ctrl + r</code></td>
      <td data-label="Descrição">Busca no histórico (reverse-i-search)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ctrl + r">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>alias ll='ls -la'</code></td>
      <td data-label="Descrição">Cria atalho.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="alias ll=&#39;ls -la&#39;">📋</button></td>
    </tr>
     <tr>
      <td data-label="Comando"><code>watch -n 1 'df -h'</code></td>
      <td data-label="Descrição">Executa comando a cada 1s.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="watch -n 1 &#39;df -h&#39;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>timeout 5 comando</code></td>
      <td data-label="Descrição">Limita tempo de execução</td>
      <td data-label="Ação"><button class="copy-btn" data-command="timeout 5 comando">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>nohup comando &</code></td>
      <td data-label="Descrição">Executa mesmo após sair do terminal</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nohup comando &">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tee arquivo.txt</code></td>
      <td data-label="Descrição">Mostra saída e salva em arquivo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tee arquivo.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>curl -s http://ipinfo.io/json \| jq .ip</code></td>
      <td data-label="Descrição">Obtém IP público com formatação</td>
      <td data-label="Ação"><button class="copy-btn" data-command="curl -s http://ipinfo.io/json \| jq .ip">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>parallel -j 4 ::: comando1 comando2 comando3</code></td>
      <td data-label="Descrição">Realiza a execução de instruções de forma simultânea.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="parallel -j 4 ::: comando1 comando2 comando3">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>stdbuf -oL comando \| grep --line-buffered "erro"</code></td>
      <td data-label="Descrição">Evita buffering em pipes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="stdbuf -oL comando \| grep --line-buffered &quot;erro&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>shopt -s autocd</code></td>
      <td data-label="Descrição">Permite ir para pasta digitando só o nome.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="shopt -s autocd">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>bind -x '"\C-p":"pwd"'</code></td>
      <td data-label="Descrição">Atalho: Ctrl+P mostra caminho.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="bind -x &#39;&quot;\C-p&quot;: pwd&#39;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cal -3</code></td>
      <td data-label="Descrição">Mostra mês atual + anterior e próximo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="cal -3">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sudo apt upgrade -y</code></td>
      <td data-label="Descrição">Responde "y" automaticamente.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt upgrade -y">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>scp -r pasta/ user@host:/backup/</code></td>
      <td data-label="Descrição">Copia diretório via SSH.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="scp -r pasta/ user@host:/backup/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rsync -avz --progress pasta/ destino/</code></td>
      <td data-label="Descrição">Realiza a sincronização com a ajuda de barras de progresso.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rsync -avz --progress pasta/ destino/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>man hier</code></td>
      <td data-label="Descrição">Vamos dar uma olhada de maneira descontraída na estrutura dos diretórios do Linux.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="man hier">📋</button></td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>O que faz?</th>
      <th>Comando.</th>
      <th>Como usar.</th>
      <th>Exemplos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="O que faz?">Ativa o modo<code>autocd</code> no Bash.</td>
      <td data-label="Comando"><code>shopt -s autocd</code></td>
      <td data-label="Como usar">Abra o arquivo de configuração. <code>nano ~/.bashrc</code><br>Adicione a linha do comando no final do arquivo.<br><code>shopt -s autocd</code><br>Salve e Feche o editor.<br><code>nano: Ctrl+o, Enter, Ctrl+x</code><br>Recarregue o arquivo de configuração.<br><code>source ~/.bashrc</code></td>
      <td data-label="Exemplo"><code>Downloads</code> → entra na pasta <code>~/Downloads</code> sem digitar <code>cd</code></td>
    </tr>
    <tr>
      <td data-label="O que faz?">Desativa o modo. <code>autocd</code></td>
      <td data-label="Comando"><code>shopt -u autocd</code></td>
      <td data-label="Como usar">Se quiser desligar temporariamente.</td>
      <td data-label="Exemplo"><code>shopt -u autocd</code> → volta ao comportamento normal</td>
    </tr>
    <tr>
      <td data-label="O que faz?">Verifica se está ativo.</td>
      <td data-label="Comando"><code>shopt autocd</code></td>
      <td data-label="Como usar">Útil para scripts ou depuração.</td>
      <td data-label="Exemplo">Saída: <code>autocd on</code> ou <code>autocd off</code></td>
    </tr>
  </tbody>
</table>

</section>

