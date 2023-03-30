import { Injectable } from '@angular/core';
import { Disco } from '../shared/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  constructor() { }

  discos: Disco[] = [
    {
      id: 1,
      name: 'Daft Punk',
      image: './assets/images/daft_punk.webp'
    },
    {
      id: 2,
      name: 'Pink Floyd',
      image: './assets/images/pink_floyd.avif'
    },
    {
      id: 3,
      name: 'Blur',
      image: './assets/images/blur.webp'
    },
    {
      id: 4,
      name: 'U2',
      image: './assets/images/u2.jpg'
    },
    {
      id: 5,
      name: 'Nirvana',
      image: './assets/images/nirvana.jpg'
    },
    {
      id: 6,
      name: 'Lola Indigo',
      image: './assets/images/lola_indigo.avif'
    },
    {
      id: 7,
      name: 'Rosalia',
      image: './assets/images/rosalia.webp'
    }
  ]

  public actualizarDiscos(disco: Disco): void {
    this.discos.push(disco);
  }
}
