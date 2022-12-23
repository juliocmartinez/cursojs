import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula";
@Component({
    selector: 'peliculas',
    templateUrl: './peliculas.component.html'
})


export class PeliculasComponente implements OnInit {
    public descripcion: string;
    public peliculas: Array<Pelicula>;
    public message:string="Las mejores peliculas del mundo";
    constructor() {
        this.descripcion = "En este componente encontrarás un listado de las peliculas mas populares";
        this.peliculas = [
            new Pelicula('Spiderman - No Way Home', '2021', 'Marbel'),
            new Pelicula('Mision imposible 2', '2000', 'Filmafinity'),
            new Pelicula('Avengers', '2019', 'Marbel')

        ]

    }

    sayMessage(){
        alert(this.message)
    }
    ngOnInit() {
        console.log("Cambio en peliculas");

    }

}
