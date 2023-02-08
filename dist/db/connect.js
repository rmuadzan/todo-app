"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const kysely_1 = require("kysely");
const db = new kysely_1.Kysely({
    dialect: new kysely_1.PostgresDialect({
        pool: new pg_1.Pool({
            host: process.env.PG_HOST,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            port: parseInt(process.env.PG_PORT),
            database: process.env.PG_DATABASE
        })
    })
});
exports.default = db;
