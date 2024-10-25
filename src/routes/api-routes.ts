import express from 'express'
import userRoutes from './v1/user-routes'
import catRoutes from './v1/cat-routes'

const router = express.Router()

router.use("/users", userRoutes)
router.use("/cats", catRoutes);
   
export default router;
