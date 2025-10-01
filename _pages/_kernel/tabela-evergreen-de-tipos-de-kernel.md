---
layout: manual-seo
title: "Arquiteturas de Kernel — Comparação Técnica"
description_custom: "Tabela com monolítico, microkernel, híbrido, unikernel e nanokernel: onde rodam drivers, exemplos reais e uso prático."
permalink: /arquiteturas-kernel/
tags: [kernel, linux, microkernel, unikernel, arquitetura, sistema-operacional, evergreen]
---







<section>
  



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Arquiteturas.</th>
      <th>Espaço do Kernel.</th>
      <th>Drivers.</th>
      <th>Exemplos Reais.</th>
      <th>Uso Comum.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Arquitetura">Monolítico</td>
      <td data-label="Espaço do Kernel">Tudo no kernel.</td>
      <td data-label="Drivers">No kernel</td>
      <td data-label="Exemplos Reais">Linux, FreeBSD</td>
      <td data-label="Uso Comum">Servidores, desktops, Android</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Microkernel</td>
      <td data-label="Espaço do Kernel">Só IPC, scheduler, memória.</td>
      <td data-label="Drivers">No userspace</td>
      <td data-label="Exemplos Reais">QNX, Minix 3, Hurd.</td>
      <td data-label="Uso Comum">Sistemas embarcados, críticos</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Híbrido</td>
      <td data-label="Espaço do Kernel">Parte no kernel, parte no userspace.</td>
      <td data-label="Drivers">Mistos</td>
      <td data-label="Exemplos Reais">macOS (XNU), Windows NT.</td>
      <td data-label="Uso Comum">Desktops comerciais</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Unikernel</td>
      <td data-label="Espaço do Kernel">App + kernel fundidos.</td>
      <td data-label="Drivers">Compilados com app</td>
      <td data-label="Exemplos Reais">MirageOS, Unikraft.</td>
      <td data-label="Uso Comum">Cloud, serverless</td>
    </tr>
    <tr>
      <td data-label="Arquitetura">Nanokernel</td>
      <td data-label="Espaço do Kernel">Só gerencia CPU/virtualização.</td>
      <td data-label="Drivers">Em camada acima</td>
      <td data-label="Exemplos Reais">seL4, EROS.</td>
      <td data-label="Uso Comum">Verificação formal, RTOS</td>
    </tr>
  </tbody>
</table>
</section>



<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Arquiteturas de Kernel: Monolítico, Microkernel, Híbrido e Unikernel",
  "description": "Tabela comparativa técnica entre arquiteturas de kernel: monolítico (Linux), microkernel (QNX), híbrido (XNU), unikernel (MirageOS) e nanokernel (seL4).",
  "articleBody": "Comparação técnica de arquiteturas de kernel: monolítico (tudo no kernel, ex: Linux), microkernel (serviços no userspace, ex: QNX), híbrido (mistura, ex: macOS XNU), unikernel (app + kernel fundidos, ex: MirageOS), nanokernel (mínimo absoluto, ex: seL4). Inclui localização de drivers, espaço de execução e casos de uso.",
  "inLanguage": "pt-BR",
  "url": "{{ page.url | absolute_url }}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ page.url | absolute_url }}"
  },
  "author": {
    "@type": "Person",
    "name": "Piolinux",
    "url": "https://piolinux.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Piolinux",
    "logo": {
      "@type": "ImageObject",
      "url": "https://piolinux.com/logo-512.png",
      "width": 512,
      "height": 512
    }
  },
  "datePublished": "{{ page.date | date_to_rfc3339 }}",
  "dateModified": "{{ page.last_modified_at | date_to_rfc3339 }}"
}
</script>
