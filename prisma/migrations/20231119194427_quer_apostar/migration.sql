-- CreateEnum
CREATE TYPE "BetStatus" AS ENUM ('PENDING', 'WON', 'LOST');

-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "homeTeamName" TEXT NOT NULL,
    "awayTeamName" TEXT NOT NULL,
    "homeTeamScore" INTEGER NOT NULL,
    "awayTeamScore" INTEGER NOT NULL,
    "isFinished" BOOLEAN NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "homeTeamScore" INTEGER NOT NULL,
    "awayTeamScore" INTEGER NOT NULL,
    "amountBet" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "participantId" INTEGER NOT NULL,
    "status" "BetStatus" NOT NULL,
    "amountWon" INTEGER NOT NULL,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bet_gameId_key" ON "Bet"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "Bet_participantId_key" ON "Bet"("participantId");

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
