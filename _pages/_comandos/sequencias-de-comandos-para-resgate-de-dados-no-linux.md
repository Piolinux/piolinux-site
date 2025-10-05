---
layout: default
title: "Sequências de Comandos para Resgate de Dados no Linux"
description: "Passo a passo real para discos com falha, partições apagadas, arquivos deletados e falhas de boot — com ddrescue, TestDisk, PhotoRec e mais."
author: "Piolinux"
categories: [recuperação, resgate, linux, terminal, dados]
tags: [ddrescue, testdisk, photorec, fsck, chroot, linux, recuperação-de-dados]
permalink: /sequencias-comandos-resgate-linux/
---




<section>

<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Cenário de Emergências</th>
        <th>Sequência de Comandoss</th>
        <th>Avisos Críticos.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Cenário de Emergência">Disco com setores defeituosos</td>
        <td data-label="Sequência de Comandos">
          <code>lsblk -f</code><br>
          <code>ddrescue /dev/SEU_DISCO imagem.img log.log</code><br>
          <code>fsck -n imagem.img</code>
        </td>
        <td data-label="Aviso Crítico">Nunca opere no disco original. Sempre crie uma imagem primeiro.</td>
      </tr>
      <tr>
        <td data-label="Cenário de Emergência">Partição apagada ou tabela corrompida</td>
        <td data-label="Sequência de Comandos">
          <code>testdisk</code><br>
          (seguir interface: selecionar disco → Analyse → Quick Search → Write)
        </td>
        <td data-label="Aviso Crítico">Só confirme "Write" após verificar que as partições detectadas estão corretas.</td>
      </tr>
   <tr>      
     <td data-label="Cenário de Emergência">Arquivos deletados (fotos, docs, vídeos)</td>
     <td data-label="Sequência de Comandos">
     <code>photorec</code><br>
      (selecionar disco → escolher sistema de arquivos → selecionar tipos de arquivo → salvar em outro disco)
      </td>
        <td data-label="Aviso Crítico">Nunca salve os arquivos recuperados na mesma partição — sobrescreve dados ainda recuperáveis.</td>
   </tr>
 <tr>
  <td data-label="Cenário de Emergência">Sistema não inicializa (GRUB quebrado)</td>
  <td data-label="Sequência de Comandos">
    Use <strong>MX Linux Live USB</strong>:<br>
    Menu → <strong>System → MX Boot Repair → Apply</strong>
  </td>
  <td data-label="Aviso Crítico">Solução automática, testada e segura. Não precisa de acesso a internet, comandos manuais ou chroot.</td>
</tr>



      <tr>
        <td data-label="Cenário de Emergência">Verificar integridade de sistema de arquivos</td>
        <td data-label="Sequência de Comandos">
          <code>umount /dev/SEU_DISCO</code><br>
          <code>fsck -n /dev/SEU_DISCO</code><br>
          (se seguro) <code>fsck -y /dev/SEU_DISCO</code>
        </td>
        <td data-label="Aviso Crítico">Nunca execute fsck em partição montada. Pode corromper dados permanentemente.</td>
      </tr>
      <tr>
        <td data-label="Cenário de Emergência">Acessar dados de disco com falha parcial</td>
        <td data-label="Sequência de Comandos">
          <code>mount -o ro,noload /dev/SEU_DISCO /mnt</code>
        </td>
        <td data-label="Aviso Crítico">Use <code>-o ro</code> (somente leitura) e <code>noload</code> (ignora journal) para evitar piorar a corrupção.</td>
      </tr>
      <tr>
        <td data-label="Cenário de Emergência">Diagnosticar falha de hardware</td>
        <td data-label="Sequência de Comandos">
          <code>smartctl -a /dev/SEU_DISCO</code><br>
          <code>dmesg -T | grep -i "error\|fail"</code><br>
          <code>badblocks -v /dev/SEU_DISCO</code>
        </td>
        <td data-label="Aviso Crítico">Evite <code>badblocks -w</code> — sobrescreve todo o disco. Use só modo leitura (<code>-v</code>).</td>
      </tr>
    </tbody>
  </table>
</div>

</section>


