// let listColores = [
//     {azul:"blue"},
//     {rojo:"red"},
//     {verde:"green"}
// ]



// let colores = (color)=>{
//     color = prompt("Ingresa un color y mira el cambio: ", "red");
//     return color
// }

// var caja = document.getElementById("micaja");
// let changeColor=document.getElementById("changeColor");
// changeColor.style.color = colores();
// console.log(caja);

let allDivs = document.getElementsByTagName("div");

for (let valor in allDivs) {
    if (typeof allDivs[valor].textContent == 'string') {

        let parrafo = document.createElement('p');
        let texto = document.createTextNode(allDivs[valor].textContent)

        parrafo.appendChild(texto)

        document.querySelector("section").appendChild(parrafo)
        // console.log(allDivs[valor].textContent)

    }
}
function altoPantalla(){
    return window.innerHeight
}

function anchoPantalla(){
    return window.innerWidth
}

