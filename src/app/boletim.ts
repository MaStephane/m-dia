// src/app/boletim.ts 
export class Boletim {
  calcularMédiaParcial() {
    throw new Error('Method not implemented.');
  } b1: number; 
b2: number; 
b3: number; 
b4: number; 
notaFinal: number | undefined; 

constructor(b1: number = 0, 
    b2: number = 0, 
    b3: number = 0, 
    b4: number = 0) { 
    this.b1 = b1; 
    this.b2 = b2; 
    this.b3 = b3; 
    this.b4 = b4; } 
    calcularMediaParcial(): number { 
        return (this.b1 * 2 + this.b2 * 2 + this.b3 * 3 + this.b4 * 3) / 10; } }