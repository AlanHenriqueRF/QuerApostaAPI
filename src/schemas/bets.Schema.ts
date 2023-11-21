import { Inputbets } from "@/protocols";
import Joi from "joi";

export const betsSchema = Joi.object<Inputbets>({
	homeTeamScore: Joi.number().required(),
	awayTeamScore: Joi.number().required(),
	amountBet: Joi.number().required(),
	gameId: Joi.number().required(),
	participantId: Joi.number().required()
})