---
layout: manual-seo
title: "Comandos Essenciais do Terminal – Referência Técnica"
description: "Tabela objetiva com navegação, arquivos, ajuda e sistema — comandos reais, exemplos úteis e alternativas seguras. Sem fluff."
permalink: /comandos-essenciais-terminal-linux/
tags: [terminal, comandos, linux, awk, sed, find, xargs, produtividade]
---







<section class="post-content">
    <table class="evergreen-table">
  <thead>
    <tr>
      <th>Distribuições.</th>
      <th>Bases.</th>
      <th>Pontos Fortes.</th>
      <th>Comandos de Atualização.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Distribuição">Ubuntu</td>
      <td data-label="Base">Debian</td>
      <td data-label="Ponto Forte">Suporte amplo, drivers prontos.</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Linux Mint</td>
      <td data-label="Base">Ubuntu</td>
      <td data-label="Ponto Forte">Interface familiar (Cinnamon), estável.</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Zorin OS</td>
      <td data-label="Base">Ubuntu</td>
      <td data-label="Ponto Forte">Layout similar ao Windows.</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Distribuição">Debian Stable</td>
      <td data-label="Base">Própria</td>
      <td data-label="Ponto Forte">Estabilidade extrema, sem systemd (opcional).</td>
      <td data-label="Comando de Atualização">
        <code>sudo apt update && sudo apt full-upgrade</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>Funções.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>ls -lh</code></td>
      <td data-label="Exemplo"><code>ls -lh ~/Documentos</code></td>
      <td data-label="Função">Lista arquivos com permissões e tamanhos legíveis.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd</code></td>
      <td data-label="Exemplo"><code>cd /etc</code></td>
      <td data-label="Função">Altera para o diretório /etc</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>pwd</code></td>
      <td data-label="Exemplo"><code>pwd</code></td>
      <td data-label="Função">Mostra caminho do diretório atual.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>man</code></td>
      <td data-label="Exemplo"><code>man grep</code></td>
      <td data-label="Função">Mostra manual do comando.(pressione <kbd>q</kbd> para sair)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>clear</code></td>
      <td data-label="Exemplo"><code>clear</code></td>
      <td data-label="Função">Limpa o terminal. (<kbd>Ctrl</kbd>+<kbd>L</kbd> faz o mesmo)</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Formatos.</th>
      <th>Comandos. (Ubuntu/Debian)</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Formato">APT (repositório oficial)</td>
      <td data-label="Comando">
        <code>sudo apt install vlc</code>
        <button class="copy-btn" data-command="sudo apt install vlc">📋 Copiar</button>
      </td>
      <td data-label="Observação">Mais seguro e integrado.</td>
    </tr>
    <tr>
      <td data-label="Formato">Flatpak</td>
      <td data-label="Comando">
        <code>flatpak install flathub org.gimp.GIMP</code>
        <button class="copy-btn" data-command="flatpak install flathub org.gimp.GIMP">📋 Copiar</button>
      </td>
      <td data-label="Observação">Isolado, atualizações independentes.</td>
    </tr>
    <tr>
      <td data-label="Formato">AppImage</td>
      <td data-label="Comando">
        <code>chmod +x app.AppImage && ./app.AppImage</code>
        <button class="copy-btn" data-command="chmod +x app.AppImage && ./app.AppImage">📋 Copiar</button>
      </td>
      <td data-label="Observação">Portátil, não instala no sistema.</td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Diretório</th>
      <th>Conteúdo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Diretório"><code>/home</code></td>
      <td data-label="Conteúdo">Arquivos pessoais dos usuários.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/etc</code></td>
      <td data-label="Conteúdo">Arquivos de configuração do sistema.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/bin</code> e <code>/usr/bin</code></td>
      <td data-label="Conteúdo">Comandos essenciais e programas.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/var/log</code></td>
      <td data-label="Conteúdo">Logs do sistema.</td>
    </tr>
    <tr>
      <td data-label="Diretório"><code>/tmp</code></td>
      <td data-label="Conteúdo">Arquivos temporários. (apagados no reboot)</td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Práticas.</th>
      <th>Comandos / Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Prática">Manter sistema atualizado.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt update && sudo apt upgrade -y</code>
      </td>
    </tr>
    <tr>
      <td data-label="Prática">Habilitar firewall.</td>
      <td data-label="Comando / Ação">
        <code>sudo ufw enable</code>
        <button class="copy-btn" data-command="sudo ufw enable">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Prática">Evitar <code>sudo</code> desnecessário</td>
      <td data-label="Comando / Ação">Só use quando realmente necessário.</td>
    </tr>
    <tr>
      <td data-label="Prática">Não instalar pacotes de fontes não confiáveis</td>
      <td data-label="Comando / Ação">Prefira repositórios oficiais ou Flatpak.</td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Proprietários</th>
      <th>Alternativas Livres.</th>
      <th>Instalaçãos (Ubuntu).</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Proprietário">Microsoft Office</td>
      <td data-label="Alternativa Livre">LibreOffice</td>
      <td data-label="Instalação">
        <code>sudo apt install libreoffice</code>
        <button class="copy-btn" data-command="sudo apt install libreoffice">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Proprietário">Adobe Photoshop</td>
      <td data-label="Alternativa Livre">GIMP</td>
      <td data-label="Instalação">
        <code>sudo apt install gimp</code>
        <button class="copy-btn" data-command="sudo apt install gimp">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Proprietário">CorelDRAW</td>
      <td data-label="Alternativa Livre">Inkscape</td>
      <td data-label="Instalação">
        <code>sudo apt install inkscape</code>
        <button class="copy-btn" data-command="sudo apt install inkscape">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Proprietário">Windows Media Player</td>
      <td data-label="Alternativa Livre">VLC</td>
      <td data-label="Instalação">
        <code>sudo apt install vlc</code>
        <button class="copy-btn" data-command="sudo apt install vlc">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>



<table class="evergreen-table">
  <thead>
    <tr>
      <th>Plataformas.</th>
      <th>Links.</th>
      <th>Foco</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Plataforma">Ask Ubuntu.</td>
      <td data-label="Link"><a href="https://askubuntu.com/" target="_blank" rel="noopener noreferrer">askubuntu.com</a></td>
      <td data-label="Foco">Ubuntu e derivados.</td>
    </tr>
    <tr>
      <td data-label="Plataforma">Reddit r/linux4noobs.</td>
      <td data-label="Link"><a href="https://www.reddit.com/r/linux4noobs/" target="_blank" rel="noopener noreferrer">reddit.com/r/linux4noobs</a></td>
      <td data-label="Foco">Iniciantes, perguntas reais.</td>
    </tr>
    <tr>
      <td data-label="Plataforma">Documentação oficial.</td>
      <td data-label="Link">ex: <a href="https://linuxmint.com/documentation.php" target="_blank" rel="noopener noreferrer">linuxmint.com/docs</a></td>
      <td data-label="Foco">Guia autoritativo da distro.</td>
    </tr>
  </tbody>
</table>



    
    <table class="evergreen-table">
  <thead>
    <tr>
      <th>Categorias.</th>
      <th>Comandos.</th>
      <th>Exemplos Útil</th>
      <th>O que faz.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Categoria">Navegação.</td>
      <td data-label="Comando"><code>pwd</code></td>
      <td data-label="Exemplo Útil"><code>pwd</code></td>
      <td data-label="O que faz">Mostra o diretório atual.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Navegação.</td>
      <td data-label="Comando"><code>cd</code></td>
      <td data-label="Exemplo Útil">
        <code>cd ~/Documentos</code>
        <button class="copy-btn" data-command="cd ~/Documentos">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Entra na pasta Documentos do usuário.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Navegação</td>
      <td data-label="Comando"><code>cd ..</code></td>
      <td data-label="Exemplo Útil">
        <code>cd ..</code>
        <button class="copy-btn" data-command="cd ..">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Volta um nível no diretório.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Listagem.</td>
      <td data-label="Comando"><code>ls -lh</code></td>
      <td data-label="Exemplo Útil">
        <code>ls -lh /etc</code>
        <button class="copy-btn" data-command="ls -lh /etc">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Lista arquivos com permissões, tamanho legível (KB/MB)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Listagem.</td>
      <td data-label="Comando"><code>ls -la</code></td>
      <td data-label="Exemplo Útil">
        <code>ls -la ~/.config</code>
        <button class="copy-btn" data-command="ls -la ~/.config">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra arquivos ocultos (começam com <code>.</code>)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>touch</code></td>
      <td data-label="Exemplo Útil">
        <code>touch script.sh</code>
        <button class="copy-btn" data-command="touch script.sh">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Cria arquivo vazio ou atualiza timestamp.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>mkdir -p</code></td>
      <td data-label="Exemplo Útil">
        <code>mkdir -p Projetos/2025/web</code>
        <button class="copy-btn" data-command="mkdir -p Projetos/2025/web">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Cria diretórios aninhados.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>cp -r</code></td>
      <td data-label="Exemplo Útil">
        <code>cp -r Pasta/ Backup/</code>
        <button class="copy-btn" data-command="cp -r Pasta/ Backup/">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Copia diretório recursivamente.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>mv</code></td>
      <td data-label="Exemplo Útil">
        <code>mv antigo.txt novo.txt</code>
        <button class="copy-btn" data-command="mv antigo.txt novo.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Renomeia ou move arquivo.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Arquivos.</td>
      <td data-label="Comando"><code>rm -i</code></td>
      <td data-label="Exemplo Útil">
        <code>rm -i arquivo.txt</code>
        <button class="copy-btn" data-command="rm -i arquivo.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Remove com confirmação (seguro)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Ajuda.</td>
      <td data-label="Comando"><code>man</code></td>
      <td data-label="Exemplo Útil">
        <code>man grep</code>
        <button class="copy-btn" data-command="man grep">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra manual completo (pressione <kbd>q</kbd> para sair)</td>
    </tr>
    <tr>
      <td data-label="Categoria">Ajuda.</td>
      <td data-label="Comando"><code>--help</code></td>
      <td data-label="Exemplo Útil">
        <code>ls --help</code>
        <button class="copy-btn" data-command="ls --help">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra opções rápidas do comando.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Sistema</td>
      <td data-label="Comando"><code>uname -a</code></td>
      <td data-label="Exemplo Útil">
        <code>uname -a</code>
        <button class="copy-btn" data-command="uname -a">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra versão do kernel e arquitetura.</td>
    </tr>
    <tr>
      <td data-label="Categoria">Sistema.</td>
      <td data-label="Comando"><code>htop</code></td>
      <td data-label="Exemplo Útil">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Monitora processos em tempo real. (instale com <code>sudo apt install htop</code>)</td>
    </tr>
  </tbody>
</table>

<h3 id="avisos">Avisos Técnicos (não são "dicas")</h3>
<p>Esses comandos causam perda de dados irreversível.
Nunca os execute sem entender exatamente o que fazem. </p>
<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Comandos Perigosos.</th>
        <th>Alternativa Seguras.</th>
        <th>Avisos Técnicos.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Comando Perigoso"><code>rm -rf /.</code></td>
        <td data-label="Alternativa Segura">Nunca execute. Utilize <code>ls</code> antes de <code>rm</code>.</td>
        <td data-label="Aviso Técnico">⚠️ Mesmo com <code>--no-preserve-root</code>, apaga todo o sistema. <strong>Não há recuperação.</strong></td>
      </tr>
      <tr>
        <td data-label="Comando Perigoso"><code>rm -rf *.</code></td>
        <td data-label="Alternativa Segura"><code>rm -ri *.</code> (confirmação interativa.)</td>
        <td data-label="Aviso Técnico">⚠️ Sempre verifique com os comandos <code>pwd</code> e <code>ls</code> antes. O <code>*</code> não inclui arquivos ocultos (ex: <code>.bashrc</code>), mas ainda é perigoso.</td>
      </tr>
          </tbody>
  </table>
</div>    
    
    
    <table class="evergreen-table">
    <thead>
        <tr>
            <th>Comandos.</th>
            <th>Descrições.</th>
            <th>Exemplo de Uso.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Comando"><code>ls</code></td>
            <td data-label="Descrição">Lista arquivos e pastas no diretório atual.</td>
            <td data-label="Exemplo de Uso"><code>ls -la</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>cd</code></td>
            <td data-label="Descrição">Muda de diretório.</td>
            <td data-label="Exemplo de Uso"><code>cd /home/usuario</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>pwd</code></td>
            <td data-label="Descrição">Mostra o caminho do diretório atual.</td>
            <td data-label="Exemplo de Uso"><code>pwd</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>mkdir</code></td>
            <td data-label="Descrição">Cria um novo diretório.</td>
            <td data-label="Exemplo de Uso"><code>mkdir nova-pasta</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>rm</code></td>
            <td data-label="Descrição">Remove arquivos ou diretórios.</td>
            <td data-label="Exemplo de Uso"><code>rm arquivo.txt</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>cp</code></td>
            <td data-label="Descrição">Copia arquivos ou diretórios.</td>
            <td data-label="Exemplo de Uso"><code>cp origem.txt destino.txt</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>mv</code></td>
            <td data-label="Descrição">Move ou renomeia arquivos ou diretórios.</td>
            <td data-label="Exemplo de Uso"><code>mv antigo.txt novo.txt</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>cat</code></td>
            <td data-label="Descrição">Exibe o conteúdo de um arquivo.</td>
            <td data-label="Exemplo de Uso"><code>cat arquivo.txt</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>grep</code></td>
            <td data-label="Descrição">Busca por texto dentro de arquivos.</td>
            <td data-label="Exemplo de Uso"><code>grep "palavra" arquivo.txt</code></td>
        </tr>
        <tr>
            <td data-label="Comando"><code>man</code></td>
            <td data-label="Descrição">Mostra o manual de um comando.</td>
            <td data-label="Exemplo de Uso"><code>man ls</code></td>
        </tr>
    </tbody>
</table>


  
  <h3 id="navegacao">Navegação e Diretórios.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>O que fazer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>pwd</code></td>
      <td data-label="Exemplo"><code>pwd</code></td>
      <td data-label="O que faz">Mostra o diretório atual.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ls</code></td>
      <td data-label="Exemplo">
        <code>ls -lh</code>
        <button class="copy-btn" data-command="ls -lh">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Lista arquivos com permissões e tamanhos legíveis.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd</code></td>
      <td data-label="Exemplo">
        <code>cd ~/Documentos</code>
        <button class="copy-btn" data-command="cd ~/Documentos">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Entra no diretório Documentos do usuário.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd ..</code></td>
      <td data-label="Exemplo">
        <code>cd ..</code>
        <button class="copy-btn" data-command="cd ..">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Volta um nível no diretório.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cd -</code></td>
      <td data-label="Exemplo">
        <code>cd -</code>
        <button class="copy-btn" data-command="cd -">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Volta ao diretório anterior.</td>
    </tr>
  </tbody>
</table>

<h3 id="arquivos">Arquivos e Diretórios.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>O que fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>mkdir</code></td>
      <td data-label="Exemplo">
        <code>mkdir -p Projetos/2025</code>
        <button class="copy-btn" data-command="mkdir -p Projetos/2025">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Cria diretórios aninhados.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>touch</code></td>
      <td data-label="Exemplo">
        <code>touch script.sh</code>
        <button class="copy-btn" data-command="touch script.sh">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Cria arquivo vazio.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>cp</code></td>
      <td data-label="Exemplo">
        <code>cp -r Pasta/ Backup/</code>
        <button class="copy-btn" data-command="cp -r Pasta/ Backup/">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Copia diretório recursivamente.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>mv</code></td>
      <td data-label="Exemplo">
        <code>mv antigo.txt novo.txt</code>
        <button class="copy-btn" data-command="mv antigo.txt novo.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Renomeia ou move arquivo.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rm</code></td>
      <td data-label="Exemplo">
        <code>rm -i arquivo.txt</code>
        <button class="copy-btn" data-command="rm -i arquivo.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Remove com confirmação (seguro)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>rm -rf</code></td>
      <td data-label="Exemplo">—</td>
      <td data-label="O que faz">⚠️ Perigoso! Só use se souber exatamente o que faz.</td>
    </tr>
  </tbody>
</table>

<h3 id="visualizacao">Visualização de Arquivos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>O que fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>cat</code></td>
      <td data-label="Exemplo">
        <code>cat /etc/os-release</code>
        <button class="copy-btn" data-command="cat /etc/os-release">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra conteúdo de arquivos pequenos.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>less</code></td>
      <td data-label="Exemplo">
        <code>less /var/log/syslog</code>
        <button class="copy-btn" data-command="less /var/log/syslog">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Visualiza arquivos grandes. (pressione <kbd>q</kbd> para sair)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>head</code></td>
      <td data-label="Exemplo">
        <code>head -n 10 log.txt</code>
        <button class="copy-btn" data-command="head -n 10 log.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra as 10 primeiras linhas.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>tail -f</code></td>
      <td data-label="Exemplo">
        <code>tail -f /var/log/auth.log</code>
        <button class="copy-btn" data-command="tail -f /var/log/auth.log">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Monitora logs em tempo real.</td>
    </tr>
  </tbody>
</table>

<h3 id="processos">Processos e Sistema</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>O que fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>ps aux</code></td>
      <td data-label="Exemplo">
        <code>ps aux | grep nginx</code>
        <button class="copy-btn" data-command="ps aux | grep nginx">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Lista processos com filtro.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>htop</code></td>
      <td data-label="Exemplo">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Monitora CPU, memória e processos. (instale com <code>sudo apt install htop</code>)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>df -h</code></td>
      <td data-label="Exemplo">
        <code>df -h</code>
        <button class="copy-btn" data-command="df -h">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra uso de disco em GB/MB.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>free -h</code></td>
      <td data-label="Exemplo">
        <code>free -h</code>
        <button class="copy-btn" data-command="free -h">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra uso de memória RAM.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>uname -a</code></td>
      <td data-label="Exemplo">
        <code>uname -a</code>
        <button class="copy-btn" data-command="uname -a">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra versão do kernel e sistema.</td>
    </tr>
  </tbody>
</table>

<h3 id="rede">Rede</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>O que fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>ip a</code></td>
      <td data-label="Exemplo">
        <code>ip a</code>
        <button class="copy-btn" data-command="ip a">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra IPs das interfaces de rede.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ping</code></td>
      <td data-label="Exemplo">
        <code>ping -c 4 google.com</code>
        <button class="copy-btn" data-command="ping -c 4 google.com">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Testa conectividade. (4 pacotes)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ss -tulpn</code></td>
      <td data-label="Exemplo">
        <code>sudo ss -tulpn</code>
        <button class="copy-btn" data-command="sudo ss -tulpn">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra portas abertas e serviços.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>curl</code></td>
      <td data-label="Exemplo">
        <code>curl ifconfig.me</code>
        <button class="copy-btn" data-command="curl ifconfig.me">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra seu IP público</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>ssh</code></td>
      <td data-label="Exemplo">
        <code>ssh usuario@192.168.1.10</code>
        <button class="copy-btn" data-command="ssh usuario@192.168.1.10">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Conecta a servidor remoto.</td>
    </tr>
  </tbody>
</table>

<h3 id="texto">Manipulação de Texto</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Comandos.</th>
      <th>Exemplos.</th>
      <th>O que fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Comando"><code>grep</code></td>
      <td data-label="Exemplo">
        <code>grep "erro" /var/log/syslog</code>
        <button class="copy-btn" data-command="grep &quot;erro&quot; /var/log/syslog">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Procura palavra em arquivo.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>find</code></td>
      <td data-label="Exemplo">
        <code>find . -name "*.log"</code>
        <button class="copy-btn" data-command="find . -name &quot;*.log&quot;">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Procura arquivos .log no diretório atual.</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>awk</code></td>
      <td data-label="Exemplo">
        <code>df -h | awk 'NR>1 {print $1, $5}'</code>
        <button class="copy-btn" data-command="df -h | awk 'NR>1 {print $1, $5}'">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Mostra partição e uso (%)</td>
    </tr>
    <tr>
      <td data-label="Comando"><code>sed</code></td>
      <td data-label="Exemplo">
        <code>sed -i 's/antigo/novo/g' arquivo.txt</code>
        <button class="copy-btn" data-command="sed -i 's/antigo/novo/g' arquivo.txt">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Substitui texto em arquivo.</td>
    </tr>
  </tbody>
</table>

<h3 id="pacotes">Gerenciamento de Pacotes</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Distros.</th>
      <th>Comandos.</th>
      <th>O que fazer.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Distro">Debian/Ubuntu</td>
      <td data-label="Comando">
        <code>sudo apt install vlc</code>
        <button class="copy-btn" data-command="sudo apt install vlc">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Instala o VLC.</td>
    </tr>
    <tr>
      <td data-label="Distro">Fedora/RHEL</td>
      <td data-label="Comando">
        <code>sudo dnf install git</code>
        <button class="copy-btn" data-command="sudo dnf install git">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Instala o Git.</td>
    </tr>
    <tr>
      <td data-label="Distro">Arch Linux</td>
      <td data-label="Comando">
        <code>sudo pacman -Syu</code>
        <button class="copy-btn" data-command="sudo pacman -Syu">📋 Copiar</button>
      </td>
      <td data-label="O que faz">Atualiza todo o sistema.</td>
    </tr>
  </tbody>
</table>  
    
 <h3 id="atalhos">Atalhos e Produtividade.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas</th>
      <th>Comandos / Atalhos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Autocompletar caminho ou comando.</td>
      <td data-label="Comando / Atalho"><kbd>Tab</kbd></td>
    </tr>
    <tr>
      <td data-label="Tarefa">Buscar no histórico de comandos.</td>
      <td data-label="Comando / Atalho"><kbd>Ctrl</kbd> + <kbd>R</kbd> → digite parte do comando</td>
    </tr>
    <tr>
      <td data-label="Tarefa">Limpar tela</td>
      <td data-label="Comando / Atalho">
        <code>clear</code> ou <kbd>Ctrl</kbd> + <kbd>L</kbd>
        <button class="copy-btn" data-command="clear">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Criar alias permanente</td>
      <td data-label="Comando / Atalho">
        <code>echo "alias gs='git status'" >> ~/.bashrc && source ~/.bashrc</code>
        <button class="copy-btn" data-command="echo &quot;alias gs='git status'&quot; >> ~/.bashrc && source ~/.bashrc">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="pacotes">Gerenciamento de Pacotes</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Ações.</th>
      <th>Comandos.(Debian/Ubuntu)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ação">Atualizar sistema.</td>
      <td data-label="Comando">
        <code>sudo apt update && sudo apt full-upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade -y">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Instalar pacote.</td>
      <td data-label="Comando">
        <code>sudo apt install vim git htop</code>
        <button class="copy-btn" data-command="sudo apt install vim git htop">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Limpar dependências órfãs.</td>
      <td data-label="Comando">
        <code>sudo apt autoremove</code>
        <button class="copy-btn" data-command="sudo apt autoremove">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Ação">Instalar Flatpak.</td>
      <td data-label="Comando">
        <code>sudo apt install flatpak && flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo</code>
        <button class="copy-btn" data-command="sudo apt install flatpak && flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="rede">Redes.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Mostrar IPs locais.</td>
      <td data-label="Comando">
        <code>ip a</code>
        <button class="copy-btn" data-command="ip a">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver IP público.</td>
      <td data-label="Comando">
        <code>curl ifconfig.me</code>
        <button class="copy-btn" data-command="curl ifconfig.me">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Testar conectividade.</td>
      <td data-label="Comando">
        <code>ping -c 4 google.com</code>
        <button class="copy-btn" data-command="ping -c 4 google.com">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver portas abertas.</td>
      <td data-label="Comando">
        <code>ss -tulpn</code>
        <button class="copy-btn" data-command="ss -tulpn">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="kernel">Kernel</h3>
<div class="table-container">
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Tarefas.</th>
        <th>Comandos.</th>
        <th>Propósitos Técnicos.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Tarefa">Ver versão do kernel em execução.</td>
        <td data-label="Comando"><code>uname -r</code><br><button class="copy-btn" data-command="uname -r">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Mostra a versão exata do kernel (ex: <code>6.8.0-40-generic</code>).</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Listar todos os kernels instalados.</td>
        <td data-label="Comando"><code>ls /boot/vmlinuz-*</code><br><button class="copy-btn" data-command="ls /boot/vmlinuz-*">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Verificar se há kernels antigos para limpeza.</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar integridade do kernel (Ubuntu/Debian)</td>
        <td data-label="Comando"><code>debsums -c linux-image-$(uname -r)</code><br><button class="copy-btn" data-command="debsums -c linux-image-$(uname -r)">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Confirma se arquivos do kernel não foram alterados (requer <code>sudo apt install debsums</code>).</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar se o kernel tem suporte a módulos.</td>
        <td data-label="Comando"><code>lsmod</code><br><button class="copy-btn" data-command="lsmod">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Lista módulos carregados — se vazio, pode ser kernel monolítico ou sem suporte.</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar a existência de atualizações do núcleo do sistema.</td>
        <td data-label="Comando"><code>dpkg -l | grep 'linux-image-'</code><br><button class="copy-btn" data-command="dpkg -l | grep 'linux-image-'">📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Versão mais nova disponível nos repositórios.</td>
      </tr>
      <tr>
        <td data-label="Tarefa">Verificar assinatura do kernel (segurança)</td>
        <td data-label="Comando"><code>sudo apt-key list | grep -A1 -B1 'Ubuntu' || echo "Chave não encontrada"</code><br><button class="copy-btn" data-command='sudo apt-key list | grep -A1 -B1 "Ubuntu" || echo "Chave não encontrada"'>📋 Copiar</button></td>
        <td data-label="Propósito Técnico">Confirma se o kernel vem de fonte autêntica (Ubuntu/Debian/Devuan)</td>
      </tr>
    </tbody>
  </table>
</div>




<h3 id="sistema">Sistema e Monitoramento.</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Ver uso de disco.</td>
      <td data-label="Comando">
        <code>df -h</code>
        <button class="copy-btn" data-command="df -h">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Monitorar processos.</td>
      <td data-label="Comando">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Encontrar arquivos.</td>
      <td data-label="Comando">
        <code>find /home -name "*.txt"</code>
        <button class="copy-btn" data-command="find /home -name &quot;*.txt&quot;">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver permissões.</td>
      <td data-label="Comando">
        <code>ls -l arquivo</code>
        <button class="copy-btn" data-command="ls -l arquivo">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Mudar permissões.</td>
      <td data-label="Comando">
        <code>chmod 600 ~/.ssh/id_rsa</code>
        <button class="copy-btn" data-command="chmod 600 ~/.ssh/id_rsa">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>


<table class="evergreen-table">
  <thead>
    <tr>
      <th>Práticas.</th>
      <th>Comandos / Ações.</th>
      <th>Observações Técnicas.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Prática">Atualização do sistema.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt update && sudo apt full-upgrade -y</code>
        <button class="copy-btn" data-command="sudo apt update && sudo apt full-upgrade -y">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Execute semanalmente. Em servidores, use <code>unattended-upgrades</code> para atualizações automáticas de segurança.</td>
    </tr>
    <tr>
      <td data-label="Prática">Firewall (UFW)</td>
      <td data-label="Comando / Ação">
        <code>sudo ufw default deny incoming && sudo ufw enable</code>
        <button class="copy-btn" data-command="sudo ufw default deny incoming && sudo ufw enable">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Bloqueia todas as conexões de entrada por padrão. Permita só o necessário: <code>sudo ufw allow 22</code> (SSH).</td>
    </tr>
    <tr>
      <td data-label="Prática">Gerenciador de senhas.</td>
      <td data-label="Comando / Ação">
        <code>sudo apt install keepassxc</code> ou use <a href="https://bitwarden.com/" target="_blank">Bitwarden</a>
        <button class="copy-btn" data-command="sudo apt install keepassxc">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Nunca reutilize senhas. Utilize senhas originais de 12+ caracteres com gerador embutido.</td>
    </tr>
    <tr>
      <td data-label="Prática">Monitoramento de logs.</td>
      <td data-label="Comando / Ação">
        <code>sudo tail -f /var/log/auth.log</code> (autenticação)<br>
        <code>sudo journalctl -u ssh --since "1 hour ago"</code> (systemd)
        <button class="copy-btn" data-command="sudo tail -f /var/log/auth.log">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Logs críticos: <code>/var/log/auth.log</code> (login), <code>/var/log/syslog</code> (sistema). Em sistemas sem systemd, use <code>/var/log/messages</code>.</td>
    </tr>
    <tr>
      <td data-label="Prática">Verificação de processos suspeitos.</td>
      <td data-label="Comando / Ação">
        <code>ps aux --sort=-%cpu | head -n 10</code>
        <button class="copy-btn" data-command="ps aux --sort=-%cpu | head -n 10">📋 Copiar</button>
      </td>
      <td data-label="Observação Técnica">Lista os 10 processos que mais consomem CPU. Útil para detectar mineração ou malware.</td>
    </tr>
  </tbody>
</table>



  <h3 id="navegacao">Navegação e Arquivos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Listar arquivos com detalhes.</td>
      <td data-label="Comando">
        <code>ls -lh</code>
        <button class="copy-btn" data-command="ls -lh">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Mudar diretório.</td>
      <td data-label="Comando">
        <code>cd ~/Documentos</code>
        <button class="copy-btn" data-command="cd ~/Documentos">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Mostrar diretório atual.</td>
      <td data-label="Comando">
        <code>pwd</code>
        <button class="copy-btn" data-command="pwd">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Copiar diretório recursivamente.</td>
      <td data-label="Comando">
        <code>cp -r origem/ destino/</code>
        <button class="copy-btn" data-command="cp -r origem/ destino/">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Remover com confirmação.</td>
      <td data-label="Comando">
        <code>rm -i arquivo</code>
        <button class="copy-btn" data-command="rm -i arquivo">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Criar diretórios aninhados.</td>
      <td data-label="Comando">
        <code>mkdir -p Projetos/2025/web</code>
        <button class="copy-btn" data-command="mkdir -p Projetos/2025/web">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="busca">Busca e Filtros</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Procurar arquivo por nome.</td>
      <td data-label="Comando">
        <code>find /home -name "contrato.pdf"</code>
        <button class="copy-btn" data-command="find /home -name &quot;contrato.pdf&quot;">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Buscar texto em arquivos.</td>
      <td data-label="Comando">
        <code>grep -r "erro" /var/log/</code>
        <button class="copy-btn" data-command="grep -r &quot;erro&quot; /var/log/">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver fim de arquivo em tempo real.</td>
      <td data-label="Comando">
        <code>tail -f /var/log/syslog</code>
        <button class="copy-btn" data-command="tail -f /var/log/syslog">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Localizar arquivo rapidamente.</td>
      <td data-label="Comando">
        <code>locate contrato.pdf</code> (requer <code>sudo updatedb</code> primeiro)
        <button class="copy-btn" data-command="locate contrato.pdf">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="sistema">Sistema e Processos</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Uso de disco legível.</td>
      <td data-label="Comando">
        <code>df -h</code>
        <button class="copy-btn" data-command="df -h">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Monitorar processos interativamente.</td>
      <td data-label="Comando">
        <code>htop</code>
        <button class="copy-btn" data-command="htop">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Matar processo por nome.</td>
      <td data-label="Comando">
        <code>pkill firefox</code>
        <button class="copy-btn" data-command="pkill firefox">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Uso de memória.</td>
      <td data-label="Comando">
        <code>free -h</code>
        <button class="copy-btn" data-command="free -h">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Reiniciar sistema.</td>
      <td data-label="Comando">
        <code>sudo reboot</code>
        <button class="copy-btn" data-command="sudo reboot">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="rede">Rede</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Tarefas.</th>
      <th>Comandos.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tarefa">Mostrar IPs das interfaces.</td>
      <td data-label="Comando">
        <code>ip a</code>
        <button class="copy-btn" data-command="ip a">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Testar conectividade.</td>
      <td data-label="Comando">
        <code>ping -c 4 google.com</code>
        <button class="copy-btn" data-command="ping -c 4 google.com">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Conectar a servidor remoto.</td>
      <td data-label="Comando">
        <code>ssh usuario@192.168.1.10</code>
        <button class="copy-btn" data-command="ssh usuario@192.168.1.10">📋 Copiar</button>
      </td>
    </tr>
    <tr>
      <td data-label="Tarefa">Ver portas abertas.</td>
      <td data-label="Comando">
        <code>ss -tulpn</code>
        <button class="copy-btn" data-command="ss -tulpn">📋 Copiar</button>
      </td>
    </tr>
  </tbody>
</table>


<h3 id="rede">Compactadores.</h3>
  <table class="evergreen-table">
    <thead>
      <tr>
        <th>Aplicativo</th>
        <th>Sistema</th>
        <th>Como Acessar</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Aplicativo">PeaZip.</td>
        <td data-label="Sistema">Linux, Windows.</td>
        <td data-label="Como Acessar">Instale via .deb ou Flatpak</td>
        <td data-label="Ação">
          <button class="copy-btn" data-command="sudo apt install peazip">📋</button>
        </td>
      </tr>
      <tr>
        <td data-label="Aplicativo">File Roller.</td>
        <td data-label="Sistema">Ubuntu, Debian, GNOME.</td>
        <td data-label="Como Acessar">Clique direito → "Compactar"</td>
        <td data-label="Ação">Pré-instalado</td>
      </tr>
      <tr>
        <td data-label="Aplicativo">Ark.</td>
        <td data-label="Sistema">KDE Plasma.</td>
        <td data-label="Como Acessar">Clique direito → "Compactar com Ark"</td>
        <td data-label="Ação">Pré-instalado</td>
      </tr>
      <tr>
        <td data-label="Aplicativo">Xarchiver.</td>
        <td data-label="Sistema">XFCE, MX Linux, AntiX.</td>
        <td data-label="Como Acessar">Menu → Ferramentas → Xarchiver.</td>
        <td data-label="Ação">
          <button class="copy-btn" data-command="sudo apt install xarchiver">📋</button>
        </td>
      </tr>
    </tbody>
  </table>





<h3 id="atalhos">Atalhos Úteis</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Atalho</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Atalho"><kbd>Tab</kbd></td>
      <td data-label="Ação">Auto-completar comando ou caminho.</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Ctrl</kbd> + <kbd>C</kbd></td>
      <td data-label="Ação">Interromper processo em execução.</td>
    </tr>
    <tr>
      <td data-label="Atalho"><kbd>Ctrl</kbd> + <kbd>D</kbd></td>
      <td data-label="Ação">Fechar terminal (EOF)</td>
    </tr>
    <tr>
      <td data-label="Atalho"><code>!!</code></td>
      <td data-label="Ação">Repetir último comando: <code>sudo !!</code></td>
    </tr>
    <tr>
      <td data-label="Atalho"><code>|</code></td>
      <td data-label="Ação">Encadear comandos: <code>ls -l | grep .txt</code></td>
    </tr>
  </tbody>
</table>
   
    
     </section>




