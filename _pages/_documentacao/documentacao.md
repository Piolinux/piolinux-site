---
title: "Índice Geral da Documentação"
layout: manual-seo
permalink: /documentacao/
---

<section>


<p>Todas as páginas técnicas disponíveis, organizadas por tema.</p>

{% assign excluded_paths = "/404.html /politica-de-privacidade/ /termos-de-uso/ /sobre/ /tabela/ /indice-linux/ /documentacao/ /comandos/ /tabelas/ " | split: " " %}
{% assign all_pages = site.pages | sort: "title" %}
{% assign filtered_pages = "" | split: "" %}

{% for page in all_pages %}
  {% unless excluded_paths contains page.url %}
    {% assign filtered_pages = filtered_pages | push: page %}
  {% endunless %}
{% endfor %}

<ul class="doc-index">
  {% for page in filtered_pages %}
    <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>


</section>
