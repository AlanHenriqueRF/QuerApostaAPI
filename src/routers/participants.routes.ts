import { Router } from 'express';
import { participantController } from '@/controller/participant.controller';
import { validateBody } from '@/middleware/validation.middleware';
import { participantsSchema } from '@/schemas/participant.Schemas';

const participantsRouter = Router();

participantsRouter.post('/', validateBody(participantsSchema), participantController.createParticipant);
participantsRouter.get('/', participantController.findAllParticipants);

export { participantsRouter };
