---
layout: manual-seo
title: "Instalação Técnica do Devuan – Sem systemd, com Sysvinit"
description: "Tabela objetiva com requisitos, ISO, criação de USB, init system e pós-instalação — sem linguagem informal, só referência técnica."
permalink: /referencias/instalacao-devuan/
categories: [linux, devuan, guia]
tags: [devuan, linux, sysvinit, guia, instalação, sem_systemd, instalacao-devuan]
---


{% include toc.html %}

          
<section>
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Etapas.</th>
        <th>Ações Técnicas.</th>
        <th>Observações.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Etapa">Requisitos Mínimos</td>
        <td data-label="Ação Técnica">
          <ul>
            <li>CPU: i686 ou x86_64 (1 GHz+)</li>
            <li>RAM: 512 MB (instalação), 1 GB+ (uso diário)</li>
            <li>Disco: 10 GB (mínimo)</li>
          </ul>
        </td>
        <td data-label="Observação">Versão estável atual: <strong>Excalibur (6.0)</strong>, baseada no Debian 13.</td>
      </tr>
      <tr>
        <td data-label="Etapa">Baixar ISO</td>
        <td data-label="Ação Técnica">
          <a href="https://www.devuan.org/os/download" target="_blank" rel="noopener noreferrer">devuan.org/os/download</a><br>
          Escolha:
          <ul>
            <li><code>desktop-live</code>: instalação completa.</li>
            <li><code>netinst</code>: instalação mínima (sem desktop)</li>
            <li><code>xfce</code>, <code>cinnamon</code>: com ambiente gráfico incluso</li>
          </ul>
        </td>
        <td data-label="Observação">Prefira <strong>64-bit (amd64)</strong>. Versões 32-bit (i386) são legadas.</td>
      </tr>
      <tr>
        <td data-label="Etapa">Criar Live USB</td>
        <td data-label="Ação Técnica">
          <code>sudo dd if=devuan.iso of=/dev/SEU_DISCO bs=4M status=progress oflag=sync</code>
          <button class="copy-btn" data-command="sudo dd if=devuan.iso of=/dev/SEU_DISCO bs=4M status=progress oflag=sync">📋 Copiar</button>
        </td>
        <td data-label="Observação">⚠️ Substitua <code>SEU_DISCO</code> por um dispositivo real (ex: <code>sdb</code>). Use <code>lsblk</code> para identificar. Nunca use o disco do sistema (<code>sda</code>).</td>
      </tr>
      <tr>
        <td data-label="Etapa">Init System</td>
        <td data-label="Ação Técnica">
          <ul>
            <li><strong>OpenRC</strong></li>
            <li><strong>sysvinit</strong>--init padrão</li>
            <li><strong>runit</strong></li>
          </ul>
        </td>
        <td data-label="Observação">Devuan <strong>não usa systemd</strong>. Runit é o substituto mais compatível com scripts do Debian.</td>
      </tr>
      <tr>
        <td data-label="Etapa">Pós-instalação essencial</td>
        <td data-label="Ação Técnica">
          <code>sudo apt update && sudo apt full-upgrade -y</code>
          <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade -y">📋 Copiar</button>
        </td>
        <td data-label="Observação">Não há <code>systemctl</code>. Use <code>sudo service nome start</code> ou <code>sudo rc-service nome start</code> (OpenRC).</td>
      </tr>
    </tbody>
  </table>

  <h3 id="avisos">Avisos Técnicos.</h3>
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Fatos.</th>
        <th>Explicações.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Fato">Particionamento manual requer cuidado</td>
        <td data-label="Explicação">Se usar dual-boot, não formate a partição EFI do Windows. Monte como <code>/boot/efi</code> sem formatação.</td>
      </tr>
      <tr>
        <td data-label="Fato">Drivers proprietários</td>
        <td data-label="Explicação">Adicione o repositório <code>non-free-firmware</code> em <code>/etc/apt/sources.list</code> para drivers de Wi-Fi e GPU.</td>
      </tr>
      <tr>
        <td data-label="Fato">GRUB é instalado por padrão</td>
        <td data-label="Explicação">O instalador grava em <code>/dev/sda</code> (não em <code>sda1</code>). Funciona em BIOS e UEFI.</td>
      </tr>
    </tbody>
  </table>
  
  <table class="evergreen-table">
  <thead>
    <tr>
      <th>Repositórios.</th>
      <th>Componentes.</th>
      <th>Descrição.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Repositório"><code>excalibur</code></td>
      <td data-label="Componentes"><code>main</code>, <code>non-free-firmware</code></td>
      <td data-label="Descrição">Pacotes estáveis do Devuan 5 (Excalibur)</td>
    </tr>
    <tr>
      <td data-label="Repositório"><code>excalibur-updates</code></td>
      <td data-label="Componentes"><code>main</code>, <code>non-free-firmware</code></td>
      <td data-label="Descrição">Atualizações menores e corretivas para pacotes estáveis</td>
    </tr>
    <tr>
      <td data-label="Repositório"><code>excalibur-security</code></td>
      <td data-label="Componentes"><code>main</code>, <code>non-free-firmware</code></td>
      <td data-label="Descrição">Pacotes com correções de segurança</td>
    </tr>
    <tr>
      <td data-label="Repositório"><code>excalibur-proposed-updates</code></td>
      <td data-label="Componentes"><code>main</code>, <code>non-free-firmware</code></td>
      <td data-label="Descrição">Pacotes propostos para atualização (em teste antes do merge)</td>
    </tr>
    <tr>
      <td data-label="Repositório"><code>excalibur-backports</code></td>
      <td data-label="Componentes"><code>main</code>, <code>non-free-firmware</code></td>
      <td data-label="Descrição">Versões mais novas de pacotes, recompiladas para o Debian/Devuan estável</td>
    </tr>
  </tbody>
</table>
  
  
  
</section>

 

