---
layout: default
title: "Instalação Técnica do Devuan – Sem systemd, com OpenRC"
description: "Tabela objetiva com requisitos, ISO, criação de USB, init system e pós-instalação — sem linguagem informal, só referência técnica."
permalink: /instalacao-devuan/
date: 2025-08-15 18:22:00 -0300
author: "PioLinux"
categories: [linux, devuan, guia]
tags: [devuan, linux, sysvinit, guia, instalação, sem_systemd]
---


{% include toc.html %}

          

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
      <td data-label="Etapa">Requisitos Mínimos</td>
      <td data-label="Ação Técnica">
        <ul>
          <li>CPU: i686 ou x86_64 (1 GHz+)</li>
          <li>RAM: 512 MB (instalação), 1 GB+ (uso diário)</li>
          <li>Disco: 10 GB (mínimo)</li>
        </ul>
      </td>
      <td data-label="Observação">Versão estável atual: **Daedalus (5.0)**, baseada no Debian 12.</td>
    </tr>
    <tr>
      <td data-label="Etapa">Baixar ISO</td>
      <td data-label="Ação Técnica">
        <a href="https://www.devuan.org/os/download" target="_blank" rel="noopener noreferrer">>devuan.org/os/download</a><br>
        Escolha:
        <ul>
          <li><code>netinst</code>: instalação mínima (sem desktop)</li>
          <li><code>xfce</code>, <code>cinnamon</code>: com ambiente gráfico incluso</li>
        </ul>
      </td>
      <td data-label="Observação">Prefira **64-bit (amd64)**. Versões 32-bit (i386) são legadas.</td>
    </tr>
    <tr>
      <td data-label="Etapa">Criar Live USB</td>
      <td data-label="Ação Técnica">
        <tr>
  <td data-label="Comando"><code>sudo dd if=devuan.iso of=/dev/SEU_DISCO bs=4M status=progress oflag=sync</code></td>
  <td data-label="Descrição">Grava imagem ISO em USB/SD para boot.</td>
  <td data-label="Aviso Técnico">⚠️ Substitua <code>SEU_DISCO</code> por um dispositivo real (ex: <code>sdb</code>). Use <code>lsblk</code> para identificar. Nunca use o disco do sistema (<code>sda</code>).</td>
</tr>
    </tr>
    <tr>
      <td data-label="Etapa">Init System</td>
      <td data-label="Ação Técnica">
        Escolha durante a instalação:
        <ul>
          <li><strong>OpenRC</strong> (padrão, recomendado)</li>
          <li>sysvinit</li>
          <li>runit</li>
        </ul>
      </td>
      <td data-label="Observação">Devuan **não usa systemd**. OpenRC é o substituto mais compatível com scripts do Debian.</td>
    </tr>
    <tr>
      <td data-label="Etapa">Pós-instalação essencial</td>
      <td data-label="Ação Técnica">
        <code>sudo apt update && sudo apt full-upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade -y">📋 Copiar</button>
      </td>
      <td data-label="Observação">Não há <code>systemctl</code>. Use <code>sudo service nome start</code> ou <code>sudo rc-service nome start</code> (OpenRC).</td>
    </tr>
  </tbody>
</table>

<h3 id="avisos">Avisos Técnicos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Fato</th>
      <th>Explicação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">Particionamento manual requer cuidado</td>
      <td data-label="Explicação">Se usar dual-boot, não formate a partição EFI do Windows. Monte como <code>/boot/efi</code> sem formatação.</td>
    </tr>
    <tr>
      <td data-label="Fato">Drivers proprietários</td>
      <td data-label="Explicação">Adicione o repositório <code>non-free-firmware</code> em <code>/etc/apt/sources.list</code> para drivers de Wi-Fi e GPU.</td>
    </tr>
    <tr>
      <td data-label="Fato">GRUB é instalado por padrão</td>
      <td data-label="Explicação">O instalador grava em <code>/dev/sda</code> (não em <code>sda1</code>). Funciona em BIOS e UEFI.</td>
    </tr>
  </tbody>
</table>
    </section>
 

