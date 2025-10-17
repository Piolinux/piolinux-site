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
      <td data-label="Etapa">1. Dependências (Debian).</td>
      <td data-label="Comando"><code>sudo apt build-dep linux</code></td>
      <td data-label="Observação Crítica">Use <code>apt</code>, <code>dnf</code>, <code>xbps-install</code> conforme sua distro.</td>
    </tr>
    <tr>
      <td data-label="Etapa">2. Baixar kernel.</td>
      <td data-label="Comando"><code>wget https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.6.tar.xz && tar -xf linux-*.tar.xz && cd linux-*</code></td>
      <td data-label="Observação Crítica">Sempre de <a href="https://kernel.org">kernel.org</a></td>
    </tr>
    <tr>
      <td data-label="Etapa">3. Configurar o Kernel.</td>
      <td data-label="Comando"><code>make olddefconfig</code></td>
      <td data-label="Observação Crítica">Mantém sua config atual. Utilize <code>make menuconfig</code> para ajustes.</td>
    </tr>
    <tr>
      <td data-label="Etapa">4. Compilação</td>
      <td data-label="Comando"><code>make -j$(nproc)</code></td>
      <td data-label="Observação Crítica">Sem o comando <code>-j</code>, leva horas. Evite <code>-j8</code> fixo.</td>
    </tr>
    <tr>
      <td data-label="Etapa">5. Instalação de módulos.</td>
      <td data-label="Comando"><code>sudo make modules_install</code></td>
      <td data-label="Observação Crítica">Obrigatório — sem os drivers não carregam.</td>
    </tr>
    <tr>
      <td data-label="Etapa">6. Instalação de kernel.</td>
      <td data-label="Comando"><code>sudo make install</code></td>
      <td data-label="Observação Crítica"> Instala o kernel, System.map e config no /boot/.</td>
    </tr>
    <tr>
      <td data-label="Etapa">7. Atualizar GRUB (Debian).</td>
      <td data-label="Comando"><code>sudo update-grub</code></td>
      <td data-label="Observação Crítica">Verifique se o novo kernel aparece no menu.</td>
    </tr>
    <tr>
      <td data-label="Etapa">8. Verificar após reboot.</td>
      <td data-label="Comando"><code>uname -r</code></td>
      <td data-label="Observação Crítica">Confirme que a versão mudou.</td>
      Documentação<a href="https://wiki.archlinux.org/title/Kernel" target="_blank">Arch Wiki Kernel</a>
    </tr>
  </tbody>
</table>
   
</section>

