import {Component,Input, Inject, OnInit} from '@angular/core';
import {Equipo} from '../shared/equipo';
import {EquipoService} from '../services/equipo.service';
import {ActivatedRoute} from '@angular/router';
import {Categoria} from '../shared/categoria';
import {CategoriaService} from '../services/categoria.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  @Input()
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
    
  }
  eliminarEquipo(id: number): void {
    //const id = +this.route.snapshot.params['id'];
    this.equipoService.eliminarEquipo(id).subscribe(data => {alert('Se Elimino con Exito...!!!')});

  }
  informacionEquipo(id: number){

  }


}
