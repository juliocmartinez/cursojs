'use strict'
window.addEventListener('load', ()=>{
    let formulario = document.querySelector("#formulario");
    let box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none"

    formulario.addEventListener('submit', ()=>{
        console.log("Evento submit capturado")

        let nombre = document.querySelector("#nombre").value
        let apellido = document.querySelector("#apellido").value
        let edad = document.querySelector("#edad").value

        if(nombre.trim()==null || nombre.length==0){
            alert("Nombre no es válido")
            return false;
        }

        if(apellido.trim()==null || apellido.length==0){
            alert("Apellido no es válido")
            return false;
        }

        if(edad==null || edad<=0 || isNaN(edad)){
            alert("La edad no es válida")
            return false;
        }

        box_dashed.style.display="block";

        let setNombre = document.querySelector("#setNombre");
        let setApellido = document.querySelector("#setApellido");
        let setEdad = document.querySelector("#setEdad");
        setNombre.append(nombre);
        setApellido.append(apellido);
        setEdad.append(edad)

        // let datos_user = [nombre,apellido,edad]
        // for( let indice in datos_user){
        //     let parrafo = document.createElement("p")
        //     parrafo.append(datos_user[indice]) 
        //     box_dashed.append(parrafo)
     
        //   }




    })





})

