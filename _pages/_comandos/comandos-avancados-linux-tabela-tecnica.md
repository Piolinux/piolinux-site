---
layout: manual-seo
title: "Atalhos e Comandos Úteis do Terminal Linux — Referência Técnica"
description: "Tabela com atalhos e comandos essenciais do terminal: !!, !$, Ctrl+R, alias, nohup, rsync, timeout, tee e mais. Baseado em documentação oficial, sem riscos, copiável com 1 clique."
permalink: /atalhos-terminal/
tags: [linux, bash, terminal, cli, sysadmin, devuan, arch, gentoo]
---


<section>


<h2>Comandos Gerais.</h2>


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
      <th>Comando / Atalho</th>
      <th>Descrição Técnica</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>!!</code></td>
      <td>Repete o último comando inteiro.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="!!">📋</button></td>
    </tr>
    <tr>
      <td><code>!$</code></td>
      <td>Expande para o último argumento do comando anterior.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="!$">📋</button></td>
    </tr>
    <tr>
      <td><code>^antigo^novo^</code></td>
      <td>Substitui a primeira ocorrência de "antigo" por "novo" no último comando e executa.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="^antigo^novo^">📋</button></td>
    </tr>
    <tr>
      <td><code>Ctrl + R</code></td>
      <td>Busca interativa no histórico de comandos (<em>reverse-i-search</em>).</td>
      <td data-label="Ação">—</td>
    </tr>
    <tr>
      <td><code>alias ll='ls -la'</code></td>
      <td>Cria um atalho temporário para <code>ls -la</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="alias ll='ls -la'">📋</button></td>
    </tr>
    <tr>
      <td><code>watch -n 1 'df -h'</code></td>
      <td>Executa <code>df -h</code> a cada 1 segundo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="watch -n 1 'df -h'">📋</button></td>
    </tr>
    <tr>
      <td><code>timeout 5 comando</code></td>
      <td>Encerra o comando após 5 segundos se ainda estiver rodando.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="timeout 5 comando">📋</button></td>
    </tr>
    <tr>
      <td><code>nohup comando &amp;</code></td>
      <td>Executa em background e ignora <code>SIGHUP</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="nohup comando &">📋</button></td>
    </tr>
    <tr>
      <td><code>tee arquivo.txt</code></td>
      <td>Mostra saída no terminal e salva em arquivo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="tee arquivo.txt">📋</button></td>
    </tr>
    <tr>
      <td><code>curl -s http://ipinfo.io/json | jq .ip</code></td>
      <td>Obtém IP público com formatação limpa.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="curl -s http://ipinfo.io/json | jq .ip">📋</button></td>
    </tr>
    <tr>
      <td><code>parallel -j 4 ::: c1 c2 c3</code></td>
      <td>Executa até 4 comandos em paralelo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="parallel -j 4 ::: comando1 comando2 comando3">📋</button></td>
    </tr>
    <tr>
      <td><code>stdbuf -oL cmd | grep --line-buffered &quot;erro&quot;</code></td>
      <td>Força saída em tempo real em pipes com buffering.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="stdbuf -oL comando | grep --line-buffered &quot;erro&quot;">📋</button></td>
    </tr>
    <tr>
      <td><code>shopt -s autocd</code></td>
      <td>Permite entrar em pastas digitando só o nome.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="shopt -s autocd">📋</button></td>
    </tr>
    <tr>
      <td><code>bind -x '&quot;\C-p&quot;:&quot;pwd&quot;'</code></td>
      <td>Pressionar <code>Ctrl+P</code> executa <code>pwd</code>.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="bind -x '&quot;\C-p&quot;:&quot;pwd&quot;'">📋</button></td>
    </tr>
    <tr>
      <td><code>cal -3</code></td>
      <td>Mostra mês anterior, atual e próximo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="cal -3">📋</button></td>
    </tr>
    <tr>
      <td><code>sudo apt upgrade -y</code></td>
      <td>Atualiza pacotes com confirmação automática.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sudo apt upgrade -y">📋</button></td>
    </tr>
    <tr>
      <td><code>scp -r pasta/ user@host:/backup/</code></td>
      <td>Copia diretório recursivamente via SSH.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="scp -r pasta/ user@host:/backup/">📋</button></td>
    </tr>
    <tr>
      <td><code>rsync -avz --progress pasta/ destino/</code></td>
      <td>Sincroniza com compressão e progresso.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rsync -avz --progress pasta/ destino/">📋</button></td>
    </tr>
    <tr>
      <td><code>man hier</code></td>
      <td>Mostra estrutura hierárquica dos diretórios do Linux.</td>
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



