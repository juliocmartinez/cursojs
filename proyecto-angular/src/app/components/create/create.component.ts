import { Component, OnInit } from '@angular/core';
//Importo modelo Project que cree
import { Project } from 'src/app/models/project';
//Importo el servicio que cree Project.service
import { ProjectService } from 'src/app/services/project.service';
//Importo servicio para cargar imagen
import { UploadService } from 'src/app/services/upload.service';

//importamos la url api de global
import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
  public save_project;
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
    this.title = 'Crear Proyecto'
    //Instancia del proyecto
    //Objeto para modificar con el formulario
    this.project = new Project('', '', '', '', 2019, '', '')
    this.url = Global.url
  }
  ngOnInit() {

  }
  onSubmit(form){
		
		// Guardar datos básicos
		this._projectService.saveProject(this.project).subscribe(
			response => {
				if(response.project){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							this.save_project = result.project;

							this.status = 'success';
							form.reset();
						});
					}else{
						this.save_project = response.project;
						this.status = 'success';
						form.reset();
					}
					
				}else{
					this.status = 'failed';
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

  }


}
