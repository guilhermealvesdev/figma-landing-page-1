const botaoMenu = document.querySelector("[data-botao-menu]");
const caixaMenuLinks = document.querySelector("[data-menu-links]");

botaoMenu.addEventListener("click", (e) => {
    e.preventDefault();
    caixaMenuLinks.classList.toggle("ativo");
});
