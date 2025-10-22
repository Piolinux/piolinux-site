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
      <th>runit (Artix, Void)</th>
      <th>SysV init (Debian legado)</th>
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
</section>





