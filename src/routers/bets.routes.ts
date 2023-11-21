import { betsController } from "@/controller/bets.controller";
import { validateBody } from "@/middleware/validation.middleware";
import { betsSchema } from "@/schemas/bets.Schema";
import { Router } from "express";

const betsRouter = Router();

betsRouter.post('/', validateBody(betsSchema), betsController.createBet)

export default betsRouter;