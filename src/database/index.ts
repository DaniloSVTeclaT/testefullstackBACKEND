import {createConnection} from 'typeorm'
require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ?
    "src" :
    "build";

const extensionFile = process.env.NODE_ENV === "development" ?
    "ts" :
    "js";

const config: any = {

    type: "postgres",
    //url: process.env.DATABASE_URL,
    host: process.env.HOST,
    port: process.env.PORT || 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: process.env.SYNCHRONIZE,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    entities: [
        rootDir + `/app/models/*.${extensionFile}`
    ],
    migrations: [
        rootDir + `/database/migrations/*.${extensionFile}`
    ],
    cli: {
        "migrationsDir": rootDir + "/database/migrations"
    }
};

createConnection(config).catch(error => console.log(error));