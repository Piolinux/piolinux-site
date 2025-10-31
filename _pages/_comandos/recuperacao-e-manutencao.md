---
layout: manual-seo
title: "Recuperação e Manutenção — Comandos Linux"
description: "Guia técnico com comandos essenciais de Recuperação e Manutenção. Copie, cole e use direto no terminal. Organizado por recuperação e manutenção."
permalink: /recuperacao-e-manutencao/
---


<section>



<h2>Comandos Gerais.</h2>



<input type="text" oninput="filtrarLinhas(this.value)" placeholder="Filtrar comandos...">
<script>
function filtrarLinhas(termo) {
  const linhas = document.querySelectorAll('tbody tr');
  linhas.forEach(linha => {
    linha.style.display = linha.textContent.toLowerCase().includes(termo.toLowerCase()) ? '' : 'none';
  });
}
</script>

<h2>Tabela de Comandos de ALTO RISCO (Use por sua própria conta e risco)</h2>
<p><strong>ATENÇÃO:</strong> Estes comandos podem causar perda irreversível de dados ou inutilizar o sistema.<br>
Substitua <code>SEU_DISCO</code> por um dispositivo real (ex: <code>sdb1</code>) após identificá-lo com <code>lsblk</code> ou <code>blkid</code>.<br>
<strong>Execute apenas em partição desmontada</strong> — idealmente a partir de um live CD/USB.</p>

<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Comandos</th>
        <th>Descrições</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Comando"><code>fsck -n /dev/SEU_DISCO</code></td>
        <td data-label="Descrição">Diagnóstico em modo somente leitura. Não corrige nada.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="fsck -n /dev/SEU_DISCO">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>e2fsck -fn /dev/SEU_DISCO</code></td>
        <td data-label="Descrição">Verificação simulada para sistemas de arquivos ext2/3/4.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="e2fsck -fn /dev/SEU_DISCO">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>mount /dev/SEU_DISCO /mnt</code></td>
        <td data-label="Descrição">Monta partição em /mnt.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="mount /dev/SEU_DISCO /mnt">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>umount /mnt</code></td>
        <td data-label="Descrição">Desmonta partição.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="umount /mnt">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>dd if=/dev/SEU_DISCO of=backup.img</code></td>
        <td data-label="Descrição">Copia disco inteiro para imagem.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="dd if=/dev/SEU_DISCO of=backup.img">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>dd if=backup.img of=/dev/SEU_DISCO</code></td>
        <td data-label="Descrição">Restaura imagem para disco.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="dd if=backup.img of=/dev/SEU_DISCO">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>testdisk</code></td>
        <td data-label="Descrição">Recupera partições perdidas (interface interativa).</td>
        <td data-label="Ação"><button class="copy-btn" data-command="testdisk">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>photorec</code></td>
        <td data-label="Descrição">Recupera arquivos apagados por assinatura binária.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="photorec">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>grub-install /dev/SEU_DISCO</code></td>
        <td data-label="Descrição">Reinstala GRUB no disco (não na partição).</td>
        <td data-label="Ação"><button class="copy-btn" data-command="grub-install /dev/SEU_DISCO">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>update-grub</code></td>
        <td data-label="Descrição">Atualiza menu do GRUB com kernels detectados.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="update-grub">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>chroot /mnt</code></td>
        <td data-label="Descrição">Muda raiz para /mnt (após montar sistema).</td>
        <td data-label="Ação"><button class="copy-btn" data-command="chroot /mnt">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>blkid</code></td>
        <td data-label="Descrição">Lista UUIDs e tipos de sistemas de arquivos.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="blkid">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>parted /dev/SEU_DISCO print</code></td>
        <td data-label="Descrição">Mostra tabela de partições (GPT/MBR).</td>
        <td data-label="Ação"><button class="copy-btn" data-command="parted /dev/SEU_DISCO print">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>badblocks -v /dev/SEU_DISCO</code></td>
        <td data-label="Descrição">Verifica setores defeituosos (modo leitura).</td>
        <td data-label="Ação"><button class="copy-btn" data-command="badblocks -v /dev/SEU_DISCO">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>sync</code></td>
        <td data-label="Descrição">Força escrita de buffers para disco.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="sync">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>hdparm -I /dev/SEU_DISCO</code></td>
        <td data-label="Descrição">Mostra informações detalhadas do disco (modelo, suporte, etc.).</td>
        <td data-label="Ação"><button class="copy-btn" data-command="hdparm -I /dev/SEU_DISCO">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>lsof +L1</code></td>
        <td data-label="Descrição">Lista arquivos excluídos ainda mantidos em uso por processos.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="lsof +L1">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>du -s /tmp/* 2>/dev/null | sort -nr</code></td>
        <td data-label="Descrição">Mostra uso de disco em /tmp, ignorando erros (ex: permissão).</td>
        <td data-label="Ação"><button class="copy-btn" data-command="du -s /tmp/* 2>/dev/null | sort -nr">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>shred -vfn 3 -z /dev/SEU_DISCO</code></td>
        <td data-label="Descrição">Sobrescreve disco 3x + zeros. Use só em discos descartáveis.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="shred -vfn 3 -z /dev/SEU_DISCO">📋</button></td>
      </tr>
      <tr>
        <td data-label="Comando"><code>cat /var/lib/logrotate/status</code></td>
        <td data-label="Descrição">Mostra última execução do logrotate por arquivo.</td>
        <td data-label="Ação"><button class="copy-btn" data-command="cat /var/lib/logrotate/status">📋</button></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Tabela de Comandos de ALTO RISCO (Use por sua própria conta e risco).</h2>
<div class="warning-box">
  <strong>ATENÇÃO:</strong> Estes comandos podem causar perda irreversível de dados ou inutilizar o sistema. Substitua <code>SEU_DISCO</code> por um dispositivo real (ex: <code>sdb1</code>) após identificá-lo com <code>lsblk</code> ou <code>blkid.</code>.
</div>

<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Comandos Ajustados e Seguros.</th>
        <th>Propósito dos Comandos.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Comando Ajustado e Seguro"><code>du -s /tmp/* 2>/dev/null | sort -nr</code></td>
        <td data-label="Propósito do Comando">Lista uso de disco em <code>/tmp</code> de forma robusta (ignora erros).</td>
      </tr>
      <tr>
        <td data-label="Comando Ajustado e Seguro"><code>sudo logrotate -dv /etc/logrotate.d/app</code></td>
        <td data-label="Propósito do Comando">Simula rotação de logs sem alterar arquivos (-d = debug, -v = verbose).</td>
      </tr>
      <tr>
        <td data-label="Comando Ajustado e Seguro"><code>sudo e2fsck -fn /dev/SEU_DISCO.</code></td>
        <td data-label="Propósito do Comando">Diagnóstico seguro para sistemas de arquivos ext2/3/4 (modo somente leitura).</td>
      </tr>
      <tr>
        <td data-label="Comando Ajustado e Seguro"><code>sudo fsck -n /dev/SEU_DISCO.</code></td>
        <td data-label="Propósito do Comando">Checagem genérica sem alterações (-n = não interativo, somente leitura).</td>
      </tr>
      <tr>
        <td data-label="Comando Ajustado e Seguro"><code>sudo shred -vfn 3 -z /dev/SEU_DISCO.</code></td>
        <td data-label="Propósito do Comando">Apaga dados de forma segura: 3 sobrescritas aleatórias + 1 com zeros.</td>
      </tr>
      <tr>
        <td data-label="Comando Ajustado e Seguro"><code>sync</code></td>
        <td data-label="Propósito do Comando">Força escrita imediata de buffers — essencial antes de desligar ou remover mídias.</td>
      </tr>
      <tr>
        <td data-label="Comando Ajustado e Seguro"><code>sudo badblocks -v /dev/SEU_DISCO.</code></td>
        <td data-label="Propósito do Comando">Verifica setores defeituosos em modo somente leitura.</td>
      </tr>
      <tr>
        <td data-label="Comando Ajustado e Seguro">Sequência de montagem:<br><code>mount /dev/SEU_DISCO. /mnt</code><br><code>mount --bind /dev /mnt/dev</code><br><code>mount --bind /proc /mnt/proc</code><br><code>mount --bind /sys /mnt/sys</code><br><code>chroot /mnt</code></td>
        <td data-label="Propósito do Comando">Prepara ambiente chroot completo para recuperação de sistema (GRUB, initramfs, etc.).</td>
      </tr>
    </tbody>
  </table>
</div>

