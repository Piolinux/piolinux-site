/// Arquivo: loadMenu.js
document.addEventListener('DOMContentLoaded', function() {
    const menuUrl = 'menu.html';
    const menuContainer = document.getElementById('menu-container');

    if (menuContainer) {
        fetch(menuUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o menu: ' + response.statusText);
                }
                return response.text();
            })
            .then(html => {
                menuContainer.innerHTML = html;
                
                // Ativa a lógica do menu sanfonado após o conteúdo ser carregado
                const accordions = document.querySelectorAll(".accordion-title");
                accordions.forEach((item) => {
                    item.addEventListener("click", () => {
                        const content = item.nextElementSibling;
                        const isVisible = content.style.display === "block";
                        
                        // Esconde todos os outros conteúdos antes de mostrar o clicado
                        document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
                        
                        content.style.display = isVisible ? "none" : "block";
                    });
                });

                // NOVO CÓDIGO: Lógica para o botão de menu responsivo
                const menuToggleButton = document.getElementById('menu-toggle-button');
                if (menuToggleButton) {
                    menuToggleButton.addEventListener('click', () => {
                        const isMenuVisible = menuContainer.style.display === 'block';
                        menuContainer.style.display = isMenuVisible ? 'none' : 'block';
                    });
                }
            })
            .catch(error => {
                console.error(error);
                menuContainer.innerHTML = '<p>Erro ao carregar o menu. Tente novamente mais tarde.</p>';
            });
    }
});
