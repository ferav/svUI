import {Equipo} from './equipo';


export const EQUIPOS: Equipo[] = [
  {
    id: 1,
    modelo: '323DL',
    imagen: '/assets/images/excavadoraMediana.jpg',
    codigo: 'cat0323dl43234aefvt342',
    vendido: false,
    precio: '4.99',
    categoria: {
      id: 2,
      nombre: 'EXCAVADORAS',
      url_Categoria: 'excavadoras',
      imagen: '/assets/images/excavadora.jpg'
    }
  },
  {
    id: 1,
    modelo: '320DL',
    imagen: '/assets/images/excavadoraMediana.jpg',
    codigo: 'cat0320dl',
    vendido: false,
    precio: '4.99',
    categoria: {
      id: 2,
      nombre: 'EXCAVADORAS',
      url_Categoria: 'excavadoras',
      imagen: '/assets/images/excavadora.jpg'
    }
  }
  ];
