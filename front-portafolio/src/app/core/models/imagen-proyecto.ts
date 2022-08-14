export class ImagenProyecto {
    id: number;
    url: string;
    descripcion: string;

    constructor(id: number, url: string, descripcion: string) {
        this.id = id;
        this.url = url;
        this.descripcion = descripcion;
    }
}
