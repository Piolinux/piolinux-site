// Arquivo: loadMenu.js
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
                        
                        document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
                        
                        content.style.display = isVisible ? "none" : "block";
                    });
                });
            })
            .catch(error => {
                console.error(error);
                menuContainer.innerHTML = '<p>Erro ao carregar o menu. Tente novamente mais tarde.</p>';
            });
    }
});

