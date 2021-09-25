import {createConnection} from 'typeorm'
require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ?
    "src" :
    "dist";

const extensionFile = process.env.NODE_ENV === "development" ?
    "ts" :
    "js";

const config: any = {

    type: "postgres",
    url: process.env.DATABASE_URL,
    
    extra: {
        ssl: {
            require: false,
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