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
      <td data-label="Comando"><code>fsck -n /dev/SEU_DISCO</code></td>
      <td data-label="Descrição">Garante um diagnóstico seguro em modo de leitura, sem tentar corrigir nada.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="fsck -n /dev/SEU_DISCO">📋</button></td>
    </tr>
      <tr>
      <td data-label="Comando"><code>e2fsck -fn /dev/<<SEU_DISCO>></code></td>
      <td data-label="Descrição">Simular a verificação e apenas relata o problema de forma segura.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="e2fsck -fn /dev/SEU_DISCO">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mount /dev/<<SEU_DISCO>>/mnt</code></td>
      <td data-label="Descrição">Monta partição.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="mount /dev/SEU_DISCO /mnt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>umount /mnt</code></td>
      <td data-label="Descrição">Desmonta.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="umount /mnt">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dd if=/dev/<<SEU_DISCO>> of=backup.img</code></td>
      <td data-label="Descrição">Copia disco inteiro.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dd if=/dev/SEU_DISCO of=backup.img">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>dd if=backup.img of=/dev/SEU_DISCO</code></td>
      <td data-label="Descrição">Restaura imagem.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="dd if=backup.img of=/dev/SEU_DISCO">📋</button></td>
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
      <td data-label="Comando"><code>grub-install /dev/<<SEU_DISCO>></code></td>
      <td data-label="Descrição">Reinstala GRUB.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="grub-install /dev/SEU_DISCO">📋</button></td>
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
      <td data-label="Comando"><code>parted /dev/<<SEU_DISCO>> print</code></td>
      <td data-label="Descrição">Informações da tabela de partições.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="parted /dev/SEU_DISCO print">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>badblocks -v /dev/<<SEU_DISCO>></code></td>
      <td data-label="Descrição">Verifica setores defeituosos.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="badblocks -v /dev/SEU_DISCO">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sync</code></td>
      <td data-label="Descrição">Força escrita no disco.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="sync">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>hdparm -I /dev/SEU_DISCO</code></td>
      <td data-label="Descrição">Informações do disco.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="hdparm -I /dev/SEU_DISCO">📋</button></td>
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
      <td data-label="Comando"><code> shred -vfn 3 -z /dev/SEU_DISCO</code></td>
      <td data-label="Descrição">Use apenas em discos que você pretende descartar ou vender.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="shred -vfn 3 -z /dev/SEU_DISCO">📋</button></td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cat /var/lib/logrotate/status</code></td>
      <td data-label="Descrição">Mostra todos os logs.</td>
      <td data-label="Ação"><button class="copy-btn" data-command="cat /var/lib/logrotate/status">📋</button></td>
    </tr>
  </tbody>
</table>
</div>



<h2>Tabela de Comandos de ALTO RISCO (Use por sua própria conta e risco).</h2>
<div>ATENÇÃO IMPORTANTE:</div> 
<p>Esses comandos podem ser bastante arriscados e podem levar à perda irreversível de informações ou até mesmo deixar o sistema operacional fora de ação. Ao utilizar esses comandos, você assume total responsabilidade e risco.</p>





<table class="evergreen-table">
  <thead>
    <tr>
     
      <th>Comandos Ajustados e Seguros.</th>
      <th>Propósito dos Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td data-label="Comando Ajustado e Seguro"><code>du -s /tmp/* | sort -nr</code></td>
      <td data-label="Propósito do Comando">Listar uso de disco em <code>/tmp</code> de forma estável (sem falhar em nomes com espaço).</td>
    </tr>
    <tr>
      <td data-label="Comando Ajustado e Seguro"><code>sudo logrotate -dv /etc/logrotate.d/app</code></td>
      <td data-label="Propósito do Comando">Diagnóstico de Logrotate: simula rotação, mostra erros de sintaxe ou permissão (-d = debug, -v = verbose), sem alterar arquivos.</td>
    </tr>
    <tr>
      <td data-label="Comando Ajustado e Seguro"><code>sudo e2fsck -fn /dev/SEU_DISCO</code>.</td>
      <td data-label="Propósito do Comando">Diagnóstico de partição EXT: verifica erros e simula correção (-n = modo somente leitura), sem risco de perda de dados.</td>
    </tr>
    <tr>
      <td data-label="Comando Ajustado e Seguro"><code>sudo fsck -n /dev/SEU_DISCO</code></td>
      <td data-label="Propósito do Comando">Checagem genérica de sistema de arquivos: modo diagnóstico apenas (-n), sem alterações.</td>
    </tr>
    <tr>
      <td data-label="Comando Ajustado e Seguro"><code>sudo shred -vfn 3 -z /dev/SEU_DISCO</code></td>
      <td data-label="Propósito do Comando">A eliminação segura de dados consiste na sobrescrição do disco três vezes com informações aleatórias, seguida de uma vez com zeros.Este procedimento torna a recuperação de dados inviável.</td>
    </tr>
    <tr>
      <td data-label="Comando Ajustado e Seguro"><code>sync</code></td>
      <td data-label="Propósito do Comando">Força escrita imediata de todos os buffers da RAM para o disco - essencial antes de desligar ou remover mídias.</td>
    </tr>
    <tr>
      <td data-label="Comando Ajustado e Seguro"><code>sudo badblocks -v /dev/SEU_DISCO</code></td>
      <td data-label="Propósito do Comando">Verificação de setores defeituosos: modo somente leitura (-v = verbose), sem danificar dados.</td>
    </tr>
    <tr>
      <td data-label="Comando Ajustado e Seguro">Sequência: <code>mount /dev/SEU_DISCO/mnt</code> → <code>mount --bind /dev /mnt/dev</code> → <code>chroot /mnt</code></td>
      <td data-label="Propósito do Comando">Recuperação de sistema: entra em ambiente raiz montado (ex: para reinstalar GRUB). É imprescindível realizar a configuração prévia dos diretórios /dev, /proc e /sys.<code>/dev</code>, <code>/proc</code>, <code>/sys</code></td>
    </tr>
  </tbody>
</table>









</section>
