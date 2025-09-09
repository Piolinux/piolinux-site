---
title: "Gerador de Front Matter Jekyll: Slug + Categorias"
date: 2025-09-09
description: "Ferramenta HTML+JS para gerar front matter do Jekyll com slug automático, tags, categorias e excerpt — sem instalar nada, 100% offline."
tags: ["jekyll", "yaml", "front matter", "produtividade", "devtools"]
categories: ["Desenvolvimento", "Ferramentas"]
permalink: /gerador-front-matter-jekyll
layout: default
---







<section class="post-content">



<style>
    
    
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #FFFFFF;
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;
    }
    button {
      background: #3498db;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin: 5px;
    }
    button:hover {
      background: #2980b9;
    }
    #output {
      margin-top: 30px;
      background: #2c3e50;
      color: #ecf0f1;
      padding: 20px;
      border-radius: 6px;
      white-space: pre-wrap;
      font-family: 'Courier New', monospace;
      overflow-x: auto;
    }
    .actions {
      margin-top: 20px;
      text-align: center;
    }
    .tag-input {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      margin-top: 5px;
    }
    .tag {
      background: #3498db;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .tag button {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0;
      font-size: 14px;
      margin: 0;
    }
  </style>


<div>
    <label>Título do Post:</label><br>
    <input type="text" id="title" placeholder="ex: Ferramentas Evergreen para Linux" oninput="gerarSlug()">
  </div><br>

  <div>
    <label>Data (AAAA-MM-DD):</label><br>
    <input type="date" id="date">
  </div><br>

  <div>
    <label>Permalink (gerado automaticamente):</label><br>
    <input type="text" id="permalink" readonly>
  </div><br>

  <div>
    <label>Excerpt (resumo):</label><br>
    <textarea id="excerpt" rows="3" placeholder="Resumo curto para aparecer na listagem de posts"></textarea>
  </div><br>

  <div>
    <label>Tags (pressione Enter ou clique em "+"):</label><br>
    <input type="text" id="tag-input" placeholder="linux" onkeydown="if(event.key==='Enter') addTag(event)">
    <button type="button" onclick="addTag()">➕ Adicionar Tag</button>
    <div id="tags-container"></div>
  </div><br>

  <div>
    <label>Categories (pressione Enter ou clique em "+"):</label><br>
    <input type="text" id="category-input" placeholder="DevOps" onkeydown="if(event.key==='Enter') addCategory(event)">
    <button type="button" onclick="addCategory()">➕ Adicionar Categoria</button>
    <div id="categories-container"></div>
  </div><br>

  <div>
    <label>Layout (opcional):</label><br>
    <input type="text" id="layout" value="post">
  </div><br>

  <button onclick="gerarYAML()">✅ Gerar YAML</button>
  <button onclick="baixarYAML()">📥 Baixar .yml</button>
  <button onclick="limpar()">🗑️ Limpar</button>

  <hr>

  <div>
    <h3>Resultado:</h3>
    <pre id="output" style="background:#f4f4f4; padding:15px; border-radius:5px; white-space: pre-wrap;"></pre>
  </div>

  <script>
    let tags = [];
    let categories = [];

    function gerarSlug() {
      const title = document.getElementById('title').value;
      let slug = title
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
        .replace(/[^a-z0-9]+/g, '-') // substitui não-alfanuméricos por -
        .replace(/^-+/, '').replace(/-+$/, ''); // remove - do início/fim
      document.getElementById('permalink').value = slug ? '/' + slug : '';
    }

    function addTag(event) {
      const input = document.getElementById('tag-input');
      const tag = input.value.trim();
      if (tag && !tags.includes(tag)) {
        tags.push(tag);
        renderTags();
        input.value = '';
      }
      if (event) event.preventDefault();
    }

    function renderTags() {
      const container = document.getElementById('tags-container');
      container.innerHTML = '';
      tags.forEach((tag, index) => {
        const span = document.createElement('span');
        span.innerHTML = `${tag} <button type="button" onclick="removeTag(${index})" style="margin-left:5px;">×</button> `;
        container.appendChild(span);
      });
    }

    function removeTag(index) {
      tags.splice(index, 1);
      renderTags();
    }

    function addCategory(event) {
      const input = document.getElementById('category-input');
      const cat = input.value.trim();
      if (cat && !categories.includes(cat)) {
        categories.push(cat);
        renderCategories();
        input.value = '';
      }
      if (event) event.preventDefault();
    }

    function renderCategories() {
      const container = document.getElementById('categories-container');
      container.innerHTML = '';
      categories.forEach((cat, index) => {
        const span = document.createElement('span');
        span.innerHTML = `${cat} <button type="button" onclick="removeCategory(${index})" style="margin-left:5px;">×</button> `;
        container.appendChild(span);
      });
    }

    function removeCategory(index) {
      categories.splice(index, 1);
      renderCategories();
    }

    function escapeYAML(str) {
      if (!str) return '';
      return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    }

    function gerarYAML() {
      const title = document.getElementById('title').value.trim();
      const date = document.getElementById('date').value;
      const permalink = document.getElementById('permalink').value.trim();
      const excerpt = document.getElementById('excerpt').value.trim();
      const layout = document.getElementById('layout').value.trim();

      if (!title || !date || !permalink) {
        alert("Preencha Título, Data e Permalink.");
        return;
      }

      let yaml = "---\n";
      yaml += `title: "${escapeYAML(title)}"\n`;
      yaml += `date: ${date}\n`;
      if (excerpt) yaml += `excerpt: "${escapeYAML(excerpt)}"\n`;
      if (tags.length > 0) yaml += `tags: [${tags.map(t => `"${escapeYAML(t)}"`).join(', ')}]\n`;
      if (categories.length > 0) yaml += `categories: [${categories.map(c => `"${escapeYAML(c)}"`).join(', ')}]\n`;
      yaml += `permalink: ${permalink}\n`;
      if (layout) yaml += `layout: ${layout}\n`;
      yaml += "---\n";

      document.getElementById('output').textContent = yaml;
    }

    function baixarYAML() {
      const output = document.getElementById('output').textContent;
      if (!output) {
        alert("Gere o YAML primeiro.");
        return;
      }

      const slug = document.getElementById('permalink').value.replace(/^\/+/, '') || 'post';
      const filename = `${slug}.yml`;

      const blob = new Blob([output], { type: 'text/yaml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    function limpar() {
      document.getElementById('title').value = '';
      document.getElementById('date').value = '';
      document.getElementById('permalink').value = '';
      document.getElementById('excerpt').value = '';
      document.getElementById('layout').value = 'post';
      tags = [];
      categories = [];
      renderTags();
      renderCategories();
      document.getElementById('output').textContent = '';
    }

    // Define data de hoje por padrão
    window.onload = function() {
      const hoje = new Date().toISOString().split('T')[0];
      document.getElementById('date').value = hoje;
    };
  </script>

