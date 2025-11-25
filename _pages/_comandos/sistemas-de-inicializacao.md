---
layout: manual-seo
title: "Init Linux: OpenRC, runit, SysV — Tabela de Comandos"
description: "Comandos equivalentes para gerenciar serviços em, OpenRC, runit e SysV. Tabela técnica copiável e validada."
permalink: /sistemas-de-inicializacao/
tags: [init, openrc, runit, sysv, linux, inicializacao, servico, rc-service, sv]
---

<section>


<h2>Comandos Gerais.</h2>

<input type="text" oninput="filtrarLinhas(this.value)" placeholder="Filtrar comandos...">
<script>
function filtrarLinhas(termo) {
  const linhas = document.querySelectorAll('tbody tr');
  linhas.forEach(linha => {
    linha.style.display = linha.textContent.toLowerCase().includes(termo.toLowerCase()) ? '' : 'none';
  });
}
</script>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>OpenRC (Devuan, Gentoo)</th>
      <th>runit (Artix, Void, Devuan)</th>
      <th>SysV init (Devuan, Antix, Mx-Linux)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Iniciar serviço</td>
      <td data-label="OpenRC"><code>sudo rc-service nginx start</code></td>
      <td data-label="runit"><code>sudo sv up nginx</code></td>
      <td data-label="SysV init"><code>sudo service nginx start</code></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Parar serviço</td>
      <td data-label="OpenRC"><code>sudo rc-service nginx stop</code></td>
      <td data-label="runit"><code>sudo sv down nginx</code></td>
      <td data-label="SysV init"><code>sudo service nginx stop</code></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Reiniciar serviço</td>
      <td data-label="OpenRC"><code>sudo rc-service nginx restart</code></td>
      <td data-label="runit"><code>sudo sv restart nginx</code></td>
      <td data-label="SysV init"><code>sudo service nginx restart</code></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Ver status do serviço</td>
      <td data-label="OpenRC"><code>rc-service nginx status</code></td>
      <td data-label="runit"><code>sv status nginx</code></td>
      <td data-label="SysV init"><code>service nginx status</code></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Habilitar na inicialização</td>
      <td data-label="OpenRC"><code>sudo rc-update add nginx</code></td>
      <td data-label="runit"><code>ln -s /etc/sv/nginx /var/service/</code></td>
      <td data-label="SysV init"><code>sudo update-rc.d nginx defaults</code></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Desabilitar na inicialização</td>
      <td data-label="OpenRC"><code>sudo rc-update del nginx</code></td>
      <td data-label="runit"><code>rm /var/service/nginx</code></td>
      <td data-label="SysV init"><code>sudo update-rc.d -f nginx remove</code></td>
    </tr>
  </tbody>
</table>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Sistema de Init</th>
      <th>Distribuições Comuns</th>
      <th>Documentação Oficial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>OpenRC</strong></td>
      <td>Devuan, Gentoo, Alpine (opcional)</td>
      <td><a href="https://wiki.gentoo.org/wiki/OpenRC" target="_blank" rel="noopener">Gentoo Handbook: OpenRC</a><br>
          <a href="https://github.com/OpenRC/openrc/blob/master/README.md" target="_blank" rel="noopener">OpenRC no GitHub (README oficial)</a></td>
    </tr>
    <tr>
      <td><strong>runit</strong></td>
      <td>Artix Linux, Void Linux, Devuan</td>
      <td><a href="https://docs.voidlinux.org/config/services/index.html" target="_blank" rel="noopener">Void Linux: Serviços com runit</a><br>
          <a href="https://smarden.org/runit/" target="_blank" rel="noopener">runit — site oficial de Gerrit Pape</a></td>
    </tr>
    <tr>
      <td><strong>dinit</strong></td>
      <td>Artix Linux (opcional)</td>
      <td><a href="https://github.com/davmac314/dinit" target="_blank" rel="noopener">dinit no GitHub (documentação completa)</a></td>
    </tr>
    <tr>
      <td><strong>SysV init</strong></td>
      <td>Especificação LSB: Scripts de init</td>
      <td><a href="https://refspecs.linuxbase.org/LSB_5.0.0/LSB-Core-generic/LSB-Core-generic/iniscrptact.html" target="_blank" rel="noopener">Scripts de init</a></td>
    </tr>
  </tbody>
</table>



</section>





