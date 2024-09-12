import jwt, { JwtPayload } from 'jsonwebtoken';
import asyncHandeler from 'express-async-handler';
import { NextFunction, Request, Response } from 'express';
import { Payload } from '../types/JWT';
import { MiddlewareRequest } from '../types/express';

export const validateToken = asyncHandeler(
    async (req: MiddlewareRequest, res: Response, next: NextFunction) => {
        let token: string;
        let authHeader =
            req.headers.authorization || req.headers?.Authorization;
        const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
        if (!ACCESS_TOKEN_SECRET) {
            console.error('.ENV: No ACCESS_TOKEN_SECRET found');
            process.exit(1);
        }
        if (authHeader && (authHeader as string).startsWith('Bearer')) {
            token = (authHeader as string).split(' ')[1];
            jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decodedInfo) => {
                if (err) {
                    res.status(401);
                    throw new Error('User is not Authorised');
                }
                req.user = (decodedInfo as Payload).user;
                console.log(
                    `validateTokenHandler.ts: ${req.user}, ${decodedInfo}`
                );
                console.log({ decodedInfo });

                next();
            });

            if (!token) {
                res.status(401);
                throw new Error('User is not authorised or token is missing  ');
            }
        }
    }
);
