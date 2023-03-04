export enum nivel{
    "Info",
    "Urgente",
    "Bloqueante"
}

export interface ITarea{
    titulo: string,
    description?:string,
    completado: boolean,
    urgencia?: nivel,
    resumen:()=> string

}

export interface I2{
    titulo: string,
    description?:string,
    completado: boolean,
    urgencia?: nivel,
    resumen:()=> string

}
