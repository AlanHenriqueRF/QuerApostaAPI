import Joi from 'joi';
import { InputParticipant } from '@/protocols';

export const participantsSchema = Joi.object<InputParticipant>({
  name: Joi.string().required(),
  balance: Joi.number().required(),
});
