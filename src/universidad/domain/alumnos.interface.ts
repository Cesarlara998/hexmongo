import alumnos from "./alumnos";

export default interface Ialumnos {
    Create(alumno: alumnos): Promise<alumnos>;
    find(email: string): Promise<alumnos>;
    findAll(): Promise<alumnos[]>;
    update(alumno: alumnos): Promise<alumnos>;
    delete(email: string): Promise<Boolean>
}