---
layout: manual-seo
title: "Comandos Essenciais para Scripts de Resgate Seguros no Linux"
description: "Shebang seguro, trap para limpeza, verificação de disco, timeout, logging — padrões reais para scripts que não apagam dados por acidente."
author: "Piolinux"
categories: [bash, script, segurança, linux, terminal, resgate, automação]
tags: [bash, shell-script, segurança, resgate, linux, script-seguro, ddrescue, automação]
permalink: /comandos-scripts-resgate-seguros-linux/
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


<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Comando / Padrão</th>
        <th>Propósito Real</th>
        <th>Aviso Técnico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Comando / Padrão"><code>#!/bin/bash -eEu -o pipefail</code></td>
        <td data-label="Propósito Real">Shebang seguro: para em erro, trata variáveis não definidas, falha em pipes com erro.</td>
        <td data-label="Aviso Técnico">Substitui <code>set -e</code> + <code>set -u</code>. Evita scripts que "dão certo" mesmo com falhas.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>readonly DISCO="/dev/SEU_DISCO"</code></td>
        <td data-label="Propósito Real">Protege variáveis críticas contra reatribuição acidental.</td>
        <td data-label="Aviso Técnico">Utilze em scripts de recuperação para evitar sobrescrita de disco por erro de digitação.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>trap 'rm -f "$TMPFILE"' EXIT</code></td>
        <td data-label="Propósito Real">Limpeza de arquivos temporários mesmo se o script falhar.</td>
        <td data-label="Aviso Técnico">Sempre use com <code>mktemp</code>: <code>TMPFILE=$(mktemp)</code>.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>[[ -b "/dev/sdb" ]] && echo "É bloco"</code></td>
        <td data-label="Propósito Real">Verifica se é dispositivo de bloco (disco) antes de operar.</td>
        <td data-label="Aviso Técnico">Evita rodar <code>dd</code> em um arquivo comum por engano.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>if ! command -v ddrescue &> /dev/null; then</code></td>
        <td data-label="Propósito Real">Verifica se ferramenta essencial está instalada antes de usar.</td>
        <td data-label="Aviso Técnico">Nunca assuma que <code>ddrescue</code>, <code>pv</code> ou <code>jq</code> estão presentes.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>exec > >(tee -a script.log) 2>&1</code></td>
        <td data-label="Propósito Real">Registra toda a saída do script em arquivo, sem perder no terminal.</td>
        <td data-label="Aviso Técnico">Essencial para auditoria em operações de resgate.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>[[ $EUID -eq 0 ]] || { echo "Execute como root"; exit 1; }</code></td>
        <td data-label="Propósito Real">Verifica permissão de root antes de operações críticas.</td>
        <td data-label="Aviso Técnico">Evita falhas silenciosas por falta de privilégio.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>read -r -p "Confirma? (s/N): " conf</code></td>
        <td data-label="Propósito Real">Pede confirmação explícita antes de operações destrutivas.</td>
        <td data-label="Aviso Técnico">Use em scripts interativos de recuperação. Sempre com <code>-r</code> para evitar backslash mágico.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>timeout 30s ddrescue ...</code></td>
        <td data-label="Propósito Real">Limita tempo de execução para evitar travamentos.</td>
        <td data-label="Aviso Técnico">Útil em discos com falhas físicas que travam comandos por horas.</td>
      </tr>
      <tr>
        <td data-label="Comando / Padrão"><code>stat -c "%a %n" arquivo</code></td>
        <td data-label="Propósito Real">Mostra permissões em octal (útil para logs de auditoria).</td>
        <td data-label="Aviso Técnico">Mais confiável que <code>ls -l</code> em scripts.</td>
      </tr>
    </tbody>
  </table>
</div>


</section>


