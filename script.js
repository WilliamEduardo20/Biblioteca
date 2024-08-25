const idsCategoria = [
    "todos",
    "design",
    "responsivo",
    "JS",
];

const links = [
    "https://www.youtube.com/shorts/b6lFlcY9Jc4",
    "https://www.youtube.com/shorts/AIs2sYfFbr0",
    "https://www.youtube.com/shorts/f8IHzLF6FCE",
    "https://www.youtube.com/shorts/4WiI9_3CFew",
    "https://www.youtube.com/shorts/qAW761FN820",
    "https://www.youtube.com/shorts/6rbaZTEDiV8",
];

const informacao = [
    {
        id: 'navBar',
        img: 'imgs/navBar.png',
        titulo: 'Barra de Navegação',
        descricao: 'Código para criar barra de navegação com animação',
        categoria: 'design',
    },
    {
        id: 'iconMenu',
        img: 'imgs/iconeMenu.png',
        titulo: 'Icone de Menu',
        descricao: 'Código para icone de menu com animação',
        categoria: 'design',
    },
    {
        id: 'boxSenha',
        img: 'imgs/boxSenha.png',
        titulo: 'Input de Senha Animação',
        descricao: 'Código para animação de revelção de senha',
        categoria: 'design',
    },
    {
        id: 'circularMenu',
        img: 'imgs/menuCircular.png',
        titulo: 'Barra de Navegação Circular',
        descricao: 'Código para criar barra circular de navegação com animação',
        categoria: 'design',
    },
    {
        id: 'card',
        img: 'imgs/card.png',
        titulo: 'Design para Cartão',
        descricao: 'Design para cartão com animação',
        categoria: 'design',
    },
    {
        id: 'responsivel',
        img: 'imgs/pagResp.png',
        titulo: 'Código para Página Responsivel',
        descricao: 'Código para página responsivel com animação',
        categoria: 'responsivo',
    },
];

// Cria os cartões de vídeo
for (const produtoVideo of informacao) {
    const cartaoVideo = `<div class="project-item ${produtoVideo.categoria}" id="${produtoVideo.id}" data-categoria="${produtoVideo.categoria || ""}">
            <img src="${produtoVideo.img}" alt="${produtoVideo.titulo}">
            <h3>${produtoVideo.titulo}</h3>
            <p>${produtoVideo.descricao}</p>
          </div>`;

    document.getElementById("project-grid").innerHTML += cartaoVideo;
}

// Adiciona eventos de clique para os cartões
for (let i = 0; i < informacao.length; i++) {
    var prj = document.getElementById(informacao[i].id);
    prj.addEventListener("click", () => {
        window.location.href = links[i];
    });
}

// Adiciona eventos de clique para as categorias
for (let i = 0; i < idsCategoria.length; i++) {
    var categoria = document.getElementById(idsCategoria[i]);
    categoria.addEventListener("click", () => {
        // Oculta todos os elementos
        document.querySelectorAll('.project-item').forEach(item => {
            item.style.display = 'none';
        });
        
        // Se a categoria "todos" for clicada, exibe todos os elementos
        if (idsCategoria[i] === "todos") {
            document.querySelectorAll('.project-item').forEach(item => {
                item.style.display = 'block';
            });
        } else {
            // Exibe apenas os elementos da categoria selecionada
            document.querySelectorAll(`.project-item.${idsCategoria[i]}`).forEach(item => {
                item.style.display = 'block';
            });
        }
    });
}