---
layout: default
title: "Formatar HD no Linux: Guia Técnico Passo a Passo"
description: "Comandos, etapas e dicas evergreen para formatar discos com segurança. Use ext4, ntfs, UUID e evite erros."
date: 2025-09-21
permalink: /formatar-hd-linux/
categories: [sistema, administracao]
tags: [fdisk, mkfs, ext4, ntfs, fstab, uuid]
---



{% include toc.html %}


<section>
 <div class="intro-section" style="background: #1a1a1a; padding: 25px; border-radius: 12px; border-left: 4px solid #8bc34a; margin-bottom: 30px;">
    <h2 style="color: #8bc34a; margin: 0 0 15px 0; font-size: 1.5em;">🐧 Formatação de HD no Linux — Comandos Essenciais</h2>
    <p style="color: #d0d0d0; line-height: 1.7; margin: 0;">
      <strong>  E aí! Beleza? Essa tabela tem os comandos mais usados pra formatar discos no Linux, com uns exemplos práticos, os sistemas de arquivos que funcionam e umas dicas de uso. Pra quem manja, pro administrador ou pra quem tá montando um servidor ou sistema do zero, é perfeito. Sem complicação, só o que importa, saca?</strong>
    </p>
</div>

  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Etapas</th>
        <th>Comandos</th>
        <th>Propósito</th>
        <th>Dicas Evergreen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Etapas"><strong>1. Listar discos.</strong></td>
        <td data-label="Comandos"><code>lsblk</code><br><code>sudo fdisk -l</code></td>
        <td data-label="Propósito">Identificar o disco a ser formatado (ex: /dev/sdb). (ex: /dev/sdb)</td>
        <td data-label="Dicas Evergreen">Nunca formate /dev/sda (geralmente é o disco do sistema!)</td>
      </tr>
      <tr>
        <td data-label="Etapas"><strong>2. Criando sua partição.</strong></td>
        <td data-label="Comandos"><code>sudo fdisk /dev/sdX</code><br>comandos: n (nova), p (primária), w (gravar)</td>
        <td data-label="Propósito">Criando tabela de partição (MBR ou GPT)</td>
        <td data-label="Dicas Evergreen"> Use <code>gdisk</code> para GPT (discos >2TB)</td>
      </tr>
      <tr>
        <td data-label="Etapas"><strong>3. Formatando a partição.</strong></td>
        <td data-label="Comandos"><code>sudo mkfs.ext4 /dev/sdX1</code><br><code>sudo mkfs.ntfs /dev/sdX1</code></td>
        <td data-label="Propósito">Aplicar sistema de arquivos (ext4, ntfs, xfs, etc.)</td>
        <td data-label="Dicas Evergreen"> ext4 é o padrão Linux — estável e rápido</td>
      </tr>
      <tr>
        <td data-label="Etapas"><strong>4. Montando temporariamente digite os comandos.</strong></td>
        <td data-label="Comandos"><code>sudo mkdir /mnt/disco</code><br><code>sudo mount /dev/sdX1 /mnt/disco</code></td>
        <td data-label="Propósito">Testar se a formatação funcionou</td>
        <td data-label="Dicas Evergreen"> Verifique com <code>df -h</code> ou <code>ls /mnt/disco</code></td>
      </tr>
      <tr>
        <td data-label="Etapas"><strong>5. Montar automaticamente (opcional).</strong></td>
        <td data-label="Comandos"><code>sudo blkid</code> copie UUID<br>Edite <code>/etc/fstab</code></td>
        <td data-label="Propósito">Fazer o sistema montar o disco no boot</td>
        <td data-label="Dicas Evergreen">Use UUID, não /dev/sdX — evita erros se a ordem mudar</td>
      </tr>
    </tbody>
  </table>

  <p class="frase-reforco"> Formatar não é destruir — é preparar. Faça backup antes. Sempre.</p>


<div class="conclusion-section" style="background: #1a2a1a; padding: 25px; border-radius: 12px; border-left: 4px solid #8bc34a; margin-top: 30px;">
    <h3 style="color: #8bc34a; margin: 0 0 15px 0; font-size: 1.4em;">✅ Pronto — seu disco está formatado!</h3>
    <p style="color: #d0d0d0; line-height: 1.7; margin: 0;">
        Monte-o com <code style="background: #2a2a2a; padding: 2px 6px; border-radius: 4px;">sudo mount /dev/sdX1 /ponto/de/montagem</code> e adicione ao <code style="background: #2a2a2a; padding: 2px 6px; border-radius: 4px;">/etc/fstab</code> se quiser montagem automática na inicialização. Esta tabela serve como referência rápida — salve-a, imprima-a ou use como cheat sheet no seu terminal.
    </p>
</div>


  
</section>

    
