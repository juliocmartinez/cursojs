import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatillas.service";
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public listado: string = "Listado de las zapatillas más populares";
    public marcas: string[]
    public color: string
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.color = "yellow"
        this.mi_marca = ""
        this.marcas = new Array()
        this.zapatillas = []

    }
    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas()
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