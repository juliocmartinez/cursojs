import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>
    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Rebook', 'Blanco', 80, true),
            new Zapatilla('Nike Classic', 'Nike', 'Negras', 60, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 110, false),
            new Zapatilla('Nike Jordan', 'Nike', 'Negras', 120, true),
            new Zapatilla('Fila Yezzy', 'Fila', 'Gris', 70, true)
        ]
    }

    getTexto(){
        return "Hola mundo desde un servicio"
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}