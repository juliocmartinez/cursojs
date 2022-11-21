// fetch('https://api.nasa.gov/planetary/apod?api_key=UFhgQLNbPF3Sr3aJjJKRHCxBaLruN6JDxZPMbmhJ')
let getDatosNasa = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=UFhgQLNbPF3Sr3aJjJKRHCxBaLruN6JDxZPMbmhJ')


}
getDatosNasa()
    .then(response => response.json())
    .then(datos => {
        let datosNasa = datos

        let container = document.querySelector("#container")

        let arrayDatos = Object.values(datosNasa)
        console.log(arrayDatos)

        arrayDatos.map((dato) => {
            let item = document.createElement("div")

            item.append(dato)
            container.append(item)
            container.style.display = "flex"
            container.style.flexWrap = "wrap"
            container.style.background = "#ccc"
            item.style.border = "1px solid black"
            item.style.width = "150px"
            item.style.height="150px"
            item.style.margin = "10px"
            item.style.fontSize = "17px"
            item.style.overflow = "hidden"




        })





        //    ul.append(li)





    })




