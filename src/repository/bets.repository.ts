import { prisma } from "@/config";
import { Prisma } from "@prisma/client";


async function createBet(data: Prisma.BetUncheckedCreateInput) {
    return prisma.bet.create({ data })
}

export const betsRpository = {
    createBet
}