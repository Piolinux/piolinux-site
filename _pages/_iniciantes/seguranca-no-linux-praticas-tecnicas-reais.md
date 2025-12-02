---
layout: manual-seo
title: "Segurança no Linux – Práticas Técnicas Reais"
description: "Tabela com atualizações, firewall, backups, senhas e mitos comuns — sem linguagem informal, só ações técnicas comprovadas."
permalink: /seguranca-linux/
tags: [segurança, linux, firewall, senhas, permissões, sudo]
---


{% include toc.html %}


<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Práticas.</th>
      <th>Comandos / Ações.</th>
      <th>Observação Técnica.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Prática">Atualizações do sistema.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Execute semanalmente ou use <code>unattended-upgrades</code> para atualizações automáticas.</td>
    </tr>
    <tr>
      <td data-label="Prática">Firewall. (UFW)</td>
      <td data-label="Comando / Ação">
        <code>sudo ufw enable && sudo ufw default deny incoming</code>
        <button class="copy-btn" data-command="sudo ufw enable && sudo ufw default deny incoming">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Bloqueia todas as conexões de entrada por padrão. Permita só o necessário (ex: <code>sudo ufw allow 22</code> para SSH).</td>
    </tr>
    <tr>
      <td data-label="Prática">Controle de permissões.</td>
      <td data-label="Comando / Ação">
        Nunca use <code>sudo</code> desnecessariamente. Prefira sua conta de usuário comum.
      </td>
      <td data-label="Observação Técnica">O root não é mais seguro — é mais perigoso. Utilize <code>sudo</code> apenas para tarefas administrativas específicas.</td>
    </tr>
    <tr>
      <td data-label="Prática">Backup com rsync.</td>
      <td data-label="Comando / Ação">
        <code>rsync -av --delete ~/Documentos/ /mnt/backup/</code>
        <button class="copy-btn" data-command="rsync -av --delete ~/Documentos/ /mnt/backup/">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Use com <code>cron</code> para backups automáticos. Mantenha cópias offline ou em nuvem criptografada.</td>
    </tr>
    <tr>
      <td data-label="Prática">Gerenciador de senhas.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt install keepassxc</code> ou use <a href="https://bitwarden.com/" target="_blank">Bitwarden</a>
        <button class="copy-btn" data-command="sudo apt install keepassxc">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Nunca reutilize senhas. Use senhas únicas de 12+ caracteres com gerador embutido.</td>
    </tr>
    <tr>
      <td data-label="Prática">Antivírus (opcional).</td>
      <td data-label="Comando / Ação">
        <code>sudo apt install clamav && sudo freshclam && clamscan -r ~/</code>
        <button class="copy-btn" data-command="sudo apt install clamav && sudo freshclam && clamscan -r ~/">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Útil apenas para escanear arquivos compartilhados com Windows. Não é necessário para proteção do próprio sistema Linux.</td>
    </tr>
  </tbody>
</table>

<h3 id="mitos">Mitos Comuns (e a verdade).</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Mitos:</th>
      <th>Realidades:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Mito">Linux não precisa de antivírus.</td>
      <td data-label="Realidade">Correto para o sistema em si, mas útil se você compartilha arquivos com Windows.</td>
    </tr>
    <tr>
      <td data-label="Mito">O root é mais seguro.</td>
      <td data-label="Realidade">Falso. Contas de usuário comum + <code>sudo</code> reduzem riscos de erros catastróficos por estupidez.</td>
    </tr>
    <tr>
      <td data-label="Mito">Atualizações automáticas são perigosas.</td>
      <td data-label="Realidade">Falso. Em sistemas estáveis (Debian, Ubuntu LTS), atualizações de segurança, são testadas e seguras.</td>
    </tr>
  </tbody>
</table>


</section>



