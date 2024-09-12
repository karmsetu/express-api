import mongoose from 'mongoose';

export const connectDB = async () => {
    if (!process.env.DATABASE_URL) {
        console.log('No DATABASE_URL provided');
    }
    try {
        const connect = await mongoose
            .connect(process.env.DATABASE_URL as string)
            .then((res) =>
                console.log(
                    `connected to ${res.connection.name}, ${res.connection.host}`
                )
            );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
