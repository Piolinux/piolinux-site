---
title: "LibreOffice — Instalação Modular por Necessidade"
description: "Como instalar apenas os componentes necessários do LibreOffice (Writer, Calc, Impress) em sistemas baseados em .deb. Economize até 450 MB de espaço em disco."
date: 2025-11-02
permalink: /tabelas/libreoffice-modular/
layout: manual-seo
---



<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Perfil dos Usuários.</th>
      <th>Pacotes Recomendados.</th>
      <th>Comando (Debian/Devuan)</th>
      <th>Economia vs Instalação Completa.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Perfil">Escritor / Estudante.</td>
      <td data-label="Pacotes">Writer + dicionário.</td>
      <td data-label="Comando"><code>sudo apt install libreoffice-writer hunspell-pt-br</code></td>
      <td data-label="Economia">~400 MB a menos</td>
    </tr>
    <tr>
      <td data-label="Perfil">Analista de Dados.</td>
      <td data-label="Pacotes">Calc + Writer (básico)</td>
      <td data-label="Comando"><code>sudo apt install libreoffice-calc libreoffice-writer</code></td>
      <td data-label="Economia">~300 MB a menos.</td>
    </tr>
    <tr>
      <td data-label="Perfil">Professor / Palestrante.</td>
      <td data-label="Pacotes">Impress + Writer.</td>
      <td data-label="Comando"><code>sudo apt install libreoffice-impress libreoffice-writer</code></td>
      <td data-label="Economia">~350 MB a menos.</td>
    </tr>
    <tr>
      <td data-label="Perfil">Usuário Mínimo (só abrir .doc)</td>
      <td data-label="Pacotes">`libreoffice-core` + `libreoffice-writer`</td>
      <td data-label="Comando"><code>sudo apt install libreoffice-core libreoffice-writer</code></td>
      <td data-label="Economia">~450 MB a menos.</td>
    </tr>
    <tr>
      <td data-label="Perfil">Quem usa tudo.</td>
      <td data-label="Pacotes">`libreoffice` (meta-pacote)</td>
      <td data-label="Comando"><code>sudo apt install libreoffice</code></td>
      <td data-label="Economia">—</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ações</th>
      <th>Comandos.</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Atualizar lista de pacote.</td>
      <td data-label="Comando"><code>sudo apt update</code></td>
      <td data-label="Observações">Sincroniza com todos os repositórios, incluindo <code>trixie/excalibur-backports</code>.</td>
    </tr>
    <tr>
      <td data-label="Ação">Atualizar LibreOffice via backports.</td>
      <td data-label="Comando"><code>sudo apt -t trixie/excalinur-backports upgrade</code></td>
      <td data-label="Observações">Atualiza só os pacotes já instalados - ex: writer, calc - para a versão mais nova do backports.</td>
    </tr>
  </tbody>
</table>

</section>

