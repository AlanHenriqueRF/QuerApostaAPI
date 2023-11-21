import { participantController } from '@/controller/participant.controller';
import { validateBody } from '@/middleware/validation.middleware';
import { participantsSchema } from '@/schemas/participant.Schemas';

import { Router } from 'express';

const participantsRouter = Router()

participantsRouter.post('/', validateBody(participantsSchema), participantController.createParticipant)

export { participantsRouter }