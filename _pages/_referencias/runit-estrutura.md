---
title: "Estrutura de um Serviço com runit"
description: "Diagrama da estrutura de diretórios e arquivos exigidos por um serviço gerenciado pelo runit (Debian, Devuan, Void). Inclui run, finish e logger separado."
layout: manual-seo
permalink: /referencias/runit-estrutura/
tags: [runit, ufw, runit-estrutura]
---


<section>

<figure>
  <img src="/assets/imagens/runit-estrutura.svg" alt="Estrutura de diretório de um serviço runit" loading="lazy">
  <figcaption>Estrutura mínima de um serviço no <code>runit</code>. O script <code>run</code> deve ser executável e não retornar (geralmente com <code>exec</code>).</figcaption>
</figure>


<a href="/assets/imagens/runit-estrutura.svg" 
   download="runit-estrutura.svg"
   class="btn-download">
  ⤓ Baixar SVG
</a>


</section>

<section>

<table class="evergreen-table">
  <thead>
    <tr>
      <th>Situações.</th>
      <th>Comandos.</th>
      <th>Resultados.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Situação">Uso incorreto: confusão com listas.</td>
      <td data-label="Comando"><code>ls -1 /etc/service/ufw | xargs -n 1 sv status</code></td>
      <td data-label="Resultado">falha: <code>/etc/service/ufw</code> é um diretório, não uma lista. O <code>comando ls</code> lista arquivos <em>dentro</em> dele (exemplos: <code>run</code>, <code>finish</code>) <code>sv status run</code> não faz sentido.</td>
    </tr>
    <tr>
      <td data-label="Situação">Uso correto: status de um serviço.</td>
      <td data-label="Comando"><code>sv status ufw</code></td>
      <td data-label="Resultado">Mostra o status real do serviço <code>ufw</code> (ex: <code>run: up (pid 123) 5s</code>).</td>
    </tr>
    <tr>
      <td data-label="Situação">Uso avançado: status de vários serviços.</td>
      <td data-label="Comando"><code>printf '%s\n' ufw cron ssh | xargs -n 1 sv status</code></td>
      <td data-label="Resultado">status de <code>UFW</code>, <code>CRON</code> e <code>SSH</code> - útil para checagem em lote.</td>
    </tr>
  </tbody>
</table>


</section>
