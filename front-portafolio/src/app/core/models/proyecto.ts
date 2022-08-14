import { ImagenProyecto } from "./imagen-proyecto";

export class Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
    urlRepositorio: string;
    imagenes : ImagenProyecto[];

    constructor(id: number, nombre: string, descripcion: string, urlRepositorio: string, imagenes: ImagenProyecto[]) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlRepositorio = urlRepositorio;
        this.imagenes = imagenes;
    }
}
