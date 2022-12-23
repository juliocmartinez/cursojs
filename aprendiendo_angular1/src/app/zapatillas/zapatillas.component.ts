import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public listado: string = "Listado de las zapatillas más populares";
    public zapatillas: Array<Zapatilla>
    public marcas: string[]
    public color: string
    public mi_marca: string;

    constructor() {
        this.color = "yellow"
        this.mi_marca = ""
        this.marcas = new Array()
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Rebook', 'Blanco', 80, true),
            new Zapatilla('Nike Classic', 'Nike', 'Negras', 60, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 110, false),
            new Zapatilla('Nike Jordan', 'Nike', 'Negras', 120, true),
            new Zapatilla('Fila Yezzy', 'Fila', 'Gris', 70, true)
        ]
    }
    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas()
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            this.marcas.push(zapatilla.marca)
            this.marcas = [...new Set(this.marcas)]
            console.log(index);

        })

        console.log(this.marcas)


    }
    getMarca() {
        alert(this.mi_marca)
    }
    addMarca() {
        this.marcas.push(this.mi_marca)
    }
    borrarMarca(index: number) {
        // delete this.marcas[indice]
        this.marcas.splice(index, 1)
    }
    //Salir del input
    onBlur() {
        console.log("Has salido del input");
    }
    //Mostrar lo que esta en el input luego de un enter
    mostrarPalabra() {
        alert(this.mi_marca)
    }

}