import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

  
async function createGame(data: Prisma.GameUncheckedCreateInput) {
    return prisma.game.create({data})
}

export const gamesRpository = {
    createGame
}