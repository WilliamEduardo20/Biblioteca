/Troca Modo Página Configurações/
export function config(modo) {
    //Textos
    const textos = document.querySelectorAll(".texto");
    //Cor de Fundo Aba de Opções
    const options = document.querySelector(".navegar");
    //Sub-Páginas
    const pages = document.querySelectorAll(".sub-pagina");

    if (modo == "escuro") {
        textos.forEach((element) => {
            element.classList.add("escuro");
        });
    
        options.classList.add("escuro");
    
        pages.forEach((element) => {
            element.classList.add("escuro");
        });
    } else {
        textos.forEach((element) => {
            element.classList.remove("escuro");
        });
    
        options.classList.remove("escuro");
    
        pages.forEach((element) => {
            element.classList.remove("escuro");
        });
    }
}