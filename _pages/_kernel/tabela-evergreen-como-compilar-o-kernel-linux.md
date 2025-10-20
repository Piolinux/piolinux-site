---
layout: manual-seo
title_custom: "Compilar Kernel Linux — Comandos e Etapas Técnicas | Piolinux"
description_custom: "Tabela com comandos reais para compilar kernel Linux: dependências, configuração, make -j$(nproc), instalação e atualização do GRUB."
title: "Compilar Kernel Linux — Comandos e Etapas Técnicas"
permalink: /compilar-kernel/
tags: [kernel, linux, compilacao, make, grub, apt, evergreen]
---







<section class="post-content">

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Etapas.</th>
      <th>Comandos.</th>
      <th>Observações Críticas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Etapa">1. Dependências (Debian/Devuan).</td>
      <td data-label="Comando"><code>sudo apt update && sudo apt install build-essential libncurses-dev bison flex libssl-dev libelf-dev</code></td>
      <td data-label="Observação Crítica">Leia documentação official abaixo.</td>
    </tr>
    <tr>
      <td data-label="Etapa">1.1 (Opcional) Ativar backports para dependências.</td>
      <td data-label="Comando"><code>apt -t bookworm/daedalus-backports install libelf-dev</code></td>
     <td data-label="Observação Crítica"><em>Caso ocorram erros de pacotes quebrados.</em></td>
    </tr>
    <tr>
      <td data-label="Etapa">2 Baixar kernel.</td>
      <td data-label="Comando"><code>sudo apt install linux-source</code></td>
      <td data-label="Observação Crítica">O pacote <code>linux-source-6.12</code> contém o código do kernel LTS. Acesse <a href="https://kernel.org" target="_blank">kernel.org</a> para versões mais recentes.</td>
    </tr>
    <tr>
      <td data-label="Etapa">2.1 Verificar diretório.</td>
      <td data-label="Comando"><code>cd /usr/src && ls</code></td>
      <td data-label="Observação Crítica">Confirme o nome exato da pasta <code>linux-source-6.12 </code> antes de extrair. Evita erros de caminho inexistente.</td>
    </tr>
    <tr>
      <td data-label="Etapa">3. Extrair e preparar código-fonte.</td>
      <td data-label="Comando"><code>sudo tar -xvf linux-source-*.tar.xz && cd linux-source-6.12 && cp /boot/config-$(uname -r) .config</code></td>
      <td data-label="Observação Crítica">Esses passos garantem que você comece com a configuração atual do kernel, evitando problemas de compatibilidade.</td>
    </tr>
    <tr>
      <td data-label="Etapa">4. Configurar o Kernel.</td>
      <td data-label="Comando"><code>make olddefconfig</code></td>
      <td data-label="Observação Crítica">Mantém sua config atual. Utilize <code>make menuconfig</code> para ajustes manuais. Evite <code>make config</code> — é muito demorado.</td>
    </tr>
    <tr>
      <td data-label="Etapa">5. Compilação.</td>
      <td data-label="Comando"><code>make -j $(nproc) bindeb-pkg </code></td>
      <td data-label="Observação Crítica">Para acelerar, use make -j$(nproc) e o sistema detectará automaticamente o número de núcleos da CPU.</td>
    </tr>
<tr>
  <td data-label="Etapa">5.1 (Opcional) Limpeza pós-compilação.</td>
  <td data-label="Comando"><code>make clean && make mrproper</code></td>
  <td data-label="Observação Crítica">Use apenas se quiser liberar espaço após gerar os pacotes .deb.</td>
</tr>

    
     <tr>
      <td data-label="Etapa">6. Instalação do kernel.</td>
      <td data-label="Comando"><code>cd linux-source-6.12 && cd debian && sudo dpkg -i *.deb</code></td>
      <td data-label="Observação Crítica">Instala o kernel e headers.</td>
    </tr>
    <tr>
      <td data-label="Etapa">7 Atualizar GRUB (Debian/Devuan).</td>
      <td data-label="Comando"><code>sudo update-grub</code></td>
      <td data-label="Observação Crítica">Verifique se o novo kernel aparece no menu do grub.</td>
    </tr>
    <tr>
      <td data-label="Etapa">8. Verificar após reboot.</td>
      <td data-label="Comando"><code>uname -r</code></td>
      <td data-label="Observação Crítica">Confirme que a versão do kernel mudou.</td>
    </tr>
  </tbody>
</table>

<p>📘 Documentação oficial: <a href="https://kernel-team.pages.debian.net/kernel-handbook/ch-common-tasks.html#s-kernel-org-package" target="_blank">Debian Kernel</a></p>

</section>







