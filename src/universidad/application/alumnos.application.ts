import alumnos from "../domain/alumnos";
import Ialumnos from "../domain/alumnos.interface";

export default class AlumnosApplication {
  private AlumnosRepository: Ialumnos;

  constructor(repositorio: Ialumnos) {
    this.AlumnosRepository = repositorio;
  }

  async crear(email, nombre, password, registro, fcumple) {
    try {
      const alumno = new alumnos(email, nombre, password, registro, fcumple);
      return this.AlumnosRepository.Create(alumno);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async findOne(email) {
    try {
      return this.AlumnosRepository.find(email);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async findAll() {
    try {
      return this.AlumnosRepository.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(email, nombre, password, registro, fcumple) {
    try {
      const alumno = await this.AlumnosRepository.find(email);
      alumno.setnombre(nombre);
      alumno.setpassword(password);
      alumno.setregisterdate(registro);
      alumno.setbirthday(fcumple);
      return this.AlumnosRepository.update(alumno);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(email) {
    try {
      return this.AlumnosRepository.delete(email);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
