---
layout: manual-seo
title: "Formatar HD no Linux — Comandos Técnicos"
description_custom: "Tabela com comandos reais para particionar, formatar e montar discos no Linux: fdisk, mkfs, fstab, UUID."
permalink: /formatar-hd-linux/
tags: [disco, particionamento, mkfs, fstab, linux, sysadmin, evergreen]
---



{% include toc.html %}


<section>
 
  <table class="evergreen-table">
  <thead>
    <tr>
      <th>Etapas.</th>
      <th>Comandos</th>
      <th>Observações Críticas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Etapa">1. Listar discos.</td>
      <td data-label="Comando"><code>lsblk</code><br><code>sudo fdisk -l</code></td>
      <td data-label="Observação Crítica">Identifique o disco (ex: <code>/dev/sdb</code>). Nunca formate <code>/dev/sda</code> sem confirmação.</td>
    </tr>
    <tr>
      <td data-label="Etapa">2. Criar partição (MBR).</td>
      <td data-label="Comando"><code>sudo fdisk /dev/sdX</code><br><code>n → p → w</code></td>
      <td data-label="Observação Crítica">Use <code>gdisk</code> para GPT (discos >2TB)</td>
    </tr>
    <tr>
      <td data-label="Etapa">3. Formatar (ext4).</td>
      <td data-label="Comando"><code>sudo mkfs.ext4 /dev/sdX1</code></td>
      <td data-label="Observação Crítica"><code>ext4</code>: padrão Linux. Para NTFS: <code>mkfs.ntfs</code> (requer <code>ntfs-3g</code>)</td>
    </tr>
    <tr>
      <td data-label="Etapa">4. Montar temporariamente.</td>
      <td data-label="Comando"><code>sudo mkdir -p /mnt/disco</code><br><code>sudo mount /dev/sdX1 /mnt/disco</code></td>
      <td data-label="Observação Crítica">Verifique com <code>df -h</code> ou <code>ls /mnt/disco</code></td>
    </tr>
    <tr>
      <td data-label="Etapa">5. Montar no boot.</td>
      <td data-label="Comando"><code>sudo blkid</code><br>Adicione ao <code>/etc/fstab</code>:</td>
      <td data-label="Observação Crítica">Use UUID, não <code>/dev/sdX</code>. Exemplo:<br><code>UUID=abcd... /mnt/disco ext4 defaults 0 2</code></td>
    </tr>
  </tbody>
</table>
  
</section>

    
