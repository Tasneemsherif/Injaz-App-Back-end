"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middelware_1 = require("../middelware");
var category_controller_1 = require("../controllers/category.controller");
var categoryRoutes = express_1.default.Router();
categoryRoutes.use(middelware_1.authenticationMiddleware);
categoryRoutes.route("/:id").get(category_controller_1.getCategoryById);
categoryRoutes.route("/").get(category_controller_1.getAllCategories);
categoryRoutes.route("/update").put(category_controller_1.updateCategory);
categoryRoutes.route("/:id").delete(category_controller_1.deleteCategory);
categoryRoutes.route("/create").post(category_controller_1.createCategory);
exports.default = categoryRoutes;
