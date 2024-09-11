import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT || 3000;
export const code = {
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};
