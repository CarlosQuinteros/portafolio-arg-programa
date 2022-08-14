export class ImagenProyectoDto {
    idProyecto: number;
    url: string;
    descripcion: string;

    constructor(idProyecto: number, url: string, descripcion: string) {
        this.idProyecto = idProyecto;
        this.url = url;
        this.descripcion = descripcion;
    }
}
