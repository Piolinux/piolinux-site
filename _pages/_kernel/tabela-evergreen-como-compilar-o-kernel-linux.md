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
      <td data-label="Etapa">1. Dependências essenciais (Debian/Devuan).</td>
      <td data-label="Comando"><code>sudo apt update && sudo apt install build-essential libncurses-dev bison flex libssl-dev libelf-dev</code></td>
      <td data-label="Observação Crítica">Essenciais para compilar o kernel. Use o gerenciador correspondente à sua distro (<code>apt</code>, <code>dnf</code>, <code>xbps-install</code>, etc.).</td>
    </tr>
    <tr>
  <td data-label="Etapa">1.1. (Opcional) Ativar backports para kernel 6.1 LTS.</td>
  <td data-label="Comando"><code>apt -t bookworm/daedalus-backports install libelf-dev</code></td>
  <td data-label="Observação Crítica"><em>Caso ocorram erros de pacotes quebrados.</em></td>
</tr>

    <tr>
      <td data-label="Etapa">2. Baixar código-fonte do kernel.</td>
      <td data-label="Comando"><code>sudo apt install linux-source</code></td>
      <td data-label="Observação Crítica">O pacote <code>linux-source-6.1</code> contém o código do kernel LTS. Se preferir, baixe manualmente em <a href="https://kernel.org" target="_blank">kernel.org</a>.</td>
    </tr>
    <tr>
      <td data-label="Etapa">3. Verificar diretório de origem.</td>
      <td data-label="Comando"><code>cd /usr/src && ls</code></td>
      <td data-label="Observação Crítica">Confirme o nome exato da pasta (<code>linux-source-6.1</code>) antes de extrair. Evita erros de caminho inexistente.</td>
    </tr>
    <tr>
      <td data-label="Etapa">4. Extrair e preparar código-fonte.</td>
      <td data-label="Comando"><code>sudo tar -xvf linux-source-*.tar.xz && cd linux-source-6.1 && cp /boot/config-$(uname -r) .config</code></td>
      <td data-label="Observação Crítica">Copia a configuração atual do kernel para garantir compatibilidade com seu sistema.</td>
    </tr>
    <tr>
      <td data-label="Etapa">5. Configurar o Kernel.</td>
      <td data-label="Comando"><code>make olddefconfig</code></td>
      <td data-label="Observação Crítica">Mantém a configuração atual. Use <code>make menuconfig</code> se desejar personalizar opções manualmente.</td>
    </tr>
    <tr>
      <td data-label="Etapa">6. Compilação.</td>
      <td data-label="Comando"><code>make -j$(nproc)</code></td>
      <td data-label="Observação Crítica">Utiliza todos os núcleos do processador, acelerando a compilação.</td>
    </tr>
    <tr>
      <td data-label="Etapa">7. Instalação dos módulos.</td>
      <td data-label="Comando"><code>sudo make modules_install</code></td>
      <td data-label="Observação Crítica">Necessário para garantir que todos os drivers estejam disponíveis.</td>
    </tr>
    <tr>
      <td data-label="Etapa">8. Instalação do kernel.</td>
      <td data-label="Comando"><code>sudo make install</code></td>
      <td data-label="Observação Crítica">Instala o kernel, o <code>System.map</code> e o arquivo <code>config</code> em <code>/boot/</code>.</td>
    </tr>
    <tr>
      <td data-label="Etapa">9. Atualizar o GRUB (Debian/Devuan).</td>
      <td data-label="Comando"><code>sudo update-grub</code></td>
      <td data-label="Observação Crítica">Confirme se o novo kernel aparece na listagem do GRUB antes de reiniciar.</td>
    </tr>
    <tr>
      <td data-label="Etapa">10. Verificar após o reboot.</td>
      <td data-label="Comando"><code>uname -r</code></td>
      <td data-label="Observação Crítica">Certifique-se de que o sistema está rodando o kernel 6.1.</td>
    </tr>
  </tbody>
</table>


<p>📘 Documentação oficial: <a href="https://wiki.archlinux.org/title/Kernel" target="_blank">Arch Wiki Kernel</a></p>

</section>



