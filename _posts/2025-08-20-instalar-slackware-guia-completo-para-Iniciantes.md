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

 
 <section class="post-content">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Etapas.</th>
        <th>Ações Técnicas.</th>
        <th>Observações.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Etapa">Baixar ISO</td>
        <td data-label="Ação Técnica">
          <a href="https://www.slackware.com/getslack/" target="_blank" rel="noopener noreferrer">slackware.com/getslack</a>
        </td>
        <td data-label="Observação">Slackware 15.0 (2022) é a versão estável atual. Não há “LTS” — só uma versão por década.</td>
      </tr>
      <tr>
        <td data-label="Etapa">Criar Live USB</td>
        <td data-label="Ação Técnica">
          <code>sudo dd if=slackware-15.0-install-dvd.iso of=/dev/SEU_DISCO bs=4M status=progress oflag=sync</code>
          <button class="copy-btn" data-command="sudo dd if=slackware-15.0-install-dvd.iso of=/dev/SEU_DISCO bs=4M status=progress oflag=sync">📋 Copiar</button>
        </td>
        <td data-label="Observação">⚠️ Substitua <code>SEU_DISCO</code> por um dispositivo real (ex: <code>sdb</code>). Use <code>lsblk</code> para identificar. Slackware não tem modo Live — o USB é só para instalação.</td>
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
            <li>Edite <code>/etc/lilo.conf</code> e rode <code>lilo</code> (ou instale GRUB)</li>
            <li>Ative rede: <code>netconfig</code></li>
            <li>Crie usuário: <code>adduser</code></li>
          </ul>
        </td>
        <td data-label="Observação">Slackware não tem gerenciador de pacotes moderno. Use <code>pkgtool</code>, <code>installpkg</code>, <code>removepkg</code>.</td>
      </tr>
      <tr>
        <td data-label="Etapa">Kernel atual</td>
        <td data-label="Ação Técnica">
          <code>uname -r</code>
        </td>
        <td data-label="Observação">Slackware 15.0 usa kernel **5.15.x**, estável, sem systemd, sem PulseAudio. Tudo é init clássico + ALSA.</td>
      </tr>
    </tbody>
  </table>
</section>





