import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/httpException';

export default function ErrorMiddleware(
    error: HttpException,
    request: Request,
    response: Response,
    next: NextFunction
) {
    const status = error.status || 500;
    const message = error.message || "mensaje no seteado";
    return response.status(status).send({
        status, message
    });
}