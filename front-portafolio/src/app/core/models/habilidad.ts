export class Habilidad {
    id: number;
    descripcion: string;
    urlImagen: string;
    porcentaje : number;

    constructor(id: number, descripcion: string, urlImagen: string,porcentaje : number) {
        this.id = id;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.porcentaje =porcentaje;
    }
}
