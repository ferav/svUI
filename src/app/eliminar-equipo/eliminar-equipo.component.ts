import {Component, Inject, OnInit} from '@angular/core';
import {Categoria} from '../shared/categoria';
import {Equipo} from '../shared/equipo';
import {EquipoService} from '../services/equipo.service';
import {CategoriaService} from '../services/categoria.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eliminar-equipo',
  templateUrl: './eliminar-equipo.component.html',
  styleUrls: ['./eliminar-equipo.component.scss']
})
export class EliminarEquipoComponent implements OnInit {
  idCategoria: number;
  categorias: Categoria[];
  equipos: Equipo[];
  constructor(private equipoService: EquipoService,
              private categoriaService: CategoriaService,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
  }
  categoriaId(categoria: Categoria) {

    console.log(categoria);
    this.idCategoria = categoria.id;
    this.equipoService.getEquipos(this.idCategoria).subscribe(equipos => this.equipos = equipos);
    console.log(this.equipos);
  }
  eliminarEquipo(id: number): void {
    this.equipoService.eliminarEquipo(id).subscribe(data => {alert('Se Elimino con Exito...!!!')});
  }

}
