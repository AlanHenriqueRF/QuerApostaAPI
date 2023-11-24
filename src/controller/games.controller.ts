import { Request, Response } from 'express';
import { gamesService } from '@/service/games.service';

async function createGame(req: Request, res: Response) {
  const { homeTeamName, awayTeamName } = req.body;
  const data = { homeTeamName, awayTeamName, homeTeamScore: 0, awayTeamScore: 0, isFinished: false };

  const game = await gamesService.createGame(data);

  res.status(201).send(game);
}

async function UpdateGame(req: Request, res: Response) {
  const { id } = req.params;
  const body = req.body;

  const game = await gamesService.UpdateGame(body, Number(id));
  res.status(201).send(game);
}

async function getGame(req: Request, res: Response) {
  const games = await gamesService.getGame();
  res.status(200).send(games);
}

async function getGameIdWithBets(req: Request, res: Response) {
  const { id } = req.params;

  const games = await gamesService.getGameIdWithBets(Number(id));
  res.status(200).send(games);
}

export const gamesController = {
  createGame,
  getGame,
  UpdateGame,
  getGameIdWithBets,
};
