---
layout: default
title: "Instalar Slackware: Guia Completo para Iniciantes"
date: 2025-08-21
author: "PioLinux"
categories: [slackware, linux, tutoriais]
tags: [slackware, linux, instalacao, terminal, sistema_operacional, tutorial]
description: "Guia passo a passo para instalar o Slackware Linux: desde o boot até a configuração inicial. Ideal para quem quer dominar o terminal e entender o Linux."
permalink: /instalar-slackware-guia-completo/
---

{% include toc.html %}

  <section class="post-content">
  
 <p>Instalação técnica do Ubuntu (22.04/24.04 LTS). Foco em decisões reais: particionamento, pós-instalação e remoção de componentes indesejados (ex: Snap). Todos os comandos testados em hardware real.</p> 
  
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Etapa</th>
      <th>Ação Técnica</th>
      <th>Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Etapa">Baixar ISO</td>
      <td data-label="Ação Técnica">
        <a href="https://www.slackware.com/getslack/" target="_blank">slackware.com/getslack</a>
      </td>
      <td data-label="Observação">Slackware 15.0 (2022) é a versão estável atual. Não há “LTS” — só uma versão por década.</td>
    </tr>
    <tr>
      <td data-label="Etapa">Criar Live USB</td>
      <td data-label="Ação Técnica">
        
        <code>sudo dd if=sudo dd if=slackware-15.0-install-dvd.iso of=/dev/sdX bs=4M status=progress && sync</code>
        <button class="copy-btn" data-command="sudo dd if=slackware-15.0-install-dvd.iso of=/dev/sdX bs=4M status=progress && sync">📋 Copiar</button>
        
      </td>
      <td data-label="Observação">Slackware tem “Live mode” — o USB é só para instalação.</td>
    </tr>
    <tr>
      <td data-label="Etapa">Instalação (modo texto)</td>
      <td data-label="Ação Técnica">
        Após boot: <code>setup</code> → particionamento com <code>fdisk</code> ou <code>cfdisk</code>
      </td>
      <td data-label="Observação">Não há GUI. Tudo é feito via terminal. Escolha pacotes por série (A, AP, D, L, X, etc.).</td>
    </tr>
    <tr>
      <td data-label="Etapa">Configuração pós-instalação</td>
      <td data-label="Ação Técnica">
        <ul>
          <li>Edite <code>/etc/lilo.conf</code> e rode <code>lilo</code> (ou use GRUB)</li>
          <li>Ative rede: <code>netconfig</code></li>
          <li>Crie usuário: <code>adduser</code></li>
        </ul>
      </td>
      <td data-label="Observação">Slackware não tem gerenciador de pacotes moderno. Use <code>pkgtool</code>, <code>installpkg</code>, <code>removepkg</code>.</td>
    </tr>
    <tr>
      <td data-label="Etapa">Kernel atual</td>
      <td data-label="Ação Técnica">
        <code>uname -r</code> → 5.15.x (Slackware 15.0)
      </td>
      <td data-label="Observação">Kernel estável, sem systemd, sem PulseAudio. Tudo é init clássico + ALSA.</td>
    </tr>
  </tbody>
</table>
</section>





