---
layout: default
title: "Comandos SysVinit — Inicialização Clássica do Linux"
description: "Lista técnica com comandos reais do SysVinit: init, service, update-rc.d. Copie, cole e use no terminal — sem systemd."
permalink: /sistemas-de-inicializacao-sysv/
tags: [sysvinit, init, linux, systemd, devuan, slackware, terminal, boot]
---



<section>

<h2>🖥 Comandos Gerais.</h2>




<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivos.</th>
      <th>Comandos(Debian/Devuan).</th>
      <th>Comandos (Universal).</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Iniciar serviço.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo service nginx start</code></td>
      <td data-label="Comando (Universal)"><code>sudo /etc/init.d/nginx start</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo /etc/init.d/nginx start">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Parar serviço.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo service nginx stop</code></td>
      <td data-label="Comando (Universal)"><code>sudo /etc/init.d/nginx stop</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo /etc/init.d/nginx stop">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Reiniciar serviço.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo service nginx restart</code></td>
      <td data-label="Comando (Universal)"><code>sudo /etc/init.d/nginx restart</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo /etc/init.d/nginx restart">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Ver status.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo service nginx status</code></td>
      <td data-label="Comando (Universal)"><code>ps aux | grep nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="ps aux | grep nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Habilitar no boot.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo update-rc.d nginx defaults</code></td>
      <td data-label="Comando (Universal)">Editar links em <code>/etc/rc[2-5].d/</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo update-rc.d nginx defaults">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Desabilitar no boot.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo update-rc.d -f nginx remove</code></td>
      <td data-label="Comando (Universal)">Remover links em <code>/etc/rc[2-5].d/</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo update-rc.d -f nginx remove">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Ver runlevel atual.</td>
      <td data-label="Comando (Debian/Devuan)"><code>runlevel</code></td>
      <td data-label="Comando (Universal)"><code>who -r</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="runlevel">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Mudar para modo multiusuário.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo init 3</code></td>
      <td data-label="Comando (Universal)"><code>sudo telinit 3</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo telinit 3">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Reiniciar sistema.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo telinit 6</code></td>
      <td data-label="Comando (Universal)"><code>sudo telinit 6</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo telinit 6">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Recarregar inittab.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo telinit q</code></td>
      <td data-label="Comando (Universal)"><code>sudo telinit q</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="sudo telinit q">📋</button></td>
    </tr>
  </tbody>
</table>

<div class="dica-final">
  💡 <strong>Dica técnica:</strong> Em <strong>Slackware</strong> ou sistemas sem <code>service</code>, use sempre <code>/etc/init.d/nome start</code>. É o método de utilização universal do SysVinit.
</div>
<div class="aviso-final">
  ⚠️ <strong>Aviso:</strong> SysVinit <strong>não tem <code>systemctl</code></strong>. Se você tentar usar, vai dar erro.<br>
  ✅ <strong>SysVinit não é obsoleto * é minimalista.</strong> Domine-o, e você entende o coração do Unix.
</div>
</section>



