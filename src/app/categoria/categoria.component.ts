import {Component, Inject, OnInit} from '@angular/core';
import {Categoria} from '../shared/categoria';
import {CategoriaService} from '../services/categoria.service';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  categoriaSeleccionado: number = 1;
  selectedCategoria: Categoria;
  constructor(private categoriaService: CategoriaService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
  }

  categoriaId(categoria: Categoria) {
    this.categoriaSeleccionado = categoria.id;
    this.selectedCategoria = categoria;
  }

}
