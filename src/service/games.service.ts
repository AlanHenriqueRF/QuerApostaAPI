import { alreadyFinishGameError } from "@/errors/alreadyFinishGame.Error";
import { notFoundError } from "@/errors/notFound.error";
import { InputGame, InputfinishGame } from "@/protocols";
import { betsRpository, sumGameAmount, sumWinnerAmount } from "@/repository/bets.repository";
import { gamesRpository } from "@/repository/games.repository";
import { participantRpository } from "@/repository/participant.repository";

async function createGame(data: InputGame) {
    const game = await gamesRpository.createGame(data)

    return game
}
async function getGame() {
    const game = await gamesRpository.getGames()
    return game
}

async function UpdateGame(data: InputfinishGame, gameId: number) {
    await checkGame(gameId);

    await gamesRpository.UpdateGame({ ...data, isFinished: true }, gameId);

    await UpdateStatusBet(gameId, data.homeTeamScore, data.awayTeamScore);

    await UpdateAmountWon(gameId, data.homeTeamScore, data.awayTeamScore)

    return await gamesRpository.findFirstGame(gameId)
}

async function checkGame(gameId: number) {
    const game = await gamesRpository.findFirstGame(gameId);
    if (!game) throw notFoundError();
    if (game.isFinished) throw alreadyFinishGameError();
}

async function UpdateStatusBet(gameId: number, homeTeamScore: number, awayTeamScore: number) {
    await betsRpository.UpdateStatusLose(gameId, homeTeamScore, awayTeamScore)
    await betsRpository.UpdateStatusWon(gameId, homeTeamScore, awayTeamScore)

}

async function UpdateAmountWon(gameId: number, homeTeamScore: number, awayTeamScore: number) {
    const winners = await betsRpository.findWinners(gameId, homeTeamScore, awayTeamScore);
    const sumwinneramount = await sumWinnerAmount(gameId, homeTeamScore, awayTeamScore);
    const sumgameamount = await sumGameAmount(gameId, homeTeamScore, awayTeamScore);
    let new_amountBet = 0;
    winners.forEach(async (win) => {
        new_amountBet = Math.floor((win.amountBet / sumwinneramount[0]._sum.amountBet) * (sumgameamount[0]._sum.amountBet) * (1 - 0.3))
        betsRpository.UpdateAmountWon(new_amountBet, win.id);
        participantRpository.updateBalance(new_amountBet + (await participantRpository.findFirstParticipant(win.participantId)).balance, win.participantId)
    })
    return winners;
}

export const gamesService = {
    createGame,
    UpdateGame,getGame
}
