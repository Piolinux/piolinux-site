---
layout: default
title: "Instalar o Slackware: o guia para quem quer um desafio de verdade"
date: 2025-08-21
categories: [Slackware, Linux, Tutoriais]
tags: [Slackware, Linux, Instalação, Terminal, Sistema Operacional, Tutoriais]
description: "Um guia direto e conciso para a instalação do Slackware: um rito de passagem para quem quer realmente dominar o Linux."
author: "Piolinux"
---

{% include toc.html %}

  <section class="post-content">
  
  
  
<h2>Instalar o Slackware: o guia para quem quer um desafio de verdade</h2>

<p>Olha, instalar o Ubuntu é tranquilo, a gente viu. É como um carro automático: você só entra, liga e vai. Instalar o Slackware, no entanto, é outra história. É como montar um carro de corrida do zero. Cada parafuso, cada peça... você coloca no lugar.</p>

<p>Pra ser sincero, essa não é uma aventura para quem tem medo de sujar as mãos. O Slackware não tem "assistente de instalação" que te pega pela mão. Ele é uma escola. Um rito de passagem para quem realmente quer entender como o Linux funciona debaixo do capô. E a recompensa é um sistema que é seu, totalmente seu, sem nada que você não queira.</p>

<p>Vamos nessa.</p>

<h3>O que você vai precisar?</h3>
<ul>
  <li>Seu computador.</li>
  <li>Um pendrive de 8GB ou mais.</li>
  <li>O arquivo ISO do Slackware, que você baixa no site oficial.</li>
</ul>

<h3>A parte da preparação</h3>
<p>Aqui, a coisa já começa a ser diferente. Esquece os programas que fazem tudo por você. Para o Slackware, a gente vai usar um comando que faz o trabalho sujo. No Linux, a gente usa o <code>dd</code>. É um comando poderoso que copia o arquivo de instalação pro pendrive. Mas atenção: ele não perdoa. Se você errar, pode apagar um disco inteiro. Tenha 100% de certeza do que está fazendo.</p>

<h4>Comando para criar o pendrive bootável</h4>
<pre>
sudo dd if=slackware.iso of=/dev/sdX bs=8M
</pre>
<p>Onde <code>slackware.iso</code> é o nome do seu arquivo e <code>/dev/sdX</code> é o seu pendrive. Pra descobrir qual é o seu, use o comando <code>lsblk</code>. Ele vai te mostrar todos os seus discos.</p>
<p>Depois que o comando terminar, seu pendrive estará pronto.</p>

<h3>A instalação de verdade</h3>
<p>A instalação do Slackware é toda em terminal. Sem mouse, sem firula 
após o .</p>

<h4>1. Ligar o PC pelo pendrive</h4>
<p>Igual ao Ubuntu, você tem que entrar no menu de inicialização na 
hora que liga o computador (geralmente F2, F10 ou F12) e escolher o seu 
pendrive.</p>



<h4>2. Particionamento</h4>
<p>Essa é a parte mais importante. Você vai ver uma tela preta e antes 
de tudo digite o comando setup no terminal, tela de menu aparecerá para 
configurar o idioma, teclado,conexão, memoria swap,selecionar a partição 
errada tome cuidado em 
não deletar tudo, 
minha reocmendação é treinar no VirtualBox antes de instalar, vai ter que usar o comando <code>fdisk</code> ou <code>cfdisk</code> pra criar as partições. Você precisa de pelo menos uma partição para o sistema (<code>/</code>) e, se quiser, uma partição <code>swap</code> para ajudar na memória.</p>

<h4>3. Seleção de pacotes</h4>
<p>Depois de particionar e formatar, o instalador do Slackware te dá uma lista de "séries de pacotes". Cada série é um grupo de programas. <strong>A</strong> é o básico, <strong>AP</strong> é para aplicativos, <strong>D</strong> para desenvolvimento, e assim por diante. Você escolhe o que quer ou não instalar. Sem lixo, sem nada que não sirva para o que você quer fazer.</p>

<h4>4. Configuração</h4>
<p>No final, é só fazer algumas configurações básicas: criar uma senha para o usuário <code>root</code>, configurar o teclado, o relógio e, por último, o <code>GRUB</code>, que é o programa responsável por inicializar o sistema.</p>

<h3>Conclusão</h3>
<p>E é isso. Pode levar um tempo, mas quando você terminar, o sistema vai ligar e você vai saber que foi você quem montou, peça por peça. O Slackware pode ser desafiador, mas a sensação de domínio e aprendizado vale cada minuto investido.</p>

<p>A instalação é simples se quiser fazer ela bem detalhada é acessar o Site Oficial tudo que passei é bem simplificado, se ficar com dúvida.</p>




<div style="
background-color: #1a1a1a;
border: 2px solid #3ba55d;
padding: 15px;
margin: 20px 0;
border-radius: 10px;
text-align: center;
box-shadow: 0 4px 12px rgba(0,0,0,0.3);
font-family: Arial, sans-serif;
">
<h2 style="color: #3ba55d; margin-bottom: 10px;">📘 Guia Oficial de Instalação do Slackware</h2>
<p style="color: #e0e0e0; font-size: 16px; margin-bottom: 15px;">
Quer se aprofundar ainda mais? Acesse a documentação oficial e veja o passo a passo completo direto da fonte!
</p>
<a href="https://docs.slackware.com/pt-br:slackware:install" target="_blank"
style="
background-color: #3ba55d;
color: #fff;
padding: 12px 20px;
text-decoration: none;
font-size: 18px;
font-weight: bold;
border-radius: 8px;
transition: background 0.3s ease;
display: inline-block;
"
onmouseover="this.style.backgroundColor='#2e8649'"
onmouseout="this.style.backgroundColor='#3ba55d'">
🔗 Acessar Documentação Oficial
</a>
</div>

</section>





