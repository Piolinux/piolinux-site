document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.accordion-title');

    titles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            
            // Fecha todos os outros menus para que apenas um fique aberto
            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.classList.remove('active');
                }
            });

            // Adiciona/remove a classe 'active' no menu clicado
            content.classList.toggle('active');
        });
    });
});
