import { Domicilio } from "./domicilio";

export class Persona {
    id: number;
    nombres: string;
    apellido: string;
    documento: string;
    correo: string;
    fechaNacimiento: string;
    acercaDe: string;
    urlImagen: string;
    urlCurriculum: string;
    telefono: string;
    edad: number;
    domicilio: Domicilio

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        documento: string,
        correo: string,
        fechaNacimiento: string,
        acercaDe: string,
        urlImagen: string,
        urlCurriculum: string,
        telefono: string,
        edad: number,
        domicilio: Domicilio
    ) {
        this.id = id;
        this.nombres = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento,
        this.acercaDe = acercaDe,
        this.urlImagen = urlImagen,
        this.urlCurriculum = urlCurriculum,
        this.telefono = telefono,
        this.edad = edad,
        this.domicilio = domicilio
    }
}
