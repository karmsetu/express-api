import { JwtPayload } from 'jsonwebtoken';

export interface Payload extends JwtPayload {
    user?: {
        username: string;
        email: string;
        id: string;
    };
}
