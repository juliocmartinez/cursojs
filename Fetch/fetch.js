
let getUsuarios = () => {
    return fetch("https://reqres.in/api/users")

}
let getJanet = () => {
    return fetch("https://reqres.in/api/users/2")

}

getUsuarios()
    .then((response) => response.json())
    .then((datos) => {
        let usuarios = datos.data
        listadoUsuarios(usuarios)
        return getJanet()

    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data)
    })

let mostrarJanet = (user)=>{
    let janet = document.querySelector("#janet")
    let nombre = document.createElement("h2")
    let avatar = document.createElement("img")
    nombre.append(user.first_name)
    avatar.src=user.avatar
    janet.append(nombre)
    janet.append(avatar)

    // console.log(user.first_name)
}


// getJanet()
//     .then((response) => response.json())
//     .then((users) => {
//         let user = document.querySelector("#janet")
//         user.append(users.data.first_name)
//     }


let listadoUsuarios = (usuarios) => {
    let list_users = document.querySelector("#list_users");

    usuarios.map((lista) => {
        let li = document.createElement('li');
        li.append(lista.first_name);
        list_users.append(li)
    })

    document.querySelector("#changeSuccess").style.display = "none"
}