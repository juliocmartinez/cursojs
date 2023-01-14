import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**Importamos httpclientmodule para hacer peticiones con HTTPCLIENT */
import { HttpClientModule } from '@angular/common/http';
/**Importamos FormsModule para hacer uso de los formularios */
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';
@NgModule({
 /* Declaring all the components that are going to be used in the app. */
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective
  ],
  /* The above code is importing the HttpClientModule and FormsModule. */
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    //importamos HttpClientModule y FormsModule
    HttpClientModule,
    FormsModule
  ],
  /* Telling the Angular2 framework to use the appRoutingProviders to handle the routing. */
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
