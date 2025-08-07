// Carrega o menu.html dinamicamente
document.addEventListener("DOMContentLoaded", () => {
  fetch("menu.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("menu-container").innerHTML = html;
      ativarAccordion();
    });
});

// Função para ativar o menu sanfonado
function ativarAccordion() {
  const buttons = document.querySelectorAll(".accordion-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Fecha todos os outros
      document.querySelectorAll(".accordion-content").forEach(el => {
        if (el !== content) el.style.display = "none";
      });

      // Alterna o atual
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
}
