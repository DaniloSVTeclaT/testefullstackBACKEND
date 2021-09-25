"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    type: "postgres",
    url: DB_URL,
    synchronize: false,
    logging: true,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    entities: [
        "./src/models/*ts"
    ],
    migrations: [
        "./src/database/migrations/*ts"
    ],
    cli: {
        migrationsDir: "./src/database/migrations/",
        entitiesDir: "./src/models"
    }
});
