import { gamesService } from "@/service/games.service";
import { Request, Response } from "express";

async function createGame(req: Request, res: Response) {
    const { homeTeamName, awayTeamName } = req.body;
    const data = { homeTeamName, awayTeamName, homeTeamScore: 0, awayTeamScore: 0, isFinished: false }

    const game = await gamesService.createGame(data)

    res.status(201).send(game)
}

async function getGame(req: Request, res: Response) {
    res.status(200).send('Em construção')

}

export const gamesController = {
    createGame,
    getGame
}