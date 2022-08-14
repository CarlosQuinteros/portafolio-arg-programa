export class HabilidadDto {
    idPersona: number;
    descripcion: string;
    urlImagen: string;
    porcentaje: number;

    constructor(idPersona: number, descripcion: string, urlImagen: string, porcentaje: number) {
        this.idPersona = idPersona;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.porcentaje = porcentaje;
    }
}
