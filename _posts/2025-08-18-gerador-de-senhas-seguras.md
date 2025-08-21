---
title: Gerador de Senhas Seguras
layout: default
date: 2025-08-18
author: "Piolinux"
description: Uma ferramenta online para gerar senhas fortes e únicas, protegendo as suas contas contra ataques de força bruta.
tags: [ferramenta, segurança, senha, online]
---


{% include toc.html %}


<section class="post-content">

<h2 class="text-3xl font-bold text-gray-800 mb-4">A Sua Senha é Segurança. Vamos Protegê-la Juntos.</h2>

<p class="text-gray-600 leading-relaxed mb-4">Cansado de memorizar senhas complicadas? E quem nunca usou a mesma senha em vários sites? É normal, mas também é um risco que não precisamos de correr.</p>

<p class="text-gray-600 leading-relaxed mb-4">Esta ferramenta foi feita para lhe dar uma mão, gerando senhas fortes e únicas para todas as suas contas. É simples, rápido e, acima de tudo, seguro.</p>

<h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-6">Porquê Usar Esta Ferramenta?</h3>

<div class="space-y-4 text-gray-600">
    <p>
        <strong>1. Pare de Adivinhar</strong>
        <br>Imagine um computador a tentar milhões de combinações para descobrir a sua senha. É o que acontece nos ataques de "força bruta". Uma senha como `123456` pode ser descoberta em segundos. Uma senha aleatória e comprida? Demoraria milhares de anos. Esta ferramenta é a sua defesa contra isso.
    </p>
    <p>
        <strong>2. Não utilize uma única senha</strong>
        <br>Usar a mesma senha em todos os lugares é como ter uma única 
        chave que abre a sua casa, o seu carro e a sua caixa de e-mail. 
        Se essa chave for roubada, tudo ficaŕa exposto e você coloca-se em perigo. Com um gerador de senhas, você tem uma chave diferente para cada lugar, protegendo as suas outras contas caso uma delas seja invadida.
    </p>
    <p>
        <strong>3. Esqueça a Previsibilidade</strong>
        <br>A nossa mente cria senhas com base em coisas que conhecemos: nomes, datas, palavras comuns. Para um hacker, isso torna tudo mais fácil. Esta ferramenta remove o fator humano da equação e cria senhas que ninguém conseguiria adivinhar. É aleatoriedade pura para a sua segurança!
    </p>
</div>

<p class="text-gray-600 leading-relaxed mt-6">
    Em resumo, não precisa de ser um especialista para estar seguro online. Basta usar as ferramentas certas.
</p>

</section>




<body class="bg-gray-100 p-4 sm:p-8 flex items-center justify-center min-h-screen">
    <div class="bg-white rounded-xl shadow-lg p-6 sm:p-10 w-full max-w-4xl border border-gray-200">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-2">Gerador de Senhas Seguras</h1>
        <p class="text-center text-gray-500 mb-8">Crie senhas fortes e únicas para proteger as suas contas.</p>

        <!-- Seção do Gerador -->
        <div class="space-y-6">
            <div>
                <label class="block text-gray-700 font-medium mb-2">Senha Gerada:</label>
                <div class="flex">
                    <input type="text" id="password-output" readonly class="w-full p-4 border border-gray-300 rounded-l-lg font-mono text-lg truncate focus:outline-none bg-gray-50 text-gray-800">
                    <button id="copy-button" class="bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-blue-700 transition-colors shadow-md">
                        Copiar
                    </button>
                </div>
            </div>

            <div>
                <label for="length-slider" class="block text-gray-700 font-medium mb-2">Comprimento da Senha: <span id="length-value" class="text-blue-600 font-bold">12</span></label>
                <input type="range" id="length-slider" min="8" max="64" value="12" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="flex items-center">
                    <input type="checkbox" id="uppercase-checkbox" checked class="form-checkbox h-5 w-5 text-blue-600 rounded">
                    <label for="uppercase-checkbox" class="ml-2 text-gray-700">A-Z</label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="lowercase-checkbox" checked class="form-checkbox h-5 w-5 text-blue-600 rounded">
                    <label for="lowercase-checkbox" class="ml-2 text-gray-700">a-z</label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="numbers-checkbox" checked class="form-checkbox h-5 w-5 text-blue-600 rounded">
                    <label for="numbers-checkbox" class="ml-2 text-gray-700">0-9</label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="symbols-checkbox" class="form-checkbox h-5 w-5 text-blue-600 rounded">
                    <label for="symbols-checkbox" class="ml-2 text-gray-700">!@#$</label>
                </div>
            </div>

            <button id="generate-button" class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md transform active:scale-95">
                Gerar Senha
            </button>
        </div>
<hr class="my-10 border-gray-200">

        

    <script>
        window.onload = function() {
            const passwordOutput = document.getElementById('password-output');
            const lengthSlider = document.getElementById('length-slider');
            const lengthValue = document.getElementById('length-value');
            const uppercaseCheckbox = document.getElementById('uppercase-checkbox');
            const lowercaseCheckbox = document.getElementById('lowercase-checkbox');
            const numbersCheckbox = document.getElementById('numbers-checkbox');
            const symbolsCheckbox = document.getElementById('symbols-checkbox');
            const generateButton = document.getElementById('generate-button');
            const copyButton = document.getElementById('copy-button');

            // Conjuntos de caracteres
            const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
            const numberChars = '0123456789';
            const symbolChars = '!@#$%^&*()_+-=[]{}|;:",.<>?/~`';

            /**
             * Gera uma senha aleatória com base nas opções selecionadas pelo utilizador.
             */
            function generatePassword() {
                const length = parseInt(lengthSlider.value, 10);
                let availableChars = '';
                let password = '';

                // Constrói a lista de caracteres disponíveis
                if (uppercaseCheckbox.checked) availableChars += uppercaseChars;
                if (lowercaseCheckbox.checked) availableChars += lowercaseChars;
                if (numbersCheckbox.checked) availableChars += numberChars;
                if (symbolsCheckbox.checked) availableChars += symbolChars;

                // Exibe uma mensagem se nenhum tipo de caractere for selecionado
                if (availableChars === '') {
                    passwordOutput.value = 'Selecione pelo menos um tipo de caractere.';
                    return;
                }

                // Garante que pelo menos um caractere de cada conjunto selecionado seja incluído
                let guaranteedChars = '';
                if (uppercaseCheckbox.checked) guaranteedChars += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
                if (lowercaseCheckbox.checked) guaranteedChars += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
                if (numbersCheckbox.checked) guaranteedChars += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
                if (symbolsCheckbox.checked) guaranteedChars += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));
                
                // Preenche o restante da senha com caracteres aleatórios
                for (let i = guaranteedChars.length; i < length; i++) {
                    const randomChar = availableChars.charAt(Math.floor(Math.random() * availableChars.length));
                    password += randomChar;
                }

                // Combina os caracteres garantidos com os aleatórios e embaralha a senha para aumentar a imprevisibilidade
                password = guaranteedChars + password;
                password = password.split('').sort(() => 0.5 - Math.random()).join('');
                
                // Atualiza o campo de saída com a senha gerada
                passwordOutput.value = password;
            }

            /**
             * Copia o texto do campo de senha para a área de transferência.
             */
            function copyPassword() {
                passwordOutput.select();
                document.execCommand('copy');
                
                // Feedback visual para o utilizador
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copiado!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            }

            // Listeners de eventos para interatividade
            lengthSlider.addEventListener('input', () => {
                lengthValue.textContent = lengthSlider.value;
                generatePassword();
            });

            [uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox].forEach(checkbox => {
                checkbox.addEventListener('change', generatePassword);
            });

            generateButton.addEventListener('click', generatePassword);
            copyButton.addEventListener('click', copyPassword);

            // Geração inicial da senha ao carregar a página
            generatePassword();
        };
    </script>

