// fetch('https://api.nasa.gov/planetary/apod?api_key=UFhgQLNbPF3Sr3aJjJKRHCxBaLruN6JDxZPMbmhJ')
let getDatosNasa = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=UFhgQLNbPF3Sr3aJjJKRHCxBaLruN6JDxZPMbmhJ')


}
getDatosNasa()
    .then(response => response.json())
    .then(datos => {
        let datosNasa = datos

        let container = document.querySelector("#container")
        container.style.width="95%"
        container.style.margin="0px auto"

        container.style.textAlign="justify"

        // let arrayDatos = Object.values(datosNasa)
        // console.log(arrayDatos)
        let title = document.createElement("h1")
        let img = document.createElement ("img")
        let description = document.createElement ("p")
        let count = document.createElement("a")
        count.style.fontSize="10px"

        title.append(datosNasa.title)
        img.src=datosNasa.url  
        description.append(datosNasa.explanation)
        img.style.width="100%"
        count.href=datosNasa.hdurl
        count.target="_blank"
        count.append(datosNasa.hdurl)
        container.append(title)
        container.append(img)
        container.append(count)
        container.append(description)







        //    ul.append(li)





    })




