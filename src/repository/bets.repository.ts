import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function createBet(data: Prisma.BetUncheckedCreateInput) {
  return prisma.bet.create({ data });
}

async function findWinners(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  return prisma.bet.findMany({
    where: { gameId, homeTeamScore, awayTeamScore },
  });
}

export async function sumWinnerAmount(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  return prisma.bet.groupBy({
    by: ['gameId', 'homeTeamScore', 'awayTeamScore'],
    _sum: {
      amountBet: true,
    },
    where: { gameId, homeTeamScore, awayTeamScore },
  });
}

export async function sumGameAmount(gameId: number) {
  return prisma.bet.groupBy({
    by: ['gameId'],
    _sum: {
      amountBet: true,
    },
    where: { gameId },
  });
}

async function UpdateStatusWon(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  return prisma.bet.updateMany<Prisma.BetUpdateManyArgs>({
    where: { gameId, homeTeamScore, awayTeamScore },
    data: { status: 'WON' },
  });
}

async function UpdateStatusLose(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  return await prisma.bet.updateMany({
    where: {
      gameId,
      NOT: { AND: { homeTeamScore, awayTeamScore } },
    },
    data: { status: 'LOST', amountWon: 0 },
  });
}

async function UpdateAmountWon(new_amountBet: number, betId: number) {
  return await prisma.bet.update({
    where: { id: betId },
    data: { amountWon: new_amountBet },
  });
}

export const betsRpository = {
  createBet,
  findWinners,
  UpdateStatusWon,
  UpdateStatusLose,
  UpdateAmountWon,
};
