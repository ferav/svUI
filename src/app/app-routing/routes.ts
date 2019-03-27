import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import {CategoriaComponent} from '../categoria/categoria.component';
import {CatalogoComponent} from '../catalogo/catalogo.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'equipos', component: CategoriaComponent},
  { path: 'catalogo/:id', component: CatalogoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
