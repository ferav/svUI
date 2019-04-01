import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import {CategoriaComponent} from '../categoria/categoria.component';
import {CatalogoComponent} from '../catalogo/catalogo.component';
import {RegistroEquipoComponent} from '../registro-equipo/registro-equipo.component';
import {SubirImagenComponent} from '../subir-imagen/subir-imagen.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'registro',  component: RegistroEquipoComponent },
  { path: 'equipos', component: CategoriaComponent},
  { path: 'catalogo/:id', component: CatalogoComponent},
  { path: 'subirImagen',  component: SubirImagenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
