import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import {CategoriaComponent} from '../categoria/categoria.component';
import {CatalogoComponent} from '../catalogo/catalogo.component';
import {RegistroEquipoComponent} from '../registro-equipo/registro-equipo.component';
import {SubirImagenComponent} from '../subir-imagen/subir-imagen.component';
import {EditarEquipoComponent} from '../editar-equipo/editar-equipo.component';
import {EliminarEquipoComponent} from '../eliminar-equipo/eliminar-equipo.component';
import {EquipoDetalleComponent} from '../equipo-detalle/equipo-detalle.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'registro',  component: RegistroEquipoComponent },
  { path: 'equipos', component: CategoriaComponent},
  { path: 'editarEquipo/:id', component: EditarEquipoComponent},
  { path: 'detalleEquipo/:id', component: EquipoDetalleComponent},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'subirImagen',  component: SubirImagenComponent },
  { path: 'eliminarEquipo',  component: EliminarEquipoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
