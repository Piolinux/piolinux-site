---
layout: manual-seo
title: "Gerador de Tux — Ícone Técnico Personalizável em SVG"
description: "Crie seu próprio Tux minimalista em SVG. Sem JavaScript, sem servidor — só HTML puro e download direto. Útil para avatares, wallpapers ou ilustrações de documentação técnica"
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
      <td data-label="Formato de saída">SVG (256x256px).</td>
    </tr>
    <tr>
      <td data-label="Componente">Acessórios.</td>
      <td data-label="Opções">Boné, cartola, cowboy, festa, bruxa, formatura, headset, viseira.</td>
      <td data-label="Formato de saída">Incorporado no SVG</td>
    </tr>
    <tr>
      <td data-label="Componente">Estilo.</td>
      <td data-label="Opções">Cabelo (espetado, moicano, afro), olhos (feliz, surpreso, cansado), pés (pontiagudos, nadadeiras)</td>
      <td data-label="Formato de saída">SVG puro renderizado</td>
    </tr>
    <tr>
      <td data-label="Componente">Exportação</td>
      <td data-label="Opções">Clique em "Descarregar SVG"</td>
      <td data-label="Formato de saída"><code>tux-logo.svg</code></td>
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
      <td data-label="Explicação">Todo o código SVG é gerado e convertido em SVG no navegador. Nenhum dado deixa seu dispositivo.</td>
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
    <h2>🎨 Gerador de Tux — Personalize e Baixe em SVG</h2>
    <p>Crie seu Tux com chapéus divertidos, expressões engraçadas e cores personalizadas. Ideal para crianças, wallpapers, avatares e documentação técnica!</p>

    <div class="main">
      <div class="controls">
        <!-- Cores -->
        <label>Cor do Corpo: <input type="color" id="bodyColor" value="#000000"></label>
        <label>Cor da Barriga: <input type="color" id="bellyColor" value="#e2e8f0"></label>
        <label>Cor do Bico/Pés: <input type="color" id="beakColor" value="#f6ad55"></label>
        <label>Cor do Chapéu: <input type="color" id="hatColor" value="#4299e1"></label>
        <label>Cor do Cachecol: <input type="color" id="scarfColor" value="#ef4444"></label>
        
        <!-- Estilos -->
        <label>Chapéu:
          <select id="hatStyle">
            <option value="none">Nenhum</option>
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

        <label>Cabelo:
          <select id="hairStyle">
            <option value="none">Sem cabelo</option>
            <option value="spiky">Espetado</option>
            <option value="mohawk">Moicano</option>
            <option value="afro">Afro</option>
            <option value="parted">Partido</option>
            <option value="messy">Desgrenhado</option>
          </select>
        </label>

        <label>Expressão:
          <select id="eyeStyle">
            <option value="default">Normal</option>
            <option value="happy">Feliz 😊</option>
            <option value="surprised">Surpreso 😲</option>
            <option value="winking">Piscando 😉</option>
            <option value="tired">Cansado 😴</option>
            <option value="angry">Zangado 😠</option>
            <option value="bored">Entediado 😑</option>
          </select>
        </label>

        <label>Pés:
          <select id="feetStyle">
            <option value="default">Normais</option>
            <option value="pointy">Pontiagudos</option>
            <option value="wide">Largos</option>
            <option value="flippers">Nadadeiras 🐧</option>
          </select>
        </label>

        <label>
          <input type="checkbox" id="scarfToggle" checked> Usar cachecol
        </label>

        <button id="downloadBtn">📥 Baixar Tux.svg</button>
      </div>

      <div class="preview" id="svgPreview">
        <!-- SVG será carregado aqui -->
      </div>
    </div>
  </div>

  <script>
    // Função para gerar o SVG como string
    function generateSVG(opts) {
      const { body, belly, beak, hat, scarf, hatStyle, hairStyle, eyeStyle, feetStyle, showScarf } = opts;

      let svg = '';

      // Pés
      switch (feetStyle) {
        case 'pointy': svg += `<path fill="${beak}" d="M45,90 C40,95 35,95 30,90 Z"/><path fill="${beak}" d="M55,90 C60,95 65,95 70,90 Z"/>`; break;
        case 'wide': svg += `<path fill="${beak}" d="M40,90 C30,95 25,95 20,90 Z"/><path fill="${beak}" d="M60,90 C70,95 75,95 80,90 Z"/>`; break;
        case 'flippers': svg += `<path fill="${beak}" d="M40,90 Q20,105 40,110 Q50,105 60,90 Z"/><path fill="${beak}" d="M60,90 Q80,105 60,110 Q50,105 40,90 Z"/>`; break;
        default: svg += `<path fill="${beak}" d="M45,90 C40,95 35,95 30,90 V85 Z"/><path fill="${beak}" d="M55,90 C60,95 65,95 70,90 V85 Z"/>`;
      }

      // Corpo e barriga
      svg += `<path fill="${body}" d="M50,90 C70,90 75,70 75,50 C75,30 65,20 50,20 C35,20 25,30 25,50 C25,70 30,90 50,90 Z"/>`;
      svg += `<path fill="${belly}" d="M50,85 C65,85 70,65 70,50 C70,35 60,30 50,30 C40,30 30,35 30,50 C30,65 35,85 50,85 Z"/>`;

      // Cabelo
      switch (hairStyle) {
        case 'spiky': svg += `<path fill="${body}" d="M40,20 L30,5 L35,15 L45,0 L50,10 L55,0 L65,15 L70,5 L60,20 Z"/>`; break;
        case 'mohawk': svg += `<path fill="${body}" d="M48,20 L52,20 L52,5 L48,5 Z"/><path fill="${body}" d="M50,5 C55,0 60,10 50,0 Q40,10 45,5 Z"/>`; break;
        case 'afro': svg += `<path fill="${body}" d="M50,15 C30,-5 25,25 50,25 C75,25 70,-5 50,15 Z"/>`; break;
        case 'parted': svg += `<path fill="${body}" d="M50,20 Q50,15 45,20 T55,20 Z"/><line x1="50" y1="20" x2="50" y2="40" stroke="${body}" stroke-width="1" stroke-linecap="round"/>`; break;
        case 'messy': svg += `<path fill="${body}" d="M40,15 Q30,5 35,0 C45,0 50,5 50,10 C50,5 55,0 65,0 C70,5 60,15 60,20 Z"/>`; break;
      }

      // Chapéu
      if (hatStyle !== 'none') {
        switch (hatStyle) {
          case 'beanie': svg += `<path fill="${hat}" d="M30,30 L70,30 L65,25 L35,25 Z"/><path fill="${hat}" d="M35,25 C30,20 35,15 50,15 C65,15 70,20 65,25 Z"/>`; break;
          case 'tophat': svg += `<path fill="${hat}" d="M30,30 L70,30 L70,10 L30,10 Z"/><path fill="${hat}" d="M25,30 Q50,40 75,30 Z"/>`; break;
          case 'cowboy': svg += `<path fill="${hat}" d="M20,30 Q50,20 80,30 Z"/><path fill="${hat}" d="M35,25 L65,25 L65,15 L35,15 Z"/>`; break;
          case 'party': svg += `<path fill="${hat}" d="M45,30 L55,30 L50,10 Z"/><path fill="white" d="M50,10 Q55,5 50,0 T45,10 Z"/>`; break;
          case 'witch':
  svg += `<path fill="${hat}" d="M50,5 L30,30 L70,30 Z"/>`; // triângulo afilado
  svg += `<path fill="${hat}" d="M40,30 Q50,25 60,30 Q55,35 50,40 Q45,35 40,30 Z"/>`; // aba curva
  break;case 'graduation': svg += `<path fill="${hat}" d="M30,30 L70,30 L70,25 L30,25 Z"/><path fill="${hat}" d="M20,25 Q50,35 80,25 Z"/><path fill="${hat}" d="M50,25 Q50,20 45,20 T55,20 Z"/>`; break;
          case 'headset': svg += `<path fill="${hat}" d="M35,30 Q50,20 65,30 Z"/><circle fill="${hat}" cx="33" cy="35" r="5"/><circle fill="${hat}" cx="67" cy="35" r="5"/>`; break;
          case 'visor': svg += `<path fill="${hat}" d="M25,35 L75,35 Q70,25 50,25 Q30,25 25,35 Z"/>`; break;
        }
      }

      // Olhos
      switch (eyeStyle) {
        case 'happy': svg += `<path fill="${body}" d="M40,40 Q43,45 46,40"/><path fill="${body}" d="M54,40 Q57,45 60,40"/>`; break;
        case 'surprised': svg += `<circle fill="${body}" cx="43" cy="40" r="5"/><circle fill="${body}" cx="57" cy="40" r="5"/>`; break;
        case 'winking': svg += `<circle fill="${body}" cx="43" cy="40" r="3"/><path fill="${body}" d="M54,40 Q57,45 60,40"/>`; break;
        case 'tired': svg += `<line x1="38" y1="40" x2="48" y2="40" stroke="${body}" stroke-width="2" stroke-linecap="round"/><line x1="52" y1="40" x2="62" y2="40" stroke="${body}" stroke-width="2" stroke-linecap="round"/>`; break;
        case 'angry': svg += `<path fill="${body}" d="M40,35 Q45,30 50,35"/><path fill="${body}" d="M60,35 Q55,30 50,35"/><circle fill="${body}" cx="43" cy="43" r="3"/><circle fill="${body}" cx="57" cy="43" r="3"/>`; break;
        case 'bored': svg += `<path fill="${body}" d="M40,40 Q43,42 46,40"/><path fill="${body}" d="M54,40 Q57,42 60,40"/>`; break;
        default: svg += `<circle fill="${body}" cx="43" cy="40" r="3"/><circle fill="${body}" cx="57" cy="40" r="3"/>`;
      }

      // Bico
      svg += `<path fill="${beak}" d="M50,50 L45,55 L55,55 Z"/>`;

      // Cachecol
      if (showScarf) {
        svg += `<path fill="${scarf}" d="M35,60 C40,65 60,65 65,60 L65,70 Q50,75 35,70 Z"/>`;
      }

      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">${svg}</svg>`;
    }

    // Atualiza pré-visualização
    function updatePreview() {
      const opts = {
        body: document.getElementById('bodyColor').value,
        belly: document.getElementById('bellyColor').value,
        beak: document.getElementById('beakColor').value,
        hat: document.getElementById('hatColor').value,
        scarf: document.getElementById('scarfColor').value,
        hatStyle: document.getElementById('hatStyle').value,
        hairStyle: document.getElementById('hairStyle').value,
        eyeStyle: document.getElementById('eyeStyle').value,
        feetStyle: document.getElementById('feetStyle').value,
        showScarf: document.getElementById('scarfToggle').checked
      };
      document.getElementById('svgPreview').innerHTML = generateSVG(opts);
    }

    // Download SVG
    function downloadSVG() {
      const opts = {
        body: document.getElementById('bodyColor').value,
        belly: document.getElementById('bellyColor').value,
        beak: document.getElementById('beakColor').value,
        hat: document.getElementById('hatColor').value,
        scarf: document.getElementById('scarfColor').value,
        hatStyle: document.getElementById('hatStyle').value,
        hairStyle: document.getElementById('hairStyle').value,
        eyeStyle: document.getElementById('eyeStyle').value,
        feetStyle: document.getElementById('feetStyle').value,
        showScarf: document.getElementById('scarfToggle').checked
      };
      const svgStr = generateSVG(opts);
      const blob = new Blob([svgStr], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'meu-tux-personalizado.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    // Inicializa
    document.addEventListener('DOMContentLoaded', () => {
      updatePreview();
      ['bodyColor', 'bellyColor', 'beakColor', 'hatColor', 'scarfColor', 'hatStyle', 'hairStyle', 'eyeStyle', 'feetStyle', 'scarfToggle']
        .forEach(id => document.getElementById(id).addEventListener('input', updatePreview));
      document.getElementById('downloadBtn').addEventListener('click', downloadSVG);
    });
  </script>
