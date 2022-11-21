'use strict'
window.addEventListener('load', () => {
    let formulario = document.querySelector("#formpeliculas")

    formulario.addEventListener('submit', () => {
        let titulo = document.querySelector("#addpelicula").value

        if (titulo.length >= 1) {
            localStorage.setItem(titulo, titulo)
        }
    });

    let ul = document.querySelector("#peliculas_list")
    for (let i in localStorage) {
        let li = document.createElement("li");
        if (typeof localStorage[i] == 'string') {
            li.append(localStorage[i])
            ul.append(li)
        }
    }

    let formularioBorrar = document.querySelector("#formBorrarPelicula")

    formularioBorrar.addEventListener('submit', () => {
        let titulo = document.querySelector("#borrarPelicula").value

        if(titulo.length>=1){
            localStorage.removeItem(titulo)
        }
        
    });
})





