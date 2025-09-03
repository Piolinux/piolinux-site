const commands = [
    // Comandos de Compactação
    { name: "tar", description: "Cria e extrai arquivos compactados (tarball).", category: "Compactação", distro: "general" },
    { name: "gzip", description: "Comprime ou descomprime arquivos.", category: "Compactação", distro: "general" },
    { name: "zip", description: "Empacota e comprime arquivos.", category: "Compactação", distro: "general" },
    { name: "unzip", description: "Descompacta arquivos .zip.", category: "Compactação", distro: "general" },
    
    // Comandos de Gerenciamento de Arquivos
    { name: "ls", description: "Lista o conteúdo de um diretório.", category: "Arquivos", distro: "general" },
    { name: "cp", description: "Copia arquivos ou diretórios.", category: "Arquivos", distro: "general" },
    { name: "mv", description: "Move ou renomeia arquivos.", category: "Arquivos", distro: "general" },
    { name: "rm", description: "Remove arquivos ou diretórios.", category: "Arquivos", distro: "general" },
    { name: "mkdir", description: "Cria um novo diretório.", category: "Arquivos", distro: "general" },
    { name: "touch", description: "Cria um novo arquivo vazio.", category: "Arquivos", distro: "general" },

    // Comandos de Monitoramento
    { name: "top", description: "Mostra o uso do processador, memória e processos.", category: "Monitoramento", distro: "general" },
    { name: "htop", description: "Versão interativa do 'top'.", category: "Monitoramento", distro: "general" },
    { name: "free", description: "Exibe a quantidade de memória livre e usada.", category: "Monitoramento", distro: "general" },
    { name: "df", description: "Mostra o uso do disco (espaço livre).", category: "Monitoramento", distro: "general" },
    { name: "iotop", description: "Monitora o uso de I/O de disco por processos.", category: "Monitoramento", distro: "general" },

    // Gerenciadores de Pacotes (Distro-specific)
    { name: "apt", description: "Gerenciador de pacotes para Debian, Ubuntu e derivados.", category: "Gerenciamento de Pacotes", distro: "debian" },
    { name: "dpkg", description: "Ferramenta de baixo nível para pacotes .deb.", category: "Gerenciamento de Pacotes", distro: "debian" },
    { name: "dnf", description: "Gerenciador de pacotes para Fedora e Red Hat.", category: "Gerenciamento de Pacotes", distro: "fedora" },
    { name: "pacman", description: "Gerenciador de pacotes para Arch Linux.", category: "Gerenciamento de Pacotes", distro: "arch" },
    { name: "yay", description: "Ferramenta para o AUR (Arch User Repository).", category: "Gerenciamento de Pacotes", distro: "arch" }
];

function displayCommands(filterDistro = 'all', filterCategory = 'all') {
    const commandsList = document.getElementById('commandsList');
    commandsList.innerHTML = '';
    
    const filteredCommands = commands.filter(command => {
        const distroMatch = (filterDistro === 'all' || command.distro === filterDistro || command.distro === 'general');
        const categoryMatch = (filterCategory === 'all' || command.category === filterCategory);
        return distroMatch && categoryMatch;
    });

    // Agrupa os comandos por categoria para melhor visualização
    const groupedCommands = filteredCommands.reduce((acc, cmd) => {
        (acc[cmd.category] = acc[cmd.category] || []).push(cmd);
        return acc;
    }, {});
    
    for (const category in groupedCommands) {
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        commandsList.appendChild(categoryHeader);
        
        groupedCommands[category].forEach(command => {
            const commandElement = document.createElement('div');
            commandElement.className = 'command-item';
            commandElement.innerHTML = `<strong>${command.name}</strong>: ${command.description}`;
            commandsList.appendChild(commandElement);
        });
    }

    if (filteredCommands.length === 0) {
        commandsList.innerHTML = '<p>Nenhum comando encontrado para os filtros selecionados.</p>';
    }
}

function searchCommands() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const commandsList = document.getElementById('commandsList');
    commandsList.innerHTML = '';

    const filteredCommands = commands.filter(command => 
        command.name.toLowerCase().includes(filter) || 
        command.description.toLowerCase().includes(filter)
    );

    filteredCommands.forEach(command => {
        const commandElement = document.createElement('div');
        commandElement.className = 'command-item';
        commandElement.innerHTML = `<strong>${command.name}</strong>: ${command.description}`;
        commandsList.appendChild(commandElement);
    });
}

// Inicializa a página mostrando todos os comandos por padrão
window.onload = () => {
    displayCommands();
    // Adiciona os event listeners aos botões
    document.getElementById('debianBtn').addEventListener('click', () => displayCommands('debian'));
    document.getElementById('fedoraBtn').addEventListener('click', () => displayCommands('fedora'));
    document.getElementById('archBtn').addEventListener('click', () => displayCommands('arch'));
    document.getElementById('allBtn').addEventListener('click', () => displayCommands('all'));
};
