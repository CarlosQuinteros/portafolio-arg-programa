export class PersonaDto {
  nombre: string;
  apellido: string;
  documento: string;
  correo: string;
  fechaNacimiento: string;
  acercaDe: string;
  urlImagen: string;
  urlCurriculum: string;
  telefono: string;
  calle: string;
  numero: number;
  localidad: string;

  constructor(
    nombre: string,
    apellido:string,
    documento:string,
    correo:string,
    fechaNacimiento:string,
    acercaDe:string,
    urlImagen:string,
    urlCurriculum :string,
    telefono:string,
    calle:string,
    numero : number,
    localidad:string
    ){
        this.nombre = nombre;
        this.apellido =apellido;
        this.documento =documento;
        this.correo =correo;
        this.fechaNacimiento =fechaNacimiento,
        this.acercaDe =acercaDe,
        this.urlImagen =urlImagen,
        this.urlCurriculum =urlCurriculum,
        this.telefono =telefono,
        this.calle =calle,
        this.numero = numero,
        this.localidad =localidad
    }
}
