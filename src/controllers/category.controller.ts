import { Request, Response } from "express";
import Category from "../models/category-model";
import { ICategory } from "../types";
import { AuthRequest } from "../middelware";
import Task from "../models/task-model";


export const getAllCategories = async (request: AuthRequest, response: Response) => {
    try {
        const { user } = request;
        const categories = await Category.find({ user });
        return response.send(categories);
    } catch (error) {
        console.log("error in get all categories", error);
        response.send({ error: "something went wrong" });
        throw error;
    }
}

export const getCategoryById = async (request: AuthRequest, response: Response) => {
try {
    const { id } = request.params;
    const { user } = request;
    const category = await Category.findOne({ _id: id, });
    return response.send(category);
}catch (error) {
    console.log("error in get category by id", error);
    response.send({ error: "something went wrong" });
    throw error;
}}
export const createCategory = async (request: AuthRequest, response: Response) => {
    try {
        const { color, name, icon, isEditable }: ICategory = request.body; 
        const { user } = request;
        const category = await Category.create({
            color,
            name,
            icon, 
            isEditable,
            user
        });
        response.send(category);
    } catch (error) {
        console.log("error in create category", error);
        response.send({ error: "something went wrong" });
        throw error;
    }
}

export const deleteCategory = async (request: AuthRequest, response: Response) => {
try {
    const { id } = request.body;
    await Task.deleteMany({ categoryId : id });
    const category = await Category.deleteOne({ _id: id });
    response.send({ message: "category deleted successfully" }); 
} catch (error) {
    response.send({ error: "error in delete category" });
    throw error; 
}
}
export const updateCategory = async (request: AuthRequest, response: Response) => {
    try {
        const { _id, color, name, icon, isEditable}: ICategory = request.body;
        await Category.updateOne({ _id }, {
            $set: { 
                color,
                name,
                icon, 
                isEditable
            }
        })
        response.send({ message: "category updated successfully" });
    } catch (error) {
        console.log("error in update category", error);
        response.send({ error: "error in update category" });
        throw error;
    }
}