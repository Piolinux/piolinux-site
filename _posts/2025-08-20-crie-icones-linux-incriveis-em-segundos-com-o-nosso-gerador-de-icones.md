---
layout: default
title: "Crie Ícones Linux Incríveis em Segundos com o Nosso Gerador de Ícones"
date: 2025-08-20 19:55:00 -0300
author: Piolinux
categories: [Linux, Tutoriais, Ferramentas]
tags: [Linux, Icones, Atalhos, Personalização]
---



<section class="post-content">
    

<h1>Olá, pessoal!</h1>

<p>
    Se há algo que eu adoro no Linux é a liberdade de personalização. 
    Mas, convenhamos, criar um atalho e um ícone para uma aplicação 
    nova poderá dar  trabalho. É por isso que decidi criar uma ferramenta que torna tudo fácil.
</p>

<p>
    Apresento o nosso <strong>Gerador de Ícones para Linux</strong>, uma forma simples e rápida de criar atalhos .desktop com um visual incrível, tudo à sua medida! Dê um toque único ao seu ambiente de trabalho sem decifrar códigos complicados.
</p>

<h2>Mas afinal, o que é um atalho .desktop?</h2>
<p>
    Não se preocupe, não é nada de complicado! O ficheiro .desktop é só um pequeno arquivo de texto que contém todas as informações necessárias para o seu sistema Linux criar um atalho. Ele diz ao seu sistema qual é o nome da aplicação, qual é o comando para a iniciar e, claro, qual o ícone que deve usar.
</p>

<p>
    A nossa ferramenta faz este trabalho por si, para que não perca tempo a decifrar a sintaxe.
</p>

<h2>Perguntas e Respostas Rápidas (FAQ)</h2>
<h3>1. Pronto, e agora? Como se usa isto?</h3>

<p>É mais fácil do que parece!</p>
<ul>
    <li><strong>Dê um Nome à Aplicação:</strong> Escreva o nome que quer que apareça no seu menu.</li>
    <li><strong>Digite o Comando:</strong> Qual é o comando que você usa no terminal para abrir a aplicação? Por exemplo, firefox, code ou google-chrome.</li>
    <li><strong>Escolha o Visual:</strong> Selecione o formato e a cor que mais gostar.</li>
    <li><strong>Clique em Gerar:</strong> E já está! O código aparece em baixo, pronto para ser copiado e personalizar seu Desktop. Vai ficar descolado!</li>
</ul>

<h3>2. O que faço com o código que o gerador me deu?</h3>
<p>
    O gerador dá-lhe duas coisas, e ambas são importantes.
</p>
<ul>
    <li><strong>O Código do Ícone:</strong> Copie este texto e salve-o num ficheiro. Chame-o de <code>o-nome-da-sua-app.svg</code> (por exemplo, <code>meu-app.svg</code>).</li>
    <li><strong>O Código do Atalho:</strong> Copie o segundo texto e salve-o num ficheiro diferente. Chame-o de <code>o-nome-da-sua-app.desktop</code> (por exemplo, <code>meu-app.desktop</code>).</li>
</ul>

<h3>3. Onde devo guardar estes ficheiros no meu computador?</h3>
<p>
    Tem de os guardar no sítio certo para que o seu sistema os encontre:
</p>
<p>
    <strong>Para o Ícone (.svg):</strong> Guarde-o aqui:<br>
    <code>~/.local/share/icons/</code>
</p>
<p>
    <strong>Para o Atalho (.desktop):</strong> Guarde-o aqui:<br>
    <code>~/.local/share/applications/</code>
</p>
<p>
    Ah, e não se esqueça: o nome que você deu ao ícone no ficheiro .desktop tem de ser igual ao nome que usou para salvar o seu ficheiro .svg!
</p>

<h3>4. Criei o atalho, mas não aparece. Porquê?</h3>
<p>
    Tranquilo é normal. O seu Sistema Linux, por vezes, precisa de um empurrãozinho para notar os ficheiros novos. A solução é fazer logout e login de novo em casos extremos. Se mesmo assim não aparecer, um reinício completo costuma resolver. Em alguns casos, use os comandos:
</p>
<p>
    <code>sudo update-icon-caches /usr/share/icons/*</code>
</p>

<h3>5. Por que utilizamos ícones SVG?</h3>
<p>
    Os ícones SVG são desenvolvidos a partir de linhas e formas, e não de pixeis. Isso significa que eles permanecem sempre nítidos e perfeitos, independentemente de tamanhos pequenos na barra de tarefas ou em tamanho grande na área de trabalho. Perfeito.
</p>



<main>
    <div style="min-height: 80vh;">


<div>
    <h1>Gerador de Ícones Linux</h1>
    <p>Crie e personalize atalhos .desktop em segundos.</p>

    <div id="messageBox" style="display: none;"></div>

    <div>
        <div>
            <label for="appName">Nome da Aplicação</label>
            <input type="text" id="appName" placeholder="Ex: Firefox, VS Code">
        </div>
        <div>
            <label for="appCommand">Comando de Execução</label>
            <input type="text" id="appCommand" placeholder="Ex: firefox, code">
        </div>
        
        <div>
            <label>Opções de Estilo</label>
            
            <div>
                <span>Escolha um Ícone</span>
                <select id="iconSelector">
                    <option value="user">Genérico</option>
                    <option value="chrome">Google Chrome</option>
                    <option value="firefox">Mozilla Firefox</option>
                    <option value="vscode">VS Code</option>
                    <option value="terminal">Terminal</option>
                    <option value="folder">Pasta</option>
                </select>
            </div>
            
            <div>
                <span>Formato do Fundo</span>
                <div id="styleButtons">
                    <button data-style="rounded-square">Quadrado Arredondado</button>
                    <button data-style="circle">Círculo</button>
                </div>
            </div>
            
            <div>
                <span>Cor do Fundo</span>
                <div id="colorSwatches">
                    <div data-color="#3B82F6" style="width: 20px; height: 20px; background-color: #3B82F6;"></div>
                    <div data-color="#EF4444" style="width: 20px; height: 20px; background-color: #EF4444;"></div>
                    <div data-color="#10B981" style="width: 20px; height: 20px; background-color: #10B981;"></div>
                    <div data-color="#F97316" style="width: 20px; height: 20px; background-color: #F97316;"></div>
                    <div data-color="#6366F1" style="width: 20px; height: 20px; background-color: #6366F1;"></div>
                    <div data-color="#6B7280" style="width: 20px; height: 20px; background-color: #6B7280;"></div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <button id="generateButton">Gerar Ícone e Atalho</button>
    </div>

    <div id="outputContainer" style="display: none;">
        <h2>Resultado</h2>

        <div>
            <p>Pré-visualização do Ícone:</p>
            <div id="iconPreview" style="width: 80px; height: 80px; background-color: #3B82F6;">
                <svg id="previewSvg" style="width: 60px; height: 60px;" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"></svg>
            </div>
        </div>

        <div>
            <p>1. Ícone SVG</p>
            <p>Copie o código abaixo e salve em um arquivo chamado <code>app-icon.svg</code>.</p>
            <div>
                <textarea id="outputSvg" readonly></textarea>
                <button class="copy-btn">Copiar SVG</button>
            </div>
        </div>

        <div>
            <p>2. Arquivo .desktop</p>
            <p>Copie o conteúdo abaixo e salve em um arquivo chamado <code>nome-da-app.desktop</code>.</p>
            <div>
                <textarea id="outputDesktop" readonly></textarea>
                <button class="copy-btn">Copiar Atalho</button>
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
        folder: `<path d="M22 11V6C22 4.9 21.1 4 20 4H12L10 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V11ZM12 6H4V4H10L12 6ZM20 18H4V8H20V18Z"/>`
    };

    let selectedStyle = 'rounded-square';
    let selectedColor = '#3B82F6';
    let selectedIcon = 'user';

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

    function showMessage(text, isError = false) {
        messageBox.textContent = text;
        messageBox.style.display = 'block';
        messageBox.style.color = isError ? 'red' : 'green';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }

    function updateIconPreview() {
        previewSvg.innerHTML = iconPaths[selectedIcon];
    }

    iconSelector.addEventListener('change', (e) => {
        selectedIcon = e.target.value;
        updateIconPreview();
    });

    styleButtons.forEach(button => {
        button.addEventListener('click', () => {
            styleButtons.forEach(btn => btn.style.border = 'none');
            button.style.border = '2px solid black';
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
            selectedColor = swatch.dataset.color;
            iconPreview.style.backgroundColor = selectedColor;
        }
    });

    generateButton.addEventListener('click', () => {
        const appName = appNameInput.value.trim();
        const appCommand = appCommandInput.value.trim();

        if (!appName || !appCommand) {
            showMessage('Por favor, preencha todos os campos.', true);
            return;
        }
        
        const iconFileName = `${appName.toLowerCase().replace(/\s/g, '-')}.svg`;

        const iconShape = selectedStyle === 'rounded-square' ? 'rx="50"' : 'r="128"';
        const svgContent = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" ${iconShape} fill="${selectedColor}" />
    <g transform="scale(10.6667)">
        ${iconPaths[selectedIcon]}
    </g>
</svg>`.trim();
        
        outputSvgTextarea.value = svgContent;

        const desktopContent = `
[Desktop Entry]
Name=${appName}
Comment=Atalho para a aplicação ${appName}
Exec=${appCommand}
Icon=${iconFileName}
Type=Application
Terminal=false`.trim();

        outputDesktopTextarea.value = desktopContent;

        outputContainer.style.display = 'block';
        showMessage('Ícone e atalho gerados!');
    });

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const parent = e.target.closest('div');
            const textarea = parent.querySelector('textarea');
            textarea.select();
            document.execCommand('copy');
            showMessage('Copiado para a área de transferência!');
        });
    });

    window.onload = () => {
        updateIconPreview();
        document.querySelector('[data-style="rounded-square"]').style.border = '2px solid black';
    };
</script>

</div>
</main>
