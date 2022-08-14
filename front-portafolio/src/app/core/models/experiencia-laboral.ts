export class ExperienciaLaboral {
    id: number;
    organizacion: string;
    urlImagen: string;
    puesto : string;
    tareas : string;
    tipoJornada : string;
    fechaDesde : string;
    fechaHasta : string | null;

    constructor(id: number, organizacion: string, urlImagen: string, puesto: string, tareas: string, tipoJornada: string, fechaDesde: string, fechaHasta:string){
        this.id = id;
        this.organizacion = organizacion;
        this.urlImagen = urlImagen;
        this.puesto = puesto;
        this.tareas = tareas;
        this.tipoJornada = tipoJornada;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
    }
}
