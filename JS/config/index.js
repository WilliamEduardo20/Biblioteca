import { mudaModo } from "../Funcionalidades/modo/escuro.js";
import { alteracoes } from "./alteracao.js";

//Ajusta De Acordo Com As Configurações//
alteracoes();

//Funcionamento Barra//

//Muda Modo//
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