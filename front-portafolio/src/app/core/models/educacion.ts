export class Educacion {

    id: number;
    institucion : string;
    urlImagen: string;
    titulo : string;
    fechaDesde : string;
    fechaHasta : string;

    constructor(id: number, institucion: string, urlImagen: string, titulo: string, fechaDesde: string, fechaHasta: string){
        this.id = id;
        this.institucion = institucion;
        this.urlImagen = urlImagen;
        this.titulo = titulo;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
    }

}
