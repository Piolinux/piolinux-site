---
layout: manual-seo
title_custom: "Compilar Kernel Linux — Comandos e Etapas Técnicas | Piolinux"
description_custom: "Tabela com comandos reais para compilar kernel Linux: dependências, configuração, make -j$(nproc), instalação e atualização do GRUB."
title: "Compilar Kernel Linux — Comandos e Etapas Técnicas"
permalink: /compilar-kernel/
tags: [kernel, linux, compilacao, make, grub, xbps, apt, dnf, evergreen]
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
      <td data-label="Observação Crítica">Use <code>apt</code>, <code>dnf</code>, <code>xbps-install</code> conforme sua distro.</td>
    </tr>
    <tr>
      <td data-label="Etapa">1.1 (Opcional) Ativar backports para kernel 6.1 LTS.</td>
      <td data-label="Comando"><code>apt -t bookworm/daedalus-backports install libelf-dev</code></td>
     <td data-label="Observação Crítica"><em>Caso ocorram erros de pacotes quebrados.</em></td>
    </tr>
    <tr>
      <td data-label="Etapa">2 Baixar kernel.</td>
      <td data-label="Comando"><code>sudo apt install linux-source</code></td>
      <td data-label="Observação Crítica">O pacote <code>linux-source-6.1</code> contém o código do kernel LTS. Acesse <a href="https://kernel.org" target="_blank">kernel.org</a> para versões mais recentes.</td>
    </tr>
    <tr>
      <td data-label="Etapa">2.1 Verificar diretório.</td>
      <td data-label="Comando"><code>cd /usr/src && ls</code></td>
      <td data-label="Observação Crítica">Confirme o nome exato da pasta <code>linux-source-6.1 </code> antes de extrair. Evita erros de caminho inexistente.</td>
    </tr>
    <tr>
      <td data-label="Etapa">3. Extrair e preparar código-fonte.</td>
      <td data-label="Comando"><code>sudo tar -xvf linux-source-*.tar.xz && cd linux-source-6.1 && cp /boot/config-$(uname -r) .config</code></td>
      <td data-label="Observação Crítica">Esses passos garantem que você comece com a configuração atual do kernel, evitando problemas de compatibilidade.</td>
    </tr>
    <tr>
      <td data-label="Etapa">4. Configurar o Kernel.</td>
      <td data-label="Comando"><code>make olddefconfig</code></td>
      <td data-label="Observação Crítica">Mantém sua config atual. Utilize <code>make menuconfig</code> para ajustes manuais. Evite <code>make config</code> — é muito demorado.</td>
    </tr>
    <tr>
      <td data-label="Etapa">5. Compilação.</td>
      <td data-label="Comando"><code>make </code></td>
      <td data-label="Observação Crítica">Para acelerar, use make -j$(nproc) e o sistema detectará automaticamente o número de núcleos da CPU.</td>
    </tr>
    <tr>
      <td data-label="Etapa">6. Instalação de módulos</td>
      <td data-label="Comando"><code>sudo make modules_install</code></td>
      <td data-label="Observação Crítica">Obrigatório sem os drivers, os dispositivos podem não funcionar corretamente.</td>
    </tr>
    <tr>
      <td data-label="Etapa">7. Instalação do kernel.</td>
      <td data-label="Comando"><code>sudo make install</code></td>
      <td data-label="Observação Crítica">Instala o kernel, System.map e config no <code>/boot/</code>.</td>
    </tr>
    <tr>
      <td data-label="Etapa">8. Atualizar GRUB (Debian/Devuan).</td>
      <td data-label="Comando"><code>sudo update-grub</code></td>
      <td data-label="Observação Crítica">Verifique se o novo kernel aparece no menu do grub.</td>
    </tr>
    <tr>
      <td data-label="Etapa">9. Verificar após reboot.</td>
      <td data-label="Comando"><code>uname -r</code></td>
      <td data-label="Observação Crítica">Confirme que a versão do kernel mudou.</td>
    </tr>
  </tbody>
</table>

<p>📘 Documentação oficial: <a href="https://wiki.archlinux.org/title/Kernel" target="_blank">Arch Wiki Kernel</a></p>

</section>







