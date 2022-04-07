import Date from "../../shared/valueObjects/Date";
import String from "../../shared/valueObjects/Strings";
import ramo from "./ramo";

export default class horario {
  private _fecha: String;
  private _hora: String;
  private _aula: String;
  private _ramo: ramo;

  constructor(fecha: string, hora: string, aula: string, ramo: ramo) {
    this._fecha = new String(fecha);
    this._hora = new String(hora);
    this._aula = new String(aula);
    this._ramo = ramo;
  }

  public get ramo(): ramo {
    return this._ramo;
  }
  public set ramo(v: ramo) {
    this._ramo = v;
  }

  public get aula(): string {
    return this._aula.value;
  }
  public set aula(v: string) {
    this._aula = new String(v);
  }

  public get hora(): string {
    return this._hora.value;
  }
  public set hora(v: string) {
    this._hora = new String(v);
  }

  public get fecha(): string {
    return this._fecha.value;
  }
  public set fecha(v: string) {
    this._fecha = new String(v);
  }
}
