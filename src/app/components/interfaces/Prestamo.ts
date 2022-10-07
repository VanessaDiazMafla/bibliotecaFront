export interface Prestamo{

    id_usuario:number; //signo ? significa un dato opcional - no obligatorio
    isbn:string;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
    disponibilidad:string;
}