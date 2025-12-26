import { Request, Response } from "express";

// Login User
const loginUser = async(_req: Request, res: Response) =>{
    res.json({mssg: 'login user'})
};

// Register User
const registerUser = async(_req: Request, res: Response)=> {
    res.json({mssg: 'register user'})
};

module.exports = { loginUser, registerUser }