import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/users-service'
import { SessionDataEntry, userData } from '../types';

const getUserByEmail = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const email : string = req.params.email;
        const response = await userService.getUser(email);
        
        return res.status(200).json(response)
    } catch (error) {
        next(error)
        return {}
    }
}

const createUser = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const body : userData = req.body;
        await userService.createUser(body)
        
        return res.status(201).json()
    } catch (error) {
        next(error)
        return {}
    }
}

const updateUser = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const user = req.params.email
        const body : object = req.body;
        await userService.updateUser(user, body)
        
        return res.status(204).json()
    } catch (error) {
        next(error)
        return {}
    }
}

const validateUser = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const body : SessionDataEntry = req.body;
        const response = await userService.validateUser( body)
        
        return res.status(200).json({ validateUser: response })
    } catch (error) {
        next(error)
        return {}
    }
}

export { createUser, getUserByEmail, updateUser, validateUser }
