import Email from "../../shared/valueObjects/Email";
import Password from "../../shared/valueObjects/Password";
import String from "../../shared/valueObjects/Strings";
import Date from "../../shared/valueObjects/Date";
export default class alumnos {
  _email: Email;
  _nombre: String;
  _passw: Password;
  _RegisterDate: Date;
  _Birthday: Date;

  constructor(email, nombre, password, registerdate, birthday) {
    this._email = new Email(email);
    this._nombre = new String(nombre);
    this._passw = new Password(password);
    this._RegisterDate = new Date(registerdate);
    this._Birthday = new Date(birthday);
  }

  public get email(): Email {
    return this._email;
  }
  public get nombre(): String {
    return this._nombre;
  }
  public get password(): Password {
    return this._passw;
  }
  public get registerdate(): Date {
    return this._RegisterDate;
  }
  public get birthday(): Date {
    return this._Birthday;
  }

  public set setemail(value) {
    this._email = new Email(value);
  }
  public set setnombre(value) {
    this._nombre = new String(value);
  }
  public set setpassword(value) {
    this._passw = new Password(value);
  }
  public set setregisterdate(value) {
    this._RegisterDate = new Date(value);
  }
  public set setbirthday(value) {
    this._Birthday = new Date(value);
  }

  public Json() {
    return {
      email: this.email.value,
      nombre: this.nombre.value,
      password: this.password.value,
      RegisterDate: this.registerdate.value,
      Birthday: this.birthday.value
    }
  }
}
