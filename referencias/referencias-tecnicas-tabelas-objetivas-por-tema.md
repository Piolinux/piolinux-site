---
layout: manual-seo
title: "Referências Técnicas — Tabelas Objetivas por Tema"
description: "Páginas técnicas com tabelas comparativas: USB, teclados, backup, init systems, pacotes."
permalink: /referencias/
tags: [referencia, tecnico, tabela, linux, sysadmin]
---

<section>
  <h2>Referências Técnicas</h2>
  <p>Tabelas objetivas, sem textos longos, apenas dados verificáveis.</p>

  {% assign pages = site.pages | where_exp: "page", "page.layout == 'manual-seo' and page.url != '/referencias/'" %}

  <!-- Seção: USB -->
  <div class="section">
    <h3> USB / Gravação</h3>
    {% for page in pages %}
      {% if page.tags contains "usb" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <!-- Seção: Teclados -->
  <div class="section">
    <h3>️ Domine Atalhos de Teclado: Windows, macOS e Linux (Tabela)</h3>
    {% for page in pages %}
      {% if page.tags contains "atalhos-de-teclado" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>

<!-- Seção: Teclados -->
  <div class="section">
    <h3> Ferramentas para Duplicatas e Captura de Tela</h3>
    {% for page in pages %}
      {% if page.tags contains "dupeguru" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  


<!-- Seção: Teclados -->
  <div class="section">
    <h3>Navegadores Evergreen 2025: Firefox vs Chrome vs Edge</h3>
    {% for page in pages %}
      {% if page.tags contains "navegadores" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
    
  
  <!-- Seção: Teclados -->
  <div class="section">
    <h3>Instalação Técnica do Devuan – Sem systemd, com OpenRC</h3>
    {% for page in pages %}
      {% if page.tags contains "sysvinit" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  <!-- Seção: Teclados -->
  <div class="section">
    <h3>Distros Leves para PCs Antigos – Requisitos e Recomendações</h3>
    {% for page in pages %}
      {% if page.tags contains "pc-antigo" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  <!-- Seção: Teclados -->
  <div class="section">
    <h3>MX Linux – Ferramentas Técnicas e Gerenciamento de Repositórios</h3>
    {% for page in pages %}
      {% if page.tags contains "repositórios" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  <!-- Seção: Teclados -->
  <div class="section">
    <h3>Instale Ubuntu, Arch, Fedora e Mais — Tudo em Uma Tabela!</h3>
    {% for page in pages %}
      {% if page.tags contains "instalação" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  <!-- Seção: Teclados -->
  <div class="section">
    <h3>Android: Gerenciamento de Arquivos e Segurança Real</h3>
    {% for page in pages %}
      {% if page.tags contains "dr_prot" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  <!-- Seção: Teclados -->
  <div class="section">
    <h3>Compare Terminais: Linux, macOS e Windows (Tabela Completa)</h3>
    {% for page in pages %}
      {% if page.tags contains "powershell" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  <!-- Seção: Teclados -->
  <div class="section">
    <h3>Documentação no Linux – Referência Técnica</h3>
    {% for page in pages %}
      {% if page.tags contains "man-pages" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
 
  
  
   <!-- Seção: Teclados -->
  <div class="section">
    <h3>Editores de Texto no Linux – Referência Técnica</h3>
    {% for page in pages %}
      {% if page.tags contains "geany" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
   <!-- Seção: Teclados -->
  <div class="section">
    <h3>DPMS no Linux – Controle Técnico com xset</h3>
    {% for page in pages %}
      {% if page.tags contains "dpms" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
   <!-- Seção: Teclados -->
  <div class="section">
    <h3>Editores de Vídeo no Linux – Ativos vs. Abandonados</h3>
    {% for page in pages %}
      {% if page.tags contains "editor-de-video" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
   <!-- Seção: Teclados -->
  <div class="section">
    <h3>Ferramentas Essenciais: PDF, Captura e Documentação no Linux</h3>
    {% for page in pages %}
      {% if page.tags contains "pdf" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
   <!-- Seção: Teclados -->
  <div class="section">
    <h3>HTTP vs HTTPS: Diferenças Técnicas</h3>
    {% for page in pages %}
      {% if page.tags contains "https" %}
        <div class="ref-item">
          <h4><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h4>
          <p>{{ page.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
