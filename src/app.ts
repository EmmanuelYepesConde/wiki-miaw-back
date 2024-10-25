import express from 'express';
import cors from 'cors';
import config from './config/config'
import ExceptionHandler from './middleware/exception-handler';
import initApiRoutes from './routes/api-routes';

const run = () => {

    const app = express();
    app.use(express.json()) // Middleware que transforma la req a un Json
    app.use(cors({
        origin: '*'
    }))
    
    app.use('/wiki-miaw', initApiRoutes)
    app.use(ExceptionHandler)

    app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
    })
}

export default run;
