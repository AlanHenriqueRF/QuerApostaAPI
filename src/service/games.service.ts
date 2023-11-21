import { InputGame } from "@/protocols";
import { gamesRpository } from "@/repository/games.repository";

async function createGame(data: InputGame) {
    const game = await gamesRpository.createGame(data)

    return game
}

export const gamesService = {
    createGame
}
