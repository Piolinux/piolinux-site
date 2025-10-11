---
layout: manual-seo
title: "Gravadores de ISO/USB — Comparação Técnica (2025)"
description: "Tabela com Balena Etcher, Rufus, dd, Ventoy, WoeUSB: suporte a Linux/Windows, modo persistente, UEFI, linha de comando."
permalink: /referencias/gravadores-iso-usb/
tags: [iso, usb, etcher, rufus, dd, ventoy, woeusb, linux, sysadmin]
---


<section class="post-content">








  <p>Comparação objetiva de ferramentas para criar USB bootável a partir de ISO. Inclui suporte a modo persistente, UEFI, linha de comando e sistemas operacionais.</p>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ferramenta</th>
      <th>Plataforma</th>
      <th>Modo Persistente</th>
      <th>UEFI</th>
      <th>Linha de Comando</th>
      <th>Link Oficial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ferramenta">Balena Etcher</td>
      <td data-label="Plataforma">Linux, macOS, Windows</td>
      <td data-label="Modo Persistente">❌ Não</td>
      <td data-label="UEFI">✅ Sim</td>
      <td data-label="Linha de Comando">❌ Não</td>
      <td data-label="Link Oficial"><a href="https://www.balena.io/etcher/" target="_blank" rel="noopener">balena.io</a></td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Rufus</td>
      <td data-label="Plataforma">Windows</td>
      <td data-label="Modo Persistente">✅ Sim (Linux)</td>
      <td data-label="UEFI">✅ Sim</td>
      <td data-label="Linha de Comando">✅ Sim (`rufus -d imagem.iso`)</td>
      <td data-label="Link Oficial"><a href="https://rufus.ie/" target="_blank" rel="noopener">rufus.ie</a></td>
    </tr>
    <tr>
      <td data-label="Ferramenta">dd (GNU coreutils)</td>
      <td data-label="Plataforma">Linux, macOS</td>
      <td data-label="Modo Persistente">❌ Não</td>
      <td data-label="UEFI">✅ Sim (se ISO suportar)</td>
      <td data-label="Linha de Comando">✅ Sim (`dd if=imagem.iso of=/dev/sdX bs=4M`)</td>
      <td data-label="Link Oficial">Incluso no sistema</td>
    </tr>
    <tr>
      <td data-label="Ferramenta">Ventoy</td>
      <td data-label="Plataforma">Linux, Windows</td>
      <td data-label="Modo Persistente">✅ Sim (com plugin)</td>
      <td data-label="UEFI">✅ Sim</td>
      <td data-label="Linha de Comando">✅ Sim (CLI para instalação)</td>
      <td data-label="Link Oficial"><a href="https://www.ventoy.net/" target="_blank" rel="noopener">ventoy.net</a></td>
    </tr>
    <tr>
      <td data-label="Ferramenta">WoeUSB</td>
      <td data-label="Plataforma">Linux</td>
      <td data-label="Modo Persistente">❌ Não</td>
      <td data-label="UEFI">✅ Sim</td>
      <td data-label="Linha de Comando">✅ Sim (`woeusb --device imagem.iso /dev/sdX`)</td>
      <td data-label="Link Oficial"><a href="https://github.com/WoeUSB/WoeUSB" target="_blank" rel="noopener">GitHub</a></td>
    </tr>
  </tbody>
</table>
