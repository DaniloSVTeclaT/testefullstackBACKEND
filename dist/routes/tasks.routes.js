"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateTaskService_1 = __importDefault(require("../service/CreateTaskService"));
var ensureAuthenticated_1 = __importDefault(require("../middleware/ensureAuthenticated"));
var tasks_Router = (0, express_1.Router)();
tasks_Router.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, description, user_id, status, createTasks, tasks, tasksViews;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, name = _a.name, description = _a.description, user_id = _a.user_id, status = _a.status;
                createTasks = new CreateTaskService_1.default();
                return [4 /*yield*/, createTasks.execute({
                        name: name,
                        description: description,
                        user_id: user_id,
                        status: status
                    })];
            case 1:
                tasks = _b.sent();
                tasksViews = {
                    id: tasks.id,
                    order: tasks.order,
                    name: tasks.description,
                    status: tasks.status,
                    created_at: tasks.created_at,
                    updated_at: tasks.updated_at,
                };
                return [2 /*return*/, response.json(tasksViews)];
        }
    });
}); });
tasks_Router.use(ensureAuthenticated_1.default);
tasks_Router.patch('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, description, status, updateTasks, tasks, tasksViews;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                _a = request.body, name = _a.name, description = _a.description, status = _a.status;
                updateTasks = new CreateTaskService_1.default();
                return [4 /*yield*/, updateTasks.update(id, name, description, status)];
            case 1:
                tasks = _b.sent();
                tasksViews = {
                    id: tasks.id,
                    order: tasks.order,
                    name: tasks.name,
                    description: tasks.description,
                    status: tasks.status,
                    created_at: tasks.created_at,
                    updated_at: tasks.updated_at,
                };
                return [2 /*return*/, response.json(tasksViews)];
        }
    });
}); });
tasks_Router.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var viewTasks, tasks, tasksViews;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                viewTasks = new CreateTaskService_1.default();
                return [4 /*yield*/, viewTasks.getall()];
            case 1:
                tasks = _a.sent();
                tasksViews = tasks.map(function (tasks) { return ({
                    id: tasks.id,
                    order: tasks.order,
                    name: tasks.name,
                    description: tasks.description,
                    status: tasks.status,
                    created_at: tasks.created_at,
                    updated_at: tasks.updated_at,
                }); });
                return [2 /*return*/, response.json(tasksViews)];
        }
    });
}); });
tasks_Router.get('/users/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, viewTasks, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                viewTasks = new CreateTaskService_1.default();
                return [4 /*yield*/, viewTasks.taskofuser(id)];
            case 1:
                tasks = _a.sent();
                return [2 /*return*/, response.json(tasks)];
        }
    });
}); });
tasks_Router.get('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, viewTasks, tasks, tasksViews;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                viewTasks = new CreateTaskService_1.default();
                return [4 /*yield*/, viewTasks.viewone(id)];
            case 1:
                tasks = _a.sent();
                tasksViews = {
                    id: tasks.id,
                    order: tasks.order,
                    name: tasks.name,
                    description: tasks.description,
                    status: tasks.status,
                    created_at: tasks.created_at,
                    updated_at: tasks.updated_at,
                };
                return [2 /*return*/, response.json(tasksViews)];
        }
    });
}); });
tasks_Router.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteTasks, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                deleteTasks = new CreateTaskService_1.default();
                return [4 /*yield*/, deleteTasks.delete(id)];
            case 1:
                tasks = _a.sent();
                return [2 /*return*/, response.json({ message: "Disabled Tasks" })];
        }
    });
}); });
exports.default = tasks_Router;
