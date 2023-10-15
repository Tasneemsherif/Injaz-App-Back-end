import express from "express";
import { authenticationMiddleware } from "../middelware";
import { createCategory, getAllCategories, deleteCategory,updateCategory, getCategoryById} from "../controllers/category.controller";


const categoryRoutes = express.Router();
categoryRoutes.use(authenticationMiddleware);

categoryRoutes.route("/:id").get(getCategoryById);
categoryRoutes.route("/").get(getAllCategories);
categoryRoutes.route("/update").put(updateCategory);
categoryRoutes.route("/:id").delete(deleteCategory);
categoryRoutes.route("/create").post(createCategory);

export default categoryRoutes; 