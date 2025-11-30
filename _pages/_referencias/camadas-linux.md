---
title: "Mapa de Camadas do Sistema Linux"
description: "Diagrama técnico das camadas do sistema Linux: hardware, kernel, init e usuário — com comandos reais associados a cada nível."
layout: manual-seo
permalink: /referencias/camadas-linux/
tags: [camadas-linux,]
---

<section>

<figure>
  <img src="/assets/imagens/camadas-linux.svg" alt="Mapa de camadas do sistema Linux: hardware, kernel, init, usuário" loading="lazy">
  <figcaption>Camadas do sistema Linux e comandos técnicos associados. Útil para entender onde cada ferramenta atua.</figcaption>
</figure>



<a href="/assets/imagens/camadas-linux.svg" 
   download="camadas-linux.svg"
   class="btn-download">
  ⤓ Baixar SVG
</a>
</section>

<section>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Camada.</th>
      <th>Função.</th>
      <th>Comandos Técnicos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Camada">HARDWARE (físico)</td>
      <td data-label="Função">Interação com componentes físicos</td>
      <td data-label="Comandos Técnicos"><code>lspci</code>, <code>lsusb</code>, <code>lscpu</code>, <code>dmidecode</code></td>
    </tr>
    <tr>
      <td data-label="Camada">KERNEL (núcleo)</td>
      <td data-label="Função">Controle de recursos e segurança do sistema</td>
      <td data-label="Comandos Técnicos"><code>dmesg</code>, <code>sysctl</code>, <code>/proc</code>, <code>capabilities</code></td>
    </tr>
    <tr>
      <td data-label="Camada">INIT (serviços)</td>
      <td data-label="Função">Gerenciamento de serviços em segundo plano</td>
      <td data-label="Comandos Técnicos"><code>sv</code> (runit), <code>service</code> (sysvinit), <code>rc-service</code> (OpenRC)</td>
    </tr>
    <tr>
      <td data-label="Camada">USUÁRIO (cli)</td>
      <td data-label="Função">Processamento de texto, rede e automação</td>
      <td data-label="Comandos Técnicos"><code>xargs</code>, <code>find</code>, <code>grep</code>, <code>awk</code>, <code>sed</code>, <code>ip</code>, <code>ss</code></td>
    </tr>
  </tbody>
</table>


</section>
