---
layout: default
title: Tabela Evergreen-Como Compilar o Kernel Linux
permalink: /compilar-kernel/
description: Guia passo a passo universal para compilar qualquer versão do kernel Linux. Funciona em qualquer distro.
---








<section class="post-content">




<div style="overflow-x: auto; padding: 0 20px;">
  <table class="evergreen-table">
  <thead>
    <tr>
      <th>
      
        Etapas</th>
      <th>Comandos</th>
      <th>Propósito</th>
      <th>Dicas Evergreen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
      
        Etapas">1. Instalando as dependências</td>
      <td data-label="Comandos"><code>sudo apt build-dep linux</code><br><code>ou</code><br><code>sudo dnf groupinstall "Development Tools" && sudo dnf install ncurses-devel bison flex openssl-devel</code></td>
      <td data-label="Propósito">Garante que todas as libs e tools necessárias estão presentes.</td>
      <td data-label="Dicas Evergreen">Sempre comece por aqui. Adapte o comando à sua distro (apt, dnf, pacman, zypper).</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">2. Download do código Fonte</td>
      <td data-label="Comandos"><code>wget https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.xx.tar.xz</code><br><code>tar -xf linux-*.tar.xz && cd linux-*</code></td>
      <td data-label="Propósito">Obtém o código-fonte oficial do kernel.org.</td>
      <td data-label="Dicas Evergreen">Prefira sempre kernel.org. Evite forks não oficiais para compilação manual.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">3. Configurar o kernel</td>
      <td data-label="Comandos"><code>make menuconfig</code><br><code># ou</code><br><code>make defconfig</code><br><code># ou</code><br><code>cp /boot/config-$(uname -r) .config && make olddefconfig</code></td>
      <td data-label="Propósito">Define quais módulos e funcionalidades serão compilados.</td>
      <td data-label="Dicas Evergreen">Use <code>olddefconfig</code> pra manter sua config atual. <code>menuconfig</code> é interativo e poderoso.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">4. Compilar o kernel</td>
      <td data-label="Comandos"><code>make </code></td>
      <td data-label="Propósito">Compila o kernel e módulos usando todos os núcleos da CPU.</td>
      <td data-label="Dicas Evergreen">O <code>-j8(nproc)</code>acelera MUITO. Sem ele, pode levar horas, caso use por sua conta e risco, editei a op&ccedil;&atilde;o seguindo a documenta&ccedil;&atilde;o do Arch Linux.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">5. Compilar módulos</td>
      <td data-label="Comandos"><code>make modules </code></td>
      <td data-label="Propósito">Compila os módulos do kernel (drivers, filesystems, etc).</td>
      <td data-label="Dicas Evergreen">Pode ser feito junto com o passo 4 em kernels modernos.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">6. Instalar módulos</td>
      <td data-label="Comandos"><code>sudo make modules_install</code></td>
      <td data-label="Propósito">Copia os módulos compilados para <code>/lib/modules/</code>.</td>
      <td data-label="Dicas Evergreen">NÃO pule esse passo — sem módulos, seu sistema pode não bootar.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">7. Instalar o kernel</td>
      <td data-label="Comandos"><code>sudo make install</code></td>
      <td data-label="Propósito">Instala o kernel, System.map e config no <code>/boot/</code>.</td>
      <td data-label="Dicas Evergreen">Não ocorrerá atualização automática do GRUB, certifique-se de utilizar os comandos no terminal para atualizar.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">8. Atualizar bootloader digite o comandos no terminal.</td>
      <td data-label="Comandos"><code>sudo update-grub</code><br><code># ou</code><br><code>sudo grub2-mkconfig -o /boot/grub2/grub.cfg</code></td>
      <td data-label="Propósito">Garante que o GRUB reconheça o novo kernel.</td>
      <td data-label="Dicas Evergreen">Caso  o  GRUB não atualizar, você não verá o novo kernel no boot.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">9. Reiniciar</td>
      <td data-label="Comandos"><code>sudo reboot</code></td>
      <td data-label="Propósito">Reinicia o sistema para carregar o novo kernel.</td>
      <td data-label="Dicas Evergreen">Tenha um kernel de backup no GRUB — caso algo dê errado.</td>
    </tr>
    <tr>
      <td data-label="
      
        Etapas">10. Verifique no terminal: digite os comandos.</td>
      <td data-label="Comandos"><code>uname -r</code></td>
      <td data-label="Propósito">Confirma que o novo kernel está rodando.</td>
      <td data-label="Dicas Evergreen">Se a versão não mudou, algo deu errado na instalação ou no GRUB.</td>
    </tr>
  </tbody>
</table>
</div>


<blockquote style="background: #1a1a1a; padding: 20px; border-left: 4px solid #00ff9d; margin: 2rem; font-family: monospace; color: #e0e0e0;">
  <strong>AVISO EVERGREEN:</strong> Sempre tenha um kernel antigo funcional no GRUB. Compilação de kernel pode quebrar seu sistema. Faça em ambiente de teste ou backup completo antes.
</blockquote>


<blockquote style="background: #1a1a1a; padding: 1.5rem; border-left: 4px solid #ff5555; margin: 2rem 0; font-family: monospace; color: #ffcc00;">
  <strong>NOTA TÉCNICA:</strong> Este guia é independente de versão. Sempre verifique a documentação oficial do kernel para flags ou dependências específicas da sua compilação.
</blockquote>

</section>

