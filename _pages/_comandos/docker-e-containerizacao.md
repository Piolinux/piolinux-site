---
layout: default
title: "🐋 Docker e Containerização — Comandos Linux"
description: "Guia técnico com comandos essenciais de Docker e Containerização. Copie, cole e use direto no terminal. Organizado por docker e containerização."
permalink: /docker-e-containerizacao/
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
      <td data-label="Comando"><code>docker run hello-world</code></td>
      <td data-label="Descrição">Testa instalação.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker run hello-world">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker run -d -p 80:80 nginx</code></td>
      <td data-label="Descrição">Inicia container em background.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker run -d -p 80:80 nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker ps</code></td>
      <td data-label="Descrição">Lista containers ativos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker ps">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker ps -a</code></td>
      <td data-label="Descrição">Lista todos os containers.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker ps -a">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker images</code></td>
      <td data-label="Descrição">Lista imagens.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker images">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker pull ubuntu:22.04</code></td>
      <td data-label="Descrição">Baixa imagem.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker pull ubuntu:22.04">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker exec -it container bash</code></td>
      <td data-label="Descrição">Entra no container.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker exec -it container bash">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker stop container</code></td>
      <td data-label="Descrição">Para container.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker stop container">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker start container</code></td>
      <td data-label="Descrição">Reinicia container.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker start container">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker rm container</code></td>
      <td data-label="Descrição">Remove container.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker rm container">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker rmi imagem</code></td>
      <td data-label="Descrição">Remove imagem.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker rmi imagem">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker logs container</code></td>
      <td data-label="Descrição">Mostra logs.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker logs container">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker build -t minha-app .</code></td>
      <td data-label="Descrição">Constrói imagem com Dockerfile.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker build -t minha-app .">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker volume create dados</code></td>
      <td data-label="Descrição">Cria volume.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker volume create dados">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker network ls</code></td>
      <td data-label="Descrição">Lista redes.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker network ls">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker-compose up -d</code></td>
      <td data-label="Descrição">Inicia serviços com docker-compose.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker-compose up -d">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker system prune</code></td>
      <td data-label="Descrição">Limpa recursos não usados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker system prune">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker inspect container</code></td>
      <td data-label="Descrição">Detalhes do container.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker inspect container">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>docker run --rm alpine echo "teste"</code></td>
      <td data-label="Descrição">Executa e remove automaticamente.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="docker run --rm alpine echo &quot;teste&quot;">📋</button></td>
    </tr>
    <tr>
  <td data-label="Comando"><code>docker tag imagem user/repo:v1</code></td>
  <td data-label="Descrição">Prepara imagem para push (não envia).</td>
  <td data-label="Ação"><button class="copy-btn" data-command="docker tag imagem user/repo:v1">📋</button></td>
</tr>
  </tbody>
</table>
</div>






</section>

