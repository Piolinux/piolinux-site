---
layout: default
title: "OpenRC e sysvinit – Gerenciamento de Serviços Técnico"
description: "Tabelas com comandos reais para OpenRC (Devuan, Alpine) e sysvinit (Debian legado) — sem systemd, só utilidade prática."
permalink: /openrc-sysvinit/
---


<section>

<h3 id="openrc">OpenRC (Devuan, Alpine, Gentoo)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ações.</th>
      <th>Comandos.</th>
      <th>Observações Técnicas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Iniciar serviço.</td>
      <td data-label="Comando">
        <code>sudo rc-service ssh start</code>
        <button class="copy-btn" data-command="sudo rc-service ssh start">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Não depende de `systemd`. Scripts em `/etc/init.d/`.</td>
    </tr>
    <tr>
      <td data-label="Ação">Parar serviço.</td>
      <td data-label="Comando">
        <code>sudo rc-service ssh stop</code>
        <button class="copy-btn" data-command="sudo rc-service ssh stop">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Para imediatamente, sem esperar por dependências.</td>
    </tr>
    <tr>
      <td data-label="Ação">Reiniciar serviço.</td>
      <td data-label="Comando">
        <code>sudo rc-service ssh restart</code>
        <button class="copy-btn" data-command="sudo rc-service ssh restart">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Executa `stop` + `start`.</td>
    </tr>
    <tr>
      <td data-label="Ação">Habilitar no boot.</td>
      <td data-label="Comando">
        <code>sudo rc-update add ssh default</code>
        <button class="copy-btn" data-command="sudo rc-update add ssh default">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Adiciona link simbólico em `/etc/runlevels/default/`.</td>
    </tr>
    <tr>
      <td data-label="Ação">Ver status</td>
      <td data-label="Comando">
        <code>rc-status</code>
        <button class="copy-btn" data-command="rc-status">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Mostra serviços ativos por nível de execução.</td>
    </tr>
    <tr>
      <td data-label="Ação">Listar todos os serviços.</td>
      <td data-label="Comando">
        <code>ls /etc/init.d/</code>
        <button class="copy-btn" data-command="ls /etc/init.d/">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Cada script é um serviço independente.</td>
    </tr>
  </tbody>
</table>

<h3 id="sysvinit">sysvinit (Debian legado, Devuan, AntiX).</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ações</th>
      <th>Comandos</th>
      <th>Observações Técnicas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Iniciar serviço.</td>
      <td data-label="Comando">
        <code>sudo /etc/init.d/ssh start</code>
        <button class="copy-btn" data-command="sudo /etc/init.d/ssh start">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Chama diretamente o script do serviço.</td>
    </tr>
    <tr>
      <td data-label="Ação">Parar serviço.</td>
      <td data-label="Comando">
        <code>sudo /etc/init.d/ssh stop</code>
        <button class="copy-btn" data-command="sudo /etc/init.d/ssh stop">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Funciona mesmo sem `rc-service` (OpenRC).</td>
    </tr>
    <tr>
      <td data-label="Ação">Habilitar no boot.</td>
      <td data-label="Comando">
        <code>sudo update-rc.d ssh defaults</code>
        <button class="copy-btn" data-command="sudo update-rc.d ssh defaults">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Cria links em `/etc/rc[0-6].d/`.</td>
    </tr>
    <tr>
      <td data-label="Ação">Desabilitar no boot.</td>
      <td data-label="Comando">
        <code>sudo update-rc.d -f ssh remove</code>
        <button class="copy-btn" data-command="sudo update-rc.d -f ssh remove">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Remove todos os links de inicialização.</td>
    </tr>
    <tr>
      <td data-label="Ação">Verifique o nível de execução.</td>
      <td data-label="Comando">
        <code>runlevel</code>
        <button class="copy-btn" data-command="runlevel">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Mostra nível atual (ex: `N 2` = nível 2).</td>
    </tr>
    <tr>
      <td data-label="Ação">Mudar nível de execução</td>
      <td data-label="Comando">
        <code>sudo init 3</code>
        <button class="copy-btn" data-command="sudo init 3">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Nível 3 = multiusuário sem GUI; Nível 5 = com GUI.</td>
    </tr>
  </tbody>
</table>

<h3 id="notas">Notas Técnicas</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Fatos.</th>
      <th>Explicações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">OpenRC ≠ sysvinit</td>
      <td data-label="Explicação">OpenRC é um gerenciador moderno que **usa scripts do sysvinit**, mas adiciona dependências, paralelismo e níveis de execução mais flexíveis.</td>
    </tr>
    <tr>
      <td data-label="Fato">sysvinit é puro POSIX</td>
      <td data-label="Explicação">Funciona em qualquer sistema Unix-like, mesmo sem shell moderno. Ideal para resgate e sistemas embarcados.</td>
    </tr>
    <tr>
      <td data-label="Fato">Nenhum dos dois usa journalctl</td>
      <td data-label="Explicação">Logs vão para <code>/var/log/</code> (syslog, messages, auth.log). Use <code>tail -f</code> ou <code>less</code>.</td>
    </tr>
  </tbody>
</table>
</section>
