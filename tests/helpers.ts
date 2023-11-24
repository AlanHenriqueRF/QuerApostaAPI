import { prisma } from '@/config';

export async function cleanDb() {
  await prisma.bet.deleteMany({});
  await prisma.participant.deleteMany({});
  await prisma.game.deleteMany({});
}
