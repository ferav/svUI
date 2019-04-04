import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EquipoService} from '../services/equipo.service';
import {Equipo} from '../shared/equipo';
import {Imagen} from '../shared/imagen';

@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.scss']
})
export class EquipoDetalleComponent implements OnInit {

  equipo: Equipo;
  imagenes: Imagen[];
  constructor(private equipoService: EquipoService,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.equipoService.getEquipo(id).subscribe(equipo => this.equipo = equipo);
    this.equipoService.getImagenes(id).subscribe(imagenes => this.imagenes = imagenes);
    console.log(this.equipo);
  }

}
