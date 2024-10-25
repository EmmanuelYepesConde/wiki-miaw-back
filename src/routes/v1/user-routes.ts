import express from 'express';
import * as userController from '../../controllers/users-controller'

const router = express.Router()

router.get('/:email', async (req, res, _next) => { userController.getUserByEmail(req, res, _next) })

router.post('/',  (req, res, _next) => { userController.createUser(req, res, _next) })

router.patch('/:email', (req, res, _next) => { userController.updateUser(req, res, _next) })

router.post('/validation', (req, res, _next) => { userController.validateUser(req, res, _next)} )


export default router;