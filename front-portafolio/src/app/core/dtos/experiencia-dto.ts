export class ExperienciaDto {

    idPersona: number;
    organizacion: string;
    urlImagen: string;
    puesto: string;
    tareas: string;
    tipoJornada: string;
    fechaDesde: string;
    fechaHasta: string | null;

    constructor(idPersona: number, organizacion: string, urlImagen: string, puesto: string, tareas:string, tipoJornada:string, fechaDesde:string, fechaHasta:string | null) {
        this.idPersona = idPersona;
        this.organizacion = organizacion;
        this.urlImagen = urlImagen;
        this.puesto = puesto;
        this.tareas = tareas;
        this.tipoJornada = tipoJornada;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;

    }

}
