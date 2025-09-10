---
layout: default
title: "Você Viu o Cadeadinho Verde? Entenda HTTP vs HTTPS"
description: "Entenda de forma simples a diferença entre HTTP e HTTPS, por que o cadeadinho verde importa e como o HTTPS protege seus dados na web."
date: 2025-09-01 09:00:00 -0300
categories: [segurança, web, dica]
tags: [http, https, segurança, iniciantes]
permalink: /http-vs-https/
---

{% include toc.html %}


<section class="post-content">



<p>Você viu aquele <strong>cadeadinho verde</strong>? Ele é legal, não é?<br>
E o site que começa com <code>http://</code> e outro com <code>https://</code>?<br>
Parece igual, mas não é!</p>

<p>A diferença entre <strong>HTTP e HTTPS</strong> é fácil.<br>
Mas ela é muito importante para você ficar seguro na internet.</p>

<p>Neste guia, você vai aprender:</p>
<ul>
  <li>O que é HTTP</li>
  <li>O que é HTTPS</li>
  <li>Qual a diferença entre eles</li>
  <li>Por que o HTTPS é muito importante hoje</li>
  <li>E tudo em uma <strong>tabelinha fácil de ver</strong></li>
</ul>

<h2>O que é HTTP?</h2>
<p>HTTP é como seu computador fala com o site.<br>
Ele pede as páginas para você ver.</p>
<p>Quando você escreve um site, seu computador pede a página.</p>
<p>Mas tem um probleminha:<br>
Os dados viajam <strong>abertos</strong>.<br>
Alguém pode ver o que você escreve.<br>
Não é seguro, sabe?</p>

<h2>O que é HTTPS?</h2>
<p>HTTPS é o <strong>irmão seguro do HTTP</strong>.<br>
O “S” quer dizer <strong>Seguro</strong>!</p>
<p>Ele esconde a conversa do seu computador com o site.<br>
Assim:</p>
<ul>
  <li>Suas senhas</li>
  <li>Seus logins</li>
  <li>Suas informações de dinheiro</li>
</ul>
<p>Tudo fica escondido de quem quer ver.</p>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Item</th>
      <th>HTTP</th>
      <th>HTTPS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Item"><strong>Segurança</strong></td>
      <td data-label="HTTP">❌ Dados em texto puro</td>
      <td data-label="HTTPS">✅ Dados criptografados</td>
    </tr>
    <tr>
      <td data-label="
    
      Item"><strong>Porta</strong></td>
      <td data-label="HTTP">80</td>
      <td data-label="HTTPS">443</td>
    </tr>
    <tr>
      <td data-label="
    
      Item"><strong>Certificado</strong></td>
      <td data-label="HTTP">Não precisa</td>
      <td data-label="HTTPS">Necessário (SSL/TLS)</td>
    </tr>
    <tr>
      <td data-label="
    
      Item"><strong>Google</strong></td>
      <td data-label="HTTP">Desencoraja</td>
      <td data-label="HTTPS">Prefere</td>
    </tr>
  </tbody>
</table>



<h2>📊 Tabela: HTTP e HTTPS</h2>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>
    
      Característica</th>
      <th>HTTP</th>
      <th>HTTPS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Característica">Nome completo</td>
      <td data-label="HTTP">HyperText Transfer Protocol</td>
      <td data-label="HTTPS">HyperText Transfer Protocol Seguro</td>
    </tr>
    <tr>
      <td data-label="
    
      Característica">Porta</td>
      <td data-label="HTTP">80</td>
      <td data-label="HTTPS">443</td>
    </tr>
    <tr>
      <td data-label="
    
      Característica">Usa segredo?</td>
      <td data-label="HTTP">Não</td>
      <td data-label="HTTPS">Sim</td>
    </tr>
    <tr>
      <td data-label="
    
      Característica">Dados escondidos?</td>
      <td data-label="HTTP">Não</td>
      <td data-label="HTTPS">Sim</td>
    </tr>
    <tr>
      <td data-label="
    
      Característica">Esconde de quem espia?</td>
      <td data-label="HTTP">Não</td>
      <td data-label="HTTPS">Sim</td>
    </tr>
    <tr>
      <td data-label="
    
      Característica">Esconde de sites falsos?</td>
      <td data-label="HTTP">Não</td>
      <td data-label="HTTPS">Sim</td>
    </tr>
    <tr>
      <td data-label="
    
      Característica">Mostra cadeado?</td>
      <td data-label="HTTP">Não</td>
      <td data-label="HTTPS">Sim (🔒)</td>
    </tr>
  </tbody>
</table>

<h2>O Google gosta mais do HTTPS</h2>
<p>🧑‍🤝‍🧑 Usuários confiam mais em sites com cadeado<br>
O cadeado verde passa segurança.<br>
Sem ele, as pessoas saem do site.</p>

<h2>Como o HTTPS funciona?</h2>
<ul>
  <li>O site tem um certificado de segurança (chamado SSL/TLS)</li>
  <li>Quando você entra, o navegador e o site fazem um aperto de mãos seguro</li>
  <li>Toda a conversa depois disso é criptografada</li>
  <li>O cadeado (🔒) aparece na barra de endereços</li>
</ul>
<p>✅ Hoje, você pode ter HTTPS grátis com <a href="https://letsencrypt.org" target="_blank">Let’s Encrypt</a></p>

<h2>💡 Dica final</h2>
<p>Se você ver <code>http://</code> → <strong>desconfie</strong><br>
Se você ver <code>https://</code> + 🔒 → <strong>pode continuar tranquilo</strong></p>

<p>Se você tem um site:<br>
➡️ <strong>Ative o HTTPS agora</strong> — é obrigatório.</p>

<p>Você navega na internet:<br>
➡️ <strong>Nunca digite senhas em sites com <code>http://</code></strong></p>

