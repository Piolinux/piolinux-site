---
layout: manual-seo
title: "Comandos para Recuperação de Disco no Linux"
description: "Tabela objetiva com ddrescue, TestDisk, PhotoRec, fsck, badblocks e mais — comandos reais, avisos técnicos e uso seguro com SEU_DISCO."
author: "Piolinux"
tags: [ddrescue, testdisk, photorec, fsck, badblocks, lsblk, blkid, linux, rescue, recuperação-de-dados]
permalink: /comandos-recuperacao-disco-linux/
---

<section>


<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Ferramentas.</th>
        <th>Propósitos.</th>
        <th>Comandos-Chaves</th>
        <th>Avisos Técnicos.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Ferramenta">lsblk</td>
        <td data-label="Propósito">Listar discos e partições.</td>
        <td data-label="Comando-Chave"><code>lsblk -f</code></td>
        <td data-label="Aviso Técnico">Primeiro passo antes de qualquer operação. Identifique <code>SEU_DISCO</code> (ex: <code>sdb</code>).</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">ddrescue</td>
        <td data-label="Propósito">Criar imagem de disco com setores defeituosos.</td>
        <td data-label="Comando-Chave"><code>ddrescue /dev/SEU_DISCO disco.img log.log</code></td>
        <td data-label="Aviso Técnico">Nunca use o disco original como destino. Trabalhe sempre com uma imagem.</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">fsck</td>
        <td data-label="Propósito">Verificar sistema de arquivos (modo seguro).</td>
        <td data-label="Comando-Chave"><code>fsck -n /dev/SEU_DISCO</code></td>
        <td data-label="Aviso Técnico">Opção <code>-n</code> = somente leitura. Nunca execute em partição montada.</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">TestDisk</td>
        <td data-label="Propósito">Recuperar partições apagadas.</td>
        <td data-label="Comando-Chave"><code>testdisk</code></td>
        <td data-label="Aviso Técnico">Interface interativa. Não grava alterações até você confirmar.</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">PhotoRec</td>
        <td data-label="Propósito">Recuperar arquivos deletados.</td>
        <td data-label="Comando-Chave"><code>photorec</code></td>
        <td data-label="Aviso Técnico">Recupera por assinatura binária. Não restaura nomes ou pastas.</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">mount</td>
        <td data-label="Propósito">Acessar dados da partição.</td>
        <td data-label="Comando-Chave"><code>mount /dev/SEU_DISCO /mnt</code></td>
        <td data-label="Aviso Técnico">Use <code>-o ro</code> para montar em modo somente leitura: <code>mount -o ro /dev/SEU_DISCO /mnt</code></td>
      </tr>
      <tr>
        <td data-label="Ferramenta">badblocks</td>
        <td data-label="Propósito">Detectar setores defeituosos.</td>
        <td data-label="Comando-Chave"><code>badblocks -v /dev/SEU_DISCO</code></td>
        <td data-label="Aviso Técnico">Modo leitura é seguro. Evite <code>-w</code> (sobrescreve todo o disco).</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">blkid</td>
        <td data-label="Propósito">Identificar tipo de sistema de arquivos.</td>
        <td data-label="Comando-Chave"><code>blkid /dev/SEU_DISCO</code></td>
        <td data-label="Aviso Técnico">Útil para saber se é ext4, NTFS, XFS antes de montar ou recuperar.</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">dd</td>
        <td data-label="Propósito">Clone rápido (só se disco estiver íntegro).</td>
        <td data-label="Comando-Chave"><code>dd if=/dev/SEU_DISCO of=backup.img bs=4M status=progress</code></td>
        <td data-label="Aviso Técnico">Falha em discos com setores ruins. Prefira <code>ddrescue</code> em casos reais.</td>
      </tr>
      <tr>
        <td data-label="Ferramenta">sync</td>
        <td data-label="Propósito">Forçar escrita de buffers para disco.</td>
        <td data-label="Comando-Chave"><code>sync</code></td>
        <td data-label="Aviso Técnico">Execute antes de remover mídias USB ou desligar durante recuperação.</td>
      </tr>
    </tbody>
  </table>
</div>


</section>
