---
layout: manual-seo
title_custom: "Crie Ícones no Linux em Segundos: Personalização - Piolinux"
date: 2025-08-20
author: "PioLinux"
categories: [linux, personalização, ferramentas]
tags: [ícones, linux, personalização, svg, geany, debian]
description_custom: "Aprenda a criar e personalizar ícones no Linux em segundos. Ferramentas, atalhos e dicas para deixar seu desktop moderno, rápido e com sua cara."
title: "Crie Ícones no Linux em Segundos: Personalização"
permalink: /criar-ícones-linux/
---

{% include toc.html %}



<section class="post-content">
    

<p>Esta aplicação permite a criação de arquivos .desktop e ícones SVG customizados. Use os comandos abaixo para instalar o atalho no seu sistema.</p>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Componente</th>
      <th>Onde salvar</th>
      <th>Permissões</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Componente">Ícone SVG</td>
      <td data-label="Onde salvar">
        <code>~/.local/share/icons/nome-app.svg</code>
      </td>
      <td data-label="Permissões">
        <code>chmod 644 ~/.local/share/icons/nome-app.svg</code>
        <button class="copy-btn" data-command="chmod 644 ~/.local/share/icons/nome-app.svg">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Componente">Atalho .desktop</td>
      <td data-label="Onde salvar">
        <code>~/.local/share/applications/nome-app.desktop</code>
      </td>
      <td data-label="Permissões">
        <code>chmod +x ~/.local/share/applications/nome-app.desktop</code>
        <button class="copy-btn" data-command="chmod +x ~/.local/share/applications/nome-app.desktop">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="exemplo">Exemplo de arquivo <code>.desktop</code></h3>
<pre><code>[Desktop Entry]
Name=Meu App
Exec=/usr/bin/meu-app
Icon=nome-app
Terminal=false
Type=Application
Categories=Utility;</code></pre>

<h3 id="atualizar">Atualizar cache do sistema</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ação</th>
      <th>Comando</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Atualizar ícones</td>
      <td data-label="Comando">
        <code>gtk-update-icon-cache ~/.local/share/icons/hicolor</code>
        <button class="copy-btn" data-command="gtk-update-icon-cache ~/.local/share/icons/hicolor">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Atualizar aplicações</td>
      <td data-label="Comando">
        <code>update-desktop-database ~/.local/share/applications</code>
        <button class="copy-btn" data-command="update-desktop-database ~/.local/share/applications">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="notas">Notas Técnicas</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Fato</th>
      <th>Explicação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">Formato SVG</td>
      <td data-label="Explicação">Ícones vetoriais escalam sem perda de qualidade. Suportados por GNOME, KDE, XFCE.</td>
    </tr>
    <tr>
      <td data-label="Fato">Nome do ícone</td>
      <td data-label="Explicação">O valor de <code>Icon=</code> no <code>.desktop</code> deve corresponder ao nome do arquivo SVG **sem extensão**.</td>
    </tr>
    <tr>
      <td data-label="Fato">Permissões</td>
      <td data-label="Explicação">O arquivo <code>.desktop</code> deve ser executável para aparecer no menu de aplicações.</td>
    </tr>
  </tbody>
</table>

<main>
   <div class="tool-container" style="background: #1a1a1a; padding: 30px; border-radius: 16px; border: 1px solid #333; max-width: 800px; margin: 0 auto;">
    <h2 style="color: #8bc34a; margin: 0 0 20px 0; font-size: 1.8em; text-align: center;">🐧 Gerador de Ícones Linux (.desktop)</h2>
    <p style="color: #d0d0d0; text-align: center; margin-bottom: 30px;">Crie e personalize atalhos .desktop em segundos — com ícones SVG personalizados.</p>

    <div id="messageBox" style="display: none; padding: 12px; border-radius: 8px; margin-bottom: 20px; text-align: center; font-weight: bold;"></div>

    <div style="display: grid; gap: 25px; margin-bottom: 30px;">
        <!-- Nome e Comando -->
        <div style="display: grid; gap: 15px;">
            <div>
                <label for="appName" style="color: #a6e3a1; display: block; margin-bottom: 8px; font-weight: bold;">Nome da Aplicação</label>
                <input type="text" id="appName" placeholder="Ex: Meu App, VS Code, Terminal" style="width: 100%; padding: 12px; background: #2a2a2a; color: #e0e0e0; border: 1px solid #444; border-radius: 8px; font-family: 'Courier New', monospace;">
            </div>
            <div>
                <label for="appCommand" style="color: #a6e3a1; display: block; margin-bottom: 8px; font-weight: bold;">Comando de Execução</label>
                <input type="text" id="appCommand" placeholder="Ex: code, firefox, gnome-terminal" style="width: 100%; padding: 12px; background: #2a2a2a; color: #e0e0e0; border: 1px solid #444; border-radius: 8px; font-family: 'Courier New', monospace;">
            </div>
        </div>

        <!-- Opções de Estilo -->
        <div style="background: #1a2a1a; padding: 20px; border-radius: 12px; border: 1px solid #333;">
            <h3 style="color: #8bc34a; margin: 0 0 20px 0; font-size: 1.3em;"> Personalize seu Ícone</h3>

            <!-- Ícone -->
            <div style="margin-bottom: 20px;">
                <label style="color: #a6e3a1; display: block; margin-bottom: 10px; font-weight: bold;">Escolha um Ícone</label>
                <select id="iconSelector" style="width: 100%; padding: 10px; background: #2a2a2a; color: #e0e0e0; border: 1px solid #444; border-radius: 6px; font-family: 'Courier New', monospace;">
                    <option value="user"> Genérico</option>
                    <option value="chrome">Google Chrome</option>
                    <option value="firefox"> Mozilla Firefox</option>
                    <option value="vscode"> VS Code</option>
                    <option value="terminal"> Terminal</option>
                    <option value="folder"> Pasta</option>
                    <option value="penguin"> Penguin (Linux)</option>
                </select>
            </div>

            <!-- Formato -->
            <div style="margin-bottom: 20px;">
                <label style="color: #a6e3a1; display: block; margin-bottom: 10px; font-weight: bold;">Formato do Fundo</label>
                <div id="styleButtons" style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button data-style="rounded-square" style="background: #2a2a2a; color: #e0e0e0; padding: 8px 16px; border: 2px solid #4caf50; border-radius: 6px; cursor: pointer; font-family: monospace; transition: all 0.2s;">■ Quadrado Arredondado</button>
                    <button data-style="circle" style="background: #2a2a2a; color: #e0e0e0; padding: 8px 16px; border: 2px solid #333; border-radius: 6px; cursor: pointer; font-family: monospace; transition: all 0.2s;">● Círculo</button>
                </div>
            </div>

            <!-- Cor -->
            <div>
                <label style="color: #a6e3a1; display: block; margin-bottom: 10px; font-weight: bold;">Cor do Fundo</label>
                <div id="colorSwatches" style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <div data-color="#3B82F6" title="Azul" style="width: 30px; height: 30px; background-color: #3B82F6; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: transform 0.2s;"></div>
                    <div data-color="#EF4444" title="Vermelho" style="width: 30px; height: 30px; background-color: #EF4444; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: transform 0.2s;"></div>
                    <div data-color="#10B981" title="Verde" style="width: 30px; height: 30px; background-color: #10B981; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: transform 0.2s;"></div>
                    <div data-color="#F97316" title="Laranja" style="width: 30px; height: 30px; background-color: #F97316; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: transform 0.2s;"></div>
                    <div data-color="#6366F1" title="Roxo" style="width: 30px; height: 30px; background-color: #6366F1; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: transform 0.2s;"></div>
                    <div data-color="#6B7280" title="Cinza" style="width: 30px; height: 30px; background-color: #6B7280; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: transform 0.2s;"></div>
                </div>
            </div>
        </div>
    </div>

    <div style="text-align: center; margin-bottom: 30px;">
        <button id="generateButton" style="background: linear-gradient(90deg, #4caf50, #8bc34a); color: white; padding: 14px 32px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1.1em; transition: transform 0.2s, box-shadow 0.2s;">
             Gerar Ícone e Atalho
        </button>
    </div>

    <div id="outputContainer" style="display: none; background: #121212; padding: 30px; border-radius: 12px; border: 1px solid #333;">
        <h2 style="color: #8bc34a; margin: 0 0 25px 0; font-size: 1.5em; text-align: center;"> Resultado</h2>

        <!-- Preview -->
        <div style="text-align: center; margin-bottom: 30px;">
            <p style="color: #a6e3a1; margin-bottom: 15px; font-weight: bold;">Pré-visualização do Ícone:</p>
            <div id="iconPreview" style="width: 120px; height: 120px; background-color: #3B82F6; border-radius: 20px; margin: 0 auto; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
                <svg id="previewSvg" style="width: 80px; height: 80px;" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"></svg>
            </div>
        </div>

        <!-- SVG -->
        <div style="margin-bottom: 30px;">
            <h3 style="color: #a6e3a1; margin: 0 0 15px 0; font-size: 1.2em;">1.  Ícone SVG</h3>
            <p style="color: #d0d0d0; margin-bottom: 15px;">Copie o código abaixo e salve em um arquivo chamado <code style="background: #2a2a2a; padding: 2px 6px; border-radius: 4px;">nome-do-app.svg</code>.</p>
            <div style="position: relative;">
                <textarea id="outputSvg" readonly style="width: 100%; height: 150px; padding: 15px; background: #1a1a1a; color: #a6e3a1; border: 1px solid #333; border-radius: 8px; font-family: 'Courier New', monospace; resize: vertical;"></textarea>
                <button class="copy-btn" style="position: absolute; top: 10px; right: 10px; background: #2a2a2a; color: #8bc34a; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-weight: bold;">📋 Copiar</button>
            </div>
        </div>

        <!-- Desktop -->
        <div>
            <h3 style="color: #a6e3a1; margin: 0 0 15px 0; font-size: 1.2em;">2.  Arquivo .desktop</h3>
            <p style="color: #d0d0d0; margin-bottom: 15px;">Copie o conteúdo abaixo e salve em <code style="background: #2a2a2a; padding: 2px 6px; border-radius: 4px;">~/.local/share/applications/nome-do-app.desktop</code>.</p>
            <div style="position: relative;">
                <textarea id="outputDesktop" readonly style="width: 100%; height: 200px; padding: 15px; background: #1a1a1a; color: #a6e3a1; border: 1px solid #333; border-radius: 8px; font-family: 'Courier New', monospace; resize: vertical;"></textarea>
                <button class="copy-btn" style="position: absolute; top: 10px; right: 10px; background: #2a2a2a; color: #8bc34a; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-weight: bold;">📋 Copiar</button>
            </div>
        </div>
    </div>
</div>

<script>
    const iconPaths = {
        user: `<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4.5C14.7614 4.5 17 6.73858 17 9.5C17 12.2614 14.7614 14.5 12 14.5C9.23858 14.5 7 12.2614 7 9.5C7 6.73858 9.23858 4.5 12 4.5ZM12 16.5C8.98188 16.5 6.2758 18.2562 4.5 20.5513V21H19.5V20.5513C17.7242 18.2562 15.0181 16.5 12 16.5Z"/>`,
        chrome: `<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4.5C15.04 4.5 17.5 6.96 17.5 10C17.5 13.04 15.04 15.5 12 15.5C8.96 15.5 6.5 13.04 6.5 10C6.5 6.96 8.96 4.5 12 4.5ZM12 18C16.97 18 21 14.07 21 9.5H18C18 12.83 15.33 15.5 12 15.5V18ZM12 15.5C8.67 15.5 6 12.83 6 9.5H3C3 14.07 7.03 18 12 18Z"/>`,
        firefox: `<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C15.866 4 19 7.13401 19 11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11C5 7.13401 8.13401 4 12 4ZM12 6.5C14.7614 6.5 17 8.73858 17 11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7 14.2614 7 11.5C7 8.73858 9.23858 6.5 12 6.5Z"/>`,
        vscode: `<path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM15 16H9V8H15V16ZM12 12.5C12.83 12.5 13.5 13.17 13.5 14C13.5 14.83 12.83 15.5 12 15.5C11.17 15.5 10.5 14.83 10.5 14C10.5 13.17 11.17 12.5 12 12.5Z"/>`,
        terminal: `<path d="M2 4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4ZM4 4H20V6H4V4ZM4 8H20V18H4V8ZM6 10V16H18V10H6Z"/>`,
        folder: `<path d="M22 11V6C22 4.9 21.1 4 20 4H12L10 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V11ZM12 6H4V4H10L12 6ZM20 18H4V8H20V18Z"/>`,
        penguin: `<text x="12" y="16" font-size="12" text-anchor="middle" fill="white" font-family="Arial">🐧</text>`
    };

    let selectedStyle = 'rounded-square';
    let selectedColor = '#3B82F6';
    let selectedIcon = 'user';

    // Elementos
    const appNameInput = document.getElementById('appName');
    const appCommandInput = document.getElementById('appCommand');
    const iconSelector = document.getElementById('iconSelector');
    const styleButtons = document.querySelectorAll('#styleButtons button');
    const colorSwatches = document.getElementById('colorSwatches');
    const generateButton = document.getElementById('generateButton');
    const outputContainer = document.getElementById('outputContainer');
    const outputSvgTextarea = document.getElementById('outputSvg');
    const outputDesktopTextarea = document.getElementById('outputDesktop');
    const iconPreview = document.getElementById('iconPreview');
    const previewSvg = document.getElementById('previewSvg');
    const messageBox = document.getElementById('messageBox');

    // Funções
    function showMessage(text, isError = false) {
        messageBox.textContent = text;
        messageBox.style.display = 'block';
        messageBox.style.backgroundColor = isError ? '#330000' : '#1a2a1a';
        messageBox.style.color = isError ? '#ff5252' : '#a6e3a1';
        messageBox.style.border = isError ? '1px solid #ff5252' : '1px solid #333';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }

    function updateIconPreview() {
        previewSvg.innerHTML = iconPaths[selectedIcon];
    }

    // Event Listeners
    iconSelector.addEventListener('change', (e) => {
        selectedIcon = e.target.value;
        updateIconPreview();
    });

    styleButtons.forEach(button => {
        button.addEventListener('click', () => {
            styleButtons.forEach(btn => btn.style.border = '2px solid #333');
            button.style.border = '2px solid #4caf50';
            selectedStyle = button.dataset.style;
            
            if (selectedStyle === 'rounded-square') {
                iconPreview.style.borderRadius = '20px';
            } else {
                iconPreview.style.borderRadius = '50%';
            }
        });
    });

    colorSwatches.addEventListener('click', (e) => {
        const swatch = e.target.closest('div');
        if (swatch && swatch.dataset.color) {
            // Reset border
            colorSwatches.querySelectorAll('div').forEach(el => {
                el.style.transform = 'scale(1)';
            });
            // Apply border and scale
            swatch.style.transform = 'scale(1.2)';
            
            selectedColor = swatch.dataset.color;
            iconPreview.style.backgroundColor = selectedColor;
        }
    });

    generateButton.addEventListener('click', () => {
        const appName = appNameInput.value.trim();
        const appCommand = appCommandInput.value.trim();

        if (!appName || !appCommand) {
            showMessage('⚠️ Por favor, preencha todos os campos.', true);
            return;
        }
        
        const iconFileName = `${appName.toLowerCase().replace(/\s/g, '-')}.svg`;

        const iconShape = selectedStyle === 'rounded-square' ? 'rx="20" ry="20"' : 'rx="128" ry="128"';
        const svgContent = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" ${iconShape} fill="${selectedColor}" />
    <g transform="translate(128,128) scale(8) translate(-12,-12)">
        ${iconPaths[selectedIcon]}
    </g>
</svg>`.trim();
        
        outputSvgTextarea.value = svgContent;

        const desktopContent = `
[Desktop Entry]
Name=${appName}
Comment=Atalho para ${appName}
Exec=${appCommand}
Icon=${iconFileName}
Type=Application
Terminal=false
Categories=Utility;
StartupNotify=true`.trim();

        outputDesktopTextarea.value = desktopContent;

        outputContainer.style.display = 'block';
        showMessage('✅ Ícone e atalho gerados com sucesso!');
    });

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const parent = e.target.closest('div');
            const textarea = parent.querySelector('textarea');
            textarea.select();
            document.execCommand('copy');
            showMessage('📋 Copiado para a área de transferência!');
        });
    });

    // Inicializa
    window.onload = () => {
        updateIconPreview();
        document.querySelector('[data-style="rounded-square"]').style.border = '2px solid #4caf50';
    };
</script>

</main>











