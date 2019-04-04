import {Component, Inject, OnInit} from '@angular/core';
import {EquipoService} from '../services/equipo.service';
import {ActivatedRoute} from '@angular/router';
import {CategoriaService} from '../services/categoria.service';
import {Categoria} from '../shared/categoria';
import {Equipo} from '../shared/equipo';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss']
})
export class SubirImagenComponent implements OnInit {
  equipos: Equipo[];
  selectedFile: File = null;
  constructor(private equipoService: EquipoService,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.equipoService.getEquiposT().subscribe(equipos => this.equipos = equipos);
  }
  /*
  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(): void {
    const fd = new FormData();
    fd.append('file', this.selectedFile,this.selectedFile.name);
    console.log(fd);
    this.equipoService.sendImage(fd,1).subscribe(data => {alert('Se Agrego con Exito...!!!')});
  }*/

}
