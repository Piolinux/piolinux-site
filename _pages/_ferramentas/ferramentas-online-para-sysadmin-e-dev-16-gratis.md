---
layout: default
title: Ferramentas Online para SysAdmin e Dev — +16 grátis
description: 'Calcule IP, gere senhas, converta chmod, crie slugs, monte comandos Docker. Tudo online, sem cadastro, 100% grátis.'
permalink: /ferramentas/
tags: [ferramentas, sysadmin, dev, linux, online] 
---



<section>

<main>
  <h2>16+ Ferramentas Online — SysAdmin, Dev, Linux</h2>
  <p>{{ page.description }}</p>

  <!-- Links de categoria (sem JS) -->
  <div class="filter-buttons">
    <a href="/ferramentas/" class="filter-btn {% if page.url == '/ferramentas/' %}active{% endif %}">[todos]</a>
    <a href="/ferramentas/sysadmin/" class="filter-btn">[sysadmin]</a>
    <a href="/ferramentas/dev/" class="filter-btn">[dev]</a>
    <a href="/ferramentas/data/" class="filter-btn">[data]</a>
    <a href="/ferramentas/design/" class="filter-btn">[design]</a>
  </div>




  <!-- Grid de ferramentas -->
  <div class="tools-grid">
    {% assign tools = site.pages | where_exp: "page", "page.url contains '/ferramentas/'" | where_exp: "page", "page.url != '/ferramentas/'" %}
    {% for tool in tools %}
      {% assign category = "dev" %}
      {% if tool.tags contains "sysadmin" %}
        {% assign category = "sysadmin" %}
      {% elsif tool.tags contains "data" %}
        {% assign category = "data" %}
      {% elsif tool.tags contains "design" %}
        {% assign category = "design" %}
      {% elsif tool.tags contains "seo" %}
        {% assign category = "seo" %}
      {% endif %}
      {% include tool-card.html url=tool.url title=tool.title category=category %}
    {% endfor %}
  </div>

</main>
</section>



<style>
./* Título verde (seu tema default) */
.index-card h2 a {
  color: #00ff9d; /* verde terminal */
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
}

/* Descrição cinza claro */
.index-card p {
  color: #a0a0a0;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

/* Card fundo escuro */
.index-card {
  background: #1a1a2e;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #333;
}
</style>


