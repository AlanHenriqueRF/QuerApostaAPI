import { gamesController } from '@/controller/games.controller';
import { validateBody } from '@/middleware/validation.middleware';
import { gamesFinishShema, gamesShema } from '@/schemas/games.Schema';

import { Router } from 'express';

const gamesRouter = Router()

gamesRouter.post('/', validateBody(gamesShema), gamesController.createGame)
gamesRouter.post('/:id/finish', validateBody(gamesFinishShema), gamesController.UpdateGame)
gamesRouter.get('/', gamesController.getGame)
gamesRouter.get('/:id', gamesController.getGameIdWithBets)

export { gamesRouter }