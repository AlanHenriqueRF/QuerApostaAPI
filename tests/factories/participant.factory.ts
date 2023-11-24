import { faker } from '@faker-js/faker';
import { prisma } from '@/config';

export function createParticipant() {
  return prisma.participant.create({
    data: {
      name: faker.person.fullName(),
      balance: 5000,
    },
  });
}
