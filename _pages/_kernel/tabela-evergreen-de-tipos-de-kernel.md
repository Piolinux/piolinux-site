---
layout: manual-seo
title: "Arquiteturas de Kernel — Comparação Técnica"
description: "Tabela com monolítico, microkernel, híbrido, unikernel e nanokernel: onde rodam drivers, exemplos reais e uso prático."
permalink: /arquiteturas-kernel/
tags: [kernel, linux, microkernel, unikernel, arquitetura, sistema-operacional, evergreen]
---







<section>
  



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Arquiteturas.</th>
      <th>Espaço do Kernel.</th>
      <th>Drivers.</th>
      <th>Exemplos Reais.</th>
      <th>Uso Comum.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Arquitetura">Monolítico</td>
      <td data-label="Espaço do Kernel">Tudo no kernel.</td>
      <td data-label="Drivers">No kernel</td>
      <td data-label="Exemplos Reais">Linux, FreeBSD</td>
      <td data-label="Uso Comum">Servidores, desktops, Android</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Microkernel</td>
      <td data-label="Espaço do Kernel">Só IPC, scheduler, memória.</td>
      <td data-label="Drivers">No userspace</td>
      <td data-label="Exemplos Reais">QNX, Minix 3, Hurd.</td>
      <td data-label="Uso Comum">Sistemas embarcados, críticos</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Híbrido</td>
      <td data-label="Espaço do Kernel">Parte no kernel, parte no userspace.</td>
      <td data-label="Drivers">Mistos</td>
      <td data-label="Exemplos Reais">macOS (XNU), Windows NT.</td>
      <td data-label="Uso Comum">Desktops comerciais</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Unikernel</td>
      <td data-label="Espaço do Kernel">App + kernel fundidos.</td>
      <td data-label="Drivers">Compilados com app</td>
      <td data-label="Exemplos Reais">MirageOS, Unikraft.</td>
      <td data-label="Uso Comum">Cloud, serverless</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Nanokernel</td>
      <td data-label="Espaço do Kernel">Só gerencia CPU/virtualização.</td>
      <td data-label="Drivers">Em camada acima</td>
      <td data-label="Exemplos Reais">seL4, EROS.</td>
      <td data-label="Uso Comum">Verificação formal, RTOS</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
    <thead>
      <tr>
        <th>Tarefas.</th>
        <th>Comandos.</th>
        <th>Propósitos Técnicos.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Tarefa">Ver versão do kernel em execução.</td>
        <td data-label="Comando"><code>uname -r</code><br><button class="copy-btn" data-command="uname -r">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Mostra a versão exata do kernel (ex: <code>6.8.0-40-generic</code>).</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Listar todos os kernels instalados.</td>
        <td data-label="Comando"><code>ls /boot/vmlinuz-*</code><br><button class="copy-btn" data-command="ls /boot/vmlinuz-*">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Verificar se há kernels antigos para limpeza.</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar integridade do kernel (Ubuntu/Debian)</td>
        <td data-label="Comando"><code>debsums -c linux-image-$(uname -r)</code><br><button class="copy-btn" data-command="debsums -c linux-image-$(uname -r)">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Confirma se arquivos do kernel não foram alterados (requer <code>sudo apt install debsums</code>).</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar se o kernel tem suporte a módulos.</td>
        <td data-label="Comando"><code>lsmod</code><br><button class="copy-btn" data-command="lsmod">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Lista módulos carregados — se vazio, pode ser kernel monolítico ou sem suporte.</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar a existência de atualizações do núcleo do sistema.</td>
        <td data-label="Comando"><code>dpkg -l | grep 'linux-image-'</code><br><button class="copy-btn" data-command="dpkg -l | grep 'linux-image-'">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Versão mais nova disponível nos repositórios.</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar assinatura do kernel (segurança)</td>
        <td data-label="Comando"><code>sudo apt-key list | grep -A1 -B1 'Ubuntu' || echo "Chave não encontrada"</code><br><button class="copy-btn" data-command='sudo apt-key list | grep -A1 -B1 "Ubuntu" || echo "Chave não encontrada"'>📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Confirma se o kernel vem de fonte autêntica (Ubuntu/Debian/Devuan)</td>
      </tr>
    </tbody>
  </table>



</section>




