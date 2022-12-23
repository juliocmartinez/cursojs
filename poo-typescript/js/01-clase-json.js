window.addEventListener('load',function(){
    let bicicleta = {
        color: "rojo",
        modelo: "bmx",
        frenos: "de disco",
        velocidadMax:"60km/h",
        cambiaColor: (nuevoColor)=>{
            bicicleta.color=nuevoColor
            console.log(bicicleta);
            
        }
    }
    
    bicicleta.cambiaColor("azul")
    // console.log(bicicleta);
})
