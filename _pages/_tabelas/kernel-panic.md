---
layout:  manual-seo
tabela: kernel-panic
permalink: /tabelas/kernel-panic/
title: "Comandos para Diagnosticar e Resolver Kernel Panic no Linux"
description: "Procedimentos técnicos para identificar, recuperar e prevenir falhas críticas no kernel do Linux."
---


<section>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ações</th>
      <th>Comandos / Procedimentos.</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Verificar logs do kernel.</td>
      <td data-label="Comando / Procedimento"><code>dmesg | grep -i "panic\|error\|fail"</code></td>
      <td data-label="Observações">Mostra erros recentes no kernel.</td>
    </tr>
    <tr>
      <td data-label="Ação">Verificar log de sistema.</td>
      <td data-label="Comando / Procedimento"><code>sudo journalctl -b -1 | grep -i "kernel\|panic"</code></td>
      <td data-label="Observações">Mostra logs da última inicialização.</td>
    </tr>
    <tr>
      <td data-label="Ação">Reiniciar em modo de recuperação.</td>
      <td data-label="Comando / Procedimento">No GRUB, escolha “Advanced options for Ubuntu” → “Recovery mode”</td>
      <td data-label="Observações">Permite acessar o sistema sem carregar o kernel atual.</td>
    </tr>
    <tr>
      <td data-label="Ação">Boot no kernel anterior.</td>
      <td data-label="Comando / Procedimento">No GRUB, escolha “Advanced options for Ubuntu” → selecione o kernel anterior</td>
      <td data-label="Observações">Útil se o novo kernel estiver quebrado.</td>
    </tr>
    <tr>
      <td data-label="Ação">Remover kernel problemático.</td>
      <td data-label="Comando / Procedimento"><code>sudo apt remove linux-image-5.15.0-86-generic</code><br><code>sudo update-grub</code></td>
      <td data-label="Observações">Substitua a versão pelo kernel que está causando problema.</td>
    </tr>
    <tr>
      <td data-label="Ação">Reinstalar o bootloader.</td>
      <td data-label="Comando / Procedimento"><code>sudo grub-install /dev/sda</code><br><code>sudo update-grub</code></td>
      <td data-label="Observações">Se o GRUB não encontrar o kernel correto.</td>
    </tr>
    <tr>
      <td data-label="Ação">Atualizar pacotes antes do upgrade.</td>
      <td data-label="Comando / Procedimento"><code>sudo apt update && sudo apt upgrade -y</code></td>
      <td data-label="Observações">Evita conflitos entre pacotes durante o upgrade.</td>
    </tr>
    <tr>
      <td data-label="Ação">Manter kernel anterior por segurança.</td>
      <td data-label="Comando / Procedimento"><code>sudo apt-mark hold linux-image-5.15.0-84-generic</code></td>
      <td data-label="Observações">Impede que o kernel anterior seja removido automaticamente.</td>
    </tr>
    <tr>
      <td data-label="Ação">Testar novo kernel antes de usar.</td>
      <td data-label="Comando / Procedimento">Após o upgrade, reinicie e teste o novo kernel antes de remover o antigo</td>
      <td data-label="Observações">Evita ficar sem sistema operacional</td>
    </tr>
  </tbody>
</table>


</section>
