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
var typeorm_1 = require("typeorm");
var tasks_1 = __importDefault(require("../models/tasks"));
var AppError_1 = __importDefault(require("../errors/AppError"));
var CreateTasksService = /** @class */ (function () {
    function CreateTasksService() {
    }
    CreateTasksService.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description, status = _a.status, user_id = _a.user_id;
        return __awaiter(this, void 0, void 0, function () {
            var tasksRepsitory, checkTaskExist, tasks;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tasksRepsitory = (0, typeorm_1.getRepository)(tasks_1.default);
                        return [4 /*yield*/, tasksRepsitory.findOne({
                                where: { name: name }
                            })];
                    case 1:
                        checkTaskExist = _b.sent();
                        if (checkTaskExist) {
                            throw new AppError_1.default('Tasks alteready used.');
                        }
                        tasks = tasksRepsitory.create({
                            name: name,
                            description: description,
                            user_id: user_id,
                            status: status
                        });
                        return [4 /*yield*/, tasksRepsitory.save(tasks)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    CreateTasksService.prototype.viewone = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var taskssRepsitory, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskssRepsitory = (0, typeorm_1.getRepository)(tasks_1.default);
                        return [4 /*yield*/, taskssRepsitory.findOne({
                                where: { id: id }
                            })];
                    case 1:
                        tasks = _a.sent();
                        if (!tasks) {
                            throw new AppError_1.default('Email address alteready used.');
                        }
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    CreateTasksService.prototype.taskofuser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var taskssRepsitory, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskssRepsitory = (0, typeorm_1.getRepository)(tasks_1.default);
                        return [4 /*yield*/, taskssRepsitory.createQueryBuilder()
                                .select()
                                .where({ user_id: id }).getMany()];
                    case 1:
                        tasks = _a.sent();
                        if (!tasks) {
                            throw new AppError_1.default('Email address alteready used.');
                        }
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    CreateTasksService.prototype.getall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var taskssall, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(tasks_1.default)];
                    case 1:
                        taskssall = _a.sent();
                        return [4 /*yield*/, taskssall.find()];
                    case 2:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    CreateTasksService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getConnection)()
                            .createQueryBuilder()
                            .delete()
                            .from(tasks_1.default)
                            .where("id = :id", { id: id })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTasksService.prototype.update = function (id, name, description, status) {
        return __awaiter(this, void 0, void 0, function () {
            var repositoryUser, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repositoryUser = (0, typeorm_1.getRepository)(tasks_1.default);
                        return [4 /*yield*/, repositoryUser.findOne({ where: { id: String(id) } })];
                    case 1:
                        tasks = _a.sent();
                        if (!tasks) {
                            throw new AppError_1.default('User not found.', 404);
                        }
                        tasks.name = name, tasks.status = status, tasks.description = description;
                        return [4 /*yield*/, repositoryUser.save(tasks)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    return CreateTasksService;
}());
exports.default = CreateTasksService;
