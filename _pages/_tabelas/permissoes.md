---
layout:  manual-seo
tabela: permissoes
permalink: /tabelas/permissoes/
title: "Permissões Linux — chmod, chown e Casos Reais"
description: "Referência prática para gerenciar permissões de arquivos e diretórios no Linux com comandos e explicações técnicas."
---



<section>


<div class="evergreen-table">
  <table class="evergreen-table">
  <thead>
    <tr>
      <th>
      
        Caso de Usos.</th>
      <th>Comandos.</th>
      <th>Permissões Octal.</th>
      <th>Explicações Técnica.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="
      
        Caso de Uso">Script executável (usuário atual)</td>
      <td data-label="Comando"><code>chmod 700 script.sh</code></td>
      <td data-label="Permissão Octal">700</td>
      <td data-label="Explicação Técnica">Só o dono pode ler, escrever e executar.</td>
    </tr>
    <tr>
      <td data-label="
      
        Caso de Uso">Script compartilhado (grupo)</td>
      <td data-label="Comando"><code>chmod 750 script.sh</code></td>
      <td data-label="Permissão Octal">750</td>
      <td data-label="Explicação Técnica">Dono: rwx | Grupo: rx | Outros: nenhum.</td>
    </tr>
    <tr>
      <td data-label="
      
        Caso de Uso">Arquivo de configuração (seguro)</td>
      <td data-label="Comando"><code>chmod 600 config.env</code></td>
      <td data-label="Permissão Octal">600</td>
      <td data-label="Explicação Técnica">Só o dono pode ler e escrever. Ideal para senhas.</td>
    </tr>
    <tr>
      <td data-label="
      
        Caso de Uso">Arquivo público (leitura geral)</td>
      <td data-label="Comando"><code>chmod 644 documento.txt</code></td>
      <td data-label="Permissão Octal">644</td>
      <td data-label="Explicação Técnica">Dono: rw | Grupo/Outros: r.</td>
    </tr>
    <tr>
      <td data-label="
      
        Caso de Uso">Diretório público (acesso a conteúdo)</td>
      <td data-label="Comando"><code>chmod 755 /var/www/html</code></td>
      <td data-label="Permissão Octal">755</td>
      <td data-label="Explicação Técnica">Execução necessária para listar conteúdo.</td>
    </tr>
    <tr>
      <td data-label="
      
        Caso de Uso">Mudar dono de arquivo</td>
      <td data-label="Comando"><code>chown usuario:grupo arquivo</code></td>
      <td data-label="Permissão Octal">—</td>
      <td data-label="Explicação Técnica">Define usuário e grupo donos do arquivo.</td>
    </tr>
    <tr>
      <td data-label="
      
        Caso de Uso">Aplicar permissão recursiva</td>
      <td data-label="Comando"><code>chmod -R 755 /pasta</code></td>
      <td data-label="Permissão Octal">755</td>
      <td data-label="Explicação Técnica">Cuidado: pode expor arquivos sensíveis.</td>
    </tr>
    <tr>
      <td data-label="
      
        Caso de Uso">Ver permissões atuais</td>
      <td data-label="Comando"><code>ls -l arquivo</code></td>
      <td data-label="Permissão Octal">—</td>
      <td data-label="Explicação Técnica">Mostra dono, grupo e permissões em formato simbólico.</td>
    </tr>
  </tbody>
</table>
</div>


</section>
