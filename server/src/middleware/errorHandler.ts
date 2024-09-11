import { NextFunction, Request, Response } from 'express';
import { code } from '../constants';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case code.VALIDATION_ERROR:
            res.json({
                title: `Validation Error`,
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case code.NOT_FOUND:
            res.json({
                title: `Not Found`,
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case code.UNAUTHORIZED:
            res.json({
                title: `UNAUTHORIZED`,
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case code.FORBIDDEN:
            res.json({
                title: `FORBIDDEN`,
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case code.SERVER_ERROR:
            res.json({
                title: `FORBIDDEN`,
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        default:
            console.log('No error, All clear!');
            break;
    }
};
