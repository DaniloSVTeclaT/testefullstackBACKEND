"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    name: "default",
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    entities: [
        "./src/models"
    ],
    migrations: [
        "./src/database/migrations/"
    ],
    cli: {
        migrationsDir: "./src/database/migrations/",
        entitiesDir: "./src/models/"
    }
});
