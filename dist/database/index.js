"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    name: "default",
    type: "postgres",
    url:  "postgres://hzmnexneamkmhj:8554010eba235f2934740bfcfe3332d167b499aa9e6754bd16eba6a816bcab45@ec2-3-220-214-162.compute-1.amazonaws.com:5432/danlnpamj081ec",
    synchronize: false,
    logging: true,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    entities: [
        "./dist/models"
    ],
    migrations: [
        "./src/database/migrations/"
    ],
    cli: {
        migrationsDir: "./dist/database/migrations/",
        entitiesDir: "./dist/models"
    }
});
