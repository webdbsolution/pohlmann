const drinksMask = document.querySelector(".aromas-mask")
const drinks = document.querySelector(".drinks")
const pratos = document.querySelector(".pratos")
const xis1 = document.querySelector(".xis1")
const xis2 = document.querySelector(".xis2")
const drinksMenu = document.querySelector(".drinks-menu")
const pratosMenu = document.querySelector(".pratos-menu")

function exibeDrinks(e, menu) {
    drinksMask.classList.add("disabled")
    menu.classList.remove("disabled")
}

function fecharDrinks(e, menu) {
    menu.classList.add("disabled")
    drinksMask.classList.remove("disabled")
}

drinks.addEventListener("click", (e) => {
    exibeDrinks(e, drinksMenu)
})

pratos.addEventListener("click", (e) => {
    exibeDrinks(e, pratosMenu)
})

xis1.addEventListener("click", (e) => {
    fecharDrinks(e, drinksMenu)
})

xis2.addEventListener("click", (e) => {
    fecharDrinks(e, pratosMenu)
})