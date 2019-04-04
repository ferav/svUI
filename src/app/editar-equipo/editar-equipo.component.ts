import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Equipo} from '../shared/equipo';
import {EquipoService} from '../services/equipo.service';
import {Imagen} from '../shared/imagen';

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.scss']
})
export class EditarEquipoComponent implements OnInit {

  equipo: Equipo = new Equipo();
  imagenB: Imagen = new Imagen();
  imagenes: Imagen[];

  selectedFile: File = null;

  constructor(private equipoService: EquipoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.equipoService.getEquipo(id).subscribe(equipo => this.equipo = equipo);
    this.equipoService.getImagenes(id).subscribe(imagenes => this.imagenes = imagenes);
  }

  onUpload(id: number): void {
    this.imagenB.equipoId = id;
    console.log(<Imagen>this.imagenB);
    this.equipoService.registrarImagen(this.imagenB)
      .subscribe(ima => {this.onUploadGaleria(ima['id']);
      window.location.replace('http://localhost:4200/editarEquipo/' + id)});
  }
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUploadGaleria(id: number): void {
    const fd = new FormData();
    fd.append('file', this.selectedFile,this.selectedFile.name);
    this.equipoService.sendImageGaleria(fd, id).subscribe(data => {alert('imagen guardado...!!!')});
  }
}
