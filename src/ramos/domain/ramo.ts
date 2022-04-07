import Integer from "../../shared/valueObjects/Integer";
import String from "../../shared/valueObjects/Strings";
export default class ramo {
  private _nombre: String;
  private _cantidad: String;
  private _profesor: String;

  constructor(nombre: string, cantidad: string, profesor: string) {
    this._nombre = new String(nombre);
    this._cantidad = new String(cantidad);
    this._profesor = new String(profesor);
  }
  public get profesor(): string {
    return this._profesor.value;
  }
  public set profesor(v: string) {
    this._profesor = new String(v);
  }

  public get cantidad(): string {
    return this._cantidad.value;
  }
  public set cantidad(v: string) {
    this._cantidad = new String(v);
  }

  public get nombre(): string {
    return this._nombre.value;
  }
  public set nombre(v: string) {
    this._nombre = new String(v);
  }
}
