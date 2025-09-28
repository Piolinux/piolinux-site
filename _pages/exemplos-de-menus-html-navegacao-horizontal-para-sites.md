---
layout: default
title: "Menu HTML – Referência Técnica Acessível"
description: "Exemplos reais de menus com HTML semântico, CSS limpo e boas práticas de acessibilidade — sem ícones como texto ou divs sem sentido."
permalink: /menu-html-referencia/
categories: [html, frontend, css]
tags: [menu, html, css, navegação, frontend, código]
---


{% include toc.html %}


<section>
    
    <h3 id="menu-simples">1. Menu Simples (Semântico)</h3>
<p>Use <code><nav></code> + <code><ul></code> para navegação. Funciona com leitores de tela e SEO.</p>

<pre><code><nav class="menu-simple">
  <ul>
    <li><a href="/">Início</a></li>
    <li><a href="/sobre">Sobre</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contato">Contato</a></li>
  </ul>
</nav></code></pre>

<h3 id="css-simples">CSS para Menu Simples</h3>
<pre><code>/* Menu horizontal acessível */
.menu-simple ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  background: #2e7d32;
  padding: 0.75rem 1rem;
  border-radius: 6px;
}

.menu-simple a {
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.menu-simple a:hover,
.menu-simple a:focus {
  background: #1b5e20;
  outline: 2px solid #66bb6a;
}</code></pre>

<h3 id="dropdown">2. Dropdown Acessível (sem JavaScript)</h3>
<p>Funciona com teclado e leitores de tela. Evite ícones como texto.</p>

<pre><code><nav class="menu-dropdown">
  <ul>
    <li><a href="/">Início</a></li>
    <li class="dropdown">
      <a href="#" aria-haspopup="true" aria-expanded="false">Serviços</a>
      <ul class="submenu" role="menu">
        <li><a href="/web">Web</a></li>
        <li><a href="/mobile">Mobile</a></li>
        <li><a href="/infra">Infra</a></li>
      </ul>
    </li>
    <li><a href="/contato">Contato</a></li>
  </ul>
</nav></code></pre>

<p><strong>Nota:</strong> Para dropdown funcional com teclado, é necessário JavaScript mínimo. Evite dropdowns se não for essencial.</p>

<h3 id="boas-praticas">Boas Práticas Técnicas</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Regra</th>
      <th>Por quê?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Regra">Use <code><nav></code> + <code><ul></code></td>
      <td data-label="Por quê?">Semântica correta para SEO e acessibilidade. (leitores de tela entendem como navegação).</td>
    </tr>
    <tr>
      <td data-label="Regra">Nunca use ícones como texto. (ex: 🏠)</td>
      <td data-label="Por quê?">Quebra em navegadores antigos, não é traduzível, falha em acessibilidade.</td>
    </tr>
    <tr>
      <td data-label="Regra">Evite dropdowns complexos.</td>
      <td data-label="Por quê?">Difíceis de usar em mobile e com teclado. Prefira páginas separadas.</td>
    </tr>
    <tr>
      <td data-label="Regra">Sempre teste com teclado. (<kbd>Tab</kbd>)</td>
      <td data-label="Por quê?">Muitos usuários não usam mouse. Navegação deve funcionar com teclado.</td>
    </tr>
  </tbody>
</table>
    
    </section>
