import { Injectable } from '@angular/core';
import {Equipo} from '../shared/equipo';
import {EQUIPOS} from '../shared/equipos';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Imagen} from '../shared/imagen';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  getEquipos(id: number): Observable<Equipo[]> {
   return <Observable<Equipo[]>>this.http.get(baseURL + 'equipos')
     .pipe(map(equipos => (<Equipo[]>equipos).filter(equipo => (equipo.categoriaId === id))));

  }
  getEquiposT(): Observable<Equipo[]> {
    return <Observable<Equipo[]>>this.http.get(baseURL + 'equipos');
  }
  getEquipo(id: number): Observable<Equipo> {
    return <Observable<Equipo>>this.http.get(baseURL + 'equipos/' + id );
  }
  getImagenes(id: number): Observable<Imagen[]>{
    return <Observable<Imagen[]>>this.http.get(baseURL + 'imagenes')
      .pipe(map(imagenes => (<Imagen[]>imagenes).filter(ima => (ima.equipoId === id))));
  }


  registrarEquipo(equipo: Equipo): Observable<Equipo> {
      return <Observable<Equipo>>this.http.post(baseURL + 'equipos', equipo);
  }

  sendImage(imagen: FormData, id: number) {
    return this.http.post(baseURL + 'equipos/' + id + '/image', imagen,{responseType: 'text'});
  }
  sendImageGaleria(imagen: FormData, id: number){
    return this.http.post(baseURL + 'imagenes/' + id + '/image', imagen,{responseType: 'text'});
  }

  eliminarEquipo(id: number){
    return this.http.delete(baseURL + 'equipos/' + id);
  }
  registrarImagen(imagen: Imagen): Observable<Imagen>
  {
    console.log(imagen)
    return <Observable<Imagen>>this.http.post(baseURL + 'imagenes', imagen);
    //return this.http.post(baseURL + '',)
  }

}
