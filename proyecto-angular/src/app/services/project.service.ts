import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Project } from '../models/project'
import { Global } from './global'
@Injectable()
export class ProjectService {
    public url: string
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url

    }

    testService(){
        return 'Probando el servicio de Angular'
    }

    //Guardar project en la base de datos de mongoDB

    saveProject(project:Project):Observable<any>{
        let params = JSON.stringify(project)
        //Como se envía la inforamcion en format cabecera
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.post(this.url+'save-project', params, {headers:headers})
    }
}