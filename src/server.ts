import express, {Application, Request, Response, NextFunction} from 'express';
import userRouter from './routes/user.routes';
import postRouter from './routes/post.routes';

const app: Application = express();

const PORT = process.env.PORT || 8080

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);


app.listen(PORT, () => console.log(`Server running on post ${PORT}`));