---
layout:  manual-seo
tabela: instalar-linux-mint
permalink: /tabelas/instalar-linux-mint/
title: "Guia Passo a Passo para Instalar o Linux Mint"
description: "Procedimento técnico completo para instalar o Linux Mint em qualquer hardware, com USB bootável e pós-instalação."
---


  <section>
   
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Passos</th>
      <th>Aç&otilde;es</th>
      <th>Comandos / Procedimentos</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Passo">1. Baixar ISO</td>
      <td data-label="Ação">Escolha a versão</td>
      <td data-label="Comando / Procedimento"><a href="https://linuxmint.com/download.php" target="_blank" rel="noopener">linuxmint.com/download.php</a></td>
      <td data-label="Observações">Versões: Cinnamon, MATE, Xfce.</td>
    </tr>
    <tr>
      <td data-label="Passo">2. Criar USB Bootável (Método 1)</td>
      <td data-label="Ação">Ventoy</td>
      <td data-label="Comando / Procedimento"><code>Execute o Ventoy como superusuário após a descompactação.</code><br/></td>
      <td data-label="Observações">Ventoy permite múltiplas ISOs.</td>
      <p>Substitua SEU_DISCO por um dispositivo real (ex: sdb1) após identificá-lo com lsblk ou blkid</p>
    </tr>
     
    <tr>
      <td data-label="Passo">2.1 Criar USB Bootável (Método 2)</td>
      <td data-label="Ação">Balena Etcher</td>
      <td data-label="Comando / Procedimento"><code>Execute o Balena Etcher após a descompactação e selecione a ISO.</code><br/></td>
      <td data-label="Observações">Método mais simples e visual.</td>
     </tr>
    
    
    <tr>
      <td data-label="Passo">3. Iniciar no USB.</td>
      <td data-label="Ação">Acesse BIOS/UEFI.</td>
      <td data-label="Comando / Procedimento">Teclas: <code>Del</code>, <code>F2</code>, <code>F10.</code></td>
      <td data-label="Observações">Defina USB como primeiro boot</td>
    </tr>
    <tr>
      <td data-label="Passo">4. Testar ou Instalar.</td>
      <td data-label="Ação">Escolha "Star Mint"</td>
      <td data-label="Comando / Procedimento">Clique no ícone de instalação.</td>
      <td data-label="Observações">Teste antes de instalar, não perca dados.</td>
    </tr>
    <tr>
      <td data-label="Passo">5. Configurar Partição.</td>
      <td data-label="Ação">Escolha tipo de instalação.</td>
      <td data-label="Comando / Procedimento">Opções: <code>Apagar Disco</code>, <code>Op&ccedil;&atilde;o  avan&ccedil;ada</code></td>
      <td data-label="Observações">Use <code>OP&ccedil;&atilde;o avan&ccedil;ada</code> para particionamento manual.</td>
    </tr>
    <tr>
      <td data-label="Passo">6. Definir Usuário.</td>
      <td data-label="Ação">Nome, senha, hostname.</td>
      <td data-label="Comando / Procedimento">Preencha os campos</td>
      <td data-label="Observações">Senhas fortes são essenciais</td>
    </tr>
    <tr>
      <td data-label="Passo">7. Reiniciar.</td>
      <td data-label="Ação">Remova o USB.</td>
      <td data-label="Comando / Procedimento"><code>sudo reboot</code></td>
      <td data-label="Observações">O sistema inicia direto no Linux Mint</td>
    </tr>
    <tr>
      <td data-label="Passo">8. Após a instalação, prossiga com as etapas de configuração</td>
      <td data-label="Ação">Atualize e instale pacotes úteis</td>
      <td data-label="Comando / Procedimento"><code>sudo apt update 
      &amp;&amp; sudo apt upgrade &amp;&amp; sudo apt install git firefox</code></td>
      <td data-label="Observações">Instale navegadores, ferramentas e aplicativos extras</td>
    </tr>
    
    

    
    
  </tbody>
</table>


<p>📘 Documentação oficial: <a 
href="https://www.ventoy.net/en/doc_linux_gui.html" 
target="_blank" rel="noopener">Ventoy</a></p>


<p>📘 Documentação oficial: <a 
href="https://etcher-docs.balena.io/?" 
target="_blank" rel="noopener">Balena Etcher</a></p>


<p>📘 Downloads dos Binarios: Deb, Rpm, Exe.<a 
href="https://github.com/balena-io/etcher/releases/" 
target="_blank" rel="noopener">Balena Etcher Realeses</a></p>

</section>
