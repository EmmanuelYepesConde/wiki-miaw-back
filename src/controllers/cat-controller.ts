import { Request, Response, NextFunction } from 'express';
import * as catsService from '../services/cats-service'

const getAllBreeds = async (_req:Request, res: Response, next: NextFunction) => {
    try {
        const response = await catsService.getAllBreeds();
        
        return res.status(200).json(response)
    } catch (error) {
        next(error)
        return {}
    }
}

const getBreedById = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const response = await catsService.getBreedById(req.params.breed_id);
        
        return res.status(200).json(response)
    } catch (error) {
        next(error)
        return {}
    }
}

const search = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const response = await catsService.search(req.query);
        
        return res.status(200).json(response)
    } catch (error) {
        next(error)
        return {}
    }
}

const getImagesById = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const response = await catsService.getImagesById(req.params.image_id);
        
        return res.status(200).json(response)
    } catch (error) {
        next(error)
        return {}
    }
}

export { getAllBreeds, getBreedById, search, getImagesById }
