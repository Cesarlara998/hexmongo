import { ramoI } from "../domain/ramo.interface";
import ramo from "../domain/ramo";

export default class RamoApplication {
  private ramoRepo: ramoI;
  constructor(ramoInterface: ramoI) {
    this.ramoRepo = ramoInterface;
  }

  async crear(nombre, cantidad, profesor) {
    const Ramo = new ramo(nombre, cantidad, profesor);
    try {
      return await this.ramoRepo.Create(Ramo);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async find(nombre) {
    try {
      return await this.ramoRepo.find(nombre);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll() {
    try {
      return await this.ramoRepo.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(nameOld, nameNew, cantidad, profesor) {
    try {
      const Ramo = new ramo(nameNew, cantidad, profesor);
      const Ramofinder = await this.ramoRepo.find(nameOld);
      Ramofinder.nombre = Ramo.nombre;
      Ramofinder.cantidad = Ramo.cantidad;
      Ramofinder.profesor = Ramo.profesor;
      return await this.ramoRepo.update(Ramofinder);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(nombre) {
    try {
      const Ramofinder = await this.ramoRepo.find(nombre);

      return await this.ramoRepo.delete(Ramofinder);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
