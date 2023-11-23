import { prisma } from "@/config";
import { Prisma } from "@prisma/client";


async function createParticipant(data: Prisma.ParticipantUncheckedCreateInput) {
    return prisma.participant.create({ data })
}

async function findAllParticipants() {
    return prisma.participant.findMany({})
}

async function findFirstParticipant(id: number) {
    return prisma.participant.findFirst({
        where: { id }
    })
}

async function updateParticipant(id: number, balance: number) {
    return prisma.participant.update({
        where: { id },
        data: { balance }
    })
}

async function updateBalance(new_amountBet: number, participantId:number) {
    return await prisma.participant.update({
        where: { id: participantId },
        data: { balance: new_amountBet }
    })
}

export const participantRpository = {
    createParticipant,
    findAllParticipants,
    findFirstParticipant,
    updateParticipant,
    updateBalance
}