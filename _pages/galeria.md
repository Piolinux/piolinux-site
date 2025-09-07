---
layout: default
title: "Galeria de Wallpapers: +50 Temas para Devs e Sysadmins"
description: "Baixe wallpapers gratuitos para desktop e mobile. Temas: programação, natureza, dark mode, espaço, minimalismo e muito mais."
permalink: /wallpapers/
---

<div class="gallery-container">
  {% for wallpaper in site.data.wallpapers %}
    {% include wallpaper-card.html wallpaper=wallpaper %}
  {% endfor %}
</div>

<style>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background: #0f0f0f;
}

.gallery-item {
  background: #1e1e1e;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.4);
}

.gallery-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 3px solid #00ff00;
  transition: filter 0.3s ease;
}

.gallery-item:hover img {
  filter: brightness(1.1);
}

.info {
  padding: 1.5rem;
  text-align: center;
}

.info .title {
  color: #00ff00;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px rgba(0,255,0,0.5);
}

.info a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #007acc, #005a9e);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.info a:hover {
  background: transparent;
  border-color: #007acc;
  transform: scale(1.05);
}
</style>
