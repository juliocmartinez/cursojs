//Interfaces

interface CamisetaBase {
    setColor(color);
    getColor();
}

//Decorador

function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
            
        }
    }
}
//Clase (molde del objeto)
@estampar("Gucci Gang")

class Camiseta implements CamisetaBase {
    //Propiedades()
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;


    }

    public setColor(color) {
        this.color = color;
    }
    public getColor() {
        return this.color
    }



}

// Clase hija

class Sudadera extends Camiseta {
    public capucha:boolean;
    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }



}
let camiseta = new Camiseta("Rojo","Corto","Nike","L",1000)
console.log(camiseta);
camiseta.estampacion();

let sudadera = new Sudadera("azul", "manga corta", "levis", "m", 200)
sudadera.setCapucha(true)
console.log(sudadera);
