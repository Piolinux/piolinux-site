---
layout: default
title: "DPMS no Linux – Controle Técnico com xset"
description: "Tabela objetiva com comandos para ativar, desativar e configurar DPMS via terminal — sem opiniões, só referência técnica."
permalink: /dpms-linux-xset/
date: 2025-08-15
author: "PioLinux"
categories: [linux, energia, monitor, dpms]
tags: [dpms, linux, economia-de-energia, tela-preta, monitor]
---


{% include toc.html %}



<section class="post-content">
                
        <table class="evergreen-table">
  <thead>
    <tr>
      <th>Ações</th>
      <th>Comandos</th>
      <th>Quando utilizar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Desativar DPMS. (modo de economia)</td>
      <td data-label="Comando">
        <code>xset -dpms</code>
        <button class="copy-btn" data-command="xset -dpms">📋 Copiar</button>
      </td>
      <td data-label="Quando usar">Em servidores com monitor sempre ligado, kiosks, ou quando o DPMS causa flickering em monitores antigos.</td>
    </tr>
    <tr>
      <td data-label="Ação">Ativar DPMS</td>
      <td data-label="Comando">
        <code>xset +dpms</code>
        <button class="copy-btn" data-command="xset +dpms">📋 Copiar</button>
      </td>
      <td data-label="Quando usar">Padrão em desktops — economiza energia em monitores ociosos.</td>
    </tr>
    <tr>
      <td data-label="Ação">Definir tempos (standby, suspend, off)</td>
      <td data-label="Comando">
        <code>xset dpms 600 1200 1800</code>
        <button class="copy-btn" data-command="xset dpms 600 1200 1800">📋 Copiar</button>
      </td>
      <td data-label="Quando usar">Personalizar tempo até o monitor desligar (em segundos: 10min, 20min, 30min).</td>
    </tr>
    <tr>
      <td data-label="Ação">Verificar status do DPMS.</td>
      <td data-label="Comando">
        <code>xset -q | grep -A1 DPMS</code>
        <button class="copy-btn" data-command="xset -q | grep -A1 DPMS">📋 Copiar</button>
      </td>
      <td data-label="Quando usar">Diagnosticar se o DPMS está ativo ou não.</td>
    </tr>
    <tr>
      <td data-label="Ação">Tornar configuração persistente.</td>
      <td data-label="Comando">
        Adicione o comando ao arquivo de inicialização do seu ambiente gráfico:<br>
        <code>echo "xset -dpms" >> ~/.xprofile</code>
        <button class="copy-btn" data-command="echo &quot;xset -dpms&quot; >> ~/.xprofile">📋 Copiar</button>
      </td>
      <td data-label="Quando usar">Para que a configuração sobreviva a reinicializações. (funciona no X11; Wayland não usa `xset`).</td>
    </tr>
  </tbody>
</table>

<h3 id="observacoes">Observações Técnicas</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Fatos.</th>
      <th>Explicações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Fato">DPMS é parte do padrão VESA.</td>
      <td data-label="Explicação">Controlando os modos de economia de energia do monitor (Standby, Suspend, Off). Não é específico do Linux.</td>
    </tr>
    <tr>
      <td data-label="Fato">Não funciona no Wayland.</td>
      <td data-label="Explicação"><code>xset</code> é uma ferramenta do X11. Em Wayland, use configurações do compositor (ex: GNOME Settings, swayidle).</td>
    </tr>
    <tr>
      <td data-label="Fato">Desativar DPMS não economiza energia.</td>
      <td data-label="Explicação">Ao contrário: o monitor permanece ligado 100% do tempo. Só desative se houver problema de compatibilidade.</td>
    </tr>
  </tbody>
</table>
   
   </section>
  
  
  <script>
document.addEventListener('click', function(e) {
  if (e.target.matches('.copy-btn')) {
    const cmd = e.target.dataset.command; // ← aqui estava "cmd", agora é "command"
    if (cmd) {
      navigator.clipboard.writeText(cmd).then(() => {
        const original = e.target.textContent;
        e.target.textContent = '✓ Copiado!';
        setTimeout(() => e.target.textContent = original, 1500);
      }).catch(err => {
        console.warn('Falha ao copiar:', err);
      });
    }
  }
});
</script>





