---
layout: manual-seo
title: "Gerador de Logótipos Tux: PNG Personalizado para Linux"
description: "Crie seu próprio Tux minimalista em PNG. Sem JavaScript, sem servidor — só HTML puro e download direto. Útil para avatares, wallpapers ou ilustrações de documentação técnica"
tags: [tux, linux, logotipo, gerador, png, diy, software_livre]
permalink: /ferramentas/gerador-logotipo-tux/
---

{% include toc.html %}

<section class="post-content">


<p>Ferramenta para criar e exportar logótipos personalizados do Tux (mascote do Linux). Toda a renderização ocorre no navegador — sem envio de dados, sem dependências externas.</p>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Componentes.</th>
      <th>Opções.</th>
      <th>Formato de saída.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Componente">Cores.</td>
      <td data-label="Opções">Corpo, barriga, bico/pés, boné, cachecol.</td>
      <td data-label="Formato de saída">PNG (512x512px).</td>
    </tr>
    <tr>
      <td data-label="Componente">Acessórios.</td>
      <td data-label="Opções">Boné, cartola, cowboy, festa, bruxa, formatura, headset, viseira.</td>
      <td data-label="Formato de saída">Incorporado no PNG</td>
    </tr>
    <tr>
      <td data-label="Componente">Estilo.</td>
      <td data-label="Opções">Cabelo (espetado, moicano, afro), olhos (feliz, surpreso, cansado), pés fixos.</td>
      <td data-label="Formato de saída">PNG puro renderizado</td>
    </tr>
    <tr>
      <td data-label="Componente">Exportação</td>
      <td data-label="Opções">Clique em "Descarregar PNG"</td>
      <td data-label="Formato de saída"><code>tux-logo.pgn</code></td>
    </tr>
  </tbody>
</table>

<h3 id="tecnico">Notas Técnicas</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>FatoS</th>
      <th>Explicações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">Renderização local</td>
      <td data-label="Explicação">Todo o código SVG estático com IDs é gerado e convertido em PNG no navegador. Nenhum dado deixa seu dispositivo.</td>
    </tr>
    <tr>
      <td data-label="Fato">Sem dependências</td>
      <td data-label="Explicação">Funciona com HTML5 + JavaScript puro. Não requer bibliotecas externas.</td>
    </tr>
    <tr>
      <td data-label="Fato">Uso permitido</td>
      <td data-label="Explicação">O Tux é uma marca registrada da Linux Foundation. Use para fins pessoais, educacionais ou comunitários — não comerciais.</td>
    </tr>
  </tbody>
</table>



  <style>
   
    .container { background: #1a1a1a; padding: 20px; border-radius: 10px; max-width: 900px; margin: 0 auto; }
    .main { display: flex; flex-wrap: wrap; gap: 20px; }
    .controls { flex: 1; min-width: 250px; }
    .preview { flex: 1; min-width: 200px; background: white; border-radius: 8px; padding: 10px; display: flex; align-items: center; justify-content: center; }
    label { display: block; margin: 8px 0 4px; font-size: 0.9em; }
    input, select, button {
      width: 100%;
      padding: 6px;
      border: 1px solid #444;
      background: #222;
      color: white;
      border-radius: 4px;
    }
    button {
      background: #1e40af;
      color: white;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover { background: #1d4ed8; }
    h2 { margin-top: 0; }
    p { color: #a0a0a0; }
  </style>

   <div class="container">
     <h2>🎨 Gerador de Tux — Personalize e Baixe em PNG</h2>
    <p>Crie seu Tux com chapéus divertidos, expressões engraçadas e cores personalizadas. Ideal para crianças, wallpapers, avatares e documentação técnica!</p>

    <div class="main">
      <div class="controls">
        <label>Cor do Corpo: <input type="color" id="bodyColor" value="#000000"></label>
        <label>Cor da Barriga: <input type="color" id="bellyColor" value="#e2e8f0"></label>
        <label>Cor do Bico/Pés: <input type="color" id="beakColor" value="#f6ad55"></label>
        <label>Cor do Chapéu: <input type="color" id="hatColor" value="#4299e1"></label>
        <label>Cor do Cabelo: <input type="color" id="hairColor" value="#000000"></label>
        <label>
  <input type="checkbox" id="scarfToggle" checked> Usar cachecol
</label>
<label>Cor do Cachecol: <input type="color" id="scarfColor" value="#ef4444"></label>

        <label>Chapéu:
  <select id="hatStyle">
    <option value="none">Nenhum</option>
    <option value="santa">Papai Noel</option>
    <option value="beanie">Boné</option>
    <option value="tophat">Cartola</option>
    <option value="cowboy">Cowboy</option>
    <option value="party">Festa</option>
    <option value="witch">Bruxa</option>
    <option value="graduation">Formatura</option>
    <option value="headset">Headset</option>
    <option value="visor">Viseira</option>
  </select>
</label>

        <label>Expressão:
  <select id="eyeStyle">
    <option value="default">Normal</option>
    <option value="happy">Feliz</option>
    <option value="surprised">Surpreso</option>
    <option value="winking">Piscando</option>
    <option value="tired">Cansado</option>
    <option value="angry">Zangado</option>
    <option value="bored">Entediado</option>
    <option value="focused">Concentrado</option>
  </select>
 </label>
 
 <label>Cabelo:
  <select id="hairStyle">
    <option value="none">Sem cabelo</option>
    <option value="spiky">Espetado</option>
    <option value="mohawk">Moicano</option>
    <option value="afro">Afro</option>
    <option value="parted">Partido</option>
    <option value="messy">Desgrenhado</option>
    <option value="curly">Cacheado</option>
    <option value="bald-fade">Careca (fade)</option>
    <option value="long">Longo</option>
  </select>
</label>
 
        <button id="downloadBtn">📥 Baixar Tux.png</button>
      </div>

      <div class="preview">
        <!-- SVG estático com IDs -->
        <svg viewBox="0 0 100 100" width="200" height="200" id="tuxSVG">
          <!-- Corpo -->
          <path id="body" d="M50,90 C70,90 75,70 75,50 C75,30 65,20 50,20 C35,20 25,30 25,50 C25,70 30,90 50,90 Z" fill="#000000"/>
          <!-- Barriga -->
          <path id="belly" d="M50,85 C65,85 70,65 70,50 C70,35 60,30 50,30 C40,30 30,35 30,50 C30,65 35,85 50,85 Z" fill="#e2e8f0"/>
          !-- ✅ CABELO -->
          <g id="hair" visibility="hidden"><path d="" fill="#000000"/></g>
         <!-- Olhos (dentro de um grupo com ID fixo) -->
         <g id="eyes"></g>    
    
          <!-- Bico -->
          <path id="beak" d="M50,50 L45,55 L55,55 Z" fill="#f6ad55"/>
          
          <!-- Pés -->
          <path id="footLeft" d="M45,90 C40,95 35,95 30,90 V85 Z" fill="#f6ad55"/>
          <path id="footRight" d="M55,90 C60,95 65,95 70,90 V85 Z" fill="#f6ad55"/>
          <!-- Chapéus (invisíveis por padrão) -->
          <g id="hatSanta" visibility="hidden">
            <path d="M45,30 L55,30 L50,10 Z" fill="#d00000"/>
            <circle cx="50" cy="8" r="4" fill="white" stroke="#d00000" stroke-width="1.5"/>
          </g>
          <g id="hatBeanie" visibility="hidden">
            <path d="M30,30 L70,30 L65,25 L35,25 Z" fill="#4299e1"/>
            <path d="M35,25 C30,20 35,15 50,15 C65,15 70,20 65,25 Z" fill="#4299e1"/>
          </g>
          <!-- Chapéus adicionais -->
<g id="hatTopHat" visibility="hidden">
  <path d="M30,30 L70,30 L70,10 L30,10 Z" fill="#000000"/>
  <path d="M25,30 Q50,40 75,30 Z" fill="#000000"/>
</g>
<g id="hatCowboy" visibility="hidden">
  <path d="M20,30 Q50,20 80,30 Z" fill="#8B4513"/>
  <path d="M35,25 L65,25 L65,15 L35,15 Z" fill="#8B4513"/>
</g>
<g id="hatParty" visibility="hidden">
  <path d="M45,30 L55,30 L50,10 Z" fill="#FF69B4"/>
  <path d="M50,10 Q55,5 50,0 T45,10 Z" fill="white"/>
</g>
<g id="hatWitch" visibility="hidden">
  <!-- Ponta afiada -->
  <path d="M50,5 L35,25 L65,25 Z" fill="#4B0082"/>
  <!-- Aba arredondada -->
  <path d="M35,25 Q50,30 65,25 Q60,35 50,40 Q40,35 35,25 Z" fill="#4B0082"/>
</g>


<g id="hatGraduation" visibility="hidden">
  <path d="M30,30 L70,30 L70,25 L30,25 Z" fill="#000080"/>
  <path d="M20,25 Q50,35 80,25 Z" fill="#000080"/>
  <path d="M50,25 Q50,20 45,20 T55,20 Z" fill="#000080"/>
</g>
<g id="hatHeadset" visibility="hidden">
  <path d="M35,30 Q50,20 65,30 Z" fill="#444444"/>
  <circle cx="33" cy="35" r="5" fill="#444444"/>
  <circle cx="67" cy="35" r="5" fill="#444444"/>
</g>
<g id="hatVisor" visibility="hidden">
  <path d="M25,35 L75,35 Q70,25 50,25 Q30,25 25,35 Z" fill="#000000"/>
</g>
      
        <!-- Cachecol -->
<g id="scarf" visibility="hidden">
  <path d="M35,60 C40,65 60,65 65,60 L65,70 Q50,75 35,70 Z" fill="#ef4444"/>
</g>
        
       
     
        
          
        </svg>
      </div>
    </div>
  </div>

  <script>
function updateTux() {
  // ✅ Declare TUDO no início
  const bodyColor = document.getElementById('bodyColor').value;
  const bellyColor = document.getElementById('bellyColor').value;
  const beakColor = document.getElementById('beakColor').value;
  const hatColor = document.getElementById('hatColor').value;
  const hatStyle = document.getElementById('hatStyle').value;
  const eyeStyle = document.getElementById('eyeStyle').value;
  const hairStyle = document.getElementById('hairStyle').value;   // ✅
  const hairColor = document.getElementById('hairColor').value;   // ✅

  // Atualiza cachecol
  const scarfToggle = document.getElementById('scarfToggle');
  const scarfGroup = document.getElementById('scarf');
  scarfGroup.setAttribute('visibility', scarfToggle.checked ? 'visible' : 'hidden');
  if (scarfToggle.checked) {
    const scarfPath = scarfGroup.querySelector('path');
    if (scarfPath) scarfPath.setAttribute('fill', document.getElementById('scarfColor').value);
  }

  // Atualiza cores do corpo, barriga, bico, pés
  document.getElementById('body').setAttribute('fill', bodyColor);
  document.getElementById('belly').setAttribute('fill', bellyColor);
  document.getElementById('beak').setAttribute('fill', beakColor);
  document.getElementById('footLeft').setAttribute('fill', beakColor);
  document.getElementById('footRight').setAttribute('fill', beakColor);

  // --- OLHOS ---
  const eyes = document.getElementById('eyes');
  eyes.innerHTML = '';
  switch (eyeStyle) {
    case 'happy':
      eyes.innerHTML = `<path d="M40,48 Q43,45 46,48" fill="${bodyColor}"/><path d="M54,48 Q57,45 60,48" fill="${bodyColor}"/>`;
      break;
    case 'surprised':
      eyes.innerHTML = `<circle cx="43" cy="45" r="5" fill="${bodyColor}"/><circle cx="57" cy="45" r="5" fill="${bodyColor}"/>`;
      break;
    case 'winking':
      eyes.innerHTML = `<circle cx="43" cy="45" r="3" fill="${bodyColor}"/><path d="M54,48 Q57,45 60,48" fill="${bodyColor}"/>`;
      break;
    case 'tired':
      eyes.innerHTML = `<path d="M38,47 Q43,45 48,47" fill="${bodyColor}"/><path d="M52,47 Q57,45 62,47" fill="${bodyColor}"/>`;
      break;
    case 'angry':
      eyes.innerHTML = `<path d="M40,42 Q43,45 46,42" fill="${bodyColor}"/><path d="M54,42 Q57,45 60,42" fill="${bodyColor}"/>`;
      break;
    case 'bored':
      eyes.innerHTML = `<path d="M40,46 Q43,47 46,46" fill="${bodyColor}"/><path d="M54,46 Q57,47 60,46" fill="${bodyColor}"/>`;
      break;
    case 'focused':
      eyes.innerHTML = `<path d="M40,45 L46,45" stroke="${bodyColor}" stroke-width="2" fill="none"/><path d="M54,45 L60,45" stroke="${bodyColor}" stroke-width="2" fill="none"/>`;
      break;
    default:
      eyes.innerHTML = `<circle cx="43" cy="45" r="3" fill="${bodyColor}"/><circle cx="57" cy="45" r="3" fill="${bodyColor}"/>`;
  }

  // --- CHAPÉUS ---
  const hatGroups = {
    'santa': '#hatSanta',
    'beanie': '#hatBeanie',
    'tophat': '#hatTopHat',
    'cowboy': '#hatCowboy',
    'party': '#hatParty',
    'witch': '#hatWitch',
    'graduation': '#hatGraduation',
    'headset': '#hatHeadset',
    'visor': '#hatVisor'
  };
  Object.values(hatGroups).forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('visibility', 'hidden');
  });
  if (hatStyle !== 'none' && hatGroups[hatStyle]) {
    const el = document.querySelector(hatGroups[hatStyle]);
    if (el) {
      el.setAttribute('visibility', 'visible');
      el.querySelectorAll('path').forEach(p => p.setAttribute('fill', hatColor));
      if (hatStyle === 'santa') {
        const pompom = el.querySelector('circle');
        if (pompom) pompom.setAttribute('stroke', hatColor);
      }
    }
  }

  // --- CABELO ---
  const hairGroup = document.getElementById('hair');
  if (hairGroup) {
    if (hairStyle !== 'none' && hatStyle === 'none') {
      hairGroup.setAttribute('visibility', 'visible');
      let content = '';
      switch (hairStyle) {
        case 'spiky':
          content = `<path d="M40,20 L30,5 L35,15 L45,0 L50,10 L55,0 L65,15 L70,5 L60,20 Z" fill="${hairColor}"/>`;
          break;
        case 'mohawk':
          content = `<path d="M48,20 L52,20 L52,5 L48,5 Z" fill="${hairColor}"/><path d="M50,5 C55,0 60,10 50,0 Q40,10 45,5 Z" fill="${hairColor}"/>`;
          break;
        case 'afro':
          content = `<path d="M50,15 C30,-5 25,25 50,25 C75,25 70,-5 50,15 Z" fill="${hairColor}"/>`;
          break;
        case 'parted':
          content = `<path d="M50,20 Q50,15 45,20 T55,20 Z" fill="${hairColor}"/><line x1="50" y1="20" x2="50" y2="40" stroke="${hairColor}" stroke-width="1" stroke-linecap="round"/>`;
          break;
        case 'messy':
          content = `<path d="M40,15 Q30,5 35,0 C45,0 50,5 50,10 C50,5 55,0 65,0 C70,5 60,15 60,20 Z" fill="${hairColor}"/>`;
          break;
        case 'curly':
          content = `<path d="M40,15 Q45,5 50,25 Q55,5 60,15 Z" fill="${hairColor}"/>`;
          break;
        case 'bald-fade':
          content = `<path d="M35,20 Q40,18 45,20 Q55,20 65,20 Q70,18 75,20 Z" fill="${hairColor}" opacity="0.3"/>`;
          break;
        case 'long':
          content = `<path d="M35,20 Q50,5 65,20 Q65,40 50,50 Q35,40 35,20 Z" fill="${hairColor}"/>`;
          break;
        default:
          content = `<path d="" fill="${hairColor}"/>`;
      }
      hairGroup.innerHTML = content;
    } else {
      hairGroup.setAttribute('visibility', 'hidden');
    }
  }
}

// --- DOWNLOAD ---
function downloadPNG() {
  const svg = document.getElementById('tuxSVG');
  const svgData = new XMLSerializer().serializeToString(svg);
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(img, 0, 0, size, size);

    canvas.toBlob(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'meu-tux.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    }, 'image/png');
  };
  img.src = url;
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
  const inputs = ['bodyColor', 'bellyColor', 'beakColor', 'hatColor', 'scarfColor', 'hairColor', 'hatStyle', 'eyeStyle', 'hairStyle', 'scarfToggle'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateTux);
  });
  document.getElementById('downloadBtn').addEventListener('click', downloadPNG);
  updateTux();
});
</script>


