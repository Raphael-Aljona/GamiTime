// let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {

    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconeX.style.display = "inline"

        // Esconder icone Barras
        iconeBarras.style.display = "none"

    } else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder icone X
        iconeX.style.display = "none"

        // Mostrar icone Barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}


// Forms

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("um").value
    let valorEmail = document.getElementById("dois").value
    let valorCelular = document.getElementById("tres").value

    let formsAPI = {
        nome: valorNome,
        email: valorEmail,
        celular: valorCelular
    }
    fetch ("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(formsAPI)
    })
    .then (resposta => {
        console.log (resposta)
        // Limpar os campos
        document.querySelector ("#contatos form").reset()

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })

    .catch (erro => {console.error(erro)

        console.error(erro)
        alert("Erro desconhecido")

    })

    event.preventDefault()


    }
