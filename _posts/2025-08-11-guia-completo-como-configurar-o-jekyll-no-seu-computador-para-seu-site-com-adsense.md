---
layout: default
title: "Guia Completo: Como Configurar o Jekyll no Seu Computador para Seu Site com AdSense"
date: 2025-08-11
categories: jekyll adsense tutorial
tags: [jekyll, adsense, tutorial, setup, configuração]
author: "Piolinux"
---

<main>

Guia Completo: Como Configurar o Jekyll no Seu Computador para Seu Site com AdSense

O Jekyll é um gerador de sites estáticos, conhecido por sua velocidade e segurança. É fácil de configurar e sua documentação é repleta de informações para ajudar no desenvolvimento de sites decentes e com um layout organizado. Não adianta criar várias páginas em HTML e não padronizá-las; por mais que tente, o visual pode ficar grotesco e sem intuitividade para os visitantes, além da responsividade do site poder ficar comprometida.

Se você busca um site com ótimo SEO, o Jekyll cria páginas puras em HTML com um design único, ideal para quem deseja ser aprovado e ter um bom desempenho com o AdSense.

Neste guia, você aprenderá como configurar o Jekyll facilmente no seu computador e seguir as diretrizes do AdSense desde o início.


  Passo 1: Pré-requisitos para Instalar o Jekyll

Antes de começar, você precisa ter o ambiente de desenvolvimento correto.

   Instale o Ruby: O Jekyll é construído em Ruby. Certifique-se de ter uma versão recente instalada no seu sistema.
       No Windows: Use o RubyInstaller.
       No macOS: O Ruby já vem pré-instalado.
       No Linux: Use o gerenciador de pacotes da sua distribuição (sudo apt install ruby-full no Debian/Ubuntu).
   Instale o Bundler: O Bundler gerencia as dependências do Jekyll. Abra o terminal e execute:
    gem install bundler
   Instale o Git: O Git será essencial para o controle de versão do seu projeto e para publicá-lo no GitHub Pages.


  Passo 2: Instalação do Jekyll e Criação do Site

Agora, vamos criar um novo site com um layout organizado e funcional.

1.  Instale o Jekyll: No seu terminal, execute o seguinte comando:
    gem install jekyll
2.  Crie um novo site: Vá para a pasta onde você deseja criar o site e execute o comando. Substitua meu-site-adsense pelo nome do seu projeto.
    jekyll new meu-site-adsense
3.  Entre na pasta do site:
    cd meu-site-adsense
4.  Inicie o servidor local: O Jekyll irá construir o site e iniciará um servidor para você visualizar as mudanças em tempo real.
    bundle exec jekyll serve
   Acesse no terminal esse emdereço que aparece http://127.0.0.1:4000/ para verifiqcar se está funcionando.




  Passo 3: Preparando o Site para o AdSense

As diretrizes do AdSense valorizam a experiência do usuário e a qualidade do conteúdo. Com o Jekyll, você pode atender a esses requisitos facilmente.

 Crie Páginas Essenciais

Para ser aprovado, o Google exige que seu site tenha certas páginas. Atráves doJekyll, você pode criá-las essas paginas facilmente na pasta raiz do projeto.

   Política de Privacidade (politica-de-privacidade.md): Informe aos visitantes como os dados são coletados e utilizados.
   Termos de Uso (termos-de-uso.md): Deixe bem claro da regras de uso do seu site.
   Sobre Nós (sobre-nos.md): Fale sobre você, sua missão e os objetivos do seu blog.

  Otimize o SEO com Front Matter

O Front Matter é a seção YAML no topo dos seus arquivos .md. Use-o para otimizar suas postagens para o Google.

   title: Título da sua postagem.
   description: Uma breve descrição que aparece nos resultados de pesquisa do Google.
   canonical: Garante que o Google saiba qual é a versão original do seu conteúdo. Adicione a tag canonical no \<head\> do seu layout principal (\_layouts/default.html):
    \<link rel="canonical" href="{{ page.url | absolute\_url }}"\>



  Passo 4: Adicionando o Código do AdSense

Depois que seu site for aprovado, você precisará adicionar o código de anúncios do AdSense.

1.  Crie um Include: É uma boa prática criar um arquivo de include para o código do AdSense. Crie um arquivo em \_includes/adsense.html e cole o código do seu anúncio nele.
2.  Adicione o Include ao Layout: Abra o seu arquivo de layout principal (\_layouts/default.html) e adicione o include onde você quer que o anúncio apareça (por exemplo, abaixo do cabeçalho ou no rodapé):
   \<body\>
    \<header\>...\</header\>
    {% include adsense.html %}
    \<main\>{{ content }}\</main\>
    \<footer\>...\</footer\>
    \</body\>
3.  Reinicie o Servidor: No terminal, reinicie o seu servidor local (bundle exec jekyll serve) para que as alterações sejam incluídas e você possa visualizá-las antes de publicar.

</main>


Com o Jekyll, você terá um site responsivo, visualmente limpo e com funcionalidade otimizada para o Google. Está insatisfeito com o WordPress? Que tal testar o Jekyll? Você vai gostar muito\!
