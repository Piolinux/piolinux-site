---
layout: manual-seo
title: "Como Instalar Kernel Compilado com Segurança no Debian/Devuan — Sem Quebrar o Sistema"
description: "Guia passo a passo para compilar kernel Linux e instalar via dpkg usando bindeb-pkg. Método seguro, reversível e compatível com GRUB, DKMS e atualizações."
permalink: /compilar-kernel/
tags: [kernel, linux, debian, devuan, dpkg, compile, sysadmin, lts]
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
      <td data-label="Etapa">2 Baixar kernel do backports.</td>
      <td data-label="Comando"><code>apt -t bookworm/daedalus-backports install linux-source</code></td>
      <td data-label="Observação Crítica">O pacote <code>linux-source-6.12</code> contém o código do kernel LTS. Acesse <a href="https://kernel.org" target="_blank">kernel.org</a> para versões mais recentes.</td>
    </tr>
    <tr>
      <td data-label="Etapa">2.1 Verifique o diretório.</td>
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
      <td data-label="Comando"><code>make oldconfig</code><p>Solicitamos que você examine a tabela apresentada antes de selecionar uma das opções disponíveis.<a 
href="/make-oldconfig-vs-olddefconfig/" 
target="_blank" rel="noopener">Comparativo</a></p></td>
      <td data-label="Observação Crítica">Mantém sua config atual. Utilize <code>make menuconfig </code> para ajustes manuais. Evite <code>make config</code> — é muito demorado.</td>
    </tr>
    <tr>
      <td data-label="Etapa">5. Compilação.</td>
      <td data-label="Comando"><code>make -j$(nproc) bindeb-pkg</code></td>
      <td data-label="Observação Crítica">Usa todos os núcleos da CPU para acelerar o processo. Inicie o processo de compilação e geração dos pacotes .deb.
 </td>
    </tr>
<tr>
  <td data-label="Etapa">5.1 Limpeza pós-compilação opcional.</td>
  <td data-label="Comando"><code>make clean && make mrproper</code></td>
  <td data-label="Observação Crítica">Use apenas se quiser liberar espaço após gerar os pacotes .deb.</td>
</tr>
  
     <tr>
      <td data-label="Etapa">6. Instalação do kernel.</td>
      <td data-label="Comando"><code> cd /usr/src/ && sudo dpkg -i *.deb</code></td>
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

     <tr>
      <td data-label="Passo">9. Verificar instalação</td>
      <td data-label="Comando"><code>ls /boot/vmlinuz-*6.12.43* && grep -A5 "6.12.43" /boot/grub/grub.cfg</code></td>
      <td data-label="Por que é seguro">Confirma que o kernel está em <code>/boot</code> e foi adicionado ao menu de boot.</td>
    </tr>
    <tr>
      <td data-label="Passo">10. (Opcional) Proteger contra atualizações</td>
      <td data-label="Comando"><code>sudo apt-mark hold linux-image-6.12.43 linux-headers-6.12.43</code></td>
      <td data-label="Por que é seguro">Evita que <code>apt upgrade</code> substitua seu kernel personalizado por um do repositório.</td>
    </tr>
    <tr>
      <td data-label="Passo">11. Em caso de falha: remover com segurança</td>
      <td data-label="Comando"><code>sudo dpkg -r linux-image-6.12.43 linux-headers-6.12.43</code></td>
      <td data-label="Por que é seguro">Remove **todos os arquivos, entradas do GRUB e módulos**, sem deixar lixo — impossível com <code>make install</code>.</td>
    </tr>


    
  </tbody>
</table>

<p>📘 Documentação oficial: <a href="https://kernel-team.pages.debian.net/kernel-handbook/ch-common-tasks.html#s-kernel-org-package" target="_blank">Debian Kernel</a></p>

</section>







