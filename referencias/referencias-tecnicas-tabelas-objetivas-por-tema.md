---
layout: manual-seo
title: "Referências Técnicas — Tabelas Objetivas por Tema"
description: "Páginas técnicas com tabelas comparativas: USB, teclados, backup, init systems, pacotes."
tags: referencia, tecnico, tabela, linux, sysadmin
permalink: /referencias/
---



<section>
  <h2>Referências Técnicas</h2>
  <p>Tabelas objetivas, sem textos longos, apenas dados verificáveis.</p>

  {% assign pages = site.pages | where_exp: "page", "page.layout == 'manual-seo'" | where_exp: "page", "page.url != '/referencias/'" %}



<div class="section">
      {% for page in pages %}
      {% if page.tags contains "educacao" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>




<div class="section">
      {% for page in pages %}
      {% if page.tags contains "thunderbird" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>



  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "chat" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>



  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "usb" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>

  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "atalhos-de-teclado" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>


  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "dupeguru" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  



  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "navegadores" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
    
  
  
  
  
 
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "pc-antigo" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "repositórios" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "instalação" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "dr_prot" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "powershell" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "man-pages" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
 
  
  
   
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "geany" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "dpms" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "editor-de-video" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
   
  
  
  
  <div class="section">
      {% for page in pages %}
      {% if page.tags contains "https" %}
        <div class="ref-item">
          <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
