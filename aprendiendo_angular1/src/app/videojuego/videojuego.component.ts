import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector:'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado:string;
    constructor(){
        this.titulo = "componente de videojuegos"
        this.listado = "listado de los juegos mas populares"
        // console.log("Se ha cargado el componenete: videojuegoComponente");
        
    }
    
    ngOnInit(){
        // console.log("OnInit Ejecutado");
        
    }
    ngDoCheck(){
        // console.log("DoCheck ejecutado");
        
    }
    ngOnDestroy() {
        // console.log("OnDestroy ejecutado");
        
    }

    cambiarTitulo(){
        // this.titulo="Nuevo titulo del componente"
    }
   
}