---
layout: manual-seo
title: "Guia de Sistemas de Inicialização — Comandos Linux"
description: "Lista técnica com todos os comandos de Sistemas de Inicialização. Copie, cole e use direto no terminal."
permalink: /sistemas-de-inicializacao/
---



<h2>🖥 Comandos Gerais.</h2>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Objetivos.</th>
      <th>Comandos.</th>
      <th>Copiar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Objetivo">Iniciar um serviço</td>
      <td data-label="Comando"><code>systemctl start nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl start nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Parar um serviço</td>
      <td data-label="Comando"><code>systemctl stop nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl stop nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Reiniciar um serviço</td>
      <td data-label="Comando"><code>systemctl restart nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl restart nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Recarregar configuração (sem reiniciar)</td>
      <td data-label="Comando"><code>systemctl reload nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl reload nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Habilitar serviço no boot</td>
      <td data-label="Comando"><code>systemctl enable nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl enable nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Desabilitar serviço no boot</td>
      <td data-label="Comando"><code>systemctl disable nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl disable nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Ver status de um serviço</td>
      <td data-label="Comando"><code>systemctl status nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl status nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Verificar se serviço está ativo</td>
      <td data-label="Comando"><code>systemctl is-active nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl is-active nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Listar serviços ativos</td>
      <td data-label="Comando"><code>systemctl list-units --type=service</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl list-units --type=service">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Listar todos os serviços (ativos e inativos)</td>
      <td data-label="Comando"><code>systemctl list-unit-files --type=service</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl list-unit-files --type=service">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Ver logs de um serviço</td>
      <td data-label="Comando"><code>journalctl -u nginx</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="journalctl -u nginx">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Logs das últimas 2 horas</td>
      <td data-label="Comando"><code>journalctl --since "2 hours ago"</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="journalctl --since &quot;2 hours ago&quot;">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Monitorar logs em tempo real</td>
      <td data-label="Comando"><code>journalctl -f</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="journalctl -f">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Habilitar boot verboso (mostra mensagens no boot)</td>
      <td data-label="Comando"><code>hostnamectl set-boot-verbose true</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="hostnamectl set-boot-verbose true">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Ver tempo de inicialização</td>
      <td data-label="Comando"><code>systemd-analyze</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemd-analyze">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Ver quais serviços mais demoraram no boot</td>
      <td data-label="Comando"><code>systemd-analyze blame</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemd-analyze blame">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Impedir que um serviço seja iniciado (máscara)</td>
      <td data-label="Comando"><code>systemctl mask cups</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl mask cups">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Remover máscara de serviço</td>
      <td data-label="Comando"><code>systemctl unmask cups</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="systemctl unmask cups">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Mudar para modo multiusuário (SysV)</td>
      <td data-label="Comando"><code>init 3</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="init 3">📋</button></td>
    </tr>
    <tr>
      <td data-label="Objetivo">Reiniciar sistema (SysV)</td>
      <td data-label="Comando"><code>telinit 6</code></td>
      <td data-label="Copiar"><button class="copy-btn" data-command="telinit 6">📋</button></td>
    </tr>
  </tbody>
</table>


</section>




