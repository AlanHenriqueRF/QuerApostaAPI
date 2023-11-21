
import { participantService } from "@/service/participant.service";
import { Request, Response } from "express";

async function createParticipant(req: Request, res: Response) {
    const body = req.body;
    const participant = await participantService.createParticipant(body)

    res.status(201).send(participant)
}

export const participantController = {
    createParticipant
}