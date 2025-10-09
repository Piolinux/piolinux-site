---
layout: default
title: "50 Ícones Neon SVG — Tudo em 1 Página (Download Rápido)"
description: "50 ícones neon SVG em uma única página. Escolha o tamanho e baixe com 1 clique. Nada de arquivos externos — tudo inline, rápido e confiável."
tags:
  - svg
  - neon
  - ícones
  - download
permalink: /icones-neon-tudo-em-um/
---
<style>
  .neon-icons-all-in-one {
    max-width: 1600px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: 'Segoe UI', sans-serif;
    background: #0a0a0a;
    color: #fff;
  }

  .neon-icons-all-in-one h1 {
    text-align: center;
    color: #0ff;
    text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
    font-weight: 700;
  }

  .size-selector {
    text-align: center;
    margin-bottom: 2.5rem;
    padding: 1rem;
    background: rgba(0, 50, 60, 0.3);
    border-radius: 12px;
    display: inline-block;
    border: 1px solid rgba(0, 255, 255, 0.4);
  }

  .size-selector label {
    color: #0ff;
    margin-right: 1rem;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .size-selector select {
    padding: 10px 20px;
    border-radius: 50px;
    border: 2px solid #0ff;
    background: #111;
    color: #0ff;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230ff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 12px;
    padding-right: 30px;
  }

  .icons-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.8rem;
    padding: 1rem 0;
  }

  .icon-card {
    background: rgba(0, 30, 40, 0.7);
    border-radius: 16px;
    padding: 1.4rem 1rem;
    text-align: center;
    transition: all 0.25s ease;
    border: 1px solid rgba(0, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 220px;
    box-sizing: border-box;
  }

  .icon-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 255, 255, 0.25);
    border-color: rgba(0, 255, 255, 0.6);
    background: rgba(0, 40, 50, 0.8);
  }

  .icon-preview {
    width: 64px;
    height: 64px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    box-shadow: inset 0 0 12px rgba(0, 255, 255, 0.4);
    transition: all 0.2s ease;
  }

  .icon-card h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: #fff;
    line-height: 1.3;
    min-height: 2.6em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .categoria {
    font-size: 0.8rem;
    color: #0ff;
    margin: 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
    opacity: 0.9;
  }

  .btn-download {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #111;
    color: #0ff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 6px rgba(0, 255, 255, 0.6);
    margin-top: auto;
  }

  .btn-download:hover {
    background: #0ff;
    color: #000;
    box-shadow: 0 0 12px #0ff, 0 0 24px rgba(0, 255, 255, 0.5);
    transform: scale(1.02);
  }

  @media (max-width: 1200px) {
    .icons-container { grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); }
  }
  @media (max-width: 992px) {
    .icons-container { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
  }
  @media (max-width: 768px) {
    .icons-container { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1.2rem; }
    .icon-card { height: 210px; padding: 1.2rem 0.8rem; }
  }
  @media (max-width: 576px) {
    .icons-container { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .icon-card { height: 190px; padding: 1rem; }
  }
  @media (max-width: 380px) {
    .icons-container { grid-template-columns: 1fr; }
    .icon-card { height: 200px; }
  }
</style>




<section class="post-content">
           
      


<!-- ✅ INTRODUÇÃO -->
  <div class="intro-section">
    <h2>Bem-vindo à Coleção Neon de Ícones SVG</h2>
    <p>
    Neste espaço, encontra-se uma seleção de aproximadamente cinquenta ícones em neon brilhantes, os quais são ideais para aplicações contemporâneas, como painéis de controle e apresentações criativas.
    </p>
  </div>



  <div class="size-selector">
    <label>Tamanho:</label>
    <select id="iconSize">
      <option value="48">48px</option>
      <option value="64" selected>64px</option>
      <option value="96">96px</option>
    </select>
  </div>

  <div class="icons-container" id="iconsContainer">
    <!-- Os cards serão inseridos aqui via JS -->
  </div>




    
    


<script>
  // ✅ DADOS DOS 50 ÍCONES — TUDO INLINE
  const icones = [
    { nome: "linux-penguin", emoji: "🐧", categoria: "linux" },
    { nome: "terminal", emoji: "💻", categoria: "linux" },
    { nome: "bash", emoji: "🐚", categoria: "linux" },
    { nome: "kernel", emoji: "⚙️", categoria: "linux" },
    { nome: "joystick", emoji: "🕹️", categoria: "linux" },
    { nome: "root", emoji: "🔐", categoria: "linux" },
    { nome: "cli", emoji: "⌨️", categoria: "linux" },
    { nome: "distro", emoji: "📊", categoria: "linux" },
    { nome: "docker", emoji: "🐳", categoria: "devops" },
    { nome: "kubernetes", emoji: "☸️", categoria: "devops" },
    { nome: "ansible", emoji: "🤖", categoria: "devops" },
    { nome: "terraform", emoji: "🏗️", categoria: "devops" },
    { nome: "jenkins", emoji: "🔧", categoria: "devops" },
    { nome: "gitlab", emoji: "🦊", categoria: "devops" },
    { nome: "ci-cd", emoji: "🔄", categoria: "devops" },
    { nome: "vault", emoji: "🗄️", categoria: "devops" },
    { nome: "cloud", emoji: "☁️", categoria: "cloud" },
    { nome: "aws", emoji: "🅰️", categoria: "cloud" },
    { nome: "azure", emoji: "🪟", categoria: "cloud" },
    { nome: "gcp", emoji: "🔍", categoria: "cloud" },
    { nome: "database", emoji: "💾", categoria: "cloud" },
    { nome: "server", emoji: "🖥️", categoria: "cloud" },
    { nome: "cluster", emoji: "🔢", categoria: "cloud" },
    { nome: "region", emoji: "🌍", categoria: "cloud" },
    { nome: "javascript", emoji: "📜", categoria: "code" },
    { nome: "python", emoji: "🐍", categoria: "code" },
    { nome: "brackets", emoji: "()", categoria: "code" },
    { nome: "function", emoji: "ƒ", categoria: "code" },
   { nome: "class", emoji: "🏛️", categoria: "code" },
    { nome: "variable", emoji: "var", categoria: "code" },
    { nome: "debug", emoji: "🐞", categoria: "code" },
    { nome: "deploy", emoji: "🚀", categoria: "code" },
    { nome: "settings", emoji: "⚙️", categoria: "tools" },
    { nome: "wrench", emoji: "🔧", categoria: "tools" },
    { nome: "hammer", emoji: "🔨", categoria: "tools" },
    { nome: "clipboard", emoji: "📋", categoria: "tools" },
    { nome: "sync", emoji: "🔃", categoria: "tools" },
    { nome: "reload", emoji: "🔄", categoria: "tools" },
    { nome: "config", emoji: "📝", categoria: "tools" },
    { nome: "wifi", emoji: "📶", categoria: "network" },
    { nome: "router", emoji: "🖧", categoria: "network" },   
    { nome: "firewall", emoji: "🛡️", categoria: "network" },  
    { nome: "dns", emoji: "🔤", categoria: "network" },
    { nome: "bandwidth", emoji: "📈", categoria: "network" },
    { nome: "lock", emoji: "🔒", categoria: "security" },
    { nome: "key", emoji: "🔑", categoria: "security" },
    { nome: "shield", emoji: "🛡️", categoria: "security" },
    { nome: "hack", emoji: "👾", categoria: "security" },
    { nome: "virus", emoji: "☣️", categoria: "security" },
    { nome: "antivirus", emoji: "💉", categoria: "security" },
  ];

  function generateSVG(emoji, size) {
    const color = '#00ffff';
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <text x="50" y="55" text-anchor="middle" fill="${color}" font-size="${size / 2}" font-family="Arial, sans-serif" style="filter: drop-shadow(0 0 6px ${color});">${emoji}</text>
</svg>`;
  }

  function downloadSVG(emoji, nome, size) {
    const svgContent = generateSVG(emoji, size);
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${nome}-${size}px.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function renderIcons() {
    const container = document.getElementById('iconsContainer');
    container.innerHTML = '';
    icones.forEach(icone => {
      const card = document.createElement('div');
      card.className = 'icon-card';
      card.innerHTML = `
        <div class="icon-preview" style="font-size: 32px;">${icone.emoji}</div>
        <h3>${icone.nome.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
        <p class="categoria">${icone.categoria}</p>
        <button class="btn-download" onclick="downloadSVG('${icone.emoji}', '${icone.nome}', document.getElementById('iconSize').value)">💾 Baixar SVG</button>
      `;
      container.appendChild(card);
    });
  }

  function updatePreviews() {
    const size = document.getElementById('iconSize').value;
    const previews = document.querySelectorAll('.icon-preview');
    previews.forEach(preview => {
      preview.style.fontSize = `${size / 2}px`;
      preview.style.width = `${size}px`;
      preview.style.height = `${size}px`;
    });
  }

  document.getElementById('iconSize').addEventListener('change', updatePreviews);

  // Render inicial
  renderIcons();
</script>
