import { balanceMinError } from "@/errors/balanceMinError.error";
import { InputParticipant } from "@/protocols";
import { participantRpository } from "@/repository/participant.repository";

async function createParticipant(body: InputParticipant) {
    if (body.balance < 1000) throw balanceMinError();
    const participant = await participantRpository.createParticipant(body)

    return participant
}

export const participantService = {
    createParticipant
}
