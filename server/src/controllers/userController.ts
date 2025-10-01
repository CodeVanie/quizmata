import { Request, Response } from "express";
import User from "../models/User";

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getUsers controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const { username, email } = req.body;
        const newUser = new User({ username, email });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log("Error in createUser controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateUser(req: Request, res: Response) {
    res.status(200).json({message: "User updated successfully!"});
}

export async function deleteUser(req: Request, res: Response) {
    res.status(200).json({message: "User deleted successfully!"});
}