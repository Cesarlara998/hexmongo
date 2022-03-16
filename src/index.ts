import { config } from "dotenv";
config();
import App from "./shared/app";
import { PORT } from "./shared/config";
import DatabaseConnection from "./shared/moongoDatabase";
import alumnosRoutes from './universidad/infraestructure/alumnos/alumnos.routes'
async function init() {
    // EXTRAS

    // DATABASES
    const mongoDB = new DatabaseConnection();
    // APP
    await mongoDB.mongooseDB()
        .then(() => {
            const app = new App([new alumnosRoutes()], PORT)
            app.listen()
        
        }).catch((error) => {
            console.warn(error)
        })
    // 
}

init();