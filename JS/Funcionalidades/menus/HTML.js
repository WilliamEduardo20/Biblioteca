export const menus = [
    {
        barra: `<nav id="navLater" class="menu-lateral">
            <div class="btn-expandir">
                <i id="btn-exp" class="bi bi-list"></i>
            </div>
            <ul>
                <li class="item-menu">
                    <a href="./index.html">
                        <span class="icon">
                            <i class="bi bi-house-door"></i>
                        </span>
                        <span class="txt-link">Home</span>
                    </a>
                </li>
                <li class="item-menu">
                    <a id="modo">
                        <span class="icon">
                            <i class="bi bi-circle-half"></i>
                        </span>
                        <span class="txt-link">Modo</span>
                    </a>
                </li>
                <li class="item-menu">
                    <a href="#">
                        <span class="icon">
                            <i class="bi bi-envelope"></i>
                        </span>
                        <span class="txt-link">Sugestões</span>
                    </a>
                </li>
                <li class="item-menu ativo">
                    <a href="config.html">
                        <span class="icon">
                            <i class="bi bi-gear"></i>
                        </span>
                        <span class="txt-link">Configurações</span>
                    </a>
                </li>
                <li class="item-menu">
                    <a href="user.html">
                        <span class="icon">
                            <i class="bi bi-person-circle"></i>
                        </span>
                        <span class="txt-link">Conta</span>
                    </a>
                </li>
            </ul>
        </nav>`,
        linkBarra: `<link id="menuCss" rel="stylesheet" href="./Style/menus/menuL.css">`,
    },
    {
        barra: `<nav id="navHorizon" class="menu-horizontal">
            <a class="logo" href="">CodeLibrary</a>
            <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-list">
                <li class="item-menu"><a href="./index.html"><i class="bi bi-house-door"></i>Home</a></li>
                <li class="item-menu"><a id="modo"><i class="bi bi-circle-half"></i>Modo</a></li>
                <li class="item-menu"><a href="#"><i class="bi bi-envelope"></i>Sujestões</a></li>
                <li class="item-menu"><a href="./config.html"><i class="bi bi-gear"></i>Configurações</a></li>
                <li class="item-menu"><a href=""><i class="bi bi-person-circle"></i>Conta</a></li>
            </ul>
        </nav>`,
        linkBarra: `<link id="menuCss" rel="stylesheet" href="./Style/menus/menuH.css">`,
    }
];