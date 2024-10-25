import HttpStatuses from '../config/dictionaries/4xx-exceptions.json'
import { errorDetail, Exceptions } from "../types";

class HttpCustomError extends Error {
    statusCode: number;
    errorDetail: errorDetail
    httpStats: Exceptions = HttpStatuses as Exceptions

    constructor(statusCode: number, message: string) {
      super(message);
      this.statusCode = statusCode;
      this.errorDetail = {
        errorCode: this.httpStats[statusCode],
        errorMsg: message
      }
    }
  
    static badRequest(message: string): HttpCustomError {
      return new HttpCustomError(400, message);
    }
  
    static unprocessableEntity(message: string): HttpCustomError {
      return new HttpCustomError(422, message);
    }
  
    static notFound(message: string): HttpCustomError {
      return new HttpCustomError(404, message);
    }

    static conflict(message: string): HttpCustomError {
      throw new HttpCustomError(409, message);
    }
  
    static internalServerError(message: string): HttpCustomError {
      return new HttpCustomError(500, message);
    }
  
    static unauthorized(message: string): HttpCustomError {
      return new HttpCustomError(401, message);
    }
  
    static forbidden(message: string): HttpCustomError {
      return new HttpCustomError(403, message);
    }
  }

  export default HttpCustomError