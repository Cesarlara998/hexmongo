import { Request, Response, NextFunction } from "express";
import Ialumnos from "../../domain/alumnos.interface";
import AlumnosDataSource from "./alumnos.dataSource";
import alumnos from "../../domain/alumnos";
import AlumnosApplication from "../../application/alumnos.application";
export default class AlumnosController {
    private Datasource: AlumnosDataSource;
    private AlumnosApp: AlumnosApplication;
    private  AlumnosInterface: Ialumnos;
    constructor() {
        this.Datasource = new AlumnosDataSource();
        this.AlumnosApp = new AlumnosApplication(this.Datasource);
    }

    create = async (request: Request, response: Response,next: NextFunction) => {
        try {
            const { email, nombre, password, registerdate, birthday } = request.body;
            const alumno = await this.AlumnosApp.crear(email, nombre, password, registerdate, birthday);
            return this.Datasource.Create(alumno);
        } catch (error) {
            return next(error);
        }
    }
}