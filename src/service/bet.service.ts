import { AmountBetGreaterError } from '@/errors/AmountBetGreater.error';
import { alreadyFinishGameError } from '@/errors/alreadyFinishGame.Error';
import { notFoundError } from '@/errors/notFound.error';
import { Inputbets } from '@/protocols';
import { betsRpository } from '@/repository/bets.repository';
import { gamesRpository } from '@/repository/games.repository';
import { participantRpository } from '@/repository/participant.repository';

async function createBet(data: Inputbets) {
  const participant = await checkParticipant(data.participantId, data.amountBet);
  await checkGame(data.gameId);
  await updateBalance(data.participantId, participant.balance - data.amountBet);

  if (data.amountBet <= 0) throw AmountBetGreaterError();

  const bet = await betsRpository.createBet(data);

  return bet;
}

async function checkParticipant(id: number, amountBet: number) {
  const participant = await participantRpository.findFirstParticipant(id);
  if (!participant) throw notFoundError();
  if (participant.balance < amountBet) throw AmountBetGreaterError();
  return participant;
}

async function checkGame(id: number) {
  const game = await gamesRpository.findFirstGame(id);
  if (!game) throw notFoundError();
  if (game.isFinished) throw alreadyFinishGameError();
  return game;
}

async function updateBalance(id: number, newBalance: number) {
  await participantRpository.updateParticipant(id, newBalance);
}

async function getBets() {
  return await betsRpository.getBets();
}

export const betService = {
  createBet,
  getBets,
};
