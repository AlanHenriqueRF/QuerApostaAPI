import Joi from 'joi';
import { InputGame, InputfinishGame } from '@/protocols';

export const gamesShema = Joi.object<InputGame>({
  homeTeamName: Joi.string().required(),
  awayTeamName: Joi.string().required(),
});

export const gamesFinishShema = Joi.object<InputfinishGame>({
  homeTeamScore: Joi.number().required(),
  awayTeamScore: Joi.number().required(),
});
