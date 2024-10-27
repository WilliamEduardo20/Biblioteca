/Trocar Escuro/
import { config } from "./paginasEsc/config.js";
export function mudaModo() {
    //Define variáveis//
    const pagina = document.getElementsByTagName("body")[0];
      //Menu Lateral
    const navElement = document.querySelector(".menu-lateral");
    const navElements = document.querySelectorAll(".item-menu");
      //Menu Horizontal
    const navHorizon = document.querySelector(".menu-horizontal");
    const navList = document.querySelector(".nav-list");

    //Abas
    const configurar = document.getElementById("configurar");

    //Define pagina para Escuro//
    function modoEscuro(){
        pagina.style.backgroundColor = "black";
        if (navElement) {
            navElement.classList.add("escuro");
            navElements.forEach((element) => {
                element.classList.add("escuro");
            });
        } else if (navHorizon) {
            navHorizon.classList.add("escuro");
            navList.classList.add("escuro");
        }
        
        if(configurar){
            config("escuro");
        }
    }
    
    //Define pagina para Claro//
    function modoClaro() {
        pagina.style.backgroundColor = "white";
        if (navElement) {
            navElement.classList.remove("escuro");
            navElements.forEach((element) => {
                element.classList.remove("escuro");
            });
        } else if (navHorizon) {
            navHorizon.classList.remove("escuro");
            navList.classList.remove("escuro");
        }

        if(configurar){
            config("claro");
        }
    }

    //Inicia o modo Selecionado//
    (localStorage.getItem("modoEscuro") === "false" ? modoEscuro() : modoClaro());

    //Troca Modo//
    document.getElementById("modo").addEventListener("click", () => {
        (localStorage.getItem("modoEscuro") === "false" ? localStorage.setItem("modoEscuro", "true") : localStorage.setItem("modoEscuro", "false"));
        (localStorage.getItem("modoEscuro") === "false" ? modoEscuro() : modoClaro());
    });
}