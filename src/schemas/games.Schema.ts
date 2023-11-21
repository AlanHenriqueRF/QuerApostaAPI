import Joi from 'joi';
import { InputGame } from '@/protocols';

export const gamesShema = Joi.object<InputGame>({
    homeTeamName: Joi.string().required(),
    awayTeamName: Joi.string().required(),
});
