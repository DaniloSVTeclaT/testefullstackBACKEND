"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = __importDefault(require("./user.routes"));
var tasks_routes_1 = __importDefault(require("./tasks.routes"));
var sessions_routes_1 = __importDefault(require("./sessions.routes"));
var routes = (0, express_1.Router)();
routes.use('/users', user_routes_1.default);
routes.use('/tasks', tasks_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
exports.default = routes;
