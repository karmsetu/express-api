import express from 'express';
import { PORT } from './constants';
import contactRouter from './routes/contactRoute';
import userRouter from './routes/userRoute';
import { errorHandler } from './middleware/errorHandler';
import { connectDB } from './config/dbConnection';

connectDB();

const app = express();

app.use(express.json());

app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter);

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`);
});
