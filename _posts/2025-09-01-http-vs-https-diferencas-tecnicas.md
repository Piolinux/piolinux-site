---
layout: manual-seo
title: "HTTP vs HTTPS: Diferenças Técnicas"
description: "Tabela comparativa com portas, criptografia, certificados e mais — sem enfeites."
author: "PioLinux"
categories: [rede, segurança, web]
tags: [http, https, tls, ssl, segurança, rede]
permalink: /http-vs-https/
---



<section class="post-content">



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Características.</th>
      <th>HTTP.</th>
      <th>HTTPS.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Característica">Porta padrão.</td>
      <td data-label="HTTP">80</td>
      <td data-label="HTTPS">443</td>
    </tr>
    <tr>
      <td data-label="Característica">Criptografia.</td>
      <td data-label="HTTP">❌ Não</td>
      <td data-label="HTTPS">✅ Sim (TLS/SSL)</td>
    </tr>
    <tr>
      <td data-label="Característica">Certificado.</td>
      <td data-label="HTTP">Não é necessário.</td>
      <td data-label="HTTPS">Obrigatório. (ex: Let’s Encrypt)</td>
    </tr>
    <tr>
      <td data-label="Característica">Dados visíveis na rede.</td>
      <td data-label="HTTP">Sim (texto puro)</td>
      <td data-label="HTTPS">Não (criptografado)</td>
    </tr>
    <tr>
      <td data-label="Característica">Ícone no navegador.</td>
      <td data-label="HTTP">Nenhum ou ⚠️</td>
      <td data-label="HTTPS">🔒 Cadeado</td>
    </tr>
    <tr>
      <td data-label="Característica">Tratamento pelo Google.</td>
      <td data-label="HTTP">Desfavorecido (marca como “não seguro”)</td>
      <td data-label="HTTPS">Preferido (requisito para ranking)</td>
    </tr>
    <tr>
      <td data-label="Característica">Ativar HTTPS (ex: Nginx).</td>
      <td data-label="HTTP">—</td>
      <td data-label="HTTPS"><code>certbot --nginx -d seu.site</code></td>
    </tr>
  </tbody>
</table>

</section>
