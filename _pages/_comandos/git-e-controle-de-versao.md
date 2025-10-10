---
layout: manual-seo
title: "Git e Controle de Versão — Comandos Linux"
description: "Guia técnico com comandos essenciais de Git e Controle de Versão. Copie, cole e use direto no terminal. Organizado por git e controle de versão."
permalink: /git-e-controle-de-versao/
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
      <td data-label="Comando"><code>git init</code></td>
      <td data-label="Descrição">Inicia repositório.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git init">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git clone https://github.com/user/repo.git</code></td>
      <td data-label="Descrição">Clona repositório.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git clone https://github.com/user/repo.git">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git status</code></td>
      <td data-label="Descrição">Mostra estado dos arquivos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git status">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git add .</code></td>
      <td data-label="Descrição">Adiciona todos os arquivos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git add .">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git add arquivo.txt</code></td>
      <td data-label="Descrição">Adiciona um arquivo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git add arquivo.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git commit -m "mensagem"</code></td>
      <td data-label="Descrição">Faz commit.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git commit -m &quot;mensagem&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git commit --amend</code></td>
      <td data-label="Descrição">Edita último commit.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git commit --amend">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git push origin main</code></td>
      <td data-label="Descrição">Envia para remoto</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git push origin main">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git pull origin main</code></td>
      <td data-label="Descrição">Puxa atualizações.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git pull origin main">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git log --oneline</code></td>
      <td data-label="Descrição">Histórico compacto.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git log --oneline">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git diff</code></td>
      <td data-label="Descrição">Mostra mudanças não adicionadas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git diff">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git diff --staged</code></td>
      <td data-label="Descrição">Mostra mudanças prontas para commit.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git diff --staged">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git checkout -b nova-branch</code></td>
      <td data-label="Descrição">Cria e muda para nova branch.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git checkout -b nova-branch">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git checkout main</code></td>
      <td data-label="Descrição">Muda para branch main.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git checkout main">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git merge nova-branch</code></td>
      <td data-label="Descrição">Faz merge</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git merge nova-branch">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git branch -d nova-branch</code></td>
      <td data-label="Descrição">Remove branch local. </td>
      <td data-label="Ação"><button class="copy-btn" data-command="git branch -d nova-branch">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git remote -v</code></td>
      <td data-label="Descrição">Mostra repositórios remotos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git remote -v">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git reset --hard HEAD~1</code></td>
      <td data-label="Descrição">Descarta último commit **e todas as alterações não commitadas**. ⚠️ Irreversível.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git reset --hard HEAD~1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>git stash</code></td>
      <td data-label="Descrição">Salva alterações não commitadas e limpa o diretório de trabalho.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git stash">📋</button></td>
    </tr>
    <tr>
  <td data-label="Comando"><code>git stash apply</code></td>
  <td data-label="Descrição">Aplica o stash mais recente **sem remover** da pilha. Seguro para evitar conflitos.</td>
  <td data-label="Ação"><button class="copy-btn" data-command="git stash apply">📋</button></td>
</tr>
    <tr>
      <td data-label="Comando"><code>git stash pop</code></td>
      <td data-label="Descrição">Aplica o stash mais recente. ⚠️ Se houver conflitos, falha e deixa mudanças parciais.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="git stash pop">📋</button></td>
    </tr>
  </tbody>
</table>
</div>



</section>
