"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var db_1 = __importDefault(require("./db"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var task_routes_1 = __importDefault(require("./routes/task.routes"));
var category_routes_1 = __importDefault(require("./routes/category.routes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var Port = 1337;
(0, db_1.default)();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/users', user_routes_1.default);
app.use('/categories', category_routes_1.default);
app.use('/tasks', task_routes_1.default);
app.listen(Port, function () {
    console.log("Server started at http://localhost:".concat(Port));
});
