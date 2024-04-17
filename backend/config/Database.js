import { Sequelize } from "sequelize";

const db = new Sequelize('biodata','root', 'Kekei0308', {
    host: "localhost",
    dialect: "mysql"
});

export default db;