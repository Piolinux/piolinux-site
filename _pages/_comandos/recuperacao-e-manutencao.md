---
layout: default
title: "🔧 Recuperação e Manutenção — Comandos Linux"
description: "Guia técnico com comandos essenciais de Recuperação e Manutenção. Copie, cole e use direto no terminal. Organizado por recuperação e manutenção."
permalink: /recuperacao-e-manutencao/
---


<section>



<h2>🖥 Comandos Gerais.</h2>


<input type="text" oninput="filtrarLinhas(this.value)" placeholder="Filtrar comandos...">
<script>
function filtrarLinhas(termo) {
  const linhas = document.querySelectorAll('tbody tr');
  linhas.forEach(linha => {
    linha.style.display = linha.textContent.toLowerCase().includes(termo.toLowerCase()) ? '' : 'none';
  });
}
</script>


<div class="table-container">
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Descrições.</th>
      <th>Ações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>fsck /dev/sda1</code></td>
      <td data-label="Descrição">Verifica sistema de arquivos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="fsck /dev/sda1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>e2fsck -f /dev/sda2</code></td>
      <td data-label="Descrição">Força verificação em ext4.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="e2fsck -f /dev/sda2">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mount /dev/sda1 /mnt</code></td>
      <td data-label="Descrição">Monta partição.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="mount /dev/sda1 /mnt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>umount /mnt</code></td>
      <td data-label="Descrição">Desmonta.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="umount /mnt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dd if=/dev/sda of=backup.img</code></td>
      <td data-label="Descrição">Copia disco inteiro.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dd if=/dev/sda of=backup.img">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dd if=backup.img of=/dev/sdb</code></td>
      <td data-label="Descrição">Restaura imagem.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dd if=backup.img of=/dev/sdb">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>testdisk</code></td>
      <td data-label="Descrição">Recupera partições perdidas.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="testdisk">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>photorec</code></td>
      <td data-label="Descrição">Recupera arquivos apagados.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="photorec">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>grub-install /dev/sda</code></td>
      <td data-label="Descrição">Reinstala GRUB.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grub-install /dev/sda">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>update-grub</code></td>
      <td data-label="Descrição">Atualiza configuração do GRUB.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="update-grub">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>chroot /mnt</code></td>
      <td data-label="Descrição">Muda raiz para recuperação.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="chroot /mnt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>blkid</code></td>
      <td data-label="Descrição">Mostra UUIDs de partições.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="blkid">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>parted /dev/sda print</code></td>
      <td data-label="Descrição">Informações da tabela de partições.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="parted /dev/sda print">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>badblocks -v /dev/sda</code></td>
      <td data-label="Descrição">Verifica setores defeituosos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="badblocks -v /dev/sda">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sync</code></td>
      <td data-label="Descrição">Força escrita no disco.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sync">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>hdparm -I /dev/sda</code></td>
      <td data-label="Descrição">Informações do disco.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="hdparm -I /dev/sda">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>lsof +L1</code></td>
      <td data-label="Descrição">Encontra arquivos excluídos mas ainda abertos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="lsof +L1">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>du -s /tmp/* | sort -nr</code></td>
      <td data-label="Descrição">Top arquivos grandes em /tmp.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="du -s /tmp/* | sort -nr">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>wipe /dev/sda</code></td>
      <td data-label="Descrição">Apaga disco com segurança.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="wipe /dev/sda">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>logrotate --force /etc/logrotate.d/app</code></td>
      <td data-label="Descrição">Força rotação de logs.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="logrotate --force /etc/logrotate.d/app">📋</button></td>
    </tr>
  </tbody>
</table>
</div>





<div class="dica-final">
  💡 <strong>Dica do Piolinux:</strong> Experimente utilizar um Live USB equipado com o gparted para ajustar suas partições sem interferir no seu sistema atual. 

</div>
<div class="aviso-final">
  ⚠️ <strong>Aviso:</strong> O comando no terminal <code>dd if=/dev/zero of=/dev/sda</code> irá apagar o disco sem qualquer confirmação. Verifique com cuidado o dispositivo 3 vezes!

</div>





</section>
