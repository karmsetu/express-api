declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            DATABASE_URL: string;
            ACCESS_TOKEN_SECRET: string;
        }
    }
}

export {};
