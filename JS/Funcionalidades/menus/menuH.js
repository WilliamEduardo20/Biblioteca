export function navHorizontal() {
    class MobileNavBar {
        //Define Variaveis//
        constructor(mobileMenu, navList, navLinks) {
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";

            this.handleClick = this.handleClick.bind(this); 
        }

        //Anima Links Aparecendo//
        animatedLinks(){
            this.navLinks.forEach((link, index) => {
                link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5 ease forwards 0.3s ${
                    index / 7 + 0.3
                }s`)
            });
        }

        //Faz Menu Mobile Aperecer//
        handleClick() {
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animatedLinks();
        }

        //Ativa Menu Mobile//
        addClickEvent() {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        //Faz Funcionar//
        init() {
            if (this.mobileMenu) {
                this.addClickEvent();
            }
            return this;
        }
    }

    //Define Valores Variaveis//
    const mobileNavBar = new MobileNavBar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li"
    );
    //Ativa Função//
    mobileNavBar.init();
}
