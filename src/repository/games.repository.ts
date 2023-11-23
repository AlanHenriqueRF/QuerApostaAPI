import { prisma } from "@/config";
import { Prisma } from "@prisma/client";


async function createGame(data: Prisma.GameUncheckedCreateInput) {
    return prisma.game.create({ data })
}

async function findFirstGame(id: number) {
    return prisma.game.findFirst({
        where: { id }
    })
}

async function UpdateGame(data: Prisma.GameUpdateInput, id: number) {
    return prisma.game.update({
        where: {id},
        data
    })
}

export const gamesRpository = {
    createGame,
    findFirstGame,
    UpdateGame
}