import express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));