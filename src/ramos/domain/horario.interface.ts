import horario from "./horario"

export interface horarioI {
    Create(horario: horario): Promise<horario>
    find(name: string): Promise<horario>
    findAll(): Promise<horario>
    update(horario: horario): Promise<horario>
    delete(horario: horario): Promise<Boolean>
    

}