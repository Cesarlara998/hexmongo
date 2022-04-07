import horario from "../domain/horario";
import ramo from "../domain/ramo";

import { ramoI } from "../domain/ramo.interface";
import { horarioI } from "../domain/horario.interface";

export default class HorarioApplication {
  ramoInterface: ramoI;
  horarioInterface: horarioI;
  constructor(ramoInterface: ramoI, horarioInterface: horarioI) {
    this.ramoInterface = ramoInterface;
    this.horarioInterface = horarioInterface;
    }
    
    async create() {
        try {
            
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
