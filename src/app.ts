import express, { Request, Response, json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

export default app;