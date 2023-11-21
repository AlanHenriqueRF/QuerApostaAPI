import { prisma } from "@/config";
import { InputParticipant } from "@/protocols";
import { Prisma } from "@prisma/client";

  
async function createParticipant(data: Prisma.ParticipantUncheckedCreateInput) {
    return prisma.participant.create({data})
}

export const participantRpository = {
    createParticipant
}