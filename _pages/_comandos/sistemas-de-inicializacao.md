---
layout: manual-seo
title: "Sistemas de Inicialização Linux: systemd, OpenRC, runit, SysV — Tabela Técnica Comparativa"
description: "Tabela validada com comandos equivalentes para systemd, OpenRC, runit e SysV init: iniciar, parar, habilitar serviços e verificar status. Copiável e testado."
permalink: /sistemas-de-inicializacao/
tags: [init, systemd, openrc, runit, sysv, linux, inicializacao, servico, daemon, systemctl, rc-service, sv, update-rc.d, chkconfig]
---

<section>


<h2>🖥 Comandos Gerais.</h2>

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
      <th>systemd</th>
      <th>OpenRC</th>
      <th>runit</th>
      <th>SysV init</th>
    </tr>
  </thead>
  <tbody>
    <!-- Iniciar serviço -->
    <tr>
      <td data-label="Objetivo">Iniciar serviço</td>
      <td data-label="systemd"><code>sudo systemctl start nginx</code></td>
      <td data-label="OpenRC"><code>sudo rc-service nginx start</code></td>
      <td data-label="runit"><code>sudo sv up nginx</code></td>
      <td data-label="SysV init"><code>sudo service nginx start</code></td>
    </tr>
    <!-- Parar serviço -->
    <tr>
      <td data-label="Objetivo">Parar serviço</td>
      <td data-label="systemd"><code>sudo systemctl stop nginx</code></td>
      <td data-label="OpenRC"><code>sudo rc-service nginx stop</code></td>
      <td data-label="runit"><code>sudo sv down nginx</code></td>
      <td data-label="SysV init"><code>sudo service nginx stop</code></td>
    </tr>
    <!-- Reiniciar serviço -->
    <tr>
      <td data-label="Objetivo">Reiniciar serviço</td>
      <td data-label="systemd"><code>sudo systemctl restart nginx</code></td>
      <td data-label="OpenRC"><code>sudo rc-service nginx restart</code></td>
      <td data-label="runit"><code>sudo sv restart nginx</code></td>
      <td data-label="SysV init"><code>sudo service nginx restart</code></td>
    </tr>
    <!-- Ver status -->
    <tr>
      <td data-label="Objetivo">Ver status do serviço</td>
      <td data-label="systemd"><code>systemctl status nginx</code></td>
      <td data-label="OpenRC"><code>rc-service nginx status</code></td>
      <td data-label="runit"><code>sv status nginx</code></td>
      <td data-label="SysV init"><code>service nginx status</code></td>
    </tr>
    <!-- Habilitar na inicialização -->
    <tr>
      <td data-label="Objetivo">Habilitar na inicialização</td>
      <td data-label="systemd"><code>sudo systemctl enable nginx</code></td>
      <td data-label="OpenRC"><code>sudo rc-update add nginx</code></td>
      <td data-label="runit"><code>ln -s /etc/sv/nginx /var/service/</code></td>
      <td data-label="SysV init"><code>sudo update-rc.d nginx defaults</code> <small>(Debian)</small><br><code>sudo chkconfig nginx on</code> <small>(RHEL)</small></td>
    </tr>
    <!-- Desabilitar na inicialização -->
    <tr>
      <td data-label="Objetivo">Desabilitar na inicialização</td>
      <td data-label="systemd"><code>sudo systemctl disable nginx</code></td>
      <td data-label="OpenRC"><code>sudo rc-update del nginx</code></td>
      <td data-label="runit"><code>rm /var/service/nginx</code></td>
      <td data-label="SysV init"><code>sudo update-rc.d -f nginx remove</code> <small>(Debian)</small><br><code>sudo chkconfig nginx off</code> <small>(RHEL)</small></td>
    </tr>
  </tbody>
</table>

<!-- Botões de cópia (se ainda quiser um por célula, avise — mas recomendo copiar o código diretamente) -->

<section>


