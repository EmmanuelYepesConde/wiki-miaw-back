import express from 'express';
import * as catController from '../../controllers/cat-controller' 

const router = express.Router()
    
router.get('/breeds', async (req, res, _next) => { catController.getAllBreeds(req, res, _next) })
router.get('/breeds/search', async (req, res, _next) => { catController.search(req, res, _next) })
router.get('/breeds/images/:image_id', async (req, res, _next) => { catController.getImagesById(req, res, _next) })
router.get('/breeds/:breed_id', async (req, res, _next) => { catController.getBreedById(req, res, _next) })

export default router
