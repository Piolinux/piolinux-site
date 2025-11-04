---
title: "Pacotes de Idioma para o LibreOffice — Instalação no Linux"
description: "Como instalar pacotes de idioma (ex: português do Brasil) no LibreOffice em distribuições baseadas em Debian, Devuan, Ubuntu e derivados."
permalink: /tabelas/libreoffice-idioma/
layout: manual-seo
---

<section>


<h3>Pacotes de Idioma (Interface do LibreOffice)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas.</th>
      <th>Debian/Devuan.</th>
      <th>Arch/Artix.</th>
      <th>Comandos (Debian/Devuan)</th>
      <th>Comandos (Artix)</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-pt-br</td>
      <td data-label="Arch/Artix">libreoffice-fresh-pt</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-pt-br</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-pt</code></td>
      <td data-label="Observações">Reinicie o LibreOffice após instalar.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês -EUA.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-en-us</td>
      <td data-label="Arch/Artix">libreoffice-fresh-en</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-en-us</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-en</code></td>
      <td data-label="Observações">Geralmente já instalado por padrão.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-es</td>
      <td data-label="Arch/Artix">libreoffice-fresh-es</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-es</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-es</code></td>
      <td data-label="Observações">Cobre es-ES, es-MX e outras variantes.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-fr</td>
      <td data-label="Arch/Artix">libreoffice-fresh-fr</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-fr</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-fr</code></td>
      <td data-label="Observações">Único pacote para todas as variantes.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão</td>
      <td data-label="Debian/Devuan">libreoffice-l10n-de</td>
      <td data-label="Arch/Artix">libreoffice-fresh-de</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install libreoffice-l10n-de</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S libreoffice-fresh-de</code></td>
      <td data-label="Observações">Inclui suporte à ortografia moderna.</td>
    </tr>
  </tbody>
</table>


<h3>Dicionários de Ortografia (Corretor do LibreOffice)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas</th>
      <th>Debian/Devuan.</th>
      <th>Arch/Artix.</th>
      <th>Comando (Debian/Devuan)</th>
      <th>Comando (Artix)</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil</td>
      <td data-label="Debian/Devuan">hunspell-pt-br</td>
      <td data-label="Arch/Artix">hunspell-pt_BR</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-pt-br</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-pt_BR</code></td>
      <td data-label="Observações">Necessário para verificação ortográfica.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês -EUA-</td>
      <td data-label="Debian/Devuan">hunspell-en-us.</td>
      <td data-label="Arch/Artix">hunspell-en_US.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-en-us</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-en_US</code></td>
      <td data-label="Observações">Geralmente já presente.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Debian/Devuan">hunspell-es.</td>
      <td data-label="Arch/Artix">hunspell-es_ES.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-es</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-es_ES</code></td>
      <td data-label="Observações">Funciona com múltiplas variantes.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Debian/Devuan">hunspell-fr</td>
      <td data-label="Arch/Artix">hunspell-fr</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-fr</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-fr</code></td>
      <td data-label="Observações">Mesmo nome nos dois ecossistemas.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão.</td>
      <td data-label="Debian/Devuan">hunspell-de-de.</td>
      <td data-label="Arch/Artix">hunspell-de_DE.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install hunspell-de-de</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S hunspell-de_DE</code></td>
      <td data-label="Observações">Verifique ortografia após instalação.</td>
    </tr>
  </tbody>
</table>


<h3>Tesauro (MyThes) — Sinônimos no LibreOffice.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas.</th>
      <th>Debian/Devuan.</th>
      <th>Arch/Artix.</th>
      <th>Comando (Debian/Devuan)</th>
      <th>Comando (Artix)</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil.</td>
      <td data-label="Debian/Devuan">mythes-pt-br.</td>
      <td data-label="Arch/Artix">mythes-pt_BR.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-pt-br</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-pt_BR</code></td>
      <td data-label="Observações">Ativado em <em>Ferramentas → Tesauro</em> (tecla <code>Ctrl+F7</code>).</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês -EUA-</td>
      <td data-label="Debian/Devuan">mythes-en-us.</td>
      <td data-label="Arch/Artix">mythes-en_US.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-en-us</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-en_US</code></td>
      <td data-label="Observações">Geralmente instalado com o pacote principal do LibreOffice.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Debian/Devuan">mythes-es</td>
      <td data-label="Arch/Artix">mythes-es_ES</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-es</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-es_ES</code></td>
      <td data-label="Observações">Funciona para variantes principais (es-ES, es-MX).</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Debian/Devuan">mythes-fr</td>
      <td data-label="Arch/Artix">mythes-fr</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-fr</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-fr</code></td>
      <td data-label="Observações">Mesmo nome nos dois ecossistemas.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão.</td>
      <td data-label="Debian/Devuan">mythes-de.</td>
      <td data-label="Arch/Artix">mythes-de_DE.</td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install mythes-de</code></td>
      <td data-label="Comando (Artix)"><code>sudo pacman -S mythes-de_DE</code></td>
      <td data-label="Observações">Inclui sinônimos da norma moderna (nach Duden).</td>
    </tr>
  </tbody>
</table>



</section>
