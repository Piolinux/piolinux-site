---
layout: default
title: "Exemplos de Menus HTML: Navegação Horizontal para Sites"
description: "Coleção prática de menus HTML horizontais com CSS puro. Copie, cole e use em seus projetos web — sem frameworks, só código limpo."
date: 2025-09-25
author: "PioLinux"
categories: [html, frontend, css]
tags: [menu, html, css, navegação, frontend, código]
permalink: /exemplos-menus-html/
---

<section>
    <h2>
     1️⃣ Menu Horizontal Simples
    </h2>
    <div class="menu1">
     <a href="#">
      1
     </a>
     <a href="#">
      2
     </a>
     <a href="#">
      3
     </a>
     <a href="#">
      4
     </a>
    </div>
    <h3>
     🧾 Código:
    </h3>
    <pre><code>&lt;div class="menu1"&gt;
    &lt;a href="#"&gt;1&lt;/a&gt;
    &lt;a href="#"&gt;2&lt;/a&gt;
    &lt;a href="#"&gt;3&lt;/a&gt;
    &lt;a href="#"&gt;4&lt;/a&gt;
&lt;/div&gt;</code></pre>
   </section>
   <section>
    <h2>
     2️⃣ Menu com Hover Animado
    </h2>
    <div class="menu2">
     <a href="#">
      Casa
     </a>
     <a href="#">
      Artigos
     </a>
     <a href="#">
      Contato
     </a>
    </div>
    <pre><code>&lt;div class="menu2"&gt;
    &lt;a href="#"&gt;Casa&lt;/a&gt;
    &lt;a href="#"&gt;Artigos&lt;/a&gt;
    &lt;a href="#"&gt;Contato&lt;/a&gt;
&lt;/div&gt;</code></pre>
   </section>
   <section>
    <h2>
     3️⃣ Menu com Dropdown (Submenu)
    </h2>
    <div class="menu3">
     <a href="#">
      Início
     </a>
     <div class="dropdown">
      <a href="#">
       Serviços
      </a>
      <div class="dropdown-content">
       <a href="#">
        Web
       </a>
       <a href="#">
        Mobile
       </a>
       <a href="#">
        Infra
       </a>
      </div>
     </div>
    </div>
    <pre><code>&lt;div class="menu3"&gt;
    &lt;a href="#"&gt;Início&lt;/a&gt;
    &lt;div class="dropdown"&gt;
        &lt;a href="#"&gt;Serviços&lt;/a&gt;
        &lt;div class="dropdown-content"&gt;
            &lt;a href="#"&gt;Web&lt;/a&gt;
            &lt;a href="#"&gt;Mobile&lt;/a&gt;
            &lt;a href="#"&gt;Infra&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;a href="#"&gt;Contato&lt;/a&gt;
&lt;/div&gt;</code></pre>
   </section>
   <section>
    <h2>
     4️⃣ Menu com Ícones (sem dependências externas)
    </h2>
    <div class="menu4">
     <a href="#">
      🏠 Início
     </a>
     <a href="#">
      📄 Artigos
     </a>
     <a href="#">
      📧 Contato
     </a>
    </div>
    <pre><code>&lt;div class="menu4"&gt;
    &lt;a href="#"&gt;🏠 Início&lt;/a&gt;
    &lt;a href="#"&gt;📄 Artigos&lt;/a&gt;
    &lt;a href="#"&gt;📧 Contato&lt;/a&gt;
&lt;/div&gt;</code></pre>
   </section>
 <section>
 <h2>📋 Menu HTML Horizontal Simples</h2>
<p>Perfeito para quem quer navegação limpa e funcional.</p>

<h3>HTML</h3>
<pre><code><nav class="menu">
  <a href="/">Início</a>
  <a href="/sobre">Sobre</a>
  <a href="/blog">Blog</a>
  <a href="/contato">Contato</a>
</nav></code></pre>

<h3>CSS</h3>
<pre><code>.menu {
  background: #2e7d32;
  padding: 1em;
  border-radius: 8px;
}

.menu a {
  color: white;
  text-decoration: none;
  margin: 0 1em;
}

.menu a:hover {
  text-decoration: underline;
}</code></pre>


<h2>✅ Conclusão</h2>
<p>Assim como o <a href="https://iterm2.com">iTerm2</a> moderniza o terminal no macOS, ou o <a href="https://ohmyz.sh">Oh My Zsh</a> transforma seu Zsh, um bom menu HTML moderniza seu site. Use este exemplo como base — e mantenha o código limpo, sem firulas. Tudo aqui é feito para quem quer aprender de verdade.</p>
</section>
