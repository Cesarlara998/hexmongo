import { model, Schema } from "mongoose";

const AlumnoSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true},
    nombre: {type: String},
    password: {type: String},
    registerdate: {type: String},
    birthday: {type: String, required: false}
})

const Alumno = model("Alumno", AlumnoSchema);
export default Alumno