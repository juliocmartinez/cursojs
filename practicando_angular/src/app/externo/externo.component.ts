import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.services';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;

  constructor(
    private _peticionesService: PeticionesServices
  ) {
    this.userId = 1;

  }

  ngOnInit() {
    this.cargarUsuario()   

  }

  cargarUsuario() {
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data
        console.log(this.user)
        
      },
      error => {
        console.log(<any>error);

      }

    )
  }




}
