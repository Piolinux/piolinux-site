---
title: "Apache OpenOffice — Instalação Manual no Linux Mint e Derivados"
description: "Guia técnico para instalar o Apache OpenOffice via arquivo .deb no Linux Mint, Debian, Devuan e outras distros baseadas em .deb. Inclui comandos, links oficiais e observações práticas."
date: 2025-11-02
permalink: /tabelas/openoffice-instalação-manual/
layout: manual-seo
---




<section>





<h3>Apache OpenOffice — Instalação Manual (Arquivo .deb Universal)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas.</th>
      <th>Arquivos .deb (Download)</th>
      <th>Comandos de Instalação.</th>
      <th>Observações.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/pt-br/download/" target="_blank" rel="noopener">openoffice.org/pt-br/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Baixe o pacote <code>.tar.gz</code>, extraia e instale todos os <code>.deb</code> na pasta <code>DEBS/</code>.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês (EUA)</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/download/" target="_blank" rel="noopener">openoffice.org/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Versão padrão. Inclui interface e dicionário.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanhol.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/es/download/" target="_blank" rel="noopener">openoffice.org/es/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Funciona em sistemas com locale <code>es_ES</code> ou <code>es_MX</code>.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/fr/download/" target="_blank" rel="noopener">openoffice.org/fr/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Inclui correção ortográfica e tesauro.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Alemão.</td>
      <td data-label="Arquivo .deb (Download)"><a href="https://www.openoffice.org/de/download/" target="_blank" rel="noopener">openoffice.org/de/download</a></td>
      <td data-label="Comando de Instalação"><code>sudo dpkg -i *.deb && sudo apt install -f</code></td>
      <td data-label="Observações">Compatível com normas DIN e Duden.</td>
    </tr>
  </tbody>
</table>

<h3>Instruções de Instalação — Apache OpenOffice (via .deb)</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Passo</th>
      <th>Ação</th>
      <th>Comando / Procedimento</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Passo">0</td>
      <td data-label="Ação">Remova o LibreOffice (obrigatório)</td>
      <td data-label="Comando / Procedimento"><code>sudo apt remove --purge libreoffice*</code><br><code>sudo apt autoremove</code></td>
      <td data-label="Observações">O OpenOffice e o LibreOffice não coexistem. A instalação falhará ou corromperá o sistema se ambos estiverem presentes.</td>
    </tr>
    <tr>
      <td data-label="Passo">1-</td>
      <td data-label="Ação">Acesse o link do idioma desejado.</td>
      <td data-label="Comando / Procedimento"><a href="https://www.openoffice.org/pt-br/download/" target="_blank" rel="noopener">openoffice.org/pt-br/download</a></td>
      <td data-label="Observações">Escolha a versão para Linux (arquivo .tar.gz).</td>
    </tr>
    <tr>
      <td data-label="Passo">2-</td>
      <td data-label="Ação">Baixe o arquivo.</td>
      <td data-label="Comando / Procedimento"><code>Apache_OpenOffice_4.1.14_Linux_x86-64_pt-BR.tar.gz</code></td>
      <td data-label="Observações">O nome varia conforme versão e idioma.</td>
    </tr>
    <tr>
      <td data-label="Passo">3-</td>
      <td data-label="Ação">Extraia o arquivo.</td>
      <td data-label="Comando / Procedimento"><code>tar -xzf Apache_OpenOffice_*.tar.gz</code></td>
      <td data-label="Observações">Gera uma pasta com subdiretórios <code>DEBS/</code> e <code>DEBS/dict/</code>.</td>
    </tr>
    <tr>
      <td data-label="Passo">4-</td>
      <td data-label="Ação">Instale os pacotes principais.</td>
      <td data-label="Comando / Procedimento"><code>cd DEBS/ && sudo dpkg -i *.deb</code></td>
      <td data-label="Observações">Instala a interface e funcionalidades básicas.</td>
    </tr>
    <tr>
      <td data-label="Passo">5-</td>
      <td data-label="Ação">Corrija dependências.</td>
      <td data-label="Comando / Procedimento"><code>sudo apt install -f</code></td>
      <td data-label="Observações">Resolve pacotes ausentes automaticamente.</td>
    </tr>
    <tr>
      <td data-label="Passo">6-</td>
      <td data-label="Ação">Instale dicionários (opcional)</td>
      <td data-label="Comando / Procedimento"><code>cd ../dict/ && sudo dpkg -i *.deb</code></td>
      <td data-label="Observações">Adiciona correção ortográfica no idioma escolhido.</td>
    </tr>
  </tbody>
</table>

<h3>Pacotes de Idioma para Apache OpenOffice</h3>
<table class="evergreen-table">
  <thead>
    <tr>
      <th>Idiomas</th>
      <th>Debian/Devuan</th>
      <th>Download (OpenOffice.org)</th>
      <th>Comandos (Debian/Devuan)</th>
      <th>Observações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Idioma">Português do Brasil.</td>
      <td data-label="Debian/Devuan">openoffice.org-l10n-pt-br</td>
      <td data-label="Download (OpenOffice.org)"><a href="https://www.openoffice.org/pt-br/" target="_blank" rel="noopener">openoffice.org/pt-br</a></td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install openoffice.org-l10n-pt-br</code></td>
      <td data-label="Observações">Funciona apenas com versões do OpenOffice do repositório Debian antigo (não com LibreOffice).</td>
    </tr>
    <tr>
      <td data-label="Idioma">Inglês.</td>
      <td data-label="Debian/Devuan">openoffice.org-l10n-en-us</td>
      <td data-label="Download (OpenOffice.org)"><a href="https://www.openoffice.org/" target="_blank" rel="noopener">openoffice.org</a></td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install openoffice.org-l10n-en-us</code></td>
      <td data-label="Observações">Incluído por padrão na maioria das instalações.</td>
    </tr>
    <tr>
      <td data-label="Idioma">Espanho.</td>
      <td data-label="Debian/Devuan">openoffice.org-l10n-es</td>
      <td data-label="Download (OpenOffice.org)"><a href="https://www.openoffice.org/es/" target="_blank" rel="noopener">openoffice.org/es</a></td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install openoffice.org-l10n-es</code></td>
      <td data-label="Observações">Disponível em versões antigas do Debian (ex: Wheezy, Jessie).</td>
    </tr>
    <tr>
      <td data-label="Idioma">Francês.</td>
      <td data-label="Debian/Devuan">openoffice.org-l10n-fr</td>
      <td data-label="Download (OpenOffice.org)"><a href="https://www.openoffice.org/fr/" target="_blank" rel="noopener">openoffice.org/fr</a></td>
      <td data-label="Comando (Debian/Devuan)"><code>sudo apt install openoffice.org-l10n-fr</code></td>
      <td data-label="Observações">Pacote raramente atualizado — use apenas se necessário.</td>
    </tr>
  </tbody>
</table>



</section>


