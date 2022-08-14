export class Domicilio {
  id: number;
  calle: string;
  numero: number;
  localidad: string;

  constructor(id: number, calle: string, numero: number, localidad: string){
    this.id = id;
    this.calle =calle,
    this.numero = numero,
    this.localidad = localidad
  }
}
