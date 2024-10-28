/Chama Itens Das Barras De Navegação/
  //Html Barras
import { menus } from "../Funcionalidades/menus/HTML.js";
  //Barras
import { navLateral } from "../Funcionalidades/menus/menuL.js";
import { navHorizontal } from "../Funcionalidades/menus/menuH.js";

//Faz As Alterações//
export function alteracoes() {
    var tipoBarra = 0;

    const navBar = document.getElementById("navigation");
    const linkCss = document.getElementById("conexoes");

    let trilho = document.querySelector(".trilho");
    trilho.addEventListener('click', () => {
        trilho.classList.toggle('clicado');
        tipoBarra = (tipoBarra === 1 ? 0 : 1);

        if(tipoBarra == 1){
            navBar.innerHTML = menus[tipoBarra].barra;
            linkCss.innerHTML += menus[tipoBarra].linkBarra;
            navHorizontal();
        } else if(tipoBarra == 0) {
            navBar.innerHTML = menus[tipoBarra].barra;
            linkCss.innerHTML += menus[tipoBarra].linkBarra;
            navLateral();
        }
    });

    if(tipoBarra == 1){
        navBar.innerHTML = menus[tipoBarra].barra;
        linkCss.innerHTML += menus[tipoBarra].linkBarra;
        navHorizontal();
    } else if(tipoBarra == 0) {
        navBar.innerHTML = menus[tipoBarra].barra;
        linkCss.innerHTML += menus[tipoBarra].linkBarra;
        navLateral();
    }
}