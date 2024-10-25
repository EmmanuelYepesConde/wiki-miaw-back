import { Request, Response, NextFunction } from 'express';
import HttpCustomError from '../entities/exception-entity'

const ExceptionHandler = (error: any, _req: Request, res: Response, _next: NextFunction) => {
    const codeException = error.code || error.constructor.name
    let  exception = HttpCustomError.internalServerError(error.message)
    let breakIn;

    if (['MongoServerError', 'ValidationError'].includes(error.constructor.name)) breakIn = 'MONGO'
    if (['HttpCustomError'].includes(error.constructor.name)) breakIn = 'CustomError'
   
    switch (breakIn) {
        case 'MONGO':
            if ( codeException === 11000 ) exception = HttpCustomError.unprocessableEntity(`Duplicated Key: ${Object.keys(error.keyValue)[0]}`)
            if ( codeException === 'ValidationError' ) exception = HttpCustomError.badRequest(error.message)

            break;
    
        case 'CustomError':
            exception = error
            break;
        default:
            exception = HttpCustomError.internalServerError(error.message)
            break;
    }

    res.status(exception.statusCode).send(exception.errorDetail)
}

export default ExceptionHandler;
