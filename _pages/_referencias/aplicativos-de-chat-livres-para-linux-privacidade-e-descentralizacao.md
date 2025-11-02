---
layout: manual-seo
title: "Aplicativos de Chat Livres para Linux — Privacidade e Descentralização"
description: "Tabela com Element (Matrix), HexChat (IRC), Pidgin, Signal e Telegram. Comparação técnica de protocolos, segurança e instalação. Testado em Devuan, Artix, Mint."
permalink: /chat/
tags: [linux, chat, matrix, element, irc, hexchat, pidgin, signal, devuan, artix, mint]
---


<section>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Programas.</th>
      <th>Protocolos.</th>
      <th>Por que é útil.</th>
      <th>Instalação (Debian/Devuan/Mint)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
    
      Programa"><strong>Element</strong></td>
      <td data-label="Protocolos">Matrix.</td>
      <td data-label="Por que é útil">Chat descentralizado, criptografia E2E, chamadas de vídeo, salas públicas/privadas. Alternativa ao Slack/Discord.</td>
      <td data-label="Instalação (Debian/Devuan/Mint)"><code>sudo apt install -y wget apt-transport-https
‍
sudo wget -O /usr/share/keyrings/element-io-archive-keyring.gpg https://packages.element.io/debian/element-io-archive-keyring.gpg
‍
echo "deb [signed-by=/usr/share/keyrings/element-io-archive-keyring.gpg] https://packages.element.io/debian/ default main" | sudo tee /etc/apt/sources.list.d/element-io.list

sudo apt update

sudo apt install element-desktop</code></td>
    </tr>
    <tr>
      <td data-label="
    
      Programa"><strong>HexChat.</strong></td>
      <td data-label="Protocolos">IRC.</td>
      <td data-label="Por que é útil">Leve, estável, ideal para fóruns técnicos (ex: Freenode, Libera.Chat).</td>
      <td data-label="Instalação (Debian/Devuan/Mint)"><code>sudo apt install hexchat</code></td>
    </tr>
    <tr>
      <td data-label="
    
      Programa"><strong>Pidgin.</strong></td>
      <td data-label="Protocolos">XMPP, IRC, Discord (com plugin)</td>
      <td data-label="Por que é útil">Multi-protocolo, leve, funciona em sistemas antigos.</td>
      <td data-label="Instalação (Debian/Devuan/Mint)"><code>sudo apt install pidgin</code></td>
    </tr>
    <tr>
      <td data-label="
    
      Programa"><strong>Signal Desktop.</strong></td>
      <td data-label="Protocolos">Signal.</td>
      <td data-label="Por que é útil">Criptografia E2E de ponta, mas **requer número de telefone**. Não é software livre, mas é o mais seguro para SMS/voz.</td>
      <td data-label="Instalação (Debian/Devuan/Mint)"><code>wget -O- https://updates.signal.org/desktop/apt/keys.asc | gpg --dearmor > signal-desktop-keyring.gpg;
cat signal-desktop-keyring.gpg | sudo tee /usr/share/keyrings/signal-desktop-keyring.gpg > /dev/null


wget -O signal-desktop.sources https://updates.signal.org/static/desktop/apt/signal-desktop.sources;
cat signal-desktop.sources | sudo tee /etc/apt/sources.list.d/signal-desktop.sources > /dev/null


sudo apt update && sudo apt install signal-desktop</code></td>
    </tr>
    <tr>
      <td data-label="
    
      Programa"><strong>Telegram Desktop</strong></td>
      <td data-label="Protocolos">Telegram.</td>
      <td data-label="Por que é útil">Não é software livre, mas é popular. Use só se necessário — prefira Matrix/IRC.</td>
      <td data-label="Instalação (Debian/Devuan/Mint)"><code>sudo apt install telegram-desktop</code></td>
    </tr>
  </tbody>
</table>


</section>
