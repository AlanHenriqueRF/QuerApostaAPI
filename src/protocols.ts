export type InputParticipant = {
    name: string;
    balance: number;
};

export type InputGame = {
    homeTeamName: string;
    awayTeamName: string;
    homeTeamScore: number;
    awayTeamScore: number;
    isFinished: boolean;
};

export type Inputbets = {
    homeTeamScore: number;
    awayTeamScore: number;
    amountBet: number;
    gameId: number;
    participantId: number;
    status: 'PENDING' | 'WON' | 'LOST'
    amountWon: number | null;
}

export type ApplicationError = {
    name: string;
    message: string;
};

export type RequestError = {
    status: number;
    data: object | null;
    statusText: string;
    name: string;
    message: string;
};