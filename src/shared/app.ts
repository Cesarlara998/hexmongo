import express from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan";

import ErrorMiddleware from "./middleware/error.middleware";

export default class App {
  public app: express.Application;
  public port: Number;

  constructor(routers, port) {
    this.app = express();
    this.port = port;

    //
    this.initializarMorgan();
    this.initializarMiddlewares();

    //

    if (routers) this.initializarRutas(routers);
    this.initializarErrorHandler();
  }
  private initializarMorgan() {
    morgan.token(`status`, (req, res) => {
      const status = (
        typeof res.headersSent !== `boolean`
          ? Boolean(res._header)
          : res.headersSent
      )
        ? res.statusCode
        : undefined;

      // get status color
      const color =
        status >= 500
          ? 31 // red
          : status >= 400
          ? 33 // yellow
          : status >= 300
          ? 36 // cyan
          : status >= 200
          ? 32 // green
          : 0; // no color
      return `\x1b[${color}m${status}\x1b[0m`;
    });
    this.app.use(morgan(":method :url :status - :response-time ms"));
  }

  private initializarMiddlewares() {
    this.app.use(bodyParser.json());
  }
  private initializarRutas(rutas) {
    rutas.forEach((element) => {
      this.app.use("/api", element.router);
    });
  }
  private initializarErrorHandler() {
    this.app.use(ErrorMiddleware);
  }


  public async listen() {
    try {
      this.app.listen(this.port, () => {
          console.log("APP ESCUCHANDO PUERTO " + this.port)
        })
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}
