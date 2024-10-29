// Chama Itens Das Barras De Navegação
  // Html Barras
import { menus } from "../Funcionalidades/menus/HTML.js";
  // Barras
import { navLateral } from "../Funcionalidades/menus/menuL.js";
import { navHorizontal } from "../Funcionalidades/menus/menuH.js";
  //Modo
import { mudaModo } from "../Funcionalidades/modo/escuro.js";

// Faz As Alterações
export function alteracoes() {
    // Recupera o tipoBarra do localStorage ou define como 0 se não existir
    let tipoBarra = localStorage.getItem('tipoBarra') === '1' ? 1 : 0;

    const navBar = document.getElementById("navigation");
    const linkCss = document.getElementById("conexoes");

    let trilho = document.querySelector(".trilho");
    if (trilho) {
        trilho.addEventListener('click', () => {
            trilho.classList.toggle('clicado');
            tipoBarra = (tipoBarra === 1 ? 0 : 1);
    
            // Armazena o novo valor de tipoBarra no localStorage
            localStorage.setItem('tipoBarra', tipoBarra);
    
            // Atualiza a barra de navegação e o CSS conforme o tipoBarra
            navBar.innerHTML = menus[tipoBarra].barra;
            document.getElementById("menuCss").remove();
            linkCss.innerHTML += menus[tipoBarra].linkBarra;
    
            // Chama a função correspondente à barra selecionada
            if (tipoBarra === 1) {
                navHorizontal();
                //Atualiza Tema Da Barra//
                mudaModo();
            } else {
                navLateral();
                //Atualiza Tema Da Barra//
                mudaModo();
            }
        });
    }

    const index = document.getElementById("conexoes-index");

    // Inicializa a barra de navegação com o valor armazenado no localStorage
    navBar.innerHTML = menus[tipoBarra].barra;
    linkCss.innerHTML += menus[tipoBarra].linkBarra;

    // Chama a função correspondente à barra selecionada
    if (tipoBarra === 1) {
        navHorizontal();
    } else {
        navLateral();
    }
}