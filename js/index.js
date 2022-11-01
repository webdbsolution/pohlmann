const mask = document.querySelector(".mask")
const menu = document.querySelector(".menu-oculto")
const icone = document.querySelector(".icone-menu")
const x = document.querySelector(".x")
const nav = document.querySelector(".nav-ul")

function exibirMenu(e) {
    mask.classList.add("disabled")
    menu.classList.remove("disabled")
}

function fecharMenu(e) {
    mask.classList.remove("disabled")
    menu.classList.add("disabled")
}

icone.addEventListener("click", (e) => {
    e.preventDefault()
    exibirMenu(e)
})

x.addEventListener("click", (e) => {
    e.preventDefault()
    fecharMenu(e)
})

for (link of nav.children) {
    link.addEventListener("click", (e) => {
        fecharMenu(e)
    })
}

