import { DB_DATABASE, DB_PASSWORD, DB_HOST, DB_PORT, DB_USER } from "./config";

export const knex = require("knex")({
  client: "mysql",
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
});
