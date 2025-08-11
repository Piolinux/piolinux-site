---
layout: default
title: "Guia Completo: Como Configurar o Jekyll no Seu Computador para Seu Site com AdSense"
date: 2025-08-11
categories: jekyll adsense tutorial
tags: [jekyll, adsense, tutorial, setup, configuração]
author: "Piolinux"
---


<style>
    body {
      font-family: Arial, sans-serif;
      background-color: #121212;
      color: #ddd;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }

    main {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      background-color: #1e1e1e;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(128, 255, 0, 0.2);
    }

    h1, h2, h3 {
      color: #80ff00;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h1 {
      font-size: 2rem;
      padding-top: 20px;
    }
    
    h2 {
      font-size: 1.5rem;
    }

    p, ul, ol {
      margin-bottom: 1rem;
      text-align: justify;
    }

    a {
      color: #80ff00;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }

    ul, ol {
      padding-left: 20px;
    }

    li {
      margin-bottom: 0.5rem;
    }

    code {
      font-family: "Courier New", Courier, monospace;
      background-color: #333;
      padding: 2px 5px;
      border-radius: 3px;
      color: #fff;
    }
    
    pre {
      background-color: #2a2a2a;
      border: 1px solid #444;
      border-left: 4px solid #80ff00;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    
    pre code {
      background-color: transparent;
      color: #ddd;
      padding: 0;
    }
    
    hr {
      border: 0;
      height: 1px;
      background-color: #444;
      margin: 2rem 0;
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
  </style>



  <main>
   

    <p>O Jekyll é um gerador de sites estáticos, conhecido por sua velocidade e segurança. É fácil de configurar e sua documentação é repleta de informações para ajudar no desenvolvimento de sites decentes e com um layout organizado. Não adianta criar várias páginas em HTML e não padronizá-las; por mais que tente, o visual pode ficar grotesco e sem intuitividade para os visitantes, além da responsividade do site poder ficar comprometida.</p>
    <p>Se você busca um site com ótimo SEO, o Jekyll cria páginas puras em HTML com um design único, ideal para quem deseja ser aprovado e ter um bom desempenho com o AdSense.</p>
    <p>Neste guia, você aprenderá como configurar o Jekyll facilmente no seu computador e seguir as diretrizes do AdSense desde o início.</p>

    <hr>

    <h2>Passo 1: Pré-requisitos para Instalar o Jekyll</h2>
    <p>Antes de começar, você precisa ter o ambiente de desenvolvimento correto.</p>
    <ul>
      <li><strong>Instale o Ruby:</strong> O Jekyll é construído em Ruby. Certifique-se de ter uma versão recente instalada no seu sistema.
        <ul>
          <li>No Windows: Use o <a href="https://rubyinstaller.org/">RubyInstaller</a>.</li>
          <li>No macOS: O Ruby já vem pré-instalado.</li>
          <li>No Linux: Use o gerenciador de pacotes da sua distribuição (<code>sudo apt install ruby-full</code> no Debian/Ubuntu).</li>
        </ul>
      </li>
      <li><strong>Instale o Bundler:</strong> O Bundler gerencia as dependências do Jekyll. Abra o terminal e execute:
        <pre><code>gem install bundler</code></pre>
      </li>
      <li><strong>Instale o Git:</strong> O Git será essencial para o controle de versão do seu projeto e para publicá-lo no GitHub Pages.</li>
    </ul>

    <hr>

    <h2>Passo 2: Instalação do Jekyll e Criação do Site</h2>
    <p>Agora, vamos criar um novo site com um layout organizado e funcional.</p>
    <ol>
      <li><strong>Instale o Jekyll:</strong> No seu terminal, execute o seguinte comando:
        <pre><code>gem install jekyll</code></pre>
      </li>
      <li><strong>Crie um novo site:</strong> Vá para a pasta onde você deseja criar o site e execute o comando. Substitua <code>meu-site-adsense</code> pelo nome do seu projeto.
        <pre><code>jekyll new meu-site-adsense</code></pre>
      </li>
      <li><strong>Entre na pasta do site:</strong>
        <pre><code>cd meu-site-adsense</code></pre>
      </li>
      <li><strong>Inicie o servidor local:</strong> O Jekyll irá construir o site e iniciará um servidor para você visualizar as mudanças em tempo real.
        <pre><code>bundle exec jekyll serve</code></pre>
        <p>Acesse o endereço que aparece no terminal, como <code>http://127.0.0.1:4000/</code>, para verificar se tudo está funcionando.</p>
      </li>
    </ol>

    <hr>

    <h2>Passo 3: Preparando o Site para o AdSense</h2>
    <p>As diretrizes do AdSense valorizam a experiência do usuário e a qualidade do conteúdo. Com o Jekyll, você pode atender a esses requisitos facilmente.</p>

    <h3>Crie Páginas Essenciais</h3>
    <p>Para ser aprovado, o Google exige que seu site tenha certas páginas. Através do Jekyll, você pode criá-las facilmente na pasta raiz do projeto.</p>
    <ul>
      <li><strong>Política de Privacidade (<code>politica-de-privacidade.md</code>):</strong> Informe aos visitantes como os dados são coletados e utilizados.</li>
      <li><strong>Termos de Uso (<code>termos-de-uso.md</code>):</strong> Deixe claras as regras de uso do seu site.</li>
      <li><strong>Sobre Nós (<code>sobre-nos.md</code>):</strong> Fale sobre você, sua missão e os objetivos do seu blog.</li>
    </ul>

    <h3>Otimize o SEO com Front Matter</h3>
    <p>O Front Matter é a seção YAML no topo dos seus arquivos <code>.md</code>. Use-o para otimizar suas postagens para o Google.</p>
    <ul>
      <li><strong><code>title</code>:</strong> Título da sua postagem.</li>
      <li><strong><code>description</code>:</strong> Uma breve descrição que aparece nos resultados de pesquisa do Google.</li>
      <li><strong><code>canonical</code>:</strong> Garante que o Google saiba qual é a versão original do seu conteúdo. Adicione a tag <code>canonical</code> no <code>&lt;head&gt;</code> do seu layout principal (<code>_layouts/default.html</code>):
        <pre><code>&lt;link rel="canonical" href="{{ page.url | absolute_url }}"&gt;</code></pre>
      </li>
    </ul>

    <hr>

    <h2>Passo 4: Adicionando o Código do AdSense</h2>
    <p>Depois que seu site for aprovado, você precisará adicionar o código de anúncios do AdSense.</p>
    <ol>
      <li><strong>Crie um Include:</strong> É uma boa prática criar um arquivo de include para o código do AdSense. Crie um arquivo em <code>_includes/adsense.html</code> e cole o código do seu anúncio nele.</li>
      <li><strong>Adicione o Include ao Layout:</strong> Abra o seu arquivo de layout principal (<code>_layouts/default.html</code>) e adicione o include onde você quer que o anúncio apareça (por exemplo, abaixo do cabeçalho ou no rodapé):
        <pre><code>&lt;body&gt;
  &lt;header&gt;...&lt;/header&gt;
  {% include adsense.html %}
  &lt;main&gt;{{ content }}&lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</code></pre>
      </li>
      <li><strong>Reinicie o Servidor:</strong> No terminal, reinicie o seu servidor local (<code>bundle exec jekyll serve</code>) para que as alterações sejam incluídas e você possa visualizá-las antes de publicar.</li>
    </ol>

    <p>Com o Jekyll, você terá um site responsivo, visualmente limpo e com funcionalidade otimizada para o Google. Está insatisfeito com o WordPress? Que tal testar o Jekyll? Você vai gostar muito!</p>
  </main>

</body>
</html>
