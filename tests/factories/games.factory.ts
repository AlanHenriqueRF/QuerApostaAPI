import { faker } from '@faker-js/faker';
import { prisma } from '@/config';

export function createGames() {
  return prisma.game.create({
    data: {
      homeTeamName: faker.airline.airport.name,
      awayTeamName: faker.airline.airport.name,
      homeTeamScore: 0,
      awayTeamScore: 0,
      isFinished: false,
    },
  });
}

export function createGameFinished() {
  return prisma.game.create({
    data: {
      homeTeamName: faker.airline.airport.name,
      awayTeamName: faker.airline.airport.name,
      homeTeamScore: 0,
      awayTeamScore: 0,
      isFinished: true,
    },
  });
}
