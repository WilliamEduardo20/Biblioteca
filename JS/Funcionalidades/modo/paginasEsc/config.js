/Troca Modo Página Configurações/
export function config() {
    //Textos
    const textos = document.querySelectorAll(".texto");
    //Cor de Fundo Aba de Opções
    const options = document.querySelector(".navegar");
    //Sub-Páginas
    const pages = document.querySelectorAll(".sub-pagina");

    textos.forEach((element) => {
        element.classList.toggle("escuro");
    });

    options.classList.toggle("escuro");

    pages.forEach((element) => {
        element.classList.toggle("escuro");
    });
}