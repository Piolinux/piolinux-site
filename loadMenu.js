document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const menuCloseButton = document.getElementById('menu-close-button');

    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            body.classList.add('menu-active');
        });
    }

    if (menuCloseButton) {
        menuCloseButton.addEventListener('click', () => {
            body.classList.remove('menu-active');
        });
    }
    
    const accordionTitles = document.querySelectorAll('.accordion-title');
    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            const isVisible = content.style.display === 'block';

            document.querySelectorAll('.accordion-content').forEach(otherContent => {
                otherContent.style.display = 'none';
            });
            
            content.style.display = isVisible ? 'none' : 'block';
        });
    });
});
