'use strict'
window.addEventListener('load', () => {
    let boton = document.querySelector("#boton");

    boton.addEventListener("click", () => {

        let bg = boton.style.background;

        if (bg == "green") {
            boton.style.background = "red"

        } else {
            boton.style.background = "green"
        }
        return true


    })


    boton.addEventListener('mouseover', () => {
        boton.style.background = "#ccc"
    })

    boton.addEventListener('mouseout', () => {
        boton.style.background = "yellow"
    })

    let input = document.querySelector("#campo_nombre");

    //focus
    input.addEventListener('focus', () => {
        console.log("Estás haciendo focus en el input")
    })

    //Blur
    input.addEventListener('blur', () => {
        console.log("Estás fuera del input")
    })


    //Keydown
    input.addEventListener('keydown', (event) => {
        console.log("Estás pulsando una tecla " + String.fromCharCode(event.keyCode))
    })

    //Keypress
    input.addEventListener('keypress', (event) => {
        console.log("Tecla presionada " + String.fromCharCode(event.keyCode))
    })

    //keyup
    input.addEventListener('keyup', (event) => {
        console.log("Levantando dedo tecla " + String.fromCharCode(event.keyCode))
    })
})
