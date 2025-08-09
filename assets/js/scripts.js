// Função para ativar o comportamento de acordeão nos dropdowns
function ativarAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentToToggle = this.nextElementSibling;
            
            // Fecha todos os outros dropdowns abertos
            document.querySelectorAll('.accordion-content').forEach(content => {
                // Se o conteúdo atual não for o do botão clicado
                if (content !== contentToToggle) {
                    content.style.display = 'none';
                    // Atualiza o atributo para acessibilidade (opcional, mas boa prática)
                    content.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });

            // Alterna a visibilidade do conteúdo do botão clicado
            const isExpanded = contentToToggle.style.display === 'block';
            contentToToggle.style.display = isExpanded ? 'none' : 'block';

            // Atualiza o atributo de acessibilidade do botão
            this.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        });
    });
}

// Quando a página estiver completamente carregada...
document.addEventListener('DOMContentLoaded', () => {
    // 1. Carrega o menu do arquivo menu.html
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            // Insere o HTML do menu na página
            document.getElementById('menu-container').innerHTML = html;
            
            // 2. Após o menu ser carregado, ativa o comportamento de acordeão
            ativarAccordion();
        })
        .catch(error => {
            console.error('Erro ao carregar o menu:', error);
        });
});
