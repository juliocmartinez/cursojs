import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
//Importo servicio para cargar imagen
import { UploadService } from 'src/app/services/upload.service';
import { Router, Route, Params, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-edit',
  // templateUrl: './edit.component.html',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string
  //Propiedad que modificará el formulario
  public project: Project
  public save_project: String
  public status: string
  public filesToUpload: Array<File>
  public url: string
  constructor(
    //Creamos las propiedades del servicio
    private _projectService: ProjectService,
    //Creamos las propiedades del servicio upload
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.title = 'Editar Proyecto'
    this.url = Global.url;
    this.project = new Project('', '', '', '', 2022, '', '')
  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      let id = params['id']
      this.getProject(id)
    })
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project

      },
      error => {
        console.log(<any>error);

      }
    )
  }
  onSubmit(form:any) {
    //Suscribe es un metodo que recoge lo que devuelva la api
    console.log(this.project);
    //Guardar los datos
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.projectUpdated) {    
          //Subir la imagen
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.projectUpdated._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.save_project = result.project
                this.status = 'success'
                console.log(result);
                form.reset();

              })
          }else{
            this.save_project = response.projectUpdated
            this.status = 'success'
            form.reset();

          }

        } else {
          this.status = 'failed'
        }
      },
      error => {
        console.log("Expecificación de error: ", <any>error);
      }
    )
  }
  // onSubmit(form: any) {
  //   this._projectService.updateProject(this.project).subscribe(
  //     response => {
  //       if (response.projectUpdated) {
  //         console.log(response);
          
 
  //         if (this.filesToUpload.length > 0) {
  //           // Subir la imagen
  //           this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.projectUpdated._id, [], this.filesToUpload, 'image').then((result: any) => {
  //             console.log(result);
  //             this.status = 'success';
  //             this.save_project = result.project._id;
    
  //           });
 
  //         }else{
  //           this.save_project = response.projectUpdated._id;
  //           this.status = 'success';
  //         }
       
 
  //       } else {
  //         this.status = 'failed';
  //       }
 
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

  }

}
