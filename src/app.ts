import express, { Request, Response, json, Express } from 'express';
import cors from 'cors';
import { loadEnv, connectDb, disconnectDB, prisma } from '@/config';

loadEnv();

const app = express();
app
    .use(cors())
    .use(json())
    .get('/health', async (req: Request, res: Response) => {res.status(200).send('ok ta funcionando')})


export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;
