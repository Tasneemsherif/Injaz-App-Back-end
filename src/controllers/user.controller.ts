import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../types';
import { Types } from 'mongoose';
import User from '../models/user-model';
import bcrypt from 'bcrypt';



const getUserToken = (_id: string | Types.ObjectId ) => {
    const authenticatedUser = jwt.sign({ _id }, "express", {
        expiresIn: "7d",
    })
    return authenticatedUser
}
export const createUser = async (request: Request, response: Response) => {
    try {
        const { name, email, password } = request.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return response.status(409).send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return response.status(201).send({massage: "User created successfully"})

    } catch (error) {
        console.log("error in create user", error);
        throw error;
    }

}

export const loginUser = async (request: Request, response:Response) => {
    try {
        const {email, password}: IUser = request.body
        const existingUser = await User.findOne({email})
        if (!existingUser) {
            return response.status(409).send({massage:"User does not exist"})
        } 
       
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (isPasswordCorrect) {
            const token = getUserToken(existingUser._id)

            return  response.send({token, user: {name: existingUser.name, email:  existingUser.email},})
        } 
        else {   
            return response.status(400).send({massage: "Invalid credentials"})
        }
    } catch (error) {
        console.log('error in login user', error);
        throw (error)
    }
}
        