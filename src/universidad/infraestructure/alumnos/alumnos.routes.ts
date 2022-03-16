import express from "express";
import AlumnosController from "./alumnos.controller";

export default class alumnosRoutes {
    public path = "/alumnos"
    public router = express.Router();
    public controller: AlumnosController;
    constructor() {
        this.controller = new AlumnosController();
        this.router.post(`${this.path}/create`,this.controller.create)
    }
}