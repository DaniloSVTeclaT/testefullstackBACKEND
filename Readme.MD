
import {createConnection} from 'typeorm'
require("dotenv").config();

const rootDir = process.env.NODE_ENV === "development" ?
    "src" :
    "dist";

const extensionFile = process.env.NODE_ENV === "development" ?
    "ts" :
    "js";
console.log(">>>>>>>>>>>>>>>>>>>>"+extensionFile)    
const config: any = {

    type: "postgres",
    url: process.env.DATABASE_URL,
    
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


{
    "type":"postgres",
    "url":  "postgres://hzmnexneamkmhj:8554010eba235f2934740bfcfe3332d167b499aa9e6754bd16eba6a816bcab45@ec2-3-220-214-162.compute-1.amazonaws.com:5432/danlnpamj081ec",
    "synchronize": false,
    "logging": true,
    "extra":{
        "ssl":{
            "require":true,
            "rejectUnauthorized":false
        }
        
    },
    "entities":[
        "./src/models/*ts"
    ],
    "migrations":[
        "./src/database/migrations/*ts"
    ],
    "cli":{
        "migrationsDir":[
            "./src/database/migrations/"
        ],
        "entitiesDir":"./src/models"
        
    }
}

