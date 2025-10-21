---
layout: manual-seo
title: "make oldconfig vs make olddefconfig — Comparação Técnica"
description: "Tabela com comparação técnica entre make oldconfig e make olddefconfig — como usar, quando usar e observações."
permalink: /make-oldconfig-vs-olddefconfig/
tags: [kernel, linux, sysadmin]
---



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Descrição Técnica.</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando">make oldconfig</td>
      <td data-label="Descrição Técnica">Atualiza o .config com as novas opções do kernel. Pede confirmação para cada nova opção.</td>
      <td data-label="Observações">Revise e altere manualmente cada nova opção.</td>
    </tr>
    <tr>
      <td data-label="Comando">make olddefconfig</td>
      <td data-label="Descrição Técnica">Atualiza o .config com as novas opções do kernel. Usa valores padrão para novas opções.</td>
      <td data-label="Observações">Atualizar rapidamente sem interação.</td>
    </tr>
    <tr>
      <td data-label="Comando">make menuconfig</td>
      <td data-label="Descrição Técnica">Abre interface gráfica para configurar o kernel.</td>
      <td data-label="Observações">Utilize após make oldconfig ou make olddefconfig para ajustes finos.</td>
    </tr>
    <tr>
      <td data-label="Comando">make defconfig</td>
      <td data-label="Descrição Técnica">Gera um .config com valores padrão para sua arquitetura.</td>
      <td data-label="Observações">Útil para começar do zero.</td>
    </tr>
    <tr>
      <td data-label="Comando">make localmodconfig</td>
      <td data-label="Descrição Técnica">Gera um  .config com base nos módulos carregados no Sistema atual.</td>
      <td data-label="Observações">Ideal para sistemas minimalistas.</td>
    </tr>
    <tr>
      <td data-label="Comando">make savedefconfig</td>
      <td data-label="Descrição Técnica">Salva as configurações atuais em um arquivo defconfig.</td>
      <td data-label="Observações">Reutilização em outros kernels.</td>
    </tr>
  </tbody>
</table>
