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

