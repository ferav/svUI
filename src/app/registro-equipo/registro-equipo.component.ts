import {Component, Inject, OnInit} from '@angular/core';
import {Equipo} from '../shared/equipo';
import {EquipoService} from '../services/equipo.service';
import {CategoriaService} from '../services/categoria.service';
import {Categoria} from '../shared/categoria';
import {Imagen} from '../shared/imagen';

@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.scss']
})
export class RegistroEquipoComponent implements OnInit {
  categorias: Categoria[];
  selectedFile: File = null;
  equipo: Equipo;
  equipoBuscado: Equipo;
  selectedEquipo: Equipo = new Equipo() ;

  constructor(private equipoService: EquipoService,
              private categoriaService: CategoriaService,
              @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);

  }
  onSubmit() {
    this.selectedEquipo.vendido = true;
    console.log(this.selectedEquipo);
    this.equipoService.registrarEquipo(this.selectedEquipo)
      .subscribe(equipo => {console.log(equipo['id']);
          this.onUpload(equipo['id']);});
    this.selectedEquipo = new Equipo();
  }

  categoriaSeleccionado(categoria : Categoria)
  {
    this.selectedEquipo.categoriaId = categoria.id;
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(id: number): void {
    const fd = new FormData();
    fd.append('file', this.selectedFile,this.selectedFile.name);
    this.equipoService.sendImage(fd, id).subscribe(data => {alert('imagen guardado...!!!')});
  }

}
