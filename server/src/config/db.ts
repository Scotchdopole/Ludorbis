import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { Games } from "../models/Games";

const sequelize = new Sequelize({
    database: process.env.DB_NAME as string,
    dialect: process.env.DB_DIALECT as Dialect,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    models: [Games],
});

export default sequelize