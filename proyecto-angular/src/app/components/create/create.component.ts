import { Component, OnInit } from '@angular/core';
//Importo modelo Project que cree
import { Project } from 'src/app/models/project';
//Importo el servicio que cree Project.service
import { ProjectService } from 'src/app/services/project.service';
//Importo servicio para cargar imagen
import { UploadService } from 'src/app/services/upload.service';

//importamos la url de global
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  //Cargo aquí los servicios que importé
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string
  //Propiedad que modificará el formulario
  public project: Project
  public status: string = ""
  public filesToUpload: Array<File> = []
  constructor(
    //Creamos las propiedades del servicio
    private _projectService: ProjectService,
    //Creamos las propiedades del servicio upload
    private _uploadService: UploadService

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
    //Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response);
        if (response.project) {

          //Subir la imagen
          this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              this.status = 'success'
              console.log(result);
              form.reset()
            })
        } else {
          this.status = 'failed'
        }
      },
      error => {
        console.log("Expecificación de error: ", <any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

  }


}
