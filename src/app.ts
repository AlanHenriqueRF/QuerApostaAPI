import express, { Request, Response, json, Express } from 'express';
import "express-async-errors";
import cors from 'cors';
import { loadEnv, connectDb, disconnectDB, prisma } from '@/config';
import { participantsRouter } from './routers/participants.routes';
import { handleApplicationErrors } from './middleware/error-handling-middleware';

loadEnv();

const app = express();
app
    .use(cors())
    .use(json())
    .get('/health', async (req: Request, res: Response) => { res.status(200).send('ok ta funcionando') })
    .use('/participants', participantsRouter)
    .use(handleApplicationErrors)


export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;
