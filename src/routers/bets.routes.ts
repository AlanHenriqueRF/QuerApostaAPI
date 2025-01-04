import { Router } from 'express';
import { betsController } from '@/controller/bets.controller';
import { validateBody } from '@/middleware/validation.middleware';
import { betsSchema } from '@/schemas/bets.Schema';

const betsRouter = Router();

betsRouter.post('/', validateBody(betsSchema), betsController.createBet);
betsRouter.get('/', betsController.getBet);

export default betsRouter;
