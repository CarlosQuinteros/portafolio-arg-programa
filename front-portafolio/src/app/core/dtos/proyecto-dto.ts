export class ProyectoDto {

    idPersona: number;
    nombre: string;
    descripcion: string;
    urlRepositorio: string;

    constructor(idPersona: number, nombre: string, desc: string, urlRepositorio: string) {
        this.idPersona = idPersona;
        this.nombre = nombre;
        this.descripcion = desc;
        this.urlRepositorio = urlRepositorio;
    }
}
