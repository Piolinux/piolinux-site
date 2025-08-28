---
layout: default
title: "Memory Card de Linux com 50 Comandos"
description: "Revise 50 comandos essenciais do Linux com este memory card interativo."
keywords: "linux, memory card, flashcard, comandos linux, tux, terminal, devops, sysadmin"
date: 2025-08-28 15:00:00 -0300
author: "PioLinux"
---

<main style="margin: 0; padding: 0;">
  <div id="container" style="
    max-width: 960px;
    margin: 0 auto;
    padding: 30px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.7;
    color: #333;
    transition: background 0.3s, color 0.3s;
  ">

    <!-- Título -->
    <h2 style="text-align: center; color: #2c3e50;">🧠 Memory Card de Linux</h2>
    <p style="text-align: center; font-size: 1.1em; color: #555;">
      Revise <strong>50 comandos essenciais</strong> do Linux.<br>
      Clique no card para virar. Use os botões para navegar.
    </p>

    <!-- SVG do Tux -->
    <div style="text-align: center; margin: 20px 0; opacity: 0.8;">
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="70" r="40" fill="#000" />
        <circle cx="60" cy="40" r="28" fill="#000" />
        <circle cx="52" cy="35" r="6" fill="#fff" />
        <circle cx="52" cy="35" r="3" fill="#000" />
        <circle cx="68" cy="35" r="6" fill="#fff" />
        <circle cx="68" cy="35" r="3" fill="#000" />
        <polygon points="60,45 55,52 65,52" fill="#ff9900" />
        <ellipse cx="60" cy="70" rx="25" ry="30" fill="#fff" />
        <ellipse cx="40" cy="80" rx="18" ry="8" fill="#000" transform="rotate(-30 40 80)" />
        <ellipse cx="80" cy="80" rx="18" ry="8" fill="#000" transform="rotate(30 80 80)" />
        <ellipse cx="50" cy="105" rx="10" ry="6" fill="#ff9900" />
        <ellipse cx="70" cy="105" rx="10" ry="6" fill="#ff9900" />
      </svg>
    </div>

    <!-- Botões -->
    <div style="text-align: center; margin: 20px 0;">
      <button id="prevBtn" style="
        margin: 0 6px;
        padding: 10px 16px;
        background: #555;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9em;
      ">⬅️ Anterior</button>
      <button id="nextBtn" style="
        margin: 0 6px;
        padding: 10px 16px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9em;
      ">Próximo ➡️</button>
      <button id="shuffleBtn" style="
        margin: 0 6px;
        padding: 10px 16px;
        background: #27ae60;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9em;
      ">🔄 Embaralhar</button>
      <button id="themeToggle" style="
        margin: 0 6px;
        padding: 10px 16px;
        background: #9b59b6;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9em;
      ">🌙 Tema Escuro</button>
    </div>

    <!-- Contador -->
    <p style="text-align: center; font-size: 0.95em; color: #777;" id="counter">
      Card <strong>1</strong> de <span id="total">50</span>
    </p>

    <!-- Flashcard -->
    <div style="display: flex; justify-content: center; margin: 40px 0;">
      <div id="flashcard" style="
        width: 80%;
        max-width: 500px;
        min-height: 180px;
        padding: 25px;
        background: #f8f9fa;
        color: #2c3e50;
        border-radius: 12px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1.2em;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.4s ease;
      ">
        Clique para começar
      </div>
    </div>

    <!-- Dica -->
    <div style="max-width: 600px; margin: 0 auto; font-size: 0.95em; color: #666; text-align: center;">
      <p><strong>💡 Dica:</strong> Use para revisar antes de entrevistas, certificações ou no dia a dia. Embaralhe para evitar decorar a ordem!</p>
    </div>

  </div>
</main>

<script>
  // Banco de 50 flashcards
  const flashcards = [
    { q: "Como listar arquivos ocultos?", a: "ls -la" },
    { q: "Como ver uso de disco legível?", a: "df -h" },
    { q: "Como ver uso de memória?", a: "free -h" },
    { q: "Como atualizar pacotes no Ubuntu?", a: "sudo apt update" },
    { q: "Como instalar um pacote no Debian/Ubuntu?", a: "sudo apt install nome" },
    { q: "Como remover um pacote no Fedora?", a: "sudo dnf remove nome" },
    { q: "Como atualizar todo o sistema no Arch?", a: "sudo pacman -Syu" },
    { q: "Como instalar um pacote do AUR com yay?", a: "yay -S nome" },
    { q: "Como limpar cache de pacotes no DNF?", a: "sudo dnf clean all" },
    { q: "Como procurar um pacote no zypper?", a: "zypper search nome" },
    { q: "Como ver informações do kernel?", a: "uname -a" },
    { q: "Como ver o tempo de atividade do sistema?", a: "uptime" },
    { q: "Como mudar o fuso horário?", a: "timedatectl set-timezone Zona" },
    { q: "Como reiniciar o sistema?", a: "sudo reboot" },
    { q: "Como desligar imediatamente?", a: "sudo poweroff" },
    { q: "Como copiar um diretório inteiro?", a: "cp -r origem destino" },
    { q: "Como mover ou renomear um arquivo?", a: "mv antigo novo" },
    { q: "Como remover um diretório com tudo?", a: "rm -rf pasta/" },
    { q: "Como criar um link simbólico?", a: "ln -s /caminho/real link" },
    { q: "Como procurar por nome de arquivo?", a: "find / -name 'arquivo.txt'" },
    { q: "Como procurar por conteúdo em arquivos?", a: "grep 'texto' *.log" },
    { q: "Como mudar permissões para 755?", a: "chmod 755 arquivo.sh" },
    { q: "Como mudar o dono de um arquivo?", a: "chown usuario:grupo arquivo" },
    { q: "Como ver IPs e interfaces de rede?", a: "ip a" },
    { q: "Como testar conexão com ping?", a: "ping -c 4 google.com" },
    { q: "Como ver o IP público?", a: "curl ifconfig.me" },
    { q: "Como baixar um arquivo da web?", a: "wget url" },
    { q: "Como fazer download com curl?", a: "curl -O url" },
    { q: "Como ver portas abertas?", a: "ss -tulnp" },
    { q: "Como conectar via SSH?", a: "ssh usuario@ip" },
    { q: "Como copiar arquivo via SSH?", a: "scp arquivo user@host:/destino" },
    { q: "Como criar um novo usuário?", a: "sudo useradd -m nome" },
    { q: "Como definir senha de um usuário?", a: "sudo passwd nome" },
    { q: "Como adicionar usuário ao grupo sudo?", a: "sudo usermod -aG sudo nome" },
    { q: "Como ver seu usuário atual?", a: "whoami" },
    { q: "Como trocar de usuário?", a: "su - nome" },
    { q: "Como listar todos os processos?", a: "ps aux" },
    { q: "Como monitorar em tempo real?", a: "top ou htop" },
    { q: "Como matar um processo por PID?", a: "kill 1234" },
    { q: "Como matar por nome?", a: "pkill nome" },
    { q: "Como ver logs de um serviço?", a: "journalctl -u nome" },
    { q: "Como criar um .tar.gz?", a: "tar -czvf arquivo.tar.gz pasta/" },
    { q: "Como extrair um .tar.gz?", a: "tar -xzvf arquivo.tar.gz" },
    { q: "Como compactar com zip?", a: "zip -r arquivo.zip pasta/" },
    { q: "Como extrair com unzip?", a: "unzip arquivo.zip" },
    { q: "Como repetir o último comando?", a: "!!" },
    { q: "Como corrigir um comando errado?", a: "^errado^certo^" },
    { q: "Como buscar no histórico do terminal?", a: "Ctrl + R" },
    { q: "Como criar um atalho (alias)?", a: "alias ll='ls -la'" },
    { q: "Como ver o histórico de comandos?", a: "history" },
    { q: "Como agendar tarefas com cron?", a: "crontab -e" },
    { q: "Como ver o caminho atual?", a: "pwd" },
    { q: "Como voltar ao diretório anterior?", a: "cd -" }
  ];

  // Elementos
  const container = document.getElementById('container');
  const card = document.getElementById('flashcard');
  const counter = document.getElementById('counter');
  const totalSpan = document.getElementById('total');
  const themeToggle = document.getElementById('themeToggle');

  let currentIndex = 0;
  let showingAnswer = false;

  // Atualiza o card
  function updateCard() {
    card.textContent = showingAnswer ? flashcards[currentIndex].a : flashcards[currentIndex].q;
    counter.innerHTML = `Card <strong>${currentIndex + 1}</strong> de <span id="total">${flashcards.length}</span>`;
  }

  // Tema escuro
  function setTheme(dark) {
    if (dark) {
      container.style.backgroundColor = '#121212';
      container.style.color = '#e0e0e0';
      card.style.backgroundColor = '#1e1e1e';
      card.style.color = '#ffffff';
      themeToggle.textContent = '☀️ Modo Claro';
    } else {
      container.style.backgroundColor = '#ffffff';
      container.style.color = '#333';
      card.style.backgroundColor = '#f8f9fa';
      card.style.color = '#2c3e50';
      themeToggle.textContent = '🌙 Tema Escuro';
    }
  }

  // Carregar tema salvo
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  setTheme(isDark);

  // Alternar tema
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  });

  // Virar card
  card.addEventListener('click', () => {
    showingAnswer = !showingAnswer;
    card.style.transform = 'scale(0.98)';
    setTimeout(() => card.style.transform = 'scale(1)', 150);
    updateCard();
  });

  // Navegação
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingAnswer = false;
    updateCard();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingAnswer = false;
    updateCard();
  });

  // Embaralhar
  document.getElementById('shuffleBtn').addEventListener('click', () => {
    for (let i = flashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    currentIndex = 0;
    showingAnswer = false;
    updateCard();
  });

  // Inicializar
  totalSpan.textContent = flashcards.length;
  updateCard();
</script>

