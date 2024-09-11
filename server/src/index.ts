import express from 'express';
import { PORT } from './constants';
import contactRouter from './routes/contactRoute';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use('/api/contacts', contactRouter);

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`);
});
