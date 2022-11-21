'use strict'

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(datos => {
        listadoUsuarios(datos)
        // console.log(usuarios)

                
        // for (let index in usuarios) {
        //     let li = document.createElement("li");
        //     li.append(`${usuarios[index].id}: ${usuarios[index].name} - ${usuarios[index].email} - ${usuarios[index].address.street}`)
        //     listusers.append(li)
        //     // itemId.append(usuarios[index].name)
        //     // console.log(usuarios[index].name);

        // }
    });

    function listadoUsuarios(usuarios){
        let itemId = document.querySelector("#itemId");
        let listusers = document.querySelector("#list_users")

        usuarios.map((datos) => {
            let li = document.createElement("li");
            let img = document.createElement('img');
            let br = document.createElement('br');
            let hr = document.createElement('hr');
            li.style.fontFamily="Trebuchet MS"
            img.src = datos.url
            img.style.width = "20px"
            li.style.marginBottom="20px"
            // listusers.append(img)
            li.append(`${datos.id}: ${datos.title}`)
            li.append(br)
            li.append(img)
            li.append(hr)

            listusers.append(li)
            // let img = document.querySelector('#img');
            // img.src=datos.url

            document.querySelector("#changeSuccess").style.display="none"

        })
    }



