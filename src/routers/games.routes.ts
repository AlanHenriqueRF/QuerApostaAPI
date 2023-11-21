import { gamesController } from '@/controller/games.controller';
import { validateBody } from '@/middleware/validation.middleware';
import { gamesShema } from '@/schemas/games.Schema';

import { Router } from 'express';

const gamesRouter = Router()

gamesRouter.post('/', validateBody(gamesShema), gamesController.createGame)
gamesRouter.get('/',gamesController.getGame)

export { gamesRouter }