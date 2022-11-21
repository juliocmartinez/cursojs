// window.addEventListener('load', ()=>{
    let pelicula ={
        title:'Batman vs superman',
        year:2017,
        country:'USA'
    }


let peliculas = [
    {title:"La verdad duele", year:2017, country:"Francia"}, pelicula
]

let caja_peliculas = document.querySelector("#peliculas");

for(let index in peliculas){
    let parrafo = document.createElement("h2");
    parrafo.append(`${index}: ${peliculas[index].title} - ${peliculas[index].country}`)
    caja_peliculas.append(parrafo)
}