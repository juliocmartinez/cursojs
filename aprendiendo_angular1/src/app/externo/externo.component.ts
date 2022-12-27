import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userId:any;
  public fecha:any;
  public new_user:any;
  public usuario_guardado:any;
  constructor(
    private _peticionesService:PeticionesService
  ){
    this.userId=1
    this.new_user = {
      "name": "",
      "job": ""
  }
  }

  ngOnInit() {
    this.fecha=new Date(2019,5,20);
    this.cargarUsuario()

  }

  cargarUsuario(){
    this.user=false
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{this.user = result.data    
        console.log(this.user)
      },
      error =>{
        console.log(<any>error);
        
      }

    )
  }
  onSubmit(form:any){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        this.usuario_guardado=response
            
        form.reset()
        
      },
      error => {
        console.log(error);
        
      }
    )

  }


}
