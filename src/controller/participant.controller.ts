import { Request, Response } from 'express';
import { participantService } from '@/service/participant.service';

async function createParticipant(req: Request, res: Response) {
  const body = req.body;
  const participant = await participantService.createParticipant(body);

  res.status(201).send(participant);
}

async function findAllParticipants(req: Request, res: Response) {
  const participant = await participantService.findAllParticipants();
  res.status(200).send(participant);
}

export const participantController = {
  createParticipant,
  findAllParticipants,
};
