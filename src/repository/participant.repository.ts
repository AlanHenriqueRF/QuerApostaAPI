import { prisma } from "@/config";
import { Prisma } from "@prisma/client";


async function createParticipant(data: Prisma.ParticipantUncheckedCreateInput) {
    return prisma.participant.create({ data })
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

export const participantRpository = {
    createParticipant,
    findFirstParticipant,
    updateParticipant
}