---
title: "DOSBox — Comandos Essenciais para Jogadores"
description: "Tabela de comandos práticos do DOSBox para montar drives, configurar teclado em português (ABNT2) e executar jogos clássicos como Doom, Duke Nukem e Commander Keen em sistemas modernos como Devuan e antiX."
layout: manual-seo
permalink: /referencias/dosbox/
tags: [dosbox, dos, jogos,]
---




<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Uso Típicos.</th>
      <th>Resultados.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>mount c /home/seuuser/jogos</code></td>
      <td data-label="Uso Típico">Monta a pasta local como unidade C: no DOS</td>
      <td data-label="Resultado">Permite acessar arquivos do Linux como se fossem do DOS.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>c:</code></td>
      <td data-label="Uso Típico">Mudar para a unidade C:</td>
      <td data-label="Resultado">Navega para o disco montado (necessário após mount)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dir</code></td>
      <td data-label="Uso Típico">Listar arquivos no diretório atual.</td>
      <td data-label="Resultado">Mostra arquivos e pastas, como no MS-DOS real.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd GAME</code></td>
      <td data-label="Uso Típico">Entrar na pasta GAME.</td>
      <td data-label="Resultado">Navegação típica para acessar jogos.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>GAME.EXE</code></td>
      <td data-label="Uso Típico">Executar o jogo (ou programa)</td>
      <td data-label="Resultado">Inicia o software legado em modo emulado.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mount d /home/seuuser/iso -t cdrom</code></td>
      <td data-label="Uso Típico">Montar pasta como CD-ROM (para jogos com proteção).</td>
      <td data-label="Resultado">Simula unidade de CD - necessário para alguns jogos.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>exit</code></td>
      <td data-label="Uso Típico">Sair do DOSBox.</td>
      <td data-label="Resultado">Fecha o emulador.</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Elementos.</th>
      <th>Configuração.</th>
      <th>Finalidades.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Elemento">Arquivo de configuração.</td>
      <td data-label="Configuração"><code>~/.dosbox/dosbox-0.74.conf</code></td>
      <td data-label="Finalidade">Local padrão do arquivo de configuração no Linux.</td>
    </tr>
    <tr>
      <td data-label="Elemento">Teclado (emulador)</td>
      <td data-label="Configuração"><code>keyboardlayout=pt-BR</code></td>
      <td data-label="Finalidade">Permite que o DOSBox interprete corretamente teclas acentuadas do teclado brasileiro.</td>
    </tr>
    <tr>
      <td data-label="Elemento">Teclado (DOS)</td>
      <td data-label="Configuração"><code>KEYB BR</code></td>
      <td data-label="Finalidade">Carrega o driver de teclado do DOS para o layout brasileiro (ABNT2)</td>
    </tr>
    <tr>
      <td data-label="Elemento">Inicialização automática.</td>
      <td data-label="Configuração"><code>mount c ~/jogos<br>c:<br>KEYB BR</code></td>
      <td data-label="Finalidade">Monta disco, muda para C: e configura teclado ao iniciar.</td>
    </tr>
  </tbody>
</table>






<img src="/assets/imagens/dosbox-fluxo.svg" alt="Fluxo básico do DOSBox" loading="lazy">
<a href="/assets/imagens/dosbox-fluxo.svg" download>⤓ Baixar SVG</a>



</section>

