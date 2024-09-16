import { Component } from '@angular/core';
import { Boletim } from '../boletim';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'
})
export class CalculaMediaComponent {
  mediaParcial: number | undefined
  notaFinal: number | undefined
  boletim: Boletim
naf: any;

  constructor() {
    this.mediaParcial = undefined 
    this.notaFinal = undefined
    this.boletim = new Boletim(0, 0, 0, 0)
  }

  calcularMediaParcial(b1: number, 
                       b2: number, 
                       b3: number,
                       b4: number) {
      if (b1 && b2 && b3 && b4) {
        this.boletim = 
          new Boletim(b1, b2, b3, b4)
         
          this.boletim.calcularMédiaParcial();
      (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
    }
  }
  calcularMediaFinal(naf: number) { 
    if (this.mediaParcial !== undefined && this.notaFinal !== undefined) { 
      const mediaFinal = (this.mediaParcial * 0.7) + (this.notaFinal * 0.3); // Exemplo de cálculo return mediaFinal; } 
      return mediaFinal;
    }
      return undefined; 
    } 
  }

