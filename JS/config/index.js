import { navLateral } from "../Funcionalidades/menus/menuL.js";
import { mudaModo } from "../Funcionalidades/modo/escuro.js";

navLateral();

mudaModo();

/Seleciona o item e add Fundo/
const menuItem = document.querySelectorAll(".sub-pagina");

function selecLink() {
    menuItem.forEach((item) => 
        item.classList.remove("ativado")
    );
    this.classList.add("ativado");
}

menuItem.forEach((item) => 
    item.addEventListener('click', selecLink)
)