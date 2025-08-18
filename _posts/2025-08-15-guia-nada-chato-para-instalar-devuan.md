---
layout: default
title: "Guia Nada Chato para Instalar o Devuan"
date: 2025-08-15 18:22:00 -0300
categories:
  - Linux
  - Devuan
tags:
  - Devuan
  - Linux
  - systemd
  - guia
  - instalação
description: "Um guia fácil e descontraído para instalar o Devuan GNU+Linux. Aprenda a instalar o Devuan, uma alternativa sem o systemd, de uma forma que não o vai aborrecer."  
---

          

<section class="post-content">
    <div class="max-w-4xl w-full bg-gray-800 p-6 sm:p-10 rounded-xl shadow-lg border-2 border-gray-700">
       
        <p class="text-gray-300 text-lg mb-8">
            Para ser bem objetivo, vamos ao ponto.
        </p>

        <p class="mb-6 text-base">
            Devuan, pra quem não conhece, é tipo o Debian, só que sem aquele tal de **systemd** que muita gente odeia. Sério, tem até briga de bar por causa disso. Se tu curte um Linux raiz, fiel ao jeitão Unix antigão e sem firula, talvez Devuan seja sua praia. Bora instalar esse troço?
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-gray-200 mb-4 mt-8 border-b-2 border-blue-400 pb-2">
            O que você precisa antes de tudo
        </h2>
        <ul class="list-disc list-inside space-y-2 mb-6 text-base text-gray-300">
            <li><span class="font-semibold text-white">Processador:</span> Qualquer um de 1 GHz ou mais já serve.</li>
            <li><span class="font-semibold text-white">RAM:</span> 512 MB já dá pra instalar (mas, olha, 1 GB é o mínimo pra não passar raiva).</li>
            <li><span class="font-semibold text-white">Espaço em disco:</span> 10 GB pra não ficar apertado.</li>
            <li><span class="font-semibold text-white">Pendrive de 4 GB</span> (ou DVD, se você ainda vive em 2008).</li>
            <li><span class="font-semibold text-white">Internet:</span> Ajuda, mas dá pra instalar offline também.</li>
        </ul>

        <h2 class="text-3xl sm:text-4xl font-bold text-gray-200 mb-4 mt-8 border-b-2 border-blue-400 pb-2">
            Passo 1: Baixa a ISO
        </h2>
        <p class="mb-6 text-base text-gray-300">
            Primeiro de tudo, vai no <a href="https://www.devuan.org/get-devuan" class="text-blue-400 hover:text-blue-300 font-semibold underline">site oficial do Devuan</a>. Procura a parte dos downloads, nada de mistério. Tem várias versões, mas a "netinst" é boa se tu não quer firula e só quer o básico. Agora, se já quiser um desktop bonitinho (tipo XFCE ou Cinnamon), pega a ISO com ele já incluso.
        </p>
        <p class="mb-6 text-base text-gray-300">
            <span class="font-bold text-white">Importante:</span> Baixa a versão certa pra sua máquina. Hoje em dia, quase todo mundo usa 64 bits, mas vai que seu PC é dinossauro.
        </p>
        
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-200 mb-4 mt-8 border-b-2 border-blue-400 pb-2">
            Passo 2: Bota a ISO no pendrive
        </h2>
        <p class="mb-4 text-base text-gray-300">
            Agora, tem que transformar o arquivo ISO num pendrive que dá boot.
        </p>
        <div class="bg-yellow-900 border border-yellow-500 text-yellow-100 p-4 rounded-lg mb-6">
            <p class="font-bold">⚠️ Atenção:</p>
            <p>Só não erre o caminho. Cuidado! O "copiar e colar" pode causar problemas, tipo deletar uma partição acidentalmente.</p>
        </div>
        <ul class="list-disc list-inside space-y-2 mb-6 text-base text-gray-300">
            <li><span class="font-semibold text-white">No Windows:</span> Usa o Rufus ou Etcher. Basicamente, escolhe a ISO, o pendrive, clica em "vai" e espera.</li>
            <li><span class="font-semibold text-white">No macOS ou Linux:</span> Etcher funciona igualzinho. Se quiser bancar o hacker, pode usar o comando `dd`, mas cuidado! Um comando errado e já era seus arquivos.</li>
            <div class="bg-gray-900 text-gray-200 p-4 rounded-lg mt-4">
                <p>Exemplo do comando:</p>
                <code class="block whitespace-pre-wrap mt-2 text-sm text-yellow-300">sudo dd if=/caminho/da/devuan.iso of=/dev/sdX bs=4M status=progress</code>
                <p class="mt-2 text-xs text-gray-400">Troca `/caminho/da/devuan.iso` pro caminho certo e `/dev/sdX` pro seu pendrive (usa `lsblk` ou `fdisk -l` pra achar).</p>
            </div>
        </ul>

        <h2 class="text-3xl sm:text-4xl font-bold text-gray-200 mb-4 mt-8 border-b-2 border-blue-400 pb-2">
            Passo 3: Dá boot pelo pendrive
        </h2>
        <p class="mb-6 text-base text-gray-300">
            Pluga o pendrive no PC. Reinicia. Assim que ligar, aperta aquela tecla mágica pra escolher o boot (F2, F10, F12, Del... Cada fabricante inventa uma). Seleciona o pendrive e pronto, vai abrir o instalador do Devuan.
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-gray-200 mb-4 mt-8 border-b-2 border-blue-400 pb-2">
            Passo 4: Instalação
        </h2>
        <p class="mb-4 text-base text-gray-300">
            O instalador é igualzinho o do Debian, então se já usou, não tem segredo.
        </p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-base text-gray-300">
            <li><span class="font-semibold text-white">Idioma:</span> Escolhe o idioma (bota em PT-BR se manjar).</li>
            <li><span class="font-semibold text-white">Localização e teclado.</span></li>
            <li><span class="font-semibold text-white">Rede:</span> Ele tenta configurar sozinho, mas se não rolar, faz na mão.</li>
            <li><span class="font-semibold text-white">Particionamento:</span> Cuidado aqui! Se for usar só Devuan, manda um "usar disco inteiro" e seja feliz. Se quiser dual-boot, vai no manual, mas aí não vacila ou pode perder tudo.</li>
            <li><span class="font-semibold text-white">Senha:</span> Cria a senha do root e depois adiciona o seu usuário normal.</li>
            <li><span class="font-semibold text-white">Ambiente gráfico:</span> Escolhe o ambiente (XFCE, Cinnamon, tanto faz, escolhe o que curtir). Pode desmarcar o que não quiser.</li>
            <li><span class="font-semibold text-white">GRUB:</span> O instalador vai perguntar onde instalar o bootloader. Vai no padrão mesmo, geralmente `/dev/sda`.</li>
        </ul>

        <h2 class="text-3xl sm:text-4xl font-bold text-gray-200 mb-4 mt-8 border-b-2 border-blue-400 pb-2">
            Passo 5: Terminou? Agora os paranauês finais
        </h2>
        <p class="mb-4 text-base text-gray-300">
            Acabou a instalação? Reinicia o PC, tira o pendrive (senão, instala tudo de novo kkk).
        </p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-base text-gray-300">
            <li><span class="font-semibold text-white">Atualiza tudo:</span> Abre o terminal, faz assim:
                <code class="block whitespace-pre-wrap mt-2 text-sm text-yellow-300">su -<br>apt update && apt upgrade</code>
            </li>
            <li><span class="font-semibold text-white">Instala seus apps favoritos:</span> Navegador, editor de texto, Spotify, sei lá, o que tu quiser.</li>
            <li><span class="font-semibold text-white">Drivers:</span> Se algo tipo placa de vídeo não funcionar, procura tutorial pra instalar driver proprietário no Devuan. Não tem segredo, mas às vezes dá dor de cabeça.</li>
        </ul>

        <p class="text-lg font-semibold text-blue-400 mt-10">
            Pronto, Devuan rodando liso. Seja bem-vindo ao clubinho dos que não curtem systemd.
        </p>
    </div>
    </section>

