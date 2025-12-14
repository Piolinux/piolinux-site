---
layout: manual-seo
title: "Linux sem systemd: Devuan, Artix, Void, Alpine – Init systems alternativos (OpenRC, runit, s6)"
description: "Tabela técnica com distros sem systemd: Devuan (OpenRC/sysvinit), Artix (OpenRC/runit), Void (runit), Alpine (OpenRC/s6). Links oficiais, filosofia, uso prático. Zero dependência do ecossistema Google."
permalink: /distros/underground/
tags:
  - linux sem systemd
  - devuan
  - artix linux
  - void linux
  - alpine linux
  - openrc
  - runit
  - s6
  - init alternativo
  - sysadmin
---




<p>Estas distros removem o systemd por design. Cada uma oferece controle total, transparência e compatibilidade com sistemas antigos ou personalizados</p>

<section>



 



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Distros Underground.</th>
      <th>Filosofia.</th>
      <th>Base / Init.</th>
      <th>Pacote.</th>
      <th>Para Quem?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Distros Underground"><a href="https://www.alpinelinux.org/" target="_blank" rel="noopener noreferrer">Alpine Linux</a></td>
      <td data-label="Filosofia">Leveza, segurança, containers.</td>
      <td data-label="Base / Init">musl + OpenRC</td>
      <td data-label="Pacote"><code>apk</code></td>
      <td data-label="Para Quem?">DevOps, servidores, sistemas 
      embarcados.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://voidlinux.org/" target="_blank" rel="noopener noreferrer">Void Linux</a></td>
      <td data-label="Filosofia">Independente, sem systemd.</td>
      <td data-label="Base / Init">glibc/musl + runit</td>
      <td data-label="Pacote"><code>xbps</code></td>
      <td data-label="Para Quem?">Quem prefere runit e simplicidade.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://crux.nu/" target="_blank" rel="noopener noreferrer">CRUX</a></td>
      <td data-label="Filosofia">KISS, source-based.</td>
      <td data-label="Base / Init">glibc + BSD init</td>
      <td data-label="Pacote">Ports (compilação)</td>
      <td data-label="Para Quem?">Quem quer controle total via 
      compilação.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://www.hyperbola.info/" target="_blank" rel="noopener noreferrer">Hyperbola GNU/Linux-libre</a></td>
      <td data-label="Filosofia">100% software livre (FSF-approved).</td>
      <td data-label="Base / Init">Parabola + OpenRC</td>
      <td data-label="Pacote"><code>pacman</code></td>
      <td data-label="Para Quem?">Defensores de software livre radical.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://dragora.org/" target="_blank" rel="noopener noreferrer">Dragora GNU/Linux-Libre</a></td>
      <td data-label="Filosofia">GNU puro, independente.</td>
      <td data-label="Base / Init">glibc + BSD init</td>
      <td data-label="Pacote">Dragora Package Tool</td>
      <td data-label="Para Quem?">Quem evita Debian/Red Hat/Arch.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://guix.gnu.org/" target="_blank" rel="noopener noreferrer">Guix System</a></td>
      <td data-label="Filosofia">Funcional, declarativo, reproduzível.</td>
      <td data-label="Base / Init">GNU Guix + Shepherd</td>
      <td data-label="Pacote"><code>guix</code></td>
      <td data-label="Para Quem?">Cientistas, devs funcionais.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://chimera-linux.org/" target="_blank" rel="noopener noreferrer">Chimera Linux</a></td>
      <td data-label="Filosofia">Híbrido Linux/BSD, moderno.</td>
      <td data-label="Base / Init">llvm-libc + dinit</td>
      <td data-label="Pacote"><code>apko</code></td>
      <td data-label="Para Quem?">Early adopters de init alternativos.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://www.adelielinux.org/" target="_blank" rel="noopener noreferrer">Adélie Linux</a></td>
      <td data-label="Filosofia">Suporte a PowerPC, ARM, x86 antigo.</td>
      <td data-label="Base / Init">musl + OpenRC</td>
      <td data-label="Pacote"><code>apk</code></td>
      <td data-label="Para Quem?">Reviver hardware antigo.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://www.devuan.org/" target="_blank" rel="noopener noreferrer">Devuan</a></td>
      <td data-label="Filosofia">Debian sem systemd</td>
      <td data-label="Base / Init">Debian + sysvinit/OpenRC/runit.</td>
      <td data-label="Pacote"><code>apt</code></td>
      <td data-label="Para Quem?">Usuários de Debian que rejeitam 
      systemd.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://artixlinux.org/" target="_blank" rel="noopener noreferrer">Artix Linux</a></td>
      <td data-label="Filosofia">Arch sem systemd.</td>
      <td data-label="Base / Init">Arch + OpenRC/runit/s6</td>
      <td data-label="Pacote"><code>pacman</code></td>
      <td data-label="Para Quem?">Usuários do Arch que querem escolha 
      de init.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://postmarketos.org/" target="_blank" rel="noopener noreferrer">postmarketOS</a></td>
      <td data-label="Filosofia">Linux em celulares antigos.</td>
      <td data-label="Base / Init">Alpine + OpenRC</td>
      <td data-label="Pacote"><code>apk</code></td>
      <td data-label="Para Quem?">Hacking de dispositivos móveis.</td>
    </tr>
    <tr>
      <td data-label="Distros Underground"><a href="https://bedrocklinux.org/" target="_blank" rel="noopener noreferrer">Bedrock Linux</a></td>
      <td data-label="Filosofia">Mistura múltiplas distros (Debian + Arch + Alpine)</td>
      <td data-label="Base / Init">Próprio + init da distro base</td>
      <td data-label="Pacote">Múltiplos (apt, pacman, apk)</td>
      <td data-label="Para Quem?">Quem quer pacotes de várias distros 
      no mesmo sistema.</td>
    </tr>
  </tbody>
</table>




</section>












