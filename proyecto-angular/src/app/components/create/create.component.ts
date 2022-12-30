import { Component, OnInit } from '@angular/core';
//Importo modelo Project que cree
import { Project } from 'src/app/models/project';
//Importo el servicio que cree Project.service
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  //Cargo aquí el servicio que importé
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string
  //Propiedad que modificará el formulario
  public project: Project
  constructor(
    //Creamos las propiedades del servicio
    private _projectService: ProjectService
  ) {
    this.title = 'Crear Proyecto'
    //Instancia del proyecto
    //Objeto para modificar con el formulario
    this.project = new Project('', '', '', '', 2019, '', '')
  }
  ngOnInit() {

  }
  onSubmit(form: any) {
    //Suscribe es un metodo que recoge lo que devuelva la api
    console.log(this.project);

    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log("Expecificación de error: ", <any>error);
      }
    )
  }
}
