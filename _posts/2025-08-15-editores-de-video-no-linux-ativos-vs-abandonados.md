---
layout: manual-seo
title: "Editores de Vídeo no Linux – Ativos vs. Abandonados"
description: "Tabela técnica com Kdenlive, Shotcut, OpenShot e Kino — estado atual, comandos de instalação e avisos sobre software obsoleto."
permalink: /editores-video-linux/
date: 2025-08-15
author: "PioLinux"
categories: [linux, multimidia, ferramentas]
tags: [kino, editor-de-video, linux, dv, open-source]
---

{% include toc.html %}



<section class="post-content">



    <table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramentas.</th>
      <th>Estados.</th>
      <th>Instalações. (Debian/Ubuntu)</th>
      <th>Observações Técnicas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta">Kdenlive.</td>
      <td data-label="Estado"> Ativo (2024)</td>
      <td data-label="Instalação (Debian/Ubuntu).">
        <code>sudo apt install kdenlive.</code>
        <button class="copy-btn" data-command="sudo apt install kdenlive">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Suporte a proxy editing, GPU, H.264/H.265, keyframes, efeitos avançados. Recomendado para uso real.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Shotcut.</td>
      <td data-label="Estado"> Ativo (2024).</td>
      <td data-label="Instalação (Debian/Ubuntu).">
        <code>sudo apt install shotcut</code>
        <button class="copy-btn" data-command="sudo apt install shotcut">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Interface limpa, suporte a 4K, sem timeline complexa. Ideal para edição rápida.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">OpenShot.</td>
      <td data-label="Estado"> Ativo (2024).</td>
      <td data-label="Instalação (Debian/Ubuntu)">
        <code>sudo apt install openshot-qt</code>
        <button class="copy-btn" data-command="sudo apt install openshot-qt">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Focado em simplicidade. Bom para iniciantes, mas limitado em projetos complexos.</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Kino.</td>
      <td data-label="Estado"> Abandonado. (última versão: 2009)</td>
      <td data-label="Instalação (Debian/Ubuntu).">
        Não disponível nos repositórios atuais.
      </td>
      <td data-label="Observação Técnica">Só abre formatos legados (DV, AVI com codecs antigos). Não suporta H.264, MP4, WebM. Evite para uso real.</td>
    </tr>
  </tbody>
</table>

<h3 id="avisos">Avisos Técnicos.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Fatos.</th>
      <th>Explicações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">Kino não está no APT.</td>
      <td data-label="Explicação">Removido por incompatibilidade com bibliotecas modernas (libav/ffmpeg). Quando a instalação era realizada via .deb antigo quebrava as dependências.</td>
    </tr>
    <tr>
      <td data-label="Fato">Formato DV é obsoleto.</td>
      <td data-label="Explicação">DV não comprimido gera arquivos enormes (25–30 MB/s). Hoje, usa-se H.264 (1–5 MB/s) com qualidade similar.</td>
    </tr>
    <tr>
      <td data-label="Fato">Editores modernos são gratuitos e melhores.</td>
      <td data-label="Explicação">Kdenlive e Shotcut oferecem mais recursos, suporte a hardware e exportação eficiente — sem nostalgia.</td>
    </tr>
  </tbody>
</table>
    
</section>





