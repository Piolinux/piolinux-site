---
layout: default
title: "📁 Arquivos e Diretórios — Comandos Linux"
description: "Guia técnico com comandos essenciais de Arquivos e Diretórios. Copie, cole e use direto no terminal. Organizado por arquivos e diretórios."
permalink: /arquivos-e-diretorios/
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
      <td data-label="Comando"><code>ls -la</code></td>
      <td data-label="Descrição">Lista arquivos ocultos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ls -la">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd ~</code></td>
      <td data-label="Descrição">Vai para o diretório home.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="cd ~">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd -</code></td>
      <td data-label="Descrição">Volta ao diretório anterior.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="cd -">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pwd</code></td>
      <td data-label="Descrição">Mostra caminho atual.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="pwd">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mkdir -p projetos/web/app</code></td>
      <td data-label="Descrição">Cria diretórios aninhados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="mkdir -p projetos/web/app">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cp -r pasta/ nova/</code></td>
      <td data-label="Descrição">Copia diretório recursivamente.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="cp -r pasta/ nova/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mv antigo.txt novo.txt</code></td>
      <td data-label="Descrição">Move ou renomeia.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="mv antigo.txt novo.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rm -rf pasta/</code></td>
      <td data-label="Descrição">Remove diretório e conteúdo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="rm -rf pasta/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>touch arquivo.log</code></td>
      <td data-label="Descrição">Cria arquivo vazio.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="touch arquivo.log">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ln -s /caminho/real link</code></td>
      <td data-label="Descrição">Cria link simbólico.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="ln -s /caminho/real link">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>find /home -name "*.log"</code></td>
      <td data-label="Descrição">Procura por nome.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="find /home -name &quot;*.log&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>find /var -size +100M</code></td>
      <td data-label="Descrição">Arquivos maiores que 100MB.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="find /var -size +100M">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>locate arquivo.conf</code></td>
      <td data-label="Descrição">Busca rápida (requer updatedb).</td>
      <td data-label="Ação"><button class="copy-btn" data-command="locate arquivo.conf">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>grep "erro" log.txt</code></td>
      <td data-label="Descrição">Procura texto em arquivo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grep &quot;erro&quot; log.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>grep -r "senha" /etc/</code></td>
      <td data-label="Descrição">Procura recursivamente.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grep -r &quot;senha&quot; /etc/">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chmod 755 script.sh</code></td>
      <td data-label="Descrição">Permissões: dono=rwx, grupo=outros=rx</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chmod 755 script.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chmod +x script.sh</code></td>
      <td data-label="Descrição">Torna executável.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chmod +x script.sh">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chown user:group arquivo.txt</code></td>
      <td data-label="Descrição">Muda dono e grupo.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chown user:group arquivo.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chgrp devs arquivo.txt.</code></td>
      <td data-label="Descrição">Muda grupo</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chgrp devs arquivo.txt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>stat arquivo.txt</code></td>
      <td data-label="Descrição">Mostra metadados. (acesso, modificação)</td>
      <td data-label="Ação"><button class="copy-btn" data-command="stat arquivo.txt">📋</button></td>
    </tr>
  </tbody>
</table>
</div>

<div class="dica-final">
  💡 <strong>Dicas do Piolinux:</strong> Utilize <code>ls -lh</code> para ver tamanhos legíveis (em MB/GB), não em blocos misteriosos.
</div>
<div class="aviso-final">
  ⚠️ <strong>Avisos:</strong> <code>rm -rf /</code> apaga tudo — até seu café da manhã. 
</div>




</section>
