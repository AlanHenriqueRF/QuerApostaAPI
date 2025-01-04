import { Request, Response } from 'express';
import { betService } from '@/service/bet.service';

async function createBet(req: Request, res: Response) {
  const body = req.body;
  const data = { ...body, status: 'PENDING', amountWon: null };

  const bet = await betService.createBet(data);

  res.status(201).send(bet);
}

async function getBet(req: Request, res: Response) {
  const bets = await betService.getBets();

  res.status(200).send(bets);
}

export const betsController = {
  createBet,
  getBet,
};
