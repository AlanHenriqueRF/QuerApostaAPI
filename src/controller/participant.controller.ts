import { participantService } from "@/service/participantService";
import { Request, Response } from "express";

export async function createParticipant(req: Request, res: Response) {
    const body = req.body;
    const participant = await participantService.createParticipant(body)

    res.status(201).send(participant)
}

export const participantController = {
    createParticipant
}