export class EducacionDto {

    idPersona: number;
    institucion: string;
    urlImagen: string;
    titulo: string;
    fechaDesde: string;
    fechaHasta: string;

    constructor(idPersona: number, institucion: string, urlImagen: string, titulo: string, fechaDesde: string, fechaHasta: string) {
        this.idPersona = idPersona;
        this.institucion = institucion;
        this.urlImagen = urlImagen;
        this.titulo = titulo;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
    }
}
