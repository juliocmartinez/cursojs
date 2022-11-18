window.addEventListener('load', () => {

    function intervalInicialized() {

        let tiempo = setInterval(() => {
            let encabezado = document.querySelector("h1")

            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px"
            } else {
                encabezado.style.fontSize = "50px"
            }
        }, 1000);

        return tiempo
    }

    let tiempo = intervalInicialized();

    //Stop interval
    let stop = document.querySelector("#stop");

    stop.addEventListener('click', () => {
        alert("Has parado el intervalo en bucle")
        clearInterval(tiempo)
    })

    let start = document.querySelector("#start");

    start.addEventListener('click', () => {
        alert("Has iniciado el intervalo en bucle")
        tiempo=intervalInicialized()
    })

})


// window.addEventListener('load', () => {
//     function intervalo() {
//         let tiempo = setInterval(() => {

//             let encabezado = document.querySelector("encabezado");
//             if (encabezado.style.fontSize == "50px") {
//                 encabezado.style.fontSize = "20px"
//             } else {
//                 encabezado.style.fontSize = "50px"

//             }
//         }, 1000);
//         return tiempo
//     }

//     let tiempo = intervalo()


//     let stop = document.querySelector("#stop");

//     stop.addEventListener('click', () => {
//         alert("Has parado el intervalo en bucle")
//         clearInterval(tiempo)
//     })

//     let start = document.querySelector("#start");
//     start.addEventListener('click', () => {
//         tiempo = intervalo()
//     })


// })























