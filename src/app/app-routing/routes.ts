import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import {CategoriaComponent} from '../categoria/categoria.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'equipos', component: CategoriaComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
