let calificaciones = [{nombre: "Julio", nota: 3 },
{ nombre: "Angel", nota: 3.1 },
{ nombre: "Juan", nota: 2.96 },
{ nombre: "Jose", nota: 3.2 },
{ nombre: "Kevin", nota: 4.8 },
{ nombre: "Camilo", nota: 3.8 },
{ nombre: "David", nota: 1.6 },
{ nombre: "Esteban", nota: 2.74 }

]
let contador = 0
let aprobados = document.getElementById("aprobados");
let desaprobados = document.getElementById("desaprobados");

let textA=`<ul>`
let textD = `<ul>`
calificaciones.find((algo) => {

  if (algo.nota >= 3) {
    textA+= `<li>${algo.nombre}: ${algo.nota}</li>`
    contador++
  }else if(algo.nota<3){
    textD +=`<li>${algo.nombre}: ${algo.nota}</li>`

  }
})
textA+=`</ul>`
textD+=`</ul>`

aprobados.innerHTML= textA
desaprobados.innerHTML=textD

console.log(`Los estudiantes que aprobaron fueron: ${contador}`)





// class Calificacion{
//   constructor(nombre, nota){
//     this.nombre=nombre;
//     this.nota = nota;
//   }
//   toString(){
//     return `(${this.nombre},${this.nota} )`
//   }
  
// }

// let nota1  = new Calificacion("Julio", 4.3)
// let nota2  = new Calificacion("Karen", 3.2)
// let nota3  = new Calificacion("Andy", 4.8)
// let nota4  = new Calificacion("Carmelo", 2.3)


// let calificaciones =[nota1, nota2, nota3, nota4]
// console.log("Aprobados")
// calificaciones.find((algo)=>{
//  if(algo.nota>3){
//    co
nsole.log(`${algo.nombre}: ${algo.nota}`)
//     }