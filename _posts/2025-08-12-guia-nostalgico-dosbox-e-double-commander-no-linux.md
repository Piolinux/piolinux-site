---
layout: default
title: "Guia Nostálgico: DOSBox e Double Commander no Linux para Usuários Raiz"
author: "Piolinux"
date: 2025-08-12 11:58:05 -0300
categories: [Linux, Tutoriais, Ferramentas]
tags: [DOSBox, Double Commander, MS-DOS, jogos antigos, gerenciador de arquivos, modo root]
description: "Um guia completo e nostálgico sobre duas ferramentas essenciais no Linux: o DOSBox, para reviver jogos antigos, e o Double Commander, para gerenciar arquivos no modo root."
---




<body>
    <main>
        <section class="post-content">
           
       

    
            <p class="text-xl leading-relaxed mb-8">
                A parada é a seguinte: Estava brincando com o DOSBox e voltei no tempo. É um programa muito divertido, mesmo com alguns erros constantes quando agimos no automático. Já sabia que o DOSBox existia, mas só agora tive tempo para fazer este post sobre a volta aos bons tempos do MS-DOS! 😁
            </p>

            <!-- Seção 1: DOSBox -->
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">DOSBox: Configurações e Jogos Antigos</h2>
            <p class="text-lg leading-relaxed mb-4">
                Apesar de o DOSBox ser muito antigo, algumas de suas configurações de teclado podem ser um pouco difíceis, principalmente para quem está acostumado com padrões diferentes de teclados. Na época, não consegui mudar a teclas, mas a diversão era garantida. Para quem é saudosista, o DOSBox é a forma perfeita de reviver os jogos antigos em Dos. Para começar, você consegue baixá-lo via terminal e acessar os demos no site do desenvolvedor. Para instalar, digite no terminal:
            </p>
            <div class="bg-gray-800 text-white p-4 rounded-lg mb-6">
                <pre><code class="font-mono">sudo apt-get install dosbox</code></pre>
            </div>
            <p class="text-lg leading-relaxed mb-4">
                Para montar a unidade C:, digite:
            </p>
            <div class="bg-gray-800 text-white p-4 rounded-lg mb-6">
                <pre><code class="font-mono">mount c /home/usuario/Jogos</code></pre>
            </div>
            <p class="text-lg leading-relaxed mb-8">
                Era um jogo muito bom  Carmagedom! Para acessá-lo, você precisa digitar o nome da pasta em que o jogo está salvo. Lembre-se que a letra J de "Jogos" está em caixa alta. Tome cuidado, pois o DOSBox é sensível a letras maiúsculas e minúsculas! Apesar das dificuldades em configurar o teclado no padrão americano (Ctrl + F1), a experiência de jogar com o jogo de corrida era incrível, e o mais importante é que o jogo funcionava. A documentação pode ser completa chata de ler, mas em casos de problemas, ela está lá. O DOSBox é divertido para voltar aos tempos dos jogos com memória baixa.
            </p>

            <!-- Seção 2: Double Commander -->
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Double Commander: O Gerenciador de Arquivos para o Modo Root 😄</h2>
            <p class="text-lg leading-relaxed mb-4">
                Ao realizar testes em gerenciadores de arquivos para o modo root, enfrentei muitos problemas. Alguns, como Pcmanfm, Dolphin e Thunar, não reconheciam as partições ou os dispositivos, e por isso não funcionavam adequadamente para realizar cópias e transferências de arquivos.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3">A Solução e Seus Desafios</h3>
            <p class="text-lg leading-relaxed mb-4">
                Depois de horas pesquisando em fóruns (incluindo o do Manjaro e do Double Commander), descobri o Double Commander. Ele é um gerenciador de arquivos poderoso, disponível nas versões GTK2 e QT,  foi uma ótima solução para realizar transferências. Porém, mesmo ele tem seus desafios, como o problema do PcmanFm Qt de não reconhecer o HD externo e a mensagem de "operação sem suporte" no Artix. Apesar disso, o Double Commander é uma ferramenta muito prática. Ele funciona perfeitamente e oferece recursos opcionais, como a possibilidade de ter um gerenciador de arquivos "dual-panel" para aumentar a velocidade das transferências.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3">Como Executar o Double Commander como Root</h3>
            <p class="text-lg leading-relaxed mb-4">
                Para contornar alguns problemas de permissão, você consegue alterar o atalho do programa pra que ele seja executado como root. Siga os passos:
            </p>
            <ul class="list-disc list-inside text-lg leading-relaxed mb-6 space-y-2">
                <li>Acesse o arquivo <code class="bg-gray-200 px-1 rounded">/usr/share/applications/doublecmd. Desktop</code> Aqui não tem root.</li>
                <li>Salve-o como <code class="bg-gray-200 px-1 rounded">/usr/share/applications/root-doublecmd. Desktop</code>Como Root.</li>
                <li>Modifique a entrada <code class="bg-gray-200 px-1 rounded">Exec</code> pra que fique assim:</li>
            </ul>
            <div class="bg-gray-800 text-white p-4 rounded-lg mb-6">
                <pre><code class="font-mono">Exec=gksudo doublecmd</code></pre>
            </div>
            <p class="text-lg leading-relaxed mb-4">
                Para instalar o programa, digite:
            </p>
            <div class="bg-gray-800 text-white p-4 rounded-lg mb-3">
                <pre><code class="font-mono">sudo apt-get install doublecmd-gtk</code></pre>
            </div>
            <p class="text-center text-lg leading-relaxed mb-4">ou</p>
            <div class="bg-gray-800 text-white p-4 rounded-lg mb-8">
                <pre><code class="font-mono">sudo apt-get install doublecmd-qt</code></pre>
            </div>

            <p class="text-lg leading-relaxed">
                Se você tem curiosidade, pode pesquisar por outros "dez programas Commander". Opções não faltam para escolher, e o interessante é testar e explorar todos os recursos oferecidos por esses gerenciadores de arquivos.
            </p>
            
        </section>
    </main>

</body>
