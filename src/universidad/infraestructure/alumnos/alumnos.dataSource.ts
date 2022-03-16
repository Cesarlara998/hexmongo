import Ialumnos from "../../domain/alumnos.interface";
import alumnos from "../../domain/alumnos";
import AlumnoSchema from './alumnos.schema';
import Email from "../../../shared/valueObjects/Email";
export default class AlumnosDataSource implements Ialumnos {
    constructor() {
        
    }

    Create = async (alumno:alumnos) => {
        
        return await AlumnoSchema.create(alumno.Json())
            .then((res) => {
                return res
            })
            .catch((err) => {
            throw new Error(err)
        })
    }k

    find = async (email: String) => {
        
        return await AlumnoSchema.findOne({email: email})
            .then((res) => {
                return res
            })
            .catch((err) => {
            throw new Error(err)
        })
    }
    findAll = async () => {
        return await AlumnoSchema.find()
            .then((res) => {
                return res
            })
            .catch((err) => {
            throw new Error(err)
        })
    }
    update = async (alumno: alumnos) => {
        return await AlumnoSchema.findOneAndUpdate({ email: alumno.email.value }, alumno.Json)
            .then(res => {
                return res
            }).catch((err) => {
                throw new Error(err)
            })

    }

    delete = async (email: string) => {
        return await AlumnoSchema.findOneAndDelete({ email: email })
        .then(res => {
            return true
        }).catch((err) => {
            throw new Error(err)
        })
    }
}