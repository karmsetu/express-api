// express.d.ts
import { Request } from 'express';
import { Payload } from './JWT';

declare global {
    namespace Express {
        interface Request {
            user?: string; // or specify the type, e.g., `user?: User`
        }
    }
}

export interface MiddlewareRequest extends Request {
    user?: any;
}
