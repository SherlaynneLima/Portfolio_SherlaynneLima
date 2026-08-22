//Dispara mensagem para o Whatsapp
function enviarWhats(event) {
            event.preventDefault()
            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5585997309008'

            const texto = `Olá! Me chamo ${nome}, ${mensagem}`
            const msgFormatada = encodeURI(texto)

            const url = `https://wa.me/${telefone}?text=${msgFormatada}`

            window.open(url, '_blank')
}

//Animação dos cards
//Fazer com que os card da tela inicial mostre a medida que o usuário role a página
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach((card, index) => {

        const posicao = card.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {

            setTimeout(() => {
                card.classList.add("mostrar");
            }, index * 200);

        }

    });

});

//Animação do perfil
//Fazer com descrição do perfil vá aparecendo ao iniciar a página
const elementosPerfil = document.querySelectorAll(
    ".sub-perfil h1, .sub-perfil h2, .sub-perfil h3, .sub-perfil a"
);
elementosPerfil.forEach((elemento, index) => {

    setTimeout(() => {

        elemento.classList.add("mostrar");

    }, index * 200);

});

//Animação das Tags
const sobre = document.querySelector(".sobre");
const tags = document.querySelectorAll(".sobre span");

window.addEventListener("scroll", () => {

    const posicao = sobre.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {

        tags.forEach((tag, index) => {

            setTimeout(() => {

                tag.classList.add("mostrar-tag");

            }, index * 150);

        });

    }

});