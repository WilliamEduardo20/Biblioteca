export function navLateral(params) {
    /Seleciona o item e add Fundo/
    const menuItem = document.querySelectorAll(".item-menu");
    
    function selecLink() {
        menuItem.forEach((item) => 
            item.classList.remove("ativo")
        );
        this.classList.add("ativo");
    }
    
    menuItem.forEach((item) => 
        item.addEventListener('click', selecLink)
    )
    
    //Expande a Barra//
    const btnExp = document.querySelector("#btn-exp");
    const menuSide = document.querySelector(".menu-lateral");
    
    btnExp.addEventListener("click", () => {
        menuSide.classList.toggle("expandir");
    });
}