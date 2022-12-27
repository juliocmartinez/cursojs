import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route, Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { ExternoComponent } from "./externo/externo.component";
import { HomeComponent } from "./home/home.component";

import { PeliculasComponent } from "./peliculas/peliculas.component";

const appRoutes: Routes =[
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'peliculas', component: PeliculasComponent},
    {path:'externo', component: ExternoComponent}

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)