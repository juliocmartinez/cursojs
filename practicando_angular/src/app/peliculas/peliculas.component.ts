import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public peliculas: Array<Pelicula>
  public nombre_peli: any;
  public nombre_peliculas: any;
  public pelisNoRepeat:any;
  constructor() {
    this.peliculas = [
      new Pelicula("Avengers", "2022", "Marbel"),
      new Pelicula("Destino final 3", "2022", "History Production"),
      new Pelicula("Avengers", "2022", "Marbel"),


    ]


    this.nombre_peli = ""

    this.nombre_peliculas = this.peliculas.map((name) => name.name)

  }

  ngOnInit() {
    console.log(this.peliculas);
  }

  addNombrePeli() {
    this.nombre_peliculas.push(this.nombre_peli)
    this.pelisNoRepeat = [...new Set(this.nombre_peliculas)]
    
  }




}
