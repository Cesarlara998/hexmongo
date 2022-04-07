import ramo from "./ramo";

export interface ramoI {
    
    Create(ramo: ramo): Promise<ramo>
    find(nombre: string): Promise<ramo>
    findAll(): Promise<ramo>
    update(ramo: ramo): Promise<ramo>
    delete(ramo:ramo): Promise<Boolean>
}